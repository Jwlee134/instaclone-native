import React from "react";
import { FlatList, View } from "react-native";
import styled from "styled-components/native";
import { DEFAULT_AVATAR } from "../apollo";
import RefreshControl from "../components/RefreshControl";
import ScreenLayout from "../components/ScreenLayout";
import { useSeeRoomsQuery } from "../graphql/generated";
import useMe from "../hooks/useMe";
import { RoomsScreenProps } from "../types/navigators";

const RoomContainer = styled.TouchableOpacity`
  padding: 15px 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Column = styled.View`
  flex-direction: row;
  align-items: center;
`;

const UnreadDot = styled.View`
  width: 7px;
  height: 7px;
  background-color: tomato;
  border-radius: 3.5px;
`;

const Data = styled.View``;

const Username = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 16px;
`;

const Image = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 20px;
`;

const Unread = styled.Text`
  color: white;
  margin-top: 2px;
  font-weight: 500;
`;

const Rooms = ({ navigation }: RoomsScreenProps) => {
  const { data: { seeRooms } = {}, loading, refetch } = useSeeRoomsQuery();
  const me = useMe();

  return (
    <ScreenLayout loading={loading}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={refetch} />
        }
        ItemSeparatorComponent={() => (
          <View
            style={{
              width: "100%",
              height: 1,
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            }}
          />
        )}
        data={seeRooms || []}
        renderItem={({ item }) => (
          <RoomContainer>
            <Column>
              <Image
                source={{
                  uri:
                    item?.users?.find(user => user?.username !== me?.username)
                      ?.avatar || DEFAULT_AVATAR,
                }}
              />
              <Data>
                <Username>
                  {
                    item?.users?.filter(
                      user => user?.username !== me?.username,
                    )?.[0]?.username
                  }
                </Username>
                {item?.totalUnread && (
                  <Unread>
                    {item.totalUnread} new{" "}
                    {item.totalUnread === 1 ? "message" : "messages"}
                  </Unread>
                )}
              </Data>
            </Column>
            {item?.totalUnread && (
              <Column>
                <UnreadDot />
              </Column>
            )}
          </RoomContainer>
        )}
        keyExtractor={item => `${item?.id}`}
      />
    </ScreenLayout>
  );
};

export default Rooms;

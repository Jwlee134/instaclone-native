import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import ScreenLayout from "../components/ScreenLayout";
import { useSeeRoomsQuery } from "../graphql/generated";
import useMe from "../hooks/useMe";
import { RoomsScreenProps } from "../types/navigators";

const RoomContainer = styled.View`
  background-color: red;
`;

const RoomText = styled.Text`
  color: white;
`;

const Rooms = ({ navigation }: RoomsScreenProps) => {
  const { data: { seeRooms } = {}, loading } = useSeeRoomsQuery();
  const me = useMe();

  return (
    <ScreenLayout loading={loading}>
      <FlatList
        data={seeRooms || []}
        renderItem={({ item }) => (
          <RoomContainer>
            <RoomText>
              {!item?.totalUnread
                ? item?.users?.filter(
                    user => user?.username !== me?.username,
                  )?.[0]?.username
                : `${item?.totalUnread} new messages`}
            </RoomText>
          </RoomContainer>
        )}
        keyExtractor={item => `${item?.id}`}
      />
    </ScreenLayout>
  );
};

export default Rooms;

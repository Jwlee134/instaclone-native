import { useNavigation } from "@react-navigation/native";
import React from "react";
import styled from "styled-components/native";
import { DEFAULT_AVATAR } from "../../apollo";
import useMe from "../../hooks/useMe";
import { RoomsScreenProps } from "../../types/navigators";

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

interface Props {
  item: {
    __typename?: "Room" | undefined;
    id: number;
    totalUnread: number;
    users?:
      | ({
          __typename?: "User" | undefined;
          id: number;
          avatar?: string | null | undefined;
          username: string;
        } | null)[]
      | null
      | undefined;
  } | null;
}

const RoomItem = ({ item }: Props) => {
  const me = useMe();
  const navigation = useNavigation<RoomsScreenProps["navigation"]>();
  const partner = item?.users?.find(user => user?.username !== me?.username);

  return (
    <RoomContainer
      onPress={() =>
        navigation.navigate("Room", {
          roomId: item?.id!,
          title: partner?.username!,
          userId: partner?.id!,
        })
      }>
      <Column>
        <Image
          source={{
            uri: partner?.avatar || DEFAULT_AVATAR,
          }}
        />
        <Data>
          <Username>
            {
              item?.users?.filter(user => user?.username !== me?.username)?.[0]
                ?.username
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
  );
};

export default RoomItem;

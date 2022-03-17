import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity, useWindowDimensions } from "react-native";
import styled from "styled-components/native";
import { DEFAULT_AVATAR } from "../apollo";
import { SeeFeedQuery } from "../graphql/generated";
import { FeedScreenProps } from "../types/navigators";

const Container = styled.View``;

const Header = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

const UserAvatar = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 25px;
`;

const Username = styled.Text`
  color: white;
  margin-left: 10px;
  font-weight: 600;
`;

const File = styled.Image``;

const ActionContainer = styled.View``;

const Action = styled.TouchableOpacity``;

const NumOfLikes = styled.Text`
  color: white;
`;

const CaptionContainer = styled.View``;

const CaptionText = styled.Text`
  color: white;
`;

type ArrayElement<ArrayType extends readonly unknown[] | null | undefined> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
interface Props {
  item: ArrayElement<SeeFeedQuery["seeFeed"]>;
}

const Photo = ({ item }: Props) => {
  const navigation = useNavigation<FeedScreenProps["navigation"]>();
  const { width } = useWindowDimensions();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!item) return;
    Image.getSize(item.file, (OWidth, OHeight) => {
      setHeight((OHeight * width) / OWidth);
    });
  }, [item, width]);

  const moveToProfile = () =>
    navigation.navigate("Profile", { username: item?.owner?.username! });

  return (
    <Container>
      <Header onPress={moveToProfile}>
        <UserAvatar
          resizeMode="cover"
          source={{ uri: item?.owner?.avatar || DEFAULT_AVATAR }}
        />
        <Username>{item?.owner?.username}</Username>
      </Header>
      <File
        source={{ uri: item?.file }}
        style={{ width, height: height || width }}
      />
      <ActionContainer>
        <Action onPress={() => {}}></Action>
        <Action onPress={() => {}}></Action>
      </ActionContainer>
      <Action>
        <NumOfLikes>
          {item?.likes === 1 ? "1 like" : `${item?.likes} likes`}
        </NumOfLikes>
      </Action>
      <CaptionContainer>
        <TouchableOpacity onPress={moveToProfile}>
          <Username>{item?.owner?.username}</Username>
        </TouchableOpacity>
        <CaptionText>{item?.caption}</CaptionText>
      </CaptionContainer>
    </Container>
  );
};

export default Photo;

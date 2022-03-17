import React from "react";
import { useWindowDimensions } from "react-native";
import styled from "styled-components/native";
import { DEFAULT_AVATAR } from "../apollo";
import { SeeFeedQuery } from "../graphql/generated";

const Container = styled.View``;

const Header = styled.View``;

const UserAvatar = styled.Image``;

const Username = styled.Text`
  color: white;
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
  const { width } = useWindowDimensions();

  return (
    <Container>
      <Header>
        <UserAvatar source={{ uri: item?.owner?.avatar || DEFAULT_AVATAR }} />
        <Username>{item?.owner?.username}</Username>
      </Header>
      <File source={{ uri: item?.file }} style={{ width, height: width }} />
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
        <Username>{item?.owner?.username}</Username>
        <CaptionText>{item?.caption}</CaptionText>
      </CaptionContainer>
    </Container>
  );
};

export default Photo;

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity, useWindowDimensions } from "react-native";
import styled from "styled-components/native";
import { DEFAULT_AVATAR } from "../apollo";
import { SeeFeedQuery, useToggleLikeMutation } from "../graphql/generated";
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
  margin-right: 10px;
`;

const Username = styled.Text`
  color: white;

  font-weight: 600;
`;

const File = styled.Image``;

const BelowFileContainer = styled.View`
  padding: 10px 10px 0 10px;
`;

const ActionContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Action = styled.TouchableOpacity`
  margin-right: 10px;
`;

const NumOfLikes = styled.Text`
  color: white;
  margin: 7px 0;
  font-weight: 500;
`;

const CaptionContainer = styled.View`
  flex-direction: row;
`;

const CaptionText = styled.Text`
  color: white;
  margin-left: 5px;
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

  const [toggleLike] = useToggleLikeMutation({
    variables: { toggleLikeId: item?.id! },
    update: (cache, { data }) => {
      if (!item || !data?.toggleLike.isSuccess) return;
      const id = `Photo:${item.id}`;
      cache.modify({
        id,
        fields: {
          isLiked: prev => !prev,
          likes: prev => (!item.isLiked ? prev + 1 : prev - 1),
        },
      });
    },
  });

  useEffect(() => {
    if (!item) return;
    Image.getSize(item.file, (OWidth, OHeight) => {
      setHeight((OHeight * width) / OWidth);
    });
  }, [item, width]);

  const moveToProfile = () =>
    navigation.navigate("Profile", { username: item?.owner?.username! });

  const MoveToLikes = () => navigation.navigate("Likes", { id: item?.id! });

  const MoveToComments = () =>
    navigation.navigate("Comments", { id: item?.id! });

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
      <BelowFileContainer>
        <ActionContainer>
          <Action onPress={() => toggleLike()}>
            <Ionicons
              name={item?.isLiked ? "heart" : "heart-outline"}
              color={item?.isLiked ? "tomato" : "white"}
              size={22}
            />
          </Action>
          <Action onPress={MoveToComments}>
            <Ionicons name="chatbubble-outline" color="white" size={20} />
          </Action>
        </ActionContainer>
        <Action onPress={MoveToLikes}>
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
      </BelowFileContainer>
    </Container>
  );
};

export default Photo;

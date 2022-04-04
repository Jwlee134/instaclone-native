import React, { useCallback, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  ActivityIndicator,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import styled from "styled-components/native";
import DismissKeyboard from "../components/DismissKeyboard";
import { useUploadPhotoMutation } from "../graphql/generated";
import { UploadFormScreenProps } from "../types/navigators";
import { ReactNativeFile } from "apollo-upload-client";

const Container = styled.View``;

const Photo = styled.Image`
  height: 250px;
`;

const CaptionContainer = styled.View`
  margin-top: 20px;
  padding: 0 20px;
`;

const Caption = styled.TextInput`
  background-color: white;
  color: black;
  margin: 0;
  padding: 0;
  height: 46px;
  border-radius: 100px;
  padding: 0 10px;
`;

const HeaderRightText = styled.Text`
  color: white;
  font-weight: 600;
`;

interface Form {
  caption?: string;
}

const UploadForm = ({
  navigation,
  route: {
    params: { file },
  },
}: UploadFormScreenProps) => {
  const width = useWindowDimensions().width;
  const { control, handleSubmit } = useForm<Form>();
  const [trigger, { loading }] = useUploadPhotoMutation({
    update: (cache, { data }) => {
      const photo = data?.uploadPhoto;
      if (!photo) return;
      cache.modify({
        id: "ROOT_QUERY",
        fields: { seeFeed: prev => [photo, ...prev] },
      });
      navigation.navigate("TabsNav");
    },
  });

  const onValid = useCallback(
    ({ caption }: Form) => {
      const newFile = new ReactNativeFile({
        uri: file,
        name: "a.jpg",
        type: "image/jpeg",
      });
      trigger({ variables: { file: newFile, caption } });
    },
    [file, trigger],
  );

  useEffect(() => {
    navigation.setOptions({
      headerRight: () =>
        loading ? (
          <ActivityIndicator />
        ) : (
          <TouchableOpacity onPress={handleSubmit(onValid)}>
            <HeaderRightText>Upload</HeaderRightText>
          </TouchableOpacity>
        ),
      ...(loading && { headerLeft: () => null }),
    });
  }, [navigation, loading, handleSubmit, onValid]);

  return (
    <DismissKeyboard>
      <Container>
        <Photo resizeMode="contain" style={{ width }} source={{ uri: file }} />
        <CaptionContainer>
          <Controller
            control={control}
            name="caption"
            render={({ field: { onChange, onBlur, value } }) => (
              <Caption
                placeholder="Write a caption..."
                placeholderTextColor="rgba(0, 0, 0, 0.5)"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                onSubmitEditing={handleSubmit(onValid)}
              />
            )}
          />
        </CaptionContainer>
      </Container>
    </DismissKeyboard>
  );
};

export default UploadForm;

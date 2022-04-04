import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { TouchableOpacity, useWindowDimensions } from "react-native";
import styled from "styled-components/native";
import DismissKeyboard from "../components/DismissKeyboard";
import { UploadFormScreenProps } from "../types/navigators";

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

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity>
          <HeaderRightText>Next</HeaderRightText>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const onValid = ({ caption }: Form) => {
    console.log(caption);
  };

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

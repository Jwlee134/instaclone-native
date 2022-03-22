import React, { useLayoutEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import DismissKeyboard from "../components/DismissKeyboard";
import { SearchScreenProps } from "../types/navigators";

const Input = styled.TextInput`
  background-color: white;
  padding: 0;
  margin: 0;
`;

interface Form {
  keyword: string;
}

const Search = ({ navigation }: SearchScreenProps) => {
  const { control, handleSubmit } = useForm<Form>();

  const onValid: SubmitHandler<Form> = data => {
    console.log(data);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Controller
          control={control}
          rules={{ required: true }}
          name="keyword"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Search Photos"
              placeholderTextColor="black"
              autoCapitalize="none"
              returnKeyType="search"
              returnKeyLabel="search"
              onSubmitEditing={handleSubmit(onValid)}
              autoCorrect={false}
            />
          )}
        />
      ),
    });
  }, [navigation, control, handleSubmit]);

  return (
    <DismissKeyboard>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "white" }}>Search</Text>
      </View>
    </DismissKeyboard>
  );
};

export default Search;

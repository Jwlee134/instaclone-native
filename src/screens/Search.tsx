import React, { useCallback, useLayoutEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ActivityIndicator, Text, View } from "react-native";
import styled from "styled-components/native";
import DismissKeyboard from "../components/DismissKeyboard";
import { useSearchPhotosLazyQuery } from "../graphql/generated";
import { SearchScreenProps } from "../types/navigators";

const Input = styled.TextInput`
  background-color: white;
  padding: 0;
  margin: 0;
`;

const MessageContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const MessageText = styled.Text`
  color: white;
  font-weight: 600;
  margin-top: 15px;
`;

interface Form {
  keyword: string;
}

const Search = ({ navigation }: SearchScreenProps) => {
  const [search, { data, loading, called }] = useSearchPhotosLazyQuery();
  const { control, handleSubmit } = useForm<Form>();

  const onValid: SubmitHandler<Form> = useCallback(
    ({ keyword }) => {
      search({ variables: { keyword } });
    },
    [search],
  );

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
  }, [navigation, control, handleSubmit, onValid]);
  console.log(data);
  return (
    <DismissKeyboard>
      <View style={{ flexGrow: 1 }}>
        {loading ? (
          <MessageContainer>
            <ActivityIndicator color="white" />
            <MessageText>Searching...</MessageText>
          </MessageContainer>
        ) : null}
        {!called ? (
          <MessageContainer>
            <MessageText>Search by keyword.</MessageText>
          </MessageContainer>
        ) : null}
        {data && !data.searchPhotos?.length ? (
          <MessageContainer>
            <MessageText>No results.</MessageText>
          </MessageContainer>
        ) : null}
      </View>
    </DismissKeyboard>
  );
};

export default Search;

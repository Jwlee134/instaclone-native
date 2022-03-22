import React, { useCallback, useLayoutEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import styled from "styled-components/native";
import DismissKeyboard from "../components/DismissKeyboard";
import { useSearchPhotosLazyQuery } from "../graphql/generated";
import { SearchScreenProps } from "../types/navigators";

const Input = styled.TextInput`
  background-color: rgba(255, 255, 255, 0.2);
  padding: 0px 10px;
  margin: 0;
  height: 30px;
  border-radius: 5px;
  color: white;
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
  const width = useWindowDimensions().width;
  const [search, { data, loading, called, fetchMore, variables }] =
    useSearchPhotosLazyQuery();
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
              style={{ width: width / 1.5 }}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Search Photos"
              placeholderTextColor="gray"
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
  }, [navigation, control, handleSubmit, onValid, width]);

  const onEndReached = () => {
    fetchMore({
      variables: {
        keyword: variables?.keyword,
        lastId: data?.searchPhotos?.[data?.searchPhotos.length - 1]?.id,
      },
    });
  };

  return (
    <DismissKeyboard>
      <View style={{ flex: 1 }}>
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
        {data &&
          (!data.searchPhotos?.length ? (
            <MessageContainer>
              <MessageText>No results.</MessageText>
            </MessageContainer>
          ) : (
            <FlatList
              data={data.searchPhotos}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Photo", { id: item?.id! })
                  }>
                  <Image
                    style={{
                      width: width / 3 - 2 / 3,
                      height: width / 3 - 2 / 3,
                      marginBottom: 1,
                      ...(index % 3 !== 2 && { marginRight: 1 }),
                    }}
                    source={{ uri: item?.file }}
                  />
                </TouchableOpacity>
              )}
              keyExtractor={item => `${item?.id}`}
              onEndReached={onEndReached}
              numColumns={3}
              contentContainerStyle={{ flexGrow: 1 }}
            />
          ))}
      </View>
    </DismissKeyboard>
  );
};

export default Search;

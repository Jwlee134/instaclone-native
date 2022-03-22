import React from "react";
import ScreenLayout from "../components/ScreenLayout";
import { useSeePhotoQuery } from "../graphql/generated";
import { PhotoScreenProps } from "../types/navigators";
import PhotoComponent from "../components/Photo";
import { ScrollView } from "react-native";
import RefreshControl from "../components/RefreshControl";

const Photo = ({
  route: {
    params: { id },
  },
}: PhotoScreenProps) => {
  const {
    data: { seePhoto } = {},
    loading,
    refetch,
  } = useSeePhotoQuery({
    variables: { seePhotoId: id },
  });

  return (
    <ScreenLayout loading={loading}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={refetch} />
        }>
        <PhotoComponent item={seePhoto} />
      </ScrollView>
    </ScreenLayout>
  );
};

export default Photo;

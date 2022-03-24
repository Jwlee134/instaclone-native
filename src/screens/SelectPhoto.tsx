import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components/native";
import * as MediaLibrary from "expo-media-library";
import { Alert } from "react-native";

const Container = styled.View`
  flex: 1;
`;

const Top = styled.View`
  flex: 1;
`;

const Bottom = styled.View`
  flex: 1;
`;

const SelectPhoto = () => {
  const [photos, setPhotos] = useState<string[]>([]);

  const getPhoto = async () => {
    const { assets } = await MediaLibrary.getAssetsAsync();
    setPhotos(assets.map(asset => asset.uri));
  };

  const getPermission = useCallback(async () => {
    const { status, canAskAgain } = await MediaLibrary.getPermissionsAsync();
    if (status === "denied" && !canAskAgain) {
      Alert.alert(
        "Go to the application setting and allow permission manually.",
      );
    } else if (status === "granted") {
      await getPhoto();
    } else {
      await MediaLibrary.requestPermissionsAsync();
    }
  }, []);

  useEffect(() => {
    getPermission();
  }, [getPermission]);

  return (
    <Container>
      <Top></Top>
      <Bottom></Bottom>
    </Container>
  );
};

export default SelectPhoto;

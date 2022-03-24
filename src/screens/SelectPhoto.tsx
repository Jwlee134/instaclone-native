import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components/native";
import * as MediaLibrary from "expo-media-library";
import {
  Alert,
  FlatList,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Container = styled.View`
  flex: 1;
`;

const Top = styled.View`
  flex: 1;
`;

const Thumbnail = styled.Image`
  width: 100%;
  height: 100%;
`;

const Bottom = styled.View`
  flex: 1;
`;

const IconContainer = styled.View`
  position: absolute;
  bottom: 6px;
  right: 6px;
`;

const SelectPhoto = () => {
  const width = useWindowDimensions().width;
  const [photos, setPhotos] = useState<MediaLibrary.Asset[]>([]);
  const [selectedPhotoUri, setSelectedPhotoUri] = useState("");

  const getPhoto = async () => {
    const { assets } = await MediaLibrary.getAssetsAsync();
    if (!assets.length) return;
    setSelectedPhotoUri(assets[0].uri);
    setPhotos(assets);
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
      <Top>
        {Boolean(selectedPhotoUri) && (
          <Thumbnail source={{ uri: selectedPhotoUri }} />
        )}
      </Top>
      <Bottom>
        <FlatList
          data={photos}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => setSelectedPhotoUri(item.uri)}>
              <Image
                style={{
                  width: width / 3 - 2 / 3,
                  height: width / 3 - 2 / 3,
                  marginBottom: 1,
                  ...(index % 3 !== 2 && { marginRight: 1 }),
                }}
                source={{ uri: item.uri }}
              />
              {selectedPhotoUri === item.uri && (
                <IconContainer>
                  <Ionicons name="checkmark-circle" color="white" size={24} />
                </IconContainer>
              )}
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          numColumns={3}
        />
      </Bottom>
    </Container>
  );
};

export default SelectPhoto;

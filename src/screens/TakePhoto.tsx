import {
  getCameraPermissionsAsync,
  requestCameraPermissionsAsync,
} from "expo-camera";
import React, { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import styled from "styled-components/native";
import { Camera } from "expo-camera";

const Container = styled.View`
  flex: 1;
`;

const Actions = styled.View`
  flex: 0.35;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const TakePhotoBtn = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 50px;
`;

const TakePhoto = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const getPermission = useCallback(async () => {
    const { status, canAskAgain } = await getCameraPermissionsAsync();
    if (status === "denied" && !canAskAgain) {
      Alert.alert(
        "Go to the application setting and allow permission manually.",
      );
    } else if (status === "granted") {
      setHasPermission(true);
    } else {
      await requestCameraPermissionsAsync();
      await getPermission();
    }
  }, []);

  useEffect(() => {
    getPermission();
  }, [getPermission]);

  return (
    <Container>
      <Camera type={type} style={{ flex: 1 }} />
      <Actions>
        <TakePhotoBtn></TakePhotoBtn>
      </Actions>
    </Container>
  );
};

export default TakePhoto;

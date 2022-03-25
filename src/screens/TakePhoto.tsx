import {
  getCameraPermissionsAsync,
  requestCameraPermissionsAsync,
} from "expo-camera";
import React, { useCallback, useEffect, useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Camera } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";

const Container = styled.View`
  flex: 1;
`;

const Actions = styled.View`
  flex: 0.35;
  padding: 0 50px;
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

const SliderContainer = styled.View``;

const ButtonsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const TakePhoto = () => {
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.torch);
  const [zoom, setZoom] = useState(0);

  const getPermission = useCallback(async () => {
    const { status, canAskAgain } = await getCameraPermissionsAsync();
    if (status === "denied" && !canAskAgain) {
      Alert.alert(
        "Go to the application setting and allow permission manually.",
      );
    } else if (status !== "granted") {
      await requestCameraPermissionsAsync();
      await getPermission();
    }
  }, []);

  useEffect(() => {
    getPermission();
  }, [getPermission]);

  const onCameraChange = () => {
    setType(prev =>
      prev === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back,
    );
  };

  const onZoomValueChange = (value: number) => {
    setZoom(value);
  };

  const onFlashChange = () => {};

  return (
    <Container>
      <Camera type={type} zoom={zoom} style={{ flex: 1 }} />
      <Actions>
        <SliderContainer>
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="rgba(255, 255, 255, 0.5)"
            onValueChange={onZoomValueChange}
          />
        </SliderContainer>
        <ButtonsContainer>
          <TakePhotoBtn></TakePhotoBtn>
          <TouchableOpacity onPress={onCameraChange}>
            <Ionicons color="white" size={30} name="camera-reverse" />
          </TouchableOpacity>
        </ButtonsContainer>
      </Actions>
    </Container>
  );
};

export default TakePhoto;

import {
  getCameraPermissionsAsync,
  requestCameraPermissionsAsync,
} from "expo-camera";
import React, { useCallback, useEffect, useState } from "react";
import { Alert, Platform, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Camera } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { useIsFocused } from "@react-navigation/native";
import { TakePhotoScreenProps } from "../types/navigators";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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

const ActionsContainer = styled.View`
  flex-direction: row;
`;

const CloseButton = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
`;

const TakePhoto = ({ navigation }: TakePhotoScreenProps) => {
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);
  const [zoom, setZoom] = useState(0);
  const isFocused = useIsFocused();
  const top = useSafeAreaInsets().top;

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

  const onFlashChange = () => {
    setFlashMode(prev => {
      if (prev === Camera.Constants.FlashMode.on) {
        return Camera.Constants.FlashMode.auto;
      } else if (prev === Camera.Constants.FlashMode.off) {
        return Camera.Constants.FlashMode.on;
      }
      return Camera.Constants.FlashMode.off;
    });
  };

  return (
    <Container>
      {isFocused && (
        <Camera
          type={type}
          zoom={zoom}
          flashMode={flashMode}
          style={{ flex: 1 }}>
          <CloseButton
            onPress={() => navigation.navigate("TabsNav")}
            style={{ top: Platform.OS === "android" ? top : 0 }}>
            <Ionicons name="close" color="white" size={30} />
          </CloseButton>
        </Camera>
      )}
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
          <ActionsContainer>
            <TouchableOpacity
              onPress={onFlashChange}
              style={{ marginRight: 30 }}>
              <Ionicons
                color="white"
                size={30}
                name={
                  flashMode === Camera.Constants.FlashMode.off
                    ? "flash-off"
                    : flashMode === Camera.Constants.FlashMode.on
                    ? "flash"
                    : "eye"
                }
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={onCameraChange}>
              <Ionicons color="white" size={30} name="camera-reverse" />
            </TouchableOpacity>
          </ActionsContainer>
        </ButtonsContainer>
      </Actions>
    </Container>
  );
};

export default TakePhoto;

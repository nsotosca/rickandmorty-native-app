import { useState } from "react";
import * as ImgPicker from "expo-image-picker";

import { COLORS } from "../utils/enums";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { getBase64 } from "../utils";

interface Props {
  error?: string;
  onChangeImage: (image: string) => void;
}

const defaultImagePreview = require("../../assets/rickandmortylogo.png");

const ImagePicker = ({ error, onChangeImage = () => {} }: Props) => {
  const [image, setImage] = useState("");

  const onPress = async () => {
    let result = await ImgPicker.launchImageLibraryAsync({
      mediaTypes: ImgPicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      getBase64(result.assets[0].uri, (dataUrl) => {
        onChangeImage(dataUrl);
        setImage(dataUrl);
      });
    }
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={onPress}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Image
            source={image ? { uri: image } : defaultImagePreview}
            style={[styles.imagePreview]}
          />
          <View style={[styles.button]}>
            <Text style={[styles.buttonText]}>{`${
              !image ? "Add" : "Change"
            } image`}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      {!!error && !image && <Text style={[styles.error]}>{error}</Text>}
    </>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  imagePreview: {
    width: 80,
    height: 80,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.light.accent,
  },
  button: {
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: COLORS.light.secondary,
  },
  buttonText: {
    color: COLORS.light.main,
    fontSize: 15,
  },
  error: {
    fontSize: 14,
    color: "#ff5067",
    fontWeight: "500",
  },
});

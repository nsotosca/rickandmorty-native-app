import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Keyboard,
  ScrollView,
  Alert,
} from "react-native";

import { useAppDispatch } from "../store/hooks";
import { addCustomCharacter } from "../store/characterSlice";
import { COLORS, SCREENS, STATUS } from "../utils/enums";

import Input from "../components/Input";
import Loader from "../components/Loader";
import ImagePicker from "../components/ImagePicker";
import Button from "../components/Button";

enum FieldName {
  name = "name",
  age = "age",
  gender = "gender",
  origin = "origin",
  status = "status",
  image = "image",
}

enum FieldLabel {
  name = "Name",
  age = "Age",
  gender = "Gender",
  origin = "Origin",
  status = "Status",
}

const initialValues = {
  name: "",
  age: "",
  gender: "",
  origin: "",
  status: "",
  image: "",
};

const AddCharacterScreen = ({ navigation }) => {
  const dispatch = useAppDispatch();

  const [inputs, setInputs] = useState(initialValues);
  const [errors, setErrors] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    Keyboard.dismiss();

    let isValid = true;

    if (!inputs.name) {
      handleErrors("Please input name", FieldName.name);
      isValid = false;
    }

    if (!inputs.age) {
      handleErrors("Please input age", FieldName.age);
      isValid = false;
    } else if (isNaN(Number(inputs.age))) {
      handleErrors("Please input valid age", FieldName.age);
      isValid = false;
    }

    if (!inputs.gender) {
      handleErrors("Please input gender", FieldName.gender);
      isValid = false;
    }

    if (!inputs.origin) {
      handleErrors("Please input origin", FieldName.origin);
      isValid = false;
    }

    if (!inputs.status) {
      handleErrors("Please input status", FieldName.status);
      isValid = false;
    } else if (
      !["alive", "dead", "unknown"].includes(inputs.status.toLowerCase())
    ) {
      handleErrors(
        "Please input valid status ( alive, dead, unkwon )",
        FieldName.status
      );
      isValid = false;
    }

    if (!inputs.image) {
      handleErrors("Please add image", FieldName.image);
      isValid = false;
    }

    if (isValid) {
      submit();
    }
  };

  const handleErrors = (error: string, input: string) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

  const handleChange = (text: string, input: string) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const submit = () => {
    setIsLoading(true);

    setTimeout(() => {
      try {
        setIsLoading(false);

        dispatch(
          addCustomCharacter({
            ...inputs,
            status: STATUS[inputs.status.toLowerCase()],
          })
        );

        navigation.navigate(SCREENS.CUSTOM_CHARACTERS);
      } catch (error) {
        Alert.alert("Error", "Something went wrong");
      }
    }, 2000);
  };

  const goBack = () => {
    navigation.navigate(SCREENS.CUSTOM_CHARACTERS);
  };

  return (
    <SafeAreaView style={[styles.container]}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Text style={[styles.title]}>Add new character</Text>
          <ScrollView>
            <View style={[styles.form]}>
              <Input
                label={FieldLabel.name}
                placeholder="Name"
                required
                error={errors?.name}
                onChangeText={(text) => handleChange(text, FieldName.name)}
                onFocus={() => handleErrors("", FieldName.name)}
              />
              <Input
                label={FieldLabel.age}
                placeholder="Age"
                required
                inputMode="numeric"
                error={errors?.age}
                onChangeText={(text) => handleChange(text, FieldName.age)}
                onFocus={() => handleErrors("", FieldName.age)}
              />
              <Input
                label={FieldLabel.gender}
                placeholder="Gender"
                required
                error={errors?.gender}
                onChangeText={(text) => handleChange(text, FieldName.gender)}
                onFocus={() => handleErrors("", FieldName.gender)}
              />
              <Input
                label={FieldLabel.origin}
                placeholder="Origin"
                required
                error={errors?.origin}
                onChangeText={(text) => handleChange(text, FieldName.origin)}
                onFocus={() => handleErrors("", FieldName.origin)}
              />
              <Input
                label={FieldLabel.status}
                placeholder="Alive | Die | unknown"
                required
                error={errors?.status}
                onChangeText={(text) => handleChange(text, FieldName.status)}
                onFocus={() => handleErrors("", FieldName.status)}
              />
              <ImagePicker
                onChangeImage={(image) => {
                  handleChange(image, FieldName.image);
                }}
                error={errors?.image}
              />
              <View style={[styles.actions]}>
                <Button label="Go Back!" onPress={goBack} />
                <Button label="Save character!" onPress={validate} />
              </View>
            </View>
          </ScrollView>
        </>
      )}
    </SafeAreaView>
  );
};

export default AddCharacterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  title: {
    color: COLORS.light.accent,
    fontSize: 30,
    fontWeight: "bold",
    lineHeight: 30,
    textAlign: "center",
  },
  form: {
    gap: 15,
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  actions: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
  },
});

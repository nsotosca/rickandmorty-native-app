import {
  View,
  Text,
  TextInput,
  TextInputProps,
  StyleSheet,
} from "react-native";
import { COLORS } from "../utils/enums";
import { useState } from "react";

interface Props extends TextInputProps {
  name?: string;
  label?: string;
  error?: string;
  required?: boolean;
  onFocus?: (fieldName) => void;
}

const Input = (props: Props) => {
  const {
    name,
    label,
    error,
    required,
    onFocus = () => {},
    ...restProps
  } = props;
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.container]}>
      {!!label && (
        <Text style={[styles.label]}>
          {required ? "* " : ""}
          {label}
        </Text>
      )}
      <View
        style={[
          styles.inputContainer,
          error && !isFocused && styles.inputError,
        ]}
      >
        <TextInput
          style={[styles.input]}
          onFocus={() => {
            onFocus(name);
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          {...restProps}
        />
      </View>
      {!!error && <Text style={[styles.error]}>{error}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    gap: 2,
  },
  inputContainer: {
    backgroundColor: COLORS.light.main,
    color: COLORS.light.accent,
    borderRadius: 5,
    padding: 8,
    elevation: 4,
  },
  input: {
    fontSize: 15,
    color: COLORS.light.accent,
  },
  inputError: {
    borderColor: COLORS.commons.red,
    borderWidth: 1,
  },
  label: {
    fontSize: 15,
    color: COLORS.light.accent,
    fontWeight: "bold",
  },
  error: {
    fontSize: 14,
    color: COLORS.commons.red,
    fontWeight: "500",
  },
});

import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

const GoalInput = ({
  placeholder,
  onAddGoal,
  buttonTitle,
  modalVisible,
  handleModalClose,
}) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const handleAddGoal = () => {
    onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={modalVisible} animationType="slide">
      <View style={styles.goalAddingContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={handleModalClose} color="red" />
          </View>
          <View
            style={[
              styles.button,
              enteredGoal.length === 0
                ? styles.disabledButton
                : styles.enabledButton,
            ]}
          >
            <Button
              disabled={enteredGoal.length === 0}
              title={buttonTitle}
              onPress={handleAddGoal}
              color={"#5a5a5a"}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  goalAddingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#d3ccc5",
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#7d7f7c",
    width: "100%",
    padding: 16,
    color: "#5a5a5a",
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "30%",
    marginHorizontal: 10,
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
  disabledButton: {
    backgroundColor: "#b5bab8",
    opacity: 0.5,
  },
  enabledButton: {
    backgroundColor: "#b5bab8",
  },
});

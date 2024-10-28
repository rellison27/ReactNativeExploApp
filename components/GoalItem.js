import { View, Text, StyleSheet, Pressable } from "react-native";
import { useState } from "react";

const GoalItem = ({ text, onDeleteHandler, id }) => {
  const [strikeThrough, setStrikeThrough] = useState(false);

  const removeGoalHandler = () => {
    onDeleteHandler(id);
  };

  return (
    <View style={styles.goalTextContainer}>
      <Pressable
        onPress={onDeleteHandler.bind(this, id)}
        android_ripple={{ color: "#cccccc" }}
        style={({ pressed }) => setStrikeThrough(pressed)}
      >
        <Text
          style={[styles.goalListText, strikeThrough && styles.pressedItem]}
        >
          {text}
        </Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalListText: {
    padding: 10,
    fontSize: 20,
    margin: 5,
    color: "#98B1C4",
  },
  goalTextContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#d3ccc5",
  },
  pressedItem: {
    textDecorationLine: "line-through",
    opacity: 0.5,
  },
});

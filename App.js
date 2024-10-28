import { StyleSheet, View, FlatList, Button } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const removeGoalHandler = (goalId) => {
    setGoals((currentGoals) =>
      currentGoals.filter((goal) => goal.id !== goalId)
    );
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const addGoalHandler = (enteredGoal) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoal, id: Math.random().toString() },
    ]);
    setModalVisible(false);
  };

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Button title="Add New Goal" onPress={openModal} color={"#98b1c4"} />
        {modalVisible && (
          <GoalInput
            placeholder="Enter your goal"
            onAddGoal={addGoalHandler}
            buttonTitle="Add"
            modalVisible={modalVisible}
            handleModalClose={() => setModalVisible(false)}
          />
        )}
        <View style={styles.goalListContainter}>
          <FlatList
            data={goals}
            renderItem={(itemData) => (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteHandler={removeGoalHandler}
              />
            )}
            keyExtractor={(item) => item.id}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#f9e5d0",
  },
  goalListContainter: {
    flex: 5,
  },
});

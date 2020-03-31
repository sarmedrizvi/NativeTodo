import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList
} from "react-native";
import GoalItem from "./Components/GoalItem";
import GoalInput from "./Components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isGoalInputVisible, setIsGoalInputVisible] = useState(false);
  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { uid: Math.random().toString(), value: goalTitle }
    ]);
    setIsGoalInputVisible(false);
  };
  const onDelete = uid => {
    setCourseGoals(currentGoals =>
      currentGoals.filter(goal => goal.uid != uid)
    );
  };

  const cancelGoalHandler = () => {
    setIsGoalInputVisible(false)
  }
  return (
    <View style={styles.screen}>
      <Button title="Add" onPress={() => setIsGoalInputVisible(true)} />
      <GoalInput GoalHandler={addGoalHandler} visible={isGoalInputVisible} onCancelButton={cancelGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.uid}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            items={itemData.item.value}
            onDelete={() => onDelete(itemData.item.uid)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 50 }
});

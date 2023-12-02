import React, { useState } from "react";
import { Input, Text } from "@ui-kitten/components";
import styles from "./style";
import { TouchableOpacity, KeyboardAvoidingView, Alert,Keyboard } from "react-native";

const TaskInput = (props) => {
  const [task, setTask] = useState("");
  const addtask = () => {
    if (task.length === 0) {
      Alert.alert("Notification", "Cannot be empty");
    }else{
      props.addtask(task);
    }
    setTask("");
    Keyboard.dismiss()
  };
  return (
    <KeyboardAvoidingView
      style={styles.addtask}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
    >
      <Input
      value={task}
        onChangeText={(text) => setTask(text)}
        style={styles.input}
        textStyle={styles.text_input}
        placeholder="Your task"
        status="primary"
      />
      <TouchableOpacity style={styles.button} onPress={addtask}>
        <Text style={styles.icon}>+</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default TaskInput;

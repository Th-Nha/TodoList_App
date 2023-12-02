import React, { useState } from "react";
import styles from "./style";
import { Layout } from "@ui-kitten/components";
import { ScrollView,Alert } from "react-native";
import Task from "./Task";
import TaskInput from "./From";

const Todolist_Srceen = () => {
  const [tasklist, setTasklist] = useState(["sample task 1","sample task 2","sample task 3"]);
  const addtask = (task) => {
    setTasklist([...tasklist, task]);
  };
  const deletetask = (index)=>{
    Alert.alert(
      'Notification',
      'Confirm you want to delete.',
      [
        { text: 'OK', onPress: () => {
          let tasklisttemp = [...tasklist];
          tasklisttemp.splice(index,1);
          setTasklist(tasklisttemp)
        } },
        { text: 'Cancel', onPress: () => {}},
      ],
      { cancelable: false }
    );
  }
  return (
    <Layout style={styles.container}>
      <Layout style={styles.top}>
        <ScrollView>
          {tasklist.map((item, index) => {
            return <Task key={index} title={item} number={index+1} delete={()=> deletetask(index)}/>;
          })}
        </ScrollView>
      </Layout>
      <TaskInput addtask={addtask} />
    </Layout>
  );
};

export default Todolist_Srceen;

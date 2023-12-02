import { TouchableOpacity } from "react-native";
import React from "react";
import { Layout, Text } from "@ui-kitten/components";
import styles from "./style";

const Task = (props) => {
  return (
    <TouchableOpacity onPress={props.delete}>
      <Layout style={styles.item}>
        <Layout style={styles.shape}>
          <Text category="s1" style={styles.number}>
            {props.number}
          </Text>
        </Layout>
        <Text category="s1" style={styles.content}>
          {props.title}
        </Text>
      </Layout>
    </TouchableOpacity>
  );
};

export default Task;

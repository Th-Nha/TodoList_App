import React from "react";
import styles from "./style";
import { Layout, Avatar, Text, Input, Button } from "@ui-kitten/components";
import { Alert, StatusBar } from "react-native";

const User_Screen = ({ navigation }) => {
  return (
    <Layout style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <Layout style={styles.top}>
        <Avatar
          style={styles.avatar}
          source={require("./../../assets/7309681.png")}
        />
      </Layout>
      <Layout style={styles.center}>
        <Layout style={styles.center_left_left}>
          <Text category="p1" style={styles.text}>
            Name:
          </Text>
          <Text category="p1" style={styles.text}>
            Email:
          </Text>
          <Text category="p1" style={styles.text}>
            Phone:
          </Text>
        </Layout>
        <Layout style={styles.center_reight}>
          <Input
            style={styles.input}
            textStyle={styles.txt_input}
            status="primary"
            placeholder="Nguyễn Thanh Nhã"
          />
          <Input
            style={styles.input}
            textStyle={styles.txt_input}
            status="primary"
            placeholder="nguyennha.dev@gmail.com"
          />
          <Input
            style={styles.input}
            textStyle={styles.txt_input}
            status="primary"
            placeholder="0392234718"
          />
        </Layout>
      </Layout>
      <Layout style={styles.bottom}>
        <Button
          style={styles.button}
          onPress={() => {
            navigation.navigate("Login");
            Alert.alert("Notification", "Success sign out");
          }}
        >
          Sigin Out
        </Button>
      </Layout>
    </Layout>
  );
};

export default User_Screen;

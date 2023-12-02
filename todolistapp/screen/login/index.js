import React from "react";
import {
  Image,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import styles from "./style";
import { Button, Layout, Text, Input } from "@ui-kitten/components";

const Login_screen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Layout style={styles.container}>
          {/* IMG */}
          <Layout style={styles.top}>
            <Image
              style={styles.img}
              source={require("./../../assets/4789002.png")}
            />
          </Layout>
          {/* Title */}
          <Layout style={styles.title}>
            <Text category="h2" style={styles.txt_title}>
              LOGIN
            </Text>
          </Layout>
          {/* Conten */}
          <Layout style={styles.center}>
            {/* input email */}
            <Input
              style={styles.input}
              textStyle={styles.txt_input}
              status="primary"
              placeholder="Email"
              keyboardType="email-address"
            />
            {/* input password */}
            <Input
              style={styles.input}
              textStyle={styles.txt_input}
              status="primary"
              placeholder="Password"
              secureTextEntry={true}
            />
            {/* button login */}
            <Button
              style={styles.button}
              status="primary"
              onPress={() => navigation.navigate("Home")}
            >
              LOGIN
            </Button>
          </Layout>
        </Layout>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login_screen;

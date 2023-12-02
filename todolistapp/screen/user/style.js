import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 0.9,
    justifyContent: "center",
    alignItems: "center", 
  },
  avatar: {
    height: 150,
    width: 150,
  },
  center: {
    flex: 1.2,
    flexDirection: "row",
  },
  center_left: {
    flex: 0.2,
    paddingLeft:10,
  },
  text: {
    fontSize: 25,
    marginTop:25,
    marginLeft:10
  },
  center_right: {
    flex: 0.3,
  },
  input:{
    width: 300,
    marginHorizontal:15,
    marginTop:15

  },
  txt_input:{
    fontSize: 20
  },
  bottom:{
    flex:0.9,

  },
  button:{
    marginHorizontal:20,
    height: 70,
    borderRadius:18,
  },
});
export default styles;

import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    borderWidth: 1.5,
    borderColor: "#E68FD8",
    marginVertical: 8,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  shape: {
    width: 40,
    height: 40,
    borderRadius: 5,
    backgroundColor: "#53d6f2",
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: "white",
  },
  content: {
    width: "80%",
  },
});
export default styles;

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
    height: "100%",
  },
  bottom: {
    justifyContent: "flex-end",
    bottom: "10%",
    marginTop: "10%",
  },
  button: {
    display: 'flex',
    height: "9%",
    minHeight: 50,
    minWidth: "90%",
    backgroundColor: "#10069f",
    borderRadius: 10,
    marginTop: "5%",
    justifyContent: "center",
  },
  buttonWithIcon: {
    display: 'flex',
    height: "9%",
    minHeight: 50,
    minWidth: "90%",
    backgroundColor: "#10069f",
    borderRadius: 10,
    marginTop: "5%",
    justifyContent: "flex-start",
  },
  buttonWithIconText: {
    fontSize: 20,
    color: '#ffffff',
    textAlign: "center",
    marginLeft: "10%",
  },
  buttonText: {
    fontSize: 20,
    color: '#ffffff',
    textAlign: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    top: '5%',
  },
  top: {
    flex: 1,
    justifyContent: "flex-start",
    top: "5%",
    backgroundColor: "#ffffff",
  },
  row: {
    flexDirection: "row",
  },
  roundButton: {
    width: 60,
    color: "#640a12",
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: "#10069F",
  },
  buttonBottom: {
    marginTop: -30,
    flexGrow: 1,
  },
  text: {
    fontSize: 16,
    marginVertical: 20,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    margin: 8,
    color: "#111111",
  },
  paragraph: {
    margin: 8,
    width: '85%',
    fontWeight: 'bold',
  },
  switchcontainer: {
    flexDirection: "row", // Elemente nebeneinander
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    backgroundColor: "#AFEEEE",
    width: "100%",
  },
  switchtext: {
    marginRight: 10,
  },
  box: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: '#10069f',
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fffff",
  },
  thumbnail: {
    width: '100%',
    resizeMode: 'contain',
    height: 200
  },
  thumbnailContainer: {
    position: 'relative',
  },
  playIconContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSmall: {
    display: 'flex',
    height: '9%',
    minHeight: 50,
    backgroundColor: '#10069f',
    borderRadius: 10,
    marginTop: '5%',
    marginHorizontal: '2%',
  },
    buttonTextSmall: {
      fontSize: 15,
      color: '#ffffff',
      textAlign: 'left',
      marginLeft: '5%',
    },
  textUnderline: {
    textDecorationLine: 'underline',
  },
  logo: {
    resizeMode: 'contain',
    width: '80%',
    height: 65,
    borderRadius: 10,
  },
});
export default styles;

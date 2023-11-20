import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    bottom: '10%',
  },
  button: {
    display: 'flex',
    height: '9%',
    minHeight: 50,
    minWidth: '90%',
    backgroundColor: '#10069f',
    borderRadius: 10,
    marginTop: '5%',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
//    fontSize: 13,
//    fontFamily: 'Pano B',
    textAlign: 'center',
    color: '#ffffff',
  },
  title: {
    fontSize: 20,
//    fontFamily: 'Pano B',
    fontWeight: '700',
    textAlign: 'left',
    top: '5%',
  },
  top: {
    flex: 1,
    justifyContent: 'flex-start',
    top: '5%',
    backgroundColor: '#ffffff',
  },
  row: {
    flexDirection: 'row',
  },
  roundButton: {
    width: 60,
    color: '#640a12',
  },
  header: {
    fontSize: 24,
//    fontFamily: 'Pano B',
    fontWeight: 'bold',
    textAlign: 'left',
    marginVertical: 20,
    color: '#10069F',
  },
  buttonBottom: {
    marginTop: -30,
  },
  text: {
    fontSize: 16,
//    fontFamily: 'Loew Next R',
    marginVertical: 20,
  },
  link: {
    fontSize: 16,
//    fontFamily: 'Loew Next R',
    marginVertical: 20,
    textDecorationLine: 'underline',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    margin: 8,
    color: '#111111',
  },
  paragraph: {
    margin: 8,
    width: '85%',
//    fontFamily: 'Loew Next B',
    fontSize: 16,
  },
  switchcontainer: {
    flexDirection: 'row', // Elemente nebeneinander
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: '#AFEEEE',
    width: '100%',
  },
  switchtext: {
    marginRight: 10,
  },
  box: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#10069F',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fffff',
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
  }

});
export default styles;

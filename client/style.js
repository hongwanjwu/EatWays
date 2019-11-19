import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  //LogIn Page
  logInContainer: {
    height: 200,
    justifyContent: 'space-around'
  },
  logIn: {
    backgroundColor: '#F2E0D5',
    height: 150,
    padding: 15,
    justifyContent: 'space-between',
    borderRadius: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#3C4C59'
  },
  label: {
    fontSize: 20,
    color: '#3C4C59'
  },
  input: {
    height: 40,
    width: 200,
    borderColor: '#3C4C59',
    borderWidth: 1,
    borderRadius: 5
  },
  logInbutton: {
    width: 50,
    backgroundColor: '#D98982',
    borderRadius: 5,
    color: 'white',
    alignSelf: 'center'
  },
  //Nav Page
  navButton: {
    width: 200,
    backgroundColor: '#D98982',
    borderRadius: 5,
    color: 'white',
    alignSelf: 'center',
    margin: 20
  },
  navText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 25,
    padding: 5
  },
  //List pages
  addContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  addButton: {
    width: 50,
    backgroundColor: '#D98982',
    borderRadius: 5,
    color: 'white',
    alignSelf: 'center',
    margin: 10
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 15,
    padding: 5
  },
  //item
  itemContainer: {
    width: 200,
    alignSelf: 'center',
    backgroundColor: '#F2A391',
    borderRadius: 5,
    margin: 10
  },
  //Nearby List
  nearbyContainer: {
    borderColor: '#3C4C59',
    borderRadius: 10,
    backgroundColor: '#F2E0D5'
  },
  labelText: {
    fontWeight: 'bold',
    color: '#3C4C59',
    padding: 8,
    paddingBottom: 0
  },
  infoText: {
    color: '#3C4C59',
    padding: 8
  }
});

export default style;

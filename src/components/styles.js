import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  // Name & Matrikelnummer
  infoDeveloper: {
    flex: 0.15,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
  },
  // View Styles
  centeredView: {
    flex: 1,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
    padding:10
  },
  resultsView: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#333333',
  },
  favouriteView: {
    flex: 0.05,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Homescreen Components
  input: {
    backgroundColor: '#ffffff',
    textAlign: "center",
    borderColor: '#d9d9d9',
    borderWidth: 2,
    width: 250,
    height: 40,
    marginBottom: 10,
  },
  goToFavourites: {
    flex: 0.15,
    backgroundColor: '#333333',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 10,
  },
  // Text Styles
  resultsText:{
    fontSize: 15,
    color: 'white',
    padding: 5,
  },
  bigText: {
    fontSize: 20,
    color: 'white',
  },
  // Yellow Button
  button: {
    backgroundColor: '#ffce04',
    borderRadius: 7,
    justifyContent: 'center',
    width: 250,
    height: 40,
    marginBottom: 10,
  }

});

export default styles;
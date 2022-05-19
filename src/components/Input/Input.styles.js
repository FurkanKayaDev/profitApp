import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    borderColor: 'white',
    backgroundColor: 'white',
    color: '#293649',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },

  button_text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },

  profit_button: {
    borderWidth: 0.7,
    padding: 10,
    borderRadius: 20,
    borderColor: '#293649',
    width: 150,
    backgroundColor: 'green',
  },
  cost_button: {
    borderWidth: 0.7,
    padding: 10,
    borderRadius: 20,
    borderColor: '#293649',
    width: 150,
    backgroundColor: 'red',
  },
});

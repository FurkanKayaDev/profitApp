import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    maxHeight: 220,
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 0.2,
  },
  lists: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    minHeight: 200,
    elevation: 1,
    borderRadius: 4,
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 10,
  },
  profit: {
    fontSize: 20,
    padding: 10,
    width: 150,
  },
  cost: {
    fontSize: 20,
    padding: 10,
    width: 150,
  },
  list_text: {
    color: 'white',
    textAlign: 'center',
    marginVertical: 7,
    marginHorizontal: 45,
    borderBottomColor: 'white',
    borderBottomWidth: 0.5,
  },
  profit_text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'center',
  },
  cost_text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
  },
  total_calculator: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
});

import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Keyboard,
  Alert,
} from 'react-native';
import styles from './Input.styles';
import {useDispatch} from 'react-redux';
import {addProfitItems, addCostItems} from '../redux/calculate/calculateSlice';
import {showMessage} from 'react-native-flash-message';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Input() {
  const [value, setValue] = useState();
  const dispatch = useDispatch();
  const addProfit = () => {
    if (value > 0) {
      dispatch(addProfitItems(value));
      Keyboard.dismiss();
      setValue('');
    } else {
      showMessage({
        message: 'Please enter a valid number!',
        type: 'danger',
      });
    }
  };
  const addCost = () => {
    if (value > 0) {
      dispatch(addCostItems(value));
      Keyboard.dismiss();
      setValue('');
    } else {
      showMessage({
        message: 'Please enter a valid number!',
        type: 'danger',
      });
    }
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        keyboardType="decimal-pad"
        placeholder="Enter a value.."
      />
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.profit_button} onPress={addProfit}>
          <Text style={styles.button_text}>
            <Icon name="arrow-up-bold" size={24} />
            INCOME
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cost_button} onPress={addCost}>
          <Text style={styles.button_text}>
            COST
            <Icon name="arrow-down-bold" size={24} />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Input;

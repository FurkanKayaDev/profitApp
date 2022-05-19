import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './Footer.styles';
import {useSelector, useDispatch} from 'react-redux';
import {clearItems} from '../redux/calculate/calculateSlice';
import FlashMessage, {showMessage} from 'react-native-flash-message';

function Footer() {
  const totalProfitItems = useSelector(state => state.values.profitItems);
  const totalCostItems = useSelector(state => state.values.costItems);
  const [isClear, setIsClear] = useState(true);
  const [color, setColor] = useState('gray');
  const dispatch = useDispatch();

  var totalProfit = 0;
  totalProfitItems.map(element => (totalProfit += Number(element)));

  var totalCost = 0;
  totalCostItems.map(element => (totalCost += Number(element)));

  const clear = () => {
    dispatch(clearItems());
    showMessage({
      message: 'Successfully cleared!',
      type: 'success',
    });
  };

  useEffect(() => {
    if (totalCost === 0 && totalProfit === 0) {
      setIsClear(true);
      setColor('grey');
    } else {
      setIsClear(false);
      setColor('#24A0ED');
    }
  }, [totalCost, totalProfit]);

  var get = totalProfit - totalCost;
  return (
    <View style={styles.footer}>
      <View style={styles.text}>
        <Text
          style={{
            color: get >= 0 ? 'green' : 'red',
            fontSize: 28,
            fontWeight: 'bold',
          }}>
          Net Profit : {get}
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={{...styles.clear, backgroundColor: color}}
          onPress={clear}
          disabled={isClear}>
          <Text style={styles.button_text}>Clear</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Footer;

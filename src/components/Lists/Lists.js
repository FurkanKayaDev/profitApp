import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from './Listys.styles';
import {useSelector, useDispatch} from 'react-redux';
import {
  removeProfitItem,
  removeCostItem,
} from '../redux/calculate/calculateSlice';
import Icon from 'react-native-vector-icons/Feather';

function Lists() {
  const profits = useSelector(state => state.values.profitItems);
  const costs = useSelector(state => state.values.costItems);
  const dispatch = useDispatch();

  var totalProfit = 0;
  profits.map(element => (totalProfit += Number(element)));

  var totalCost = 0;
  costs.map(element => (totalCost += Number(element)));
  return (
    <View>
      <ScrollView scrollEnabled={true} style={{maxHeight: 230, minHeight: 220}}>
        <View style={styles.lists}>
          <View style={styles.profit}>
            {profits.map((profit, id) => (
              <TouchableOpacity
                key={id}
                onPress={() => dispatch(removeProfitItem(id))}>
                <Text style={styles.list_text}>{profit}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.cost}>
            {costs.map((cost, id) => (
              <TouchableOpacity
                key={id}
                onPress={() => dispatch(removeCostItem(id))}>
                <Text style={styles.list_text}>{cost}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.total_calculator}>
        <View>
          <Text style={styles.profit_text}>
            <Icon name="check" size={16} />
            Total: {totalProfit}
          </Text>
        </View>
        <View>
          <Text style={styles.cost_text}>
            <Icon name="x" size={16} />
            Total: {totalCost}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Lists;

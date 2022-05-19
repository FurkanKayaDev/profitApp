import React from 'react';
import {View, Text} from 'react-native';
import styles from './Header.styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {LinearTextGradient} from 'react-native-text-gradient';

function Header() {
  return (
    <View style={styles.container}>
      <Icon
        name="calculator"
        size={29}
        style={{marginTop: 2, color: '#ffff00'}}
      />
      <LinearTextGradient
        style={styles.header_title}
        locations={[0, 1]}
        colors={['#ffff00', '#ffa500']}
        start={{x: -0.15, y: 0}}
        end={{x: 0.75, y: 0}}>
        <Text> Profit Calculator</Text>
      </LinearTextGradient>
    </View>
  );
}

export default Header;

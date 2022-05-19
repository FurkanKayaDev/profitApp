import React from 'react';
import { Provider } from 'react-redux';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { store } from './components/redux/store';
import Header from './components/Header';
import Input from './components/Input';
import Lists from './components/Lists';
import Footer from './components/Footer';
const Router = () => {
    return (
        <Provider store={store}>
            <SafeAreaView style={{ flex: 1, justifyContent: 'space-evenly', backgroundColor: '#293649' }}>
                <Header />
                <Input />
                <Lists />
                <Footer />
            </SafeAreaView>
        </Provider>
    );
};
export default Router;

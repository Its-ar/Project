import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/Pages/Home/home';
import Login from './src/Pages/Login/login';
import DimensiKerjaan from './src/Pages/Aktivitas/DimensiKerjaan';
import KesiapanLahan from './src/Pages/Aktivitas/KesiapanLahan';
import InformasiProyek from './src/Pages/Aktivitas/InformasiProyek';
import InfoProyek from './src/Pages/Aktivitas/InfoProyek';
import DimensiPekerjaan from './src/Pages/Aktivitas/DimensiPekerjaan';
import KesiapanLebasPekerjaan from './src/Pages/Aktivitas/KesiapanLebasPekerjaan';
import Register from './src/Pages/Login/Register';
import {AuthProvider} from './src/conText/AuthConText';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="InformasiProyek" component={InformasiProyek} />
          <Stack.Screen name="DimensiKerjaan" component={DimensiKerjaan} />
          <Stack.Screen name="KesiapanLahan" component={KesiapanLahan} />
          <Stack.Screen name="InfoProyek" component={InfoProyek} />
          <Stack.Screen name="DimensiPekerjaan" component={DimensiPekerjaan} />
          <Stack.Screen
            name="KesiapanLebasPekerjaan"
            component={KesiapanLebasPekerjaan}
          />
        </Stack.Navigator>
      </NavigationContainer>
    // {/* </AuthProvider> */}
  );
};

export default App;

const styles = StyleSheet.create({});

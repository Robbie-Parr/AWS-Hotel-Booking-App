import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import LandingScreen from './screens/LandingScreen';
import BookingScreen from './screens/BookingScreen';
import AdminScreen from './screens/AdminScreen';


const globalScreenOptions = {
  headerStyle: {backgroundColor: "#FF850F"},
  headerTitleStyle: {color: "white"},
  headerTintColor: "white",
}

const App = () => {

  const Stack = createStackNavigator()
  
  return(
    <NavigationContainer>
        <Stack.Navigator screenOptions={globalScreenOptions}>
          <Stack.Screen name="SplashScreen" component={SplashScreen}/>
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="Register" component={RegisterScreen}/>
          <Stack.Screen name="Landing" component={LandingScreen}/>
          <Stack.Screen name="Booking" component={BookingScreen}/>
          <Stack.Screen name="Admin" component={AdminScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

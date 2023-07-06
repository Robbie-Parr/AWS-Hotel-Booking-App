import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Button
  } from 'react-native';

import { useState } from 'react';


import {ForgotPassword,HelpSection} from "../components/LoginScreenComponents"


const LoginScreen = () => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const [forgotPasswordToggle,setForgotPasswordToggle] = useState(false)
    const [helpSectionToggle,setHelpSectionToggle] = useState(false)

    const logIn = () => {
        //use username and password variables to validate emails
    }

    return(
        <View>
            <View>
                <ForgotPassword visible={forgotPasswordToggle} setVisible={setForgotPasswordToggle}/>
                <HelpSection visible={helpSectionToggle} setVisible={setHelpSectionToggle}/>
            </View>

            <Text>Login Screen</Text>
            <View>
                <TextInput onChangeText={setUsername} value={username} placeholder='Username'/>
                <TextInput onChangeText={setPassword} value={password} placeholder='Password'/>
            </View>
            <View>
                <Button title="Sign In" onPress={logIn}/>
                <Button title="Forgot Password" onPress={() => setForgotPasswordToggle(true)}/>
            </View>

            <TouchableOpacity style={styles.help}>Help</TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  help:{borderRadius:50},
});

export default LoginScreen;
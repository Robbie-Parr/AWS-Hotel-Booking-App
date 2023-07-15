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
      console.log(username)
      console.log(password)
        //use username and password variables to validate emails
    }

    return(
        <View>
            <View>
                <ForgotPassword visible={forgotPasswordToggle} setVisible={setForgotPasswordToggle}/>
                <HelpSection visible={helpSectionToggle} setVisible={setHelpSectionToggle}/>
            </View>

            <Text style={{paddingTop:"5%",paddingLeft:"5%"}}>Login Screen</Text>
            <View style={{padding:"10%"}}>
                <TextInput onChangeText={setUsername} value={username} placeholder='Username'/>
                <TextInput onChangeText={setPassword} value={password} placeholder='Password'/>
            </View>
            <View style={{padding:"5%"}}>
                <Button title="Sign In" onPress={logIn}/>
                <Button title="Forgot Password" onPress={() => setForgotPasswordToggle(true)}/>
            </View>

            <TouchableOpacity style={styles.help} onPress={() => setHelpSectionToggle(true)}>
              <Text>Help</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  help:{marginLeft:"10%",padding:"1%", borderRadius:50, backgroundColor:"grey", width:40},
});

export default LoginScreen;
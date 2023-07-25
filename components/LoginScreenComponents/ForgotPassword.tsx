import {
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Modal,
    Button
  } from 'react-native';

import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

type Props = {
    visible:boolean,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const ForgotPassword = ({visible,setVisible}:Props) => {

  const [email,setEmail] = useState("");
  const [code,setCode] = useState("");
  const [newPassword,setNewPassword] = useState("");
  const [checkNewPassword,setCheckNewPassword] = useState("");

  const [area,setArea] = useState(0);

  const navigation = useNavigation();


  const requestCode = () => {
    console.log(email)
    setArea(1)
  }

  const submitCode = () => {
    console.log(code)
    setArea(2)
  }

  const signIn = () => {
    console.log(newPassword)
    console.log(checkNewPassword)
    if(newPassword==checkNewPassword){
      //set New password
      navigation.navigate("Landing")
      console.log("Navigate")
      setVisible(false)
    }
  }

    return(
        <Modal visible={visible}>
            <View style={{borderColor:"red",borderWidth:5,height:"100%", backgroundColor:"lightgrey"}}>
        <View style={{flexDirection:"row",margin:"5%",padding:"1%"}}>
            <TouchableOpacity onPress={() => setVisible(false)} style={{flex:.9,backgroundColor:"red"}}>
              <Text style={{color:"white",paddingLeft:"15%",margin:"5%",paddingRight:"1%"}}>Close</Text>
            </TouchableOpacity>
            <Text style={{textAlign:'center',fontSize:20,paddingLeft:"5%"}}>Forgot Password Section</Text>
            </View>

            <View style={{height:"90%"}}>
                <View style={{margin:"10%",backgroundColor:"white",height:"20%",padding:"5%"}}>

                  <TextInput onChangeText={setEmail} value={email} placeholder='Recovery Email'/>
                  <View style={{height:"30%"}}></View>
                  <Button title="Request Code" onPress={requestCode}/>
                  
                </View>
                {area>=1 && 
                <View style={{margin:"10%",backgroundColor:"white",height:"20%",padding:"5%"}}>
                  <TextInput onChangeText={setCode} value={code} placeholder='Recovery Code'/>
                  <View style={{height:"30%"}}/>
                  <Button title="Submit Code" onPress={submitCode}/>
                </View>
                }

                {area==2 &&
                <View style={{margin:"10%",backgroundColor:"white",height:"20%",padding:"5%"}}>
                  <View style={{height:"20%"}}>
                    <TextInput onChangeText={setNewPassword} value={newPassword} placeholder='New Password'/>
                  </View>
                  <View style={{height:"10%"}}/>
                  <View style={{height:"20%"}}>
                    <TextInput onChangeText={setCheckNewPassword} value={checkNewPassword} placeholder='Retype Password'/>
                  </View>
                  <View style={{height:"20%"}}/>
                  <Button title="Sign In" onPress={signIn}/>
                </View>
                }
            </View>
        </View>
        </Modal>
    )
}

export default ForgotPassword;
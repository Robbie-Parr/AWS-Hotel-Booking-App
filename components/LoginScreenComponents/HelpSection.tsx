import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Button,
    Modal
  } from 'react-native';

import { useState } from 'react';

type Props = {
    visible:boolean,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const HelpSection = ({visible,setVisible}:Props) => {

    return(
        <Modal visible={visible}>
        <View style={{borderColor:"blue",borderWidth:5,height:"100%", backgroundColor:"lightgrey"}}>
        <View style={{flexDirection:"row",margin:"5%",padding:"1%"}}>
            <TouchableOpacity onPress={() => setVisible(false)} style={{flex:.4,backgroundColor:"blue", maxWidth:"20%"}}>
              <Text style={{color:"white",paddingLeft:"15%",margin:"5%"}}>Close</Text>
            </TouchableOpacity>
            <Text style={{textAlign:'center',fontSize:20,paddingLeft:"10%"}}>Help Section</Text>
            </View>

            <View style={{height:"90%"}}>
                <View style={{margin:"10%",backgroundColor:"white",height:"80%"}}>
                  <Text></Text>
                </View>
            </View>
        </View>
        </Modal>
    )
}

export default HelpSection;
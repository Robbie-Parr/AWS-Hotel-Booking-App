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
            <TouchableOpacity onPress={() => setVisible(false)}>Close</TouchableOpacity>
            <View>
                <Text>Help Section</Text>
            </View>
        </Modal>
    )
}

export default HelpSection;
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

const Logout = ({visible,setVisible}:Props) => {

    const logout = () => {

    }


    return(
        <Modal visible={visible}>
            <TouchableOpacity onPress={() => setVisible(false)}>Close</TouchableOpacity>
            <View>
                <TouchableOpacity onPress={logout}>Logout</TouchableOpacity>
            </View>
        </Modal>
    )
}

export default Logout;
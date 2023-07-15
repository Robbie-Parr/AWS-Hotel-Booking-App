import {
    Text,
    View,
    TouchableOpacity,
    Modal
  } from 'react-native';

import { useState } from 'react';

type Props = {
    visible:boolean,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const ForgotPassword = ({visible,setVisible}:Props) => {

    return(
        <Modal visible={visible}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Text>Close</Text>
            </TouchableOpacity>
            <View>
                <Text>Forgot Password Section</Text>
            </View>
        </Modal>
    )
}

export default ForgotPassword;
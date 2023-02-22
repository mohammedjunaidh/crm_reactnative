import React from 'react' 
import { View, Text,StyleSheet,TouchableOpacity} from 'react-native';
import {Input,NativeBaseProvider,Button,Icon,Box,Image,AspectRatio} from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function Login(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View style={styles.Middle}>
                <Text style={styles.LoginText}>Login</Text>
            </View>
        </View>
    )
}


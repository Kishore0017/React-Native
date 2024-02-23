import { Stack } from "expo-router"

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RootLayout =() =>{
    return<Stack>
    <Stack.Screen name="List"/>
    <Stack.Screen name="Uder/[id]"/>
    
    </Stack>
}
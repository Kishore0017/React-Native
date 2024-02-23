import { View, Image,Text , TextInputBase, TextInput, Button, ActivityIndicator, KeyboardAvoidingView, ImageComponent, Touchable, TouchableOpacity, Pressable } from 'react-native'
import { Component, useState } from 'react';
import { NavigationProp } from '@react-navigation/native';
import { Link, Stack, router } from 'expo-router';
import List from './List';
import { useNavigation } from '@react-navigation/native';
import  NavLink, { Navigate, useNavigate } from 'react-router-dom';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { FIREBASE_APP, Fire_auth} from '../FirebaseConfig'
import { StyleSheet } from 'react-native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import Details from './Details';
import Reg from './Reg';


const RegStack = createNativeStackNavigator();

function RegLayout (){
   
};

  

interface LogInProps{
    navigation: NavigationProp<any>;
}

const Login : React.FC<LogInProps> = ({ navigation }) => {

    const gtDetails =() =>{
        navigation.navigate('Details');
    };
   
    const GTreg =()=>{
        navigation.navigate('Details')
    }
    

    const [email,setEmail] = useState('');
    const [password, setPassword] =useState('');
    const [loading,setLoading]=useState(false);
    
    const auth =Fire_auth;
   

    

    const signIn= async() =>{
        setLoading(true);
        try{
            const response=await signInWithEmailAndPassword(auth,email,password);
            console.log(response);
            alert('Check Your Emails!');
            
        }catch (error:any){
            console.log(error);
            alert('SignIn failed:'+error.message);
        }finally{
            setLoading(false);
        }
    }

    const signUp= async() =>{
        setLoading(true);
        try{
            const response=await createUserWithEmailAndPassword(auth,email,password);
            console.log(response);
            alert('Check Your Emails!');
            
        }catch (error:any){
            console.log(error);
            alert('SignUp failed:'+error.message);
        }finally{
            setLoading(false);
        }
    }

    


    
   return (

    


   
    
    <View >

        <View  ><Image
        source={require('./screens/Img/LG2.jpg')}
        style={styles.Img}/>

            
        
        </View>
       
        <View style={styles.container}  >
        <Text style={styles.Welcometxt}>Welcome To Schools</Text>
            
        
            <KeyboardAvoidingView enabled={true} behavior='padding' >
                
                <TextInput style={styles.input} value={email} placeholder='Email' autoCapitalize='none' onChangeText={(text)=>setEmail(text)}></TextInput>
                <TextInput style = {styles.input} secureTextEntry={true} value={password} placeholder="Password" autoCapitalize="none" onChangeText ={(text) =>setPassword(text)}></TextInput>
                

            </KeyboardAvoidingView>
            
        </View>
        <View style={styles.container2}>
        <KeyboardAvoidingView>
            <View style={styles.container2} >
                {loading ? (
                    <ActivityIndicator size='large' color='grey' />
                ):(
                    < View>
                        

                        <View style={styles.Button}><Button  title='LogIn' onPress={signIn}/></View>
                    
                        
                        <View style={styles.Button}><Button  title='LogIn' onPress={signUp}/></View>
                        
                       
                        <View style={styles.Button}><Button title='Sign-Up' onPress={()=>navigation.navigate('Reg')}/></View>

                    </View>
                )}

                
                        
             

             <View>


               </View>
               
                </View>

            </KeyboardAvoidingView>
            </View>

            
    </View>
  ) 
    



}

export default Login

const styles = StyleSheet.create({

    container: {
        paddingTop:40,
        marginTop:-70,
        marginLeft:40,
        marginRight:40,
        backgroundColor:'#fff',
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center',
    },
    container2: {
        
        backgroundColor:'#fff',
        padding:40,
        paddingRight:40,
        textAlign:'center',
        alignItems:'center',
        marginLeft:40,
        marginRight:40,
        borderBottomEndRadius:30,
        borderBottomStartRadius:30,
        justifyContent:'center',
    }
    ,
    Welcometxt:{
        fontSize:35,
        textAlign:'center',
        fontWeight:'bold',
        color: '#0fff',
    }
    ,
    input:{

        height:50,
        width:250,
        borderColor:'black',
        borderWidth: 1,
        backgroundColor: '#dcdcdc',
        marginTop:20,
        textAlign:'center',
        borderRadius:20,
    },
    LoginSignUp:{
        textAlign: 'center',
        fontSize: 23,
        fontWeight:'normal',
        paddingTop: 70,
        
    },
    Button:{

        
        color:'blue',
        maxHeight:60,
        shadowColor:'black',
        flex:1,
        shadowOpacity:100,
        shadowRadius:100,
        width:150,

    },
    Img:{width: 'auto',
        height: 241,
        marginTop: 26,
        marginBottom:20,
        
   },
  });
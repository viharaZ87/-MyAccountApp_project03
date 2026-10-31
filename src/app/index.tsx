import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function RegistrationScreen(){
  const router=useRouter();
  const [userName,setUserName]=useState('');
  const [email,setEmail]=useState('');
  const [phoneNumber,setPhoneNumber]=useState('');
  const [password,setPassword]=useState('');
  const [confirmPassword,setConfirmPassword]=useState('');

   const [yearOfBirth, setYearOfBirth] = useState('');//Task 04

  //handleReview function checks if all fields are filled and if passwords match before navigating to the Review screen.It uses Alert to show error messages if validation fails.
  //'alert' is a built-in React Native component that displays an alert dialog with a message and optional buttons.In this case, it is used to show error messages when validation fails.
  const handleReview=()=>{
    if(!userName||!email||!phoneNumber||!password||!confirmPassword || !yearOfBirth){

      Alert.alert('Error','Please fill in all fields');
      return;
    }


    if(password!==confirmPassword){
      Alert.alert('Error','Passwords do not match');
      return;
    }


    //Task04-age calculation logic
const currentYear = new Date().getFullYear();
    const birthYear = parseInt(yearOfBirth, 10);
    if (isNaN(birthYear) || birthYear < 1900 || birthYear > currentYear) {
      Alert.alert('Error', 'Please enter a valid Year of Birth.');
      return;
    }
    const calculatedAge = currentYear - birthYear;    



    router.push({
      pathname:'/review',//pathname specifies the route to navigate to, in this case, it navigates to the Review screen.
      params:{userName,email,phoneNumber,age: calculatedAge.toString(),},//params is an object that contains the data to be passed to the next screen. In this case, it passes the userName,email,phoneNumber,and password to the Review screen.
    });
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Create Your Account</Text>

      {/*'placeholder' is used to show a hint to the user about what to enter in the input field*/}
      {/*'onChangeText' is used to update the state variable when the user types in the input field*/}
      {/*'keyboardType' is used to specify the type of keyboard to show(e.g,email,phone)*/}
      {/*'secureTextEntry' is used to hide the text input(e.g,for password)*/}

      <TextInput style={styles.input} placeholder="Username" value={userName} onChangeText={setUserName}/>
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail}/>
      <TextInput style={styles.input} placeholder="Phone Number" keyboardType="phone-pad" value={phoneNumber} onChangeText={setPhoneNumber}/>
      <TextInput style={styles.input} placeholder="Year of Birth" keyboardType="numeric" maxLength={4} value={yearOfBirth} onChangeText={setYearOfBirth}/>
      <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword}/>
      <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword}/>
      
      
      <Button title="Review Details" onPress={handleReview}/>
    </View>
  );
}

const styles=StyleSheet.create({
  container:{flex:1,justifyContent:'center',padding:20},
  title:{fontSize:24,fontWeight:'bold',marginBottom:20,textAlign:'center'},
  input:{borderWidth:1,borderColor:'#ccc',borderRadius:8,padding:12,marginBottom:15},
});

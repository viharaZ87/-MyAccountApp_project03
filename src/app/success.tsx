import { StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams } from '../../.expo/types/router';

export default function SuccessScreen(){
    const {userName}=useLocalSearchParams();

    return(
        <View style={styles.container}>
            <Text style={styles.emoji}> ✅</Text>
            <Text style={styles.greeting}>Hello, {userName}!</Text>
            <Text style={styles.subtitle}>Your account has been created successfully.</Text>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{flex:1,justifyContent:'center',alignItems:'center',padding:20},
    emoji:{fontSize:60,marginBottom:20},
    greeting:{fontSize:28,fontWeight:'bold',color:'green',marginBottom:10},
    subtitle:{fontSize:18,textAlign:'center',color:'#555'},
});

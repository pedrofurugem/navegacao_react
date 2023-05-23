import react from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import { useNavigation } from '@react-navigation/native'

export default function Home(){
    const navigation = useNavigation();

    function navegaDetalhes(){
        navigation.navigate('Detalhes') //passando uma propriedade um objeto
    }

    return(
        <View style={styles.container}>
            <Text>Home</Text>
            <Button title="Ir para detalhes" onPress={ navegaDetalhes }/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow'
    }
})
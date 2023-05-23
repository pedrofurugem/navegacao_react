import react, { useLayoutEffect } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function Sobre(){
    return(
        <View style={styles.container}>
            <Text>Pagina Sobre</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
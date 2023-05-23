import react from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function Contato(){
    return(
        <View style={styles.container}>
            <Text>Contato</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
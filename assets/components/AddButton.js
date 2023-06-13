import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native/'

export default function AddButton({name, onPress, value}) {
    return (
        <TouchableOpacity style={styles.button} onPress={() => onPress(value)}>
            <Text style={styles.addButtonText}>{name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#454545',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },

    addButtonText: {
        color: 'white'
    },
})

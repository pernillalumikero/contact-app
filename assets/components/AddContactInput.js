import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default function AddContactInput({text, placeholder, keyboardtype, setFunction}) {
    return (
        <View style={styles.inputWrapper}>
            <Text style={styles.text}>{text}</Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                keyboardType={keyboardtype}
                onChangeText={(value) => setFunction(value)}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    inputWrapper: {
        flexDirection: 'row',
        columnGap: 10,
    },

    text: {
        fontFamily: 'Montserrat-Regular',
        marginVertical: 10,
    },

    input: {
        fontFamily: 'Montserrat-Regular',
        marginVertical: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 5
    },
})
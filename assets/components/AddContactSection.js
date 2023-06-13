import React from 'react'
import { Alert, Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import AddContactInput from './AddContactInput';
import AddButton from './AddButton';

export default function AddContactSection({ setPressed, name, setName, number, setNumber, email, setEmail, contacts }) {

    const addFunction = () => {

        if(name === '') {
           return Alert.alert('Lägg till ett namn')
        }

        if (number === '' && email === '') {
            return  Alert.alert('Lägg till en kontaktuppgift')
        }

        const createNewId = () => {
            let id = Math.floor(Math.random() * (1000 - 1) + 1);

            while (contacts.some(contact => contact.id === id)) {
                id++;
            }
            return id;
        }

        contacts.push({
            id: createNewId(),
            name: name,
            number: number,
            email: email,
            picture: null,
            displayContent: false,
            favorite: false
        })

        setName('')
        setNumber(null)
        setEmail('')
        setPressed(false)
    }

    return (
        <View style={styles.addNew}>
            <View>
                <TouchableOpacity style={styles.picWrapper} onPress={() => Alert.alert('Funkar tyvärr inte ännu!')}>
                    <FontAwesome name="user-circle-o" size={40} color="black" />
                    <Text style={styles.text}>Lägg till bild</Text>
                </TouchableOpacity>
                <View>
                    <AddContactInput
                        text='Namn:'
                        placeholder='Jane Doe'
                        keyboardtype='default'
                        setFunction={setName} />
                    <AddContactInput
                        text='Telefon:'
                        placeholder='070 123 45 67'
                        keyboardtype='numeric'
                        setFunction={setNumber} />
                    <AddContactInput
                        text='Email:' 
                        placeholder='jane.doe@somemail.com' 
                        keyboardType='email-address' 
                        setFunction={setEmail} />
                </View>
            </View>
            <View style={styles.buttonWrapper}>
                <AddButton name='Lägg till' onPress={addFunction} />
                <AddButton name='Avbryt' onPress={setPressed} value={false} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    addNew: {
        flexDirection: 'column',
        backgroundColor: 'white',
        width: '90%',
        borderRadius: 10,
        marginVertical: 20,
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    picWrapper: {
        alignItems: 'center'
    },

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
        borderBottomColor: 'black',
    },

    buttonWrapper: {
        flexDirection: 'row',
        columnGap: 30
    },
})
import React from 'react'
import { TouchableOpacity, Text, StyleSheet} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

export default function AddContactButton({setPressed}) {
    return (
        <TouchableOpacity style={styles.addSection} onPress={() => setPressed(true)}>
            <FontAwesome name="user-circle-o" size={40} color="black" />
            <Text style={styles.buttonText}>Lägg till ny kontakt...</Text>
            <FontAwesome name="plus-circle" size={24} color="black" />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({

addSection: {
    flexDirection: 'row',
    columnGap: 40,
    marginVertical: 10,
    backgroundColor: 'white',
    width: '90%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },

  buttonText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
  }

})
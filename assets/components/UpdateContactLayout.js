import React from 'react'
import { View } from 'react-native'
import UpdateContactInfo from './UpdateContactInfo'
import UpdateIcons from './UpdateIcons'

export default function UpdateContactLayout({ setName, setNumber, setEmail, item, doneFunction, updateFunction, deleteFunction }) {


    return (
        <View>
            <UpdateContactInfo setName={setName} setNumber={setNumber} setEmail={setEmail} item={item} />
            <UpdateIcons deleteFunction={deleteFunction} doneFunction={doneFunction} updateFunction={updateFunction} item={item} />
        </View>
    )
}

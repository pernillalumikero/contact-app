import React from 'react'
import { View } from 'react-native'
import DefaultContactInfo from './DefaultContactInfo'
import DefaultIcons from './DefaultIcons'

export default function DefaultContactInfoLayout({ toggleFavorite, updateFunction, deleteFunction, item, favorite }) {
    return (
        <View>
            <DefaultContactInfo item={item}/>
            <DefaultIcons toggleFavorite={toggleFavorite} updateFunction={updateFunction} deleteFunction={deleteFunction} item={item} favorite={favorite}/>
        </View>
    )
}

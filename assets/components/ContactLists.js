import React from 'react'
import { FlatList, TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native'
import DefaultContactLayout from './DefaultContactLayout'
import UpdateContactLayout from './UpdateContactLayout'
import { FontAwesome } from '@expo/vector-icons'; 

export default function ContactLists({contacts, isfavorite, icon, toggleContent, toggleFavorite, updateFunction, doneFunction, deleteFunction, setName, setNumber, setEmail }) {
	return (
		<FlatList
			data={contacts}
			renderItem={({ item }) => (
				// check if contact is a favorite - if true add to the list
				item.favorite
					? <TouchableOpacity
						// Let user hide/show more info about contact - default is false(hidden)
						onPress={() => toggleContent(item.id)}>
						<View style={styles.section}>
							{item.displayContent
								? <View style={styles.article}>
									{item.picture
										? <Image
											source={item.picture}
											style={styles.picture}
										></Image>
										: <FontAwesome name="user-circle-o" size={100} color="black" />}
									{/* let user update contact info - show input fields in click - default is false */}
									{!item.updatePressed
										? <DefaultContactLayout
											toggleFavorite={toggleFavorite}
											updateFunction={updateFunction}
											deleteFunction={deleteFunction}
											item={item}
											favorite={icon} />
										: <UpdateContactLayout
											setName={setName}
											setNumber={setNumber}
											setEmail={setEmail}
											item={item}
											doneFunction={doneFunction}
											updateFunction={updateFunction}
											deleteFunction={deleteFunction} />
									}
								</View>
								// if contact info is hidden, only show contact name
								: <Text style={styles.text}>{item.name}</Text>
							}
						</View>
					</TouchableOpacity>
					: null
			)}
		>
		</FlatList>
	)
}

const styles = StyleSheet.create({

section: {
	flexDirection: 'row',
	columnGap: 40,
	marginVertical: 10,
	backgroundColor: 'white',
	width: '100%',
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

text: {
	fontFamily: 'Montserrat-Regular',
	marginVertical: 10,
},

picture: {
	width: 100,
	height: 100,
	borderRadius: 50,
}

})

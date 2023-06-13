import { useCallback, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, TextInput, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import * as SplashScreen from 'expo-splash-screen'
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import AddContactButton from './assets/components/AddContactButton';
import AddContactSection from './assets/components/AddContactSection';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [pressed, setPressed] = useState(false)

  const [name, setName] = useState('')
  const [number, setNumber] = useState(null)
  const [email, setEmail] = useState('')

  const [contacts, setContacts] = useState([
    { id: 1, name: 'Jane Doe', number: '070 123 45 67', email: 'jane.doe@somemail.com', picture: require('./assets/images/michael-dam-mEZ3PoFGs_k-unsplash.jpg'), displayContent: false, favorite: true, updatePressed: false },
    { id: 2, name: 'John Doe', number: '070 123 45 67', email: 'john.doe@somemail.com', picture: require('./assets/images/sohaib-al-kharsa-agQ0G6djwU4-unsplash.jpg'), displayContent: false, favorite: true, updatePressed: false },
    { id: 3, name: 'Jamal Doe', number: '070 123 45 67', email: 'jamal.doe@somemail.com', picture: require('./assets/images/gift-habeshaw-KBv5dEN3QtY-unsplash.jpg'), displayContent: false, favorite: false, updatePressed: false },
    { id: 4, name: 'Jennifer Doe', number: '070 123 45 67', email: 'jennifer.doe@somemail.com', picture: require('./assets/images/kevin-hellhake-7BbHyuAf1sg-unsplash.jpg'), displayContent: false, favorite: false, updatePressed: false },
    { id: 5, name: 'Janne Doe', number: '070 123 45 67', email: 'janne.doe@somemail.com', picture: require('./assets/images/vince-fleming-j3lf-Jn6deo-unsplash.jpg'), displayContent: false, favorite: false, updatePressed: false },
    { id: 6, name: 'Juna Doe', number: '070 123 45 67', email: 'juna.doe@somemail.com', picture: require('./assets/images/le-minh-phuong-jGZITdFhmts-unsplash.jpg'), displayContent: false, favorite: false, updatePressed: false },
  ])

  const toggleContent = (id) => {
    setContacts(
      contacts.map(contact => {
        if (contact.id == id) {
          return {
            ...contact,
            displayContent: !contact.displayContent,
            updatePressed: false
          }
        }
        return contact;
      })
    )
  }

  const toggleFavorite = (id) => {
    setContacts(
      contacts.map(contact => {
        if (contact.id == id) {
          return {
            ...contact,
            favorite: !contact.favorite
          }
        }
        return contact;
      })
    )
  }



  const updateFunction = (id) => {
    setContacts(
      contacts.map(contact => {
        if (contact.id == id) {
          return {
            ...contact,
            updatePressed: !contact.updatePressed
          }
        }
        return contact;
      })
    )
  }

  const doneFunction = (id) => {
    setContacts(contacts.map((contact) => {
      if (contact.id === id) {
        return {
          ...contact,
          name: name !== '' ? name : contact.name,
          number: number !== null ? number : contact.number,
          email: email !== '' ? email : contact.email,
          updatePressed: false,
        };
      }
      setName('')
      setNumber(null)
      setEmail('')

      return contact;
    })
    );
  };

  const deleterFunction = (id) => {
    let newContacts = contacts.filter((contact => contact.id != id))
    setContacts(newContacts)
  }

  const [fontsLoaded] = useFonts({
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf')
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <LinearGradient
        colors={['#F3EFEB', '#6CB8A6']}
        style={styles.linearGradient}
      >
        <ScrollView style={styles.scrollView}>
          <View style={styles.content}>
            <View style={styles.wrapper}>
              <FontAwesome5 name="users" size={24} color="black" />
              <Text style={styles.h1}>KONTAKTER</Text>
            </View>
            {!pressed
              ? <AddContactButton setPressed={setPressed} />
              : <AddContactSection
                setPressed={setPressed} 
                name={name}
                setName={setName} 
                number={number}
                setNumber={setNumber}
                email={email}
                setEmail={setEmail} 
                contacts={contacts} />}
            <View style={styles.wrapper2}>
              <Text style={styles.h2}>Favoriter</Text>
              <FlatList
                data={contacts}
                renderItem={({ item }) => (
                  item.favorite
                    ? <TouchableOpacity
                      onPress={() => toggleContent(item.id)}>
                      <View style={styles.section2}>
                        {
                          item.displayContent
                            ? <View style={styles.article}>
                              {item.picture
                                ? <Image
                                  source={item.picture}
                                  style={styles.picture}
                                ></Image>
                                : <FontAwesome name="user-circle-o" size={100} color="black" />}
                              {!item.updatePressed
                                ? <View>
                                  <View>
                                    <Text style={styles.text}>{item.name}</Text>
                                    <View>
                                      <Text style={styles.text}>{item.number}</Text>
                                    </View>
                                    <View >
                                      <Text style={styles.text}>{item.email}</Text>
                                    </View>
                                  </View>
                                  <View style={styles.iconWrapper}>
                                    <Pressable onPress={() => toggleFavorite(item.id)}>
                                      <Ionicons name="star-sharp" size={24} color="black" />
                                    </Pressable>
                                    <Pressable onPress={() => updateFunction(item.id)}>
                                      <SimpleLineIcons name="pencil" size={20} color="black" />
                                    </Pressable>
                                    <Pressable onPress={() => deleterFunction(item.id)}>
                                      <FontAwesome name="trash-o" size={24} color="black" />
                                    </Pressable>
                                  </View>
                                </View>
                                : <View>
                                  <View>
                                    <TextInput style={styles.text} onChangeText={(value) => setName(value)}>{item.name}</TextInput>
                                    <View style={styles.article}>
                                      <TextInput style={styles.text} keyboardType='numeric' onChangeText={(value) => setNumber(value)}>{item.number}</TextInput>
                                    </View>
                                    <View style={styles.article}>
                                      <TextInput style={styles.text} onChangeText={(value) => setEmail(value)}>{item.email}</TextInput>
                                    </View>
                                  </View>
                                  <View style={styles.iconWrapper}>
                                    <Pressable onPress={() => doneFunction(item.id)}>
                                      <Ionicons name="checkmark-circle-outline" size={24} color="black" />
                                    </Pressable>
                                    <Ionicons name="close-circle-outline" size={24} color="black" />
                                    <Pressable onPress={() => deleterFunction(item.id)}>
                                      <FontAwesome name="trash-o" size={24} color="black" />
                                    </Pressable>
                                  </View>
                                </View>
                              }
                            </View>
                            : <Text style={styles.text}>{item.name}</Text>
                        }
                      </View>
                    </TouchableOpacity>
                    : null
                )}
              >
              </FlatList>
            </View>
            <View style={styles.wrapper2}>
              <Text style={styles.h2}>Nyligen tillagda</Text>
              <FlatList
                data={contacts}
                style={styles.list}
                renderItem={({ item }) => (
                  !item.favorite
                    ? <TouchableOpacity
                      onPress={() => toggleContent(item.id)}>
                      <View style={styles.section2}>
                        {
                          item.displayContent
                            ? <View style={styles.article}>
                              {item.picture
                                ? <Image
                                  source={item.picture}
                                  style={styles.picture}
                                ></Image>
                                : <FontAwesome name="user-circle-o" size={100} color="black" />}
                              {!item.updatePressed
                                ? <View>
                                  <View>
                                    <Text style={styles.text}>{item.name}</Text>
                                    <View>
                                      <Text style={styles.text}>{item.number}</Text>
                                    </View>
                                    <View >
                                      <Text style={styles.text}>{item.email}</Text>
                                    </View>
                                  </View>
                                  <View style={styles.iconWrapper}>
                                    <Pressable onPress={() => toggleFavorite(item.id)}>
                                      <Ionicons name="star-outline" size={24} color="black" />
                                    </Pressable>
                                    <Pressable onPress={() => updateFunction(item.id)}>
                                      <SimpleLineIcons name="pencil" size={20} color="black" />
                                    </Pressable>
                                    <Pressable onPress={() => deleterFunction(item.id)}>
                                      <FontAwesome name="trash-o" size={24} color="black" />
                                    </Pressable>
                                  </View>
                                </View>
                                : <View>
                                  <View>
                                    <TextInput style={styles.text} onChangeText={(value) => setName(value)}>{item.name}</TextInput>
                                    <View style={styles.article}>
                                      <TextInput style={styles.text} keyboardType='numeric' onChangeText={(value) => setNumber(value)}>{item.number}</TextInput>
                                    </View>
                                    <View style={styles.article}>
                                      <TextInput style={styles.text} onChangeText={(value) => setEmail(value)}>{item.email}</TextInput>
                                    </View>
                                  </View>
                                  <View style={styles.iconWrapper}>
                                    <Pressable onPress={() => doneFunction(item.id)}>
                                      <Ionicons name="checkmark-circle-outline" size={24} color="black" />
                                    </Pressable>
                                    <Ionicons name="close-circle-outline" size={24} color="black" />
                                    <Pressable onPress={() => deleterFunction(item.id)}>
                                      <FontAwesome name="trash-o" size={24} color="black" />
                                    </Pressable>
                                  </View>
                                </View>
                              }
                            </View>
                            : <Text style={styles.text}>{item.name}</Text>
                        }
                      </View>
                    </TouchableOpacity>
                    : null
                )}
              >
              </FlatList>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    alignItems: 'center'
  },

  wrapper: {
    flexDirection: 'row',
    columnGap: 20,
    marginTop: 50,
    marginBottom: 20
  },

  wrapper3: {
    backgroundColor: 'blue'
  },

  iconWrapper: {
    flexDirection: 'row',
    rowGap: 10,
    columnGap: '30',
    marginBottom: 10
  },

  h1: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
  },

  h2: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    margin: 20,
  },

  linearGradient: {
    flex: 1,
  },

  section: {
    flex: 1,
    flexDirection: 'row',
    columnGap: 40,
    marginVertical: 10,
    backgroundColor: 'white',
    width: '100%',
    height: 80,
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

  section2: {
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

  article: {
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center'
  },

  input: {
    fontFamily: 'Montserrat-Regular',
    borderBottomColor: 'black',
  },

  text: {
    fontFamily: 'Montserrat-Regular',
    marginVertical: 10,
  },

  wrapper2: {
    flex: 1,
    width: '90%',
  },

  picture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  }

});

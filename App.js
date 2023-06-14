import { useCallback, useState } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import * as SplashScreen from 'expo-splash-screen'
import * as ImagePicker from 'expo-image-picker'
import { FontAwesome } from '@expo/vector-icons';
import AddContactButton from './assets/components/AddContactButton';
import AddContactSection from './assets/components/AddContactSection';
import Header from './assets/components/Header';
import DefaultContactLayout from './assets/components/DefaultContactLayout';
import UpdateContactLayout from './assets/components/UpdateContactLayout';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [pressed, setPressed] = useState(false)

  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')
  const [image, setImage] = useState(null)

  const [contacts, setContacts] = useState([
    { id: 1, name: 'Jane Doe', number: '070 123 45 67', email: 'jane.doe@somemail.com', picture: require('./assets/images/michael-dam-mEZ3PoFGs_k-unsplash.jpg'), displayContent: false, favorite: true, updatePressed: false },
    { id: 2, name: 'John Doe', number: '070 123 45 67', email: 'john.doe@somemail.com', picture: require('./assets/images/sohaib-al-kharsa-agQ0G6djwU4-unsplash.jpg'), displayContent: false, favorite: true, updatePressed: false },
    { id: 3, name: 'Jamal Doe', number: '070 123 45 67', email: 'jamal.doe@somemail.com', picture: require('./assets/images/gift-habeshaw-KBv5dEN3QtY-unsplash.jpg'), displayContent: false, favorite: false, updatePressed: false },
    { id: 4, name: 'Jennifer Doe', number: '070 123 45 67', email: 'jennifer.doe@somemail.com', picture: require('./assets/images/kevin-hellhake-7BbHyuAf1sg-unsplash.jpg'), displayContent: false, favorite: false, updatePressed: false },
    { id: 5, name: 'Janne Doe', number: '070 123 45 67', email: 'janne.doe@somemail.com', picture: require('./assets/images/vince-fleming-j3lf-Jn6deo-unsplash.jpg'), displayContent: false, favorite: false, updatePressed: false },
    { id: 6, name: 'Juna Doe', number: '070 123 45 67', email: 'juna.doe@somemail.com', picture: require('./assets/images/le-minh-phuong-jGZITdFhmts-unsplash.jpg'), displayContent: false, favorite: false, updatePressed: false },
  ])

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images
    })

    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

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
          number: number !== '' ? number : contact.number,
          email: email !== '' ? email : contact.email,
          updatePressed: false,
        }
      }
      setName('')
      setNumber('')
      setEmail('')

      return contact;
    })
    )
  }

  const deleteFunction = (id) => {
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
        <View style={styles.headerWrapper}>
          <Header />
          {/* check if add-button is clicked - default is set to false */}
          {!pressed
            //show only button if not clicked
            ? <AddContactButton setPressed={setPressed} />
            // if clicked show add section with input fields and buttons to add or cancel
            : <AddContactSection
              setPressed={setPressed}
              name={name}
              setName={setName}
              number={number}
              setNumber={setNumber}
              email={email}
              setEmail={setEmail}
              setImage={setImage}
              image={image}
              pickImage={pickImage}
              contacts={contacts} />}
        </View>
        <FlatList
          data={[1]}
          renderItem={() => (
        <View style={styles.content}>
          <View style={styles.wrapper2}>
            <Text style={styles.h2}>Favoriter</Text>
            {/* render a list of favorite-contacts */}
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
                              favorite="star-sharp" />
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
                    <View style={styles.section}>
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
                              ? <DefaultContactLayout
                                toggleFavorite={toggleFavorite}
                                updateFunction={updateFunction}
                                deleteFunction={deleteFunction}
                                item={item}
                                favorite='star-outline' />
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
            )}
            />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  linearGradient: {
    flex: 1,
  },

  content: {
    alignItems: 'center'
  },

  headerWrapper: {
    alignItems: 'center'
  },

  wrapper: {
    flexDirection: 'row',
    columnGap: 20,
    marginTop: 50,
    marginBottom: 20
  },

  wrapper2: {
    flex: 1,
    width: '90%',
  },

  iconWrapper: {
    flexDirection: 'row',
    rowGap: 10,
    columnGap: '30',
    marginBottom: 10
  },

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

  article: {
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center'
  },

  h2: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    margin: 20,
  },

  input: {
    fontFamily: 'Montserrat-Regular',
    borderBottomColor: 'black',
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

});

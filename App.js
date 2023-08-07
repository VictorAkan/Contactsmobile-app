import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SectionList,
  TouchableOpacity,
} from "react-native";
import { Constants } from "expo";
import { ContactsList } from "./components/ContactsList";
import { AddContactForm } from "./components/AddContactForm";

import contacts, {compareNames} from "./datas";
import { useState } from "react";

export default function App() {
  const [showContacts, setShowContacts] = useState(false);
  const [phoneContacts, setPhoneContacts] = useState(contacts);
  const [showForm, setShowForm] = useState(false);

  const toggleContacts = () => {
    setShowContacts(!showContacts);
  };

  const addContact = newContact => {
    setPhoneContacts([
      ...phoneContacts,
      newContact
    ])
    setShowForm(false)
  }

  const toggleForm = () => {
    setShowForm(!showForm)
  }

  if (showForm) return <AddContactForm onSubmit={addContact} />
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={toggleContacts}
        activeOpacity={0.9}
      >
        <Text style={{color: 'white'}}>Toggle contacts</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={toggleForm}
        activeOpacity={0.9}
      >
        <Text style={{color: 'white'}}>Add Contacts</Text>
      </TouchableOpacity>
        {showContacts && <ContactsList 
          phoneContacts={phoneContacts}
        />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  button: {
    width: "85%",
    alignSelf: 'center',
    backgroundColor: "grey",
    height: 50,
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
});

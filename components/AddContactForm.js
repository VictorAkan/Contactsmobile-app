import {
    TextInput,
    Text,
    Platform,
    KeyboardAvoidingView,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight,
        justifyContent: 'center',
        padding: 10,
    },
    button: {
        width: "85%",
        alignSelf: "center",
        backgroundColor: "grey",
        height: 50,
        padding: 15,
        borderRadius: 10,
        marginTop: 10,
        color: 'white',
    },
    input: {
        padding: 5,
        marginBottom: 10,
        borderColor: "grey",
        borderRadius: 10,
        borderWidth: 1,
    },
});

export const AddContactForm = ({ onSubmit }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);

    const validateForm = () => {
        const names = name.split(' ')
        if (+phone >= 0 && +phone.length === 10 && names.length >= 2 && names[1]) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    };

    useEffect(() => {
        validateForm();
    }, [name, phone])

    const handleSubmit = () => {
        onSubmit({
            name: name,
            phone: phone,
        });
    };

    return (
        <KeyboardAvoidingView behavior={
            Platform.OS === 'ios' ? 'padding' : 'height'
        } style={styles.container}>
            <TextInput
                onChangeText={(newText) => {
                    setName(newText);
                }}
                style={styles.input}
                value={name}
                placeholder="Name"
            />
            <TextInput
                onChangeText={(newPhone) => {
                    if (+newPhone >= 0) {
                        setPhone(newPhone.trim());
                    } else {
                        setPhone("");
                        alert("Only numeric values for numbers allowed");
                    }
                }}
                style={styles.input}
                value={phone}
                placeholder="Phone"
                keyboardType="numeric"
                maxLength={10}
            />
            <TouchableOpacity
                style={[styles.button, { backgroundColor: isFormValid ? 'black' : 'gray' }]}
                onPress={handleSubmit}
                disabled={!isFormValid}
                activeOpacity={0.9}
            >
                <Text style={{ color: "white" }}>Add Contact</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
};

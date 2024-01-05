import { useState } from "react";
import { StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Text } from "react-native";
import colors from "../colors";

const NewPayeeScreen = ({navigation}) => {
    navigation.setOptions({
        title: "New Payee"
    })
    const [ accountName, setAccountName ] = useState("");
    const [ BSB, setBSB ] = useState(""); 
    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={text => setAccountName(text)}
                value={accountName}
                placeholder="Enter Account Name"
            />
            <TextInput
                style={styles.input}
                onChangeText={text => setBSB(text)}
                value={BSB}
                placeholder="Enter BSB"
                keyboardType="numeric"
            />
            
            <TouchableOpacity style={styles.button}>
                <Text>Next</Text>
            </TouchableOpacity>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: colors.primary,
        marginTop: 40,
        marginHorizontal: 20,
    },
    button: {
        borderWidth: 2,
        borderColor: colors.button,
        borderRadius: 10,
        justifyContent: 'center',
        padding: 10,
        alignItems: 'center',
        marginTop: 40,
        marginHorizontal: 20,
    }
})

export default NewPayeeScreen;
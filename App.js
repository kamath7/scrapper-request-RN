import React, { useState, Component } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import { sendGridEmail } from "react-native-sendgrid";
import {SENDGRID_API_KEY} from 'react-native-dotenv';



export default function App() {
  const [url, setUrl] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Provide your URL Accamma!</Text>
      <View style={styles.input}>
        <TextInput
          style={styles.input}
          placeholder="Enter URL"
          autoCapitalize="none"
          placeholderTextColor="black"
          onChangeText={url => setUrl(url)}
        />
        <View>
          <Button
            title="Send data"
            onPress={() => {
              sendGridEmail(
                SENDGRID_API_KEY,
                `adithyakamath96@gmail.com`,
                `adithyakamath96@gmail.com`,
                `New request to scrape`,
                url
              )
                .then(() => {
                  console.log('Success!');
                  Alert.alert("URL Provided", url, [{ text: `Okay`}]);
                })
                .catch(err => {
                  console.log(err);
                });

            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 50,
    padding: 20,
    alignItems: "center",
    alignContent: "center"
  },
  input: {
    width: 350,
    marginTop: 69,
    alignContent: "center",
    justifyContent: "center"
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  }
});

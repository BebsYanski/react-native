import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Perform login logic here
    Alert.alert("Login Success");
    router.push("/(tabs)/home"); // Navigate to home after login or router.replace to prevent going back
  };
  return (
    <View style={{ padding: 20, flex: 1, justifyContent: "center" }}>
      {/* <Text>Login Screen</Text> */}
      <View>
        <Text>Email:</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          style={{
            height: 40,
            borderWidth: 1,
            borderColor: "gray",
            marginBottom: 10,
            padding: 5,
          }}
        />
      </View>
      <View>
        <Text>Password:</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry
          style={{
            height: 40,
            borderWidth: 1,
            borderColor: "gray",
            marginBottom: 10,
            padding: 5,
          }}
        />
      </View>
      <View>
        <Button title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
};

export default Login;

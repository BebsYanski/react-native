import React, { useState } from "react";
import { Button, Text, View } from "react-native";

export default function States() {
  const [count, setCount] = useState(0);

  return (
    <View style={{ padding: 50 }}>
      <Text>You clicked {count} times</Text>
      <Button title="Click me" onPress={() => setCount(count + 1)} />
    </View>
  );
}

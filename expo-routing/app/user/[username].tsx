import axios from "axios";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

export default function UserDetails() {
  const { username } = useLocalSearchParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [username]);

  if (loading)
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="blue" />
        <Text>Loading profile...</Text>
      </View>
    );

  if (!user)
    return (
      <View style={styles.center}>
        <Text>❌ User not found</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
      <Text style={styles.name}>{user.name || user.login}</Text>
      <Text style={styles.info}>Followers: {user.followers}</Text>
      <Text style={styles.info}>Following: {user.following}</Text>
      <Text style={styles.info}>Public Repos: {user.public_repos}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  container: { flex: 1, alignItems: "center", padding: 20 },
  avatar: { width: 120, height: 120, borderRadius: 60 },
  name: { fontSize: 24, fontWeight: "bold", marginVertical: 10 },
  info: { fontSize: 16, color: "#555" },
});

import { Link } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function UserCard({ user }) {
  return (
    <Link href={`/user/${user.login}`} asChild>
      <TouchableOpacity style={styles.card}>
        <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
        <View>
          <Text style={styles.username}>{user.login}</Text>
          <Text style={styles.link}>{user.html_url}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
  },
  avatar: { width: 60, height: 60, borderRadius: 30, marginRight: 15 },
  username: { fontSize: 16, fontWeight: "bold" },
  link: { color: "gray", fontSize: 12 },
});

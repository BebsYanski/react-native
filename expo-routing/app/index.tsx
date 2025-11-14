// import { Link, router } from "expo-router";
// import { Button, Text, View } from "react-native";

// export default function Index() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
//         Welcome!
//       </Text>

//       <Button title="Go to Login" onPress={() => router.push("/login")} />
//       <Button
//         title="Go to settings"
//         onPress={() =>
//           router.push({ pathname: "/settings", params: { name: "Lewiston" } })
//         }
//       />
//       <Link href="/profiles">
//         <Text>Go to Profiles</Text>
//         {/* <Button title="Go to Profiles" /> */}
//       </Link>
//       <Button title="Go to drawer" onPress={() => router.push("/(drawer)")} />
//       {/* router.push("/(tabs)/home") */}
//     </View>
//   );
// }

import axios from "axios";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import UserCard from "./components/UserCard";

export default function HomeScreen() {
  const [query, setQuery] = useState("react");
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  /*  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, []); */

  /* useEffect(() => {
    setTimeout(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => setPosts(res.data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }, 5000);
  }, []); */

  useEffect(() => {
    fetchUsers(true);
  }, [query]);

  const fetchUsers = async (isNewSearch = false) => {
    if (loading) return;
    setLoading(true);

    try {
      const res = await axios.get(
        `https://api.github.com/search/users?q=${query}&page=${
          isNewSearch ? 1 : page
        }&per_page=10`
      );

      const newUsers = res.data.items || [];
      if (isNewSearch) {
        setUsers(newUsers);
        setPage(2);
      } else {
        setUsers((prev) => [...prev, ...newUsers]);
        setPage((prev) => prev + 1);
      }

      setHasMore(newUsers.length > 0);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (text) => {
    setQuery(text.trim() || "react");
  };

  // if (loading) {
  //   return <ActivityIndicator size="large" color="blue" />;
  // }

  if (error) {
    return <Text>Something went wrong...</Text>;
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search GitHub Users..."
        placeholderTextColor="#888"
        value={query}
        onChangeText={handleSearch}
        style={styles.search}
      />

      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <UserCard user={item} />}
        onEndReached={() => {
          if (hasMore && !loading) fetchUsers();
        }}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading ? <ActivityIndicator size="large" color="blue" /> : null
        }
      />

      {/*  <FlatList
        data={posts}
        renderItem={({ item }) => <PostCard post={item} />}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f7f7f7" },
  search: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ccc",
    backgroundColor: "#fff",
  },
});

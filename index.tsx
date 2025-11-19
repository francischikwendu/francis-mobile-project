// import { Text, View } from "react-native";

// export default function Index() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Text>Edit app/index.tsx to edit this screen</Text>
//     </View>
//   );
// }
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function SettingsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.sub}>Manage your app preferences</Text>

      {/* Preferences */}
      <View style={styles.box}>
        <Text style={styles.section}>Preferences</Text>

        <Pressable style={styles.row}>
          <View style={styles.rowLeft}>
            <Ionicons name="moon-outline" size={20} />
            <Text style={styles.text}>Dark Mode</Text>
          </View>
        </Pressable>

        <Pressable style={styles.row}>
          <View style={styles.rowLeft}>
            <Ionicons name="notifications-outline" size={20} />
            <Text style={styles.text}>Push Notifications</Text>
          </View>
        </Pressable>

        <Pressable style={styles.row}>
          <View style={styles.rowLeft}>
            <Ionicons name="volume-medium-outline" size={20} />
            <Text style={styles.text}>Sound Effects</Text>
          </View>
        </Pressable>
      </View>

      {/* Privacy */}
      <View style={styles.box}>
        <Text style={styles.section}>Privacy & Security</Text>

        <Pressable style={styles.row}>
          <View style={styles.rowLeft}>
            <Ionicons name="shield-outline" size={20} />
            <Text style={styles.text}>Two-Factor Auth</Text>
          </View>
        </Pressable>

        <Pressable style={styles.row}>
          <View style={styles.rowLeft}>
            <Ionicons name="location-outline" size={20} />
            <Text style={styles.text}>Location Services</Text>
          </View>
        </Pressable>
      </View>

      <Text style={styles.footer}>App Version 1.0.0</Text>

      {/* Navigation Example using Link */}
      <Link href="/" style={styles.backBtn}>
        <Text style={{ color: "white" }}>Go Back Home</Text>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f2f2f2",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  sub: {
    color: "gray",
    marginBottom: 25,
  },
  box: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 25,
  },
  section: {
    fontWeight: "bold",
    marginBottom: 15,
    fontSize: 16,
  },
  row: {
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderColor: "#ccc",
  },
  rowLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontSize: 16,
  },
  footer: {
    textAlign: "center",
    marginTop: 40,
    color: "gray",
  },
  backBtn: {
    marginTop: 30,
    backgroundColor: "black",
    padding: 12,
    borderRadius: 8,
    textAlign: "center",
  },
});
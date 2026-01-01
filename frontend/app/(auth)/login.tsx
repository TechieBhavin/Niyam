import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";
import React from "react";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Welcome back</Text>
        <Text style={styles.subtitle}>
          Log in to continue your journey with Niyam
        </Text>
      </View>

      {/* Form */}
      <View style={styles.form}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#9CA3AF"
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="#9CA3AF"
          style={styles.input}
          secureTextEntry
        />

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Log In</Text>
        </Pressable>

        {/* Footer */}
        {/* <Pressable onPress={() => router.push("/(auth)/signup")}> */}
          <Text style={styles.footerText}>
            Don’t have an account? <Text style={styles.link}>Sign up</Text>
          </Text>
        {/* </Pressable> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },

  header: {
    marginBottom: 40,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    lineHeight: 22,
  },

  form: {
    gap: 16,
  },

  input: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#111827",
    backgroundColor: "#F9FAFB",
  },

  button: {
    backgroundColor: "#111827",
    paddingVertical: 16,
    borderRadius: 14,
    marginTop: 8,
  },

  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },

  footerText: {
    textAlign: "center",
    marginTop: 24,
    fontSize: 14,
    color: "#6B7280",
  },

  link: {
    color: "#111827",
    fontWeight: "600",
  },
});

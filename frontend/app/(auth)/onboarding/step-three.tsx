import { Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import OnboardingLayout from "../../../components/OnboardingLayout";
import React from "react";

export default function OnboardingThree() {
  const router = useRouter();

  return (
    <OnboardingLayout
      title="Build consistency"
      subtitle="Tasks, reminders, streaks, and growth — all in one place."
    >
      <Pressable
       onPress={() => router.replace("/(auth)/login")}
               style={styles.button}
      >
          <Text style={styles.buttonText}>Get Started</Text>
      </Pressable>
    </OnboardingLayout>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#111827",
    paddingVertical: 16,
    borderRadius: 14,
  },
  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
});



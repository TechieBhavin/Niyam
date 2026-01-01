import { Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import OnboardingLayout from "../../../components/OnboardingLayout";
import React from "react";

export default function OnboardingOne() {
  const router = useRouter();

  return (
    <OnboardingLayout
      title="Welcome to Niyam"
      subtitle="A mindful way to manage your thoughts, tasks, and growth."
    >
      <Pressable
        onPress={() => router.push("/(auth)/onboarding/step-two")}
        style={styles.button}
      >
           <Text style={styles.buttonText}>Continue</Text>
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

import { Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import OnboardingLayout from "../../../components/OnboardingLayout";
import React from "react";

export default function OnboardingTwo() {
  const router = useRouter();

  return (
    <OnboardingLayout
      title="Write. Reflect. Understand."
      subtitle="Daily journaling with mood tracking and meaningful insights."
    >
      <Pressable
   onPress={() => router.push("/(auth)/onboarding/step-three")}
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

import { Stack } from 'expo-router';
import React from 'react';

/**
 * Layout for the onboarding flow
 * Controls screen transitions and animations for the onboarding experience
 */
function OnboardingLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        contentStyle: { backgroundColor: '#FAFAFE' },
      }}
    >
      <Stack.Screen name="welcome" />
      <Stack.Screen name="language-selection" />
    </Stack>
  );
}

export default OnboardingLayout;

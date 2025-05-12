import { Redirect } from 'expo-router';

/**
 * Entry point for the onboarding flow
 * Automatically redirects to the welcome screen
 */
export default function OnboardingIndex() {
  return <Redirect href="/(onboarding)/welcome" />;
}

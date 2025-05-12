import React from 'react';
import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Button, H1, Paragraph, View, YStack } from 'tamagui';

import MascotImage from '../../components/MascotImage';
import { ThemedView } from '../../components/ThemedView';

/**
 * Welcome screen of the onboarding flow
 * First screen users see when they open the app for the first time
 */
function Welcome() {
  return (
    <ThemedView style={styles.container}>
      <YStack space="$6" alignItems="center" justifyContent="center" flex={1} padding="$4">
        {/* Mascot at the top */}
        <MascotImage 
          width={200} 
          height={200} 
          containerStyle={styles.mascotContainer}
        />

        {/* Welcome title and intro message */}
        <YStack space="$4" alignItems="center" maxWidth={600}>
          <H1 textAlign="center" color="$primary500">Welcome to FlashWords</H1>
          
          <Paragraph textAlign="center" size="$5">
            Your journey to mastering new vocabulary starts here. 
            Learn effectively with smart flashcards and spaced repetition.
          </Paragraph>
        </YStack>
        
        {/* Spacer */}
        <View flex={1} />

        {/* Get Started button */}
        <Link href="/(onboarding)/language-selection" asChild>
          <Button 
            size="$6" 
            theme="active" 
            backgroundColor="$primary500"
            width="80%" 
            height={56}
            borderRadius="$6"
          >
            Get Started
          </Button>
        </Link>
      </YStack>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 40,
  },
  mascotContainer: {
    marginTop: 40,
  },
});

export default Welcome;

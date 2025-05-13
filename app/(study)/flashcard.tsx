import React, { useState } from 'react';
import { StyleSheet, Dimensions, Pressable } from 'react-native';
import { 
  Button, 
  Text, 
  XStack, 
  YStack, 
  Card,
  Theme,
  H1,
  H3,
  Paragraph,
  View
} from 'tamagui';
import { SafeAreaView } from '@/components/SafeAreaView';
import { ArrowLeft, Check, HelpCircle, X } from 'lucide-react-native';
import { useRouter } from 'expo-router';

const { height, width } = Dimensions.get('window');

/**
 * FlashcardStudyScreen - The main screen for studying flashcards
 * Used in Learn, Review, and Test modes
 * 
 * Displays a flashcard with front and back sides and controls for user responses
 */
export default function FlashcardStudyScreen() {
  const router = useRouter();
  const [flipped, setFlipped] = useState(false);
  
  // Toggle card flip state
  const handleFlip = () => {
    console.log('Flip triggered, current state:', flipped);
    setFlipped(prevState => !prevState);
  };
  
  // Handle navigation back to previous screen
  const handleBack = () => {
    router.back();
  };
  
  // Placeholder handlers for the response buttons
  const handleResponse = (response: 'know' | 'unsure' | 'dontknow') => {
    console.log(`User response: ${response}`);
    // Reset to front side for next card
    setFlipped(false);
    // Actual logic for processing response would go here
  };

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      {/* Header */}
      <XStack 
        paddingHorizontal="$4"
        paddingVertical="$2"
        alignItems="center"
        justifyContent="space-between"
      >
        <Button 
          size="$3" 
          chromeless
          onPress={handleBack}
          icon={ArrowLeft}
        />
        <Text fontWeight="500">1/30</Text>
        <View width={24} /> {/* Empty view for balanced spacing */}
      </XStack>
      
      {/* Debug indicator */}
      <Text style={styles.debugText}>Card state: {flipped ? 'Back' : 'Front'}</Text>
      
      {/* Flashcard Area - occupies ~85% of screen height */}
      <YStack 
        style={styles.flashcardContainer}
        alignItems="center"
        justifyContent="center"
      >
        {/* Left swipe hint indicator */}
        <View style={styles.swipeHintLeft}>
          <Text fontSize={20} opacity={0.3}>←</Text>
        </View>
        
        {/* Right swipe hint indicator */}
        <View style={styles.swipeHintRight}>
          <Text fontSize={20} opacity={0.3}>→</Text>
        </View>
        
        {/* The flashcard itself - front or back based on flipped state */}
        <Pressable 
          onPress={handleFlip} 
          style={styles.cardTouchable}
          hitSlop={10}  // Increase touch area
          android_ripple={{ color: 'rgba(0,0,0,0.1)' }} // Visual feedback on Android
        >
          <Theme name="blue">
            <Card
              elevate
              bordered
              size="$8"
              width={width * 0.85}
              height={height * 0.55}
              scale={1}
              pressStyle={{ scale: 0.97 }}
              style={styles.card}
            >
              {!flipped ? (
                // Front Side - Word to learn
                <YStack flex={1} padding="$6" alignItems="center" justifyContent="center">
                  <H1 
                    textAlign="center"
                    marginBottom="$4"
                    color="$blue11"
                  >
                    Bonjour
                  </H1>
                  <Button
                    theme="green"
                    size="$3"
                    marginTop="$4"
                    onPress={handleFlip}
                  >
                    Flip Card
                  </Button>
                </YStack>
              ) : (
                // Back Side - Translation & example
                <YStack flex={1} padding="$6" alignItems="center" justifyContent="space-between">
                  <YStack alignItems="center" space="$4">
                    <H3 color="$blue10">Translation</H3>
                    <Text fontWeight="bold" fontSize={22}>Hello</Text>
                  </YStack>
                  
                  <YStack alignItems="center" space="$2">
                    <H3 color="$blue10">Example</H3>
                    <Paragraph textAlign="center">
                      Bonjour, comment ça va?
                    </Paragraph>
                    <Paragraph textAlign="center" opacity={0.7}>
                      Hello, how are you?
                    </Paragraph>
                  </YStack>
                  
                  <Button
                    theme="green"
                    size="$3"
                    marginTop="$4"
                    onPress={handleFlip}
                  >
                    Flip Back
                  </Button>
                </YStack>
              )}
            </Card>
          </Theme>
        </Pressable>
      </YStack>
      
      {/* Response Buttons */}
      <XStack 
        alignItems="center" 
        justifyContent="space-evenly"
        paddingHorizontal="$4"
        marginBottom="$4"
      >
        <Theme name="red">
          <Button
            size="$4"
            circular
            themeInverse
            icon={X}
            onPress={() => handleResponse('dontknow')}
          />
        </Theme>
        
        <Theme name="yellow">
          <Button
            size="$4"
            circular
            themeInverse
            icon={HelpCircle}
            onPress={() => handleResponse('unsure')}
          />
        </Theme>
        
        <Theme name="green">
          <Button
            size="$4"
            circular
            themeInverse
            icon={Check}
            onPress={() => handleResponse('know')}
          />
        </Theme>
      </XStack>
      
      {/* Button Labels */}
      <XStack 
        alignItems="center" 
        justifyContent="space-evenly"
        paddingHorizontal="$4"
        marginBottom="$6"
      >
        <Text fontSize={14} textAlign="center" style={{width: 80}}>
          Don't know
        </Text>
        <Text fontSize={14} textAlign="center" style={{width: 80}}>
          Unsure
        </Text>
        <Text fontSize={14} textAlign="center" style={{width: 80}}>
          Know
        </Text>
      </XStack>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  debugText: {
    textAlign: 'center',
    padding: 8,
    backgroundColor: '#f0f0f0',
    marginTop: 8,
  },
  flashcardContainer: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTouchable: {
    width: width * 0.85,
    height: height * 0.55,
  },
  card: {
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
  },
  swipeHintLeft: {
    position: 'absolute',
    left: 10,
    height: height * 0.55,
    justifyContent: 'center',
    zIndex: 1,
  },
  swipeHintRight: {
    position: 'absolute',
    right: 10,
    height: height * 0.55,
    justifyContent: 'center',
    zIndex: 1,
  }
});

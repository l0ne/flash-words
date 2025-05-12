import React, { useState } from 'react';
import { StyleSheet, ScrollView, Modal, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { Link, router } from 'expo-router';
import { Button, H1, H2, Paragraph, View, YStack, XStack, Card, Separator, Text } from 'tamagui';

import MascotImage from '../../components/MascotImage';
import { ThemedView } from '../../components/ThemedView';

interface Language {
  code: string;
  name: string;
  flag?: string;
}

/**
 * Language Selection screen of the onboarding flow
 * Allows users to select their native language and learning language(s)
 */
function LanguageSelection() {
  // Sample language data (would be replaced with actual languages in a real implementation)
  const [nativeLanguage, setNativeLanguage] = useState<Language | null>(null);
  const [learningLanguage, setLearningLanguage] = useState<Language | null>(null);
  const [showNativeLanguageSheet, setShowNativeLanguageSheet] = useState(false);
  const [showLearningLanguageSheet, setShowLearningLanguageSheet] = useState(false);
  
  // Sample languages
  const languages: Language[] = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'it', name: 'Italian' },
    { code: 'ru', name: 'Russian' },
    { code: 'pt', name: 'Portuguese' },
  ];

  const handleContinue = () => {
    // In a real implementation, we would save the language preferences
    // and navigate to the main app
    if (nativeLanguage && learningLanguage) {
      router.replace("/(tabs)");
    } else {
      // Show validation message - in a real app would use a proper toast/alert
      alert('Please select both your native language and learning language');
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <YStack space="$6" alignItems="center" width="100%" paddingHorizontal="$4">
          {/* Mascot at the top */}
          <MascotImage 
            width={120} 
            height={120} 
            containerStyle={styles.mascotContainer}
          />

          {/* Title and instructions */}
          <YStack space="$2" alignItems="center">
            <H1 textAlign="center" color="$primary500">Choose Your Languages</H1>
            
            <Paragraph textAlign="center" size="$4">
              Select your native language and the language(s) you want to learn
            </Paragraph>
          </YStack>

          {/* Native Language Section */}
          <YStack space="$4" width="100%" padding="$4">
            <H2 color="$gray900">Native Language</H2>
            
            {/* Native Language Picker */}
            <Card
              elevate
              bordered
              size="$4"
              scale={0.9}
              hoverStyle={{ scale: 0.925 }}
              pressStyle={{ scale: 0.875 }}
              style={styles.languagePickerCard}
              onPress={() => setShowNativeLanguageSheet(true)}
            >
              <YStack padding="$4" alignItems="center">
                <Paragraph size="$5" color={nativeLanguage ? "$gray900" : "$gray500"}>
                  {nativeLanguage ? nativeLanguage.name : "Tap to select your native language"}
                </Paragraph>
              </YStack>
            </Card>
            
            {/* Native Language Selection Modal */}
            <Modal
              visible={showNativeLanguageSheet}
              animationType="slide"
              transparent={true}
              onRequestClose={() => setShowNativeLanguageSheet(false)}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <SafeAreaView style={{ flex: 1 }}>
                    <YStack padding="$4" space="$4" flex={1}>
                      <XStack justifyContent="space-between" alignItems="center">
                        <H2>Select Native Language</H2>
                        <TouchableOpacity onPress={() => setShowNativeLanguageSheet(false)}>
                          <Text color="$primary500" fontWeight="bold">Close</Text>
                        </TouchableOpacity>
                      </XStack>
                      
                      <FlatList
                        data={languages}
                        keyExtractor={(item) => item.code}
                        renderItem={({ item }) => (
                          <TouchableOpacity
                            onPress={() => {
                              setNativeLanguage(item);
                              setShowNativeLanguageSheet(false);
                            }}
                            style={styles.languageItem}
                          >
                            <Text 
                              color={nativeLanguage?.code === item.code ? "$primary500" : "$gray900"}
                              fontWeight={nativeLanguage?.code === item.code ? "bold" : "normal"}
                            >
                              {item.name}
                            </Text>
                          </TouchableOpacity>
                        )}
                      />
                    </YStack>
                  </SafeAreaView>
                </View>
              </View>
            </Modal>
          </YStack>

          <Separator marginVertical="$2" />

          {/* Learning Language Section */}
          <YStack space="$4" width="100%" padding="$4">
            <H2 color="$gray900">Learning Language</H2>
            
            {/* Learning Language Picker */}
            <Card
              elevate
              bordered
              size="$4"
              scale={0.9}
              hoverStyle={{ scale: 0.925 }}
              pressStyle={{ scale: 0.875 }}
              style={styles.languagePickerCard}
              onPress={() => setShowLearningLanguageSheet(true)}
            >
              <YStack padding="$4" alignItems="center">
                <Paragraph size="$5" color={learningLanguage ? "$gray900" : "$gray500"}>
                  {learningLanguage ? learningLanguage.name : "Tap to select your learning language"}
                </Paragraph>
              </YStack>
            </Card>
            
            {/* Learning Language Selection Modal */}
            <Modal
              visible={showLearningLanguageSheet}
              animationType="slide"
              transparent={true}
              onRequestClose={() => setShowLearningLanguageSheet(false)}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <SafeAreaView style={{ flex: 1 }}>
                    <YStack padding="$4" space="$4" flex={1}>
                      <XStack justifyContent="space-between" alignItems="center">
                        <H2>Select Learning Language</H2>
                        <TouchableOpacity onPress={() => setShowLearningLanguageSheet(false)}>
                          <Text color="$primary500" fontWeight="bold">Close</Text>
                        </TouchableOpacity>
                      </XStack>
                      
                      <FlatList
                        data={languages.filter(lang => !nativeLanguage || lang.code !== nativeLanguage.code)}
                        keyExtractor={(item) => item.code}
                        renderItem={({ item }) => (
                          <TouchableOpacity
                            onPress={() => {
                              setLearningLanguage(item);
                              setShowLearningLanguageSheet(false);
                            }}
                            style={styles.languageItem}
                          >
                            <Text 
                              color={learningLanguage?.code === item.code ? "$primary500" : "$gray900"}
                              fontWeight={learningLanguage?.code === item.code ? "bold" : "normal"}
                            >
                              {item.name}
                            </Text>
                          </TouchableOpacity>
                        )}
                      />
                    </YStack>
                  </SafeAreaView>
                </View>
              </View>
            </Modal>
          </YStack>
          
          {/* Get Started button */}
          <Button 
            size="$6" 
            theme="active" 
            backgroundColor="$primary500"
            width="80%" 
            height={56}
            borderRadius="$6"
            marginTop="$6"
            marginBottom="$8"
            opacity={nativeLanguage && learningLanguage ? 1 : 0.7}
            onPress={handleContinue}
          >
            Get Started
          </Button>
        </YStack>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingTop: 20,
    paddingBottom: 40,
    alignItems: 'center',
  },
  mascotContainer: {
    marginTop: 20,
  },
  languagePickerCard: {
    width: '100%',
    backgroundColor: '#f9f9fc',
  },
  languageItem: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '60%',
    paddingBottom: 20,
  },
});

export default LanguageSelection;

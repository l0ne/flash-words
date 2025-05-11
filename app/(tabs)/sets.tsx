import { StyleSheet } from 'react-native';
import { Card, H1, Text, View, XStack, YStack } from 'tamagui';

import { SafeAreaView } from '@/components/SafeAreaView';

export default function SetsScreen() {
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <YStack padding="$4" space="$4">
        <H1>Sets</H1>
        <Text>Organize your flashcards into themed sets for efficient learning</Text>
        
        <Card elevate bordered size="$4" theme="dark" padding="$4" space="$2">
          <Card.Header>
            <Text fontSize="$5" fontWeight="bold">Common Phrases</Text>
            <Text fontSize="$3" opacity={0.7}>42 cards</Text>
          </Card.Header>
          <Card.Footer>
            <XStack space="$2" justifyContent="flex-end">
              <Text fontSize="$2" opacity={0.7}>Last practiced: 2 days ago</Text>
            </XStack>
          </Card.Footer>
        </Card>
        
        <Card elevate bordered size="$4" theme="light" padding="$4" space="$2">
          <Card.Header>
            <Text fontSize="$5" fontWeight="bold">Vocabulary Basics</Text>
            <Text fontSize="$3" opacity={0.7}>24 cards</Text>
          </Card.Header>
          <Card.Footer>
            <XStack space="$2" justifyContent="flex-end">
              <Text fontSize="$2" opacity={0.7}>Last practiced: today</Text>
            </XStack>
          </Card.Footer>
        </Card>
        
        <View style={styles.emptySpace} />
      </YStack>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptySpace: {
    height: 100,
  },
});

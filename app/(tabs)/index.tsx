import { ArrowRight, Bookmark, RefreshCw } from 'lucide-react-native';
import { StyleSheet } from 'react-native';
import { Button, Card, H1, ScrollView, Text, XStack, YStack } from 'tamagui';

import { SafeAreaView } from '@/components/SafeAreaView';

export default function CardsScreen() {
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <ScrollView>
        <YStack padding="$4" space="$4">
          <H1>Cards</H1>
          <Text>Review and learn new vocabulary with flashcards</Text>
          
          <Card elevate bordered size="$4" theme="blue" padding="$4" space="$3">
            <Card.Header>
              <Text fontSize="$5" fontWeight="bold">Continue Learning</Text>
              <Text fontSize="$3" opacity={0.7}>Pick up where you left off</Text>
            </Card.Header>
            <Card.Footer>
              <XStack space="$2" justifyContent="flex-end">
                <Button iconAfter={ArrowRight} themeInverse>
                  Continue
                </Button>
              </XStack>
            </Card.Footer>
          </Card>
          
          <Card elevate bordered size="$4" theme="dark" padding="$4" space="$3">
            <Card.Header>
              <Text fontSize="$5" fontWeight="bold">Daily Practice</Text>
              <Text fontSize="$3" opacity={0.7}>20 cards • 5 minutes</Text>
            </Card.Header>
            <YStack space="$2" paddingHorizontal="$2">
              <Text>Strengthen your memory with spaced repetition</Text>
            </YStack>
            <Card.Footer>
              <XStack space="$2" justifyContent="flex-end">
                <Button icon={RefreshCw} themeInverse>
                  Start Practice
                </Button>
              </XStack>
            </Card.Footer>
          </Card>
          
          <Card elevate bordered size="$4" theme="light" padding="$4" space="$3">
            <Card.Header>
              <Text fontSize="$5" fontWeight="bold">Saved Words</Text>
              <Text fontSize="$3" opacity={0.7}>Review words you've bookmarked</Text>
            </Card.Header>
            <Card.Footer>
              <XStack space="$2" justifyContent="flex-end">
                <Button icon={Bookmark} chromeless backgroundColor="$backgroundHover">
                  View Saved
                </Button>
              </XStack>
            </Card.Footer>
          </Card>
          
          <Card elevate bordered size="$4" theme="dark" padding="$4" space="$3">
            <Card.Header>
              <Text fontSize="$5" fontWeight="bold">New Words</Text>
              <Text fontSize="$3" opacity={0.7}>Discover and learn new vocabulary</Text>
            </Card.Header>
            <Card.Footer>
              <XStack space="$2" justifyContent="flex-end">
                <Button themeInverse>
                  Explore
                </Button>
              </XStack>
            </Card.Footer>
          </Card>
        </YStack>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

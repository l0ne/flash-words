import { StyleSheet } from 'react-native';
import { Card, H1, Progress, ScrollView, Text, XStack, YStack } from 'tamagui';

import { SafeAreaView } from '@/components/SafeAreaView';

export default function StatsScreen() {
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <ScrollView>
        <YStack padding="$4" space="$4">
          <H1>Stats</H1>
          <Text>Track your learning progress and achievements</Text>
          
          <Card elevate bordered size="$4" theme="dark" padding="$4" space="$3">
            <Card.Header>
              <Text fontSize="$5" fontWeight="bold">Learning Summary</Text>
            </Card.Header>
            <YStack space="$2" paddingHorizontal="$2">
              <Text fontSize="$3" fontWeight="bold">Daily Streak</Text>
              <XStack alignItems="center" space="$2">
                <Text fontSize="$6" fontWeight="bold">7</Text>
                <Text fontSize="$2" opacity={0.7}>days</Text>
              </XStack>
              
              <Text fontSize="$3" fontWeight="bold" marginTop="$2">Cards Mastered</Text>
              <XStack alignItems="center" space="$3">
                <Progress value={68} max={100} width="80%" height="$1">
                  <Progress.Indicator backgroundColor="$green10" />
                </Progress>
                <Text>68%</Text>
              </XStack>
              
              <Text fontSize="$3" fontWeight="bold" marginTop="$2">Weekly Practice</Text>
              <XStack justifyContent="space-between" paddingVertical="$2">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                  <YStack key={i} alignItems="center" space="$1">
                    <YStack 
                      height={30 + (i * 5)} 
                      width={20} 
                      backgroundColor={i < 5 ? "$green9" : "$gray5"} 
                      borderRadius="$2" 
                    />
                    <Text fontSize="$2">{day}</Text>
                  </YStack>
                ))}
              </XStack>
            </YStack>
          </Card>
          
          <Card elevate bordered size="$4" theme="light" padding="$4" space="$2">
            <Card.Header>
              <Text fontSize="$5" fontWeight="bold">Achievements</Text>
            </Card.Header>
            <YStack space="$2" paddingHorizontal="$2">
              <XStack space="$2" alignItems="center">
                <Card circular size="$3" backgroundColor="$yellow9">
                  <Text textAlign="center" padding="$2" color="white" fontWeight="bold">🔥</Text>
                </Card>
                <YStack>
                  <Text fontWeight="bold">7-Day Streak</Text>
                  <Text fontSize="$2" opacity={0.7}>Keep practicing daily!</Text>
                </YStack>
              </XStack>
              
              <XStack space="$2" alignItems="center">
                <Card circular size="$3" backgroundColor="$blue9">
                  <Text textAlign="center" padding="$2" color="white" fontWeight="bold">⭐</Text>
                </Card>
                <YStack>
                  <Text fontWeight="bold">Quick Learner</Text>
                  <Text fontSize="$2" opacity={0.7}>Mastered 50 cards</Text>
                </YStack>
              </XStack>
            </YStack>
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

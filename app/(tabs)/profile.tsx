import { Moon, Sun } from 'lucide-react-native';
import { StyleSheet, useColorScheme as useRNColorScheme } from 'react-native';
import { Avatar, Button, Card, H1, Label, ScrollView, Switch, Text, XStack, YStack } from 'tamagui';

import { SafeAreaView } from '@/components/SafeAreaView';

export default function ProfileScreen() {
  const colorScheme = useRNColorScheme();
  const isDarkMode = colorScheme === 'dark';

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <ScrollView>
        <YStack padding="$4" space="$4">
          <H1>Profile</H1>
          
          <Card elevate bordered size="$4" padding="$4">
            <XStack space="$4" alignItems="center">
              <Avatar circular size="$6">
                <Avatar.Image src="https://i.pravatar.cc/300" />
                <Avatar.Fallback backgroundColor="$blue10" />
              </Avatar>
              <YStack>
                <Text fontSize="$5" fontWeight="bold">Language Learner</Text>
                <Text fontSize="$3" opacity={0.7}>Joined May 2025</Text>
              </YStack>
            </XStack>
          </Card>
          
          <Card elevate bordered size="$4" padding="$4" space="$3">
            <Text fontSize="$4" fontWeight="bold">Settings</Text>
            
            <XStack alignItems="center" justifyContent="space-between">
              <XStack space="$2" alignItems="center">
                {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
                <Text>Dark Mode</Text>
              </XStack>
              <Switch size="$4" defaultChecked={isDarkMode}>
                <Switch.Thumb />
              </Switch>
            </XStack>
            
            <XStack alignItems="center" justifyContent="space-between">
              <Text>Notifications</Text>
              <Switch size="$4" defaultChecked>
                <Switch.Thumb />
              </Switch>
            </XStack>
            
            <XStack alignItems="center" justifyContent="space-between">
              <Text>Daily Reminders</Text>
              <Switch size="$4" defaultChecked>
                <Switch.Thumb />
              </Switch>
            </XStack>
          </Card>
          
          <Card elevate bordered size="$4" padding="$4" space="$3">
            <Text fontSize="$4" fontWeight="bold">Language Preferences</Text>
            
            <XStack alignItems="center" justifyContent="space-between">
              <Label htmlFor="lang-selection">Learning Language</Label>
              <Button id="lang-selection" size="$3" theme="dark">English</Button>
            </XStack>
            
            <XStack alignItems="center" justifyContent="space-between">
              <Label htmlFor="native-selection">Native Language</Label>
              <Button id="native-selection" size="$3" theme="dark">Spanish</Button>
            </XStack>
          </Card>
          
          <Card elevate bordered size="$4" padding="$4" space="$3" theme="light">
            <Text fontSize="$4" fontWeight="bold">Account</Text>
            <Button theme="light" mt="$2" bordered>
              Sign Out
            </Button>
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

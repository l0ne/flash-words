import { ArrowRight, Book, Plus } from 'lucide-react-native';
import { StyleSheet, Animated, View, Dimensions } from 'react-native';
import { 
  Button, 
  H1, 
  H2,
  ScrollView, 
  Text, 
  XStack, 
  YStack, 
  Card,
  Circle,
  Theme
} from 'tamagui';
import { SafeAreaView } from '@/components/SafeAreaView';

/**
 * Home screen component displaying daily progress, learning button,
 * and in-progress word sets
 */
export default function HomeScreen() {
  // Sets that are in progress (to be replaced with actual data)
  const inProgressSets = [
    { id: '1', title: 'Basic Phrases', progress: 12, total: 30 },
    { id: '2', title: 'Food & Dining', progress: 5, total: 20 },
    { id: '3', title: 'Travel Words', progress: 8, total: 25 },
    { id: '4', title: 'Numbers & Time', progress: 3, total: 15 }
  ];

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      {/* Main Content */}
      <YStack flex={1} padding="$4">
        
        {/* Today's Progress Widget */}
        <YStack 
          alignItems="center" 
          marginTop="$6" 
          marginBottom="$6"
        >
          {/* Progress Ring (placeholder) */}
          <Theme name="blue">
            <Circle 
              size={160} 
              borderWidth={8} 
              borderColor="$blue8"
              backgroundColor="$blue2"
              alignItems="center"
              justifyContent="center"
            >
              <YStack alignItems="center">
                <Text 
                  fontSize={18} 
                  fontWeight="500" 
                  color="$blue11"
                >
                  Today
                </Text>
                <Text 
                  fontSize={30} 
                  fontWeight="bold" 
                  color="$blue12"
                >
                  0/30
                </Text>
              </YStack>
            </Circle>
          </Theme>
          
          {/* Main Learn Button */}
          <Button 
            size="$5" 
            theme="blue" 
            marginTop="$4" 
            icon={Book}
            scale={1.1}
          >
            Learn
          </Button>
        </YStack>
        
        {/* In Progress Section */}
        <YStack marginTop="$2">
          <H2 marginBottom="$2">In Progress</H2>
          
          {/* Horizontal Scrollable List */}
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalList}
          >
            {inProgressSets.map((set) => (
              <Card 
                key={set.id} 
                width={180} 
                height={140} 
                margin="$1" 
                marginRight="$3"
                padding="$3"
                bordered
                elevate
                scale={0.97}
                pressStyle={{ scale: 1 }}
                theme="blue"
              >
                <YStack flex={1} justifyContent="space-between">
                  <Text fontWeight="bold" fontSize={16}>{set.title}</Text>
                  <XStack alignItems="center" justifyContent="space-between">
                    <Text fontSize={14} opacity={0.7}>
                      {set.progress}/{set.total}
                    </Text>
                    <Button 
                      size="$2" 
                      iconAfter={ArrowRight} 
                      themeInverse
                    >
                      Continue
                    </Button>
                  </XStack>
                </YStack>
              </Card>
            ))}
          </ScrollView>
        </YStack>
      </YStack>
      
      {/* Floating Action Button */}
      <View style={styles.fabContainer}>
        <Theme name="blue">
          <Button 
            size="$5" 
            circular 
            icon={Plus} 
            themeInverse
            style={styles.fab}
          />
        </Theme>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  horizontalList: {
    paddingVertical: 10,
  },
  fabContainer: {
    position: 'absolute',
    right: 24,
    bottom: 84,  // Increased to avoid overlap with tab bar
  },
  fab: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});

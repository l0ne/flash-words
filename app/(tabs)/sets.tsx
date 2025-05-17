import { useCallback, useState } from 'react';
import { 
  StyleSheet, 
  FlatList, 
  TouchableOpacity, 
  TextInput, 
  ListRenderItemInfo, 
  Dimensions,
  ActivityIndicator
} from 'react-native';
import { 
  Button, 
  Card, 
  H1, 
  Text, 
  View, 
  XStack, 
  YStack, 
  Input, 
  Theme
} from 'tamagui';
import { Ionicons } from '@expo/vector-icons';

import { SafeAreaView } from '@/components/SafeAreaView';
import MascotImage from '@/components/MascotImage';

// Type definition for a word set
interface WordSet {
  id: string;
  name: string;
  language: string;
  cardCount: number;
  lastPracticed: string;
  coverImage?: string;
}

// Mock data for development
const MOCK_SETS: WordSet[] = [
  {
    id: '1',
    name: 'Common Phrases',
    language: 'Spanish',
    cardCount: 42,
    lastPracticed: '2 days ago',
    coverImage: 'https://via.placeholder.com/100',
  },
  {
    id: '2',
    name: 'Vocabulary Basics',
    language: 'French',
    cardCount: 24,
    lastPracticed: 'today',
    coverImage: 'https://via.placeholder.com/100',
  },
  {
    id: '3',
    name: 'Travel Essentials',
    language: 'Italian',
    cardCount: 35,
    lastPracticed: '1 week ago',
    coverImage: 'https://via.placeholder.com/100',
  },
  {
    id: '4',
    name: 'Business Terms',
    language: 'German',
    cardCount: 50,
    lastPracticed: '3 days ago',
    coverImage: 'https://via.placeholder.com/100',
  },
  {
    id: '5',
    name: 'Food & Dining',
    language: 'Japanese',
    cardCount: 30,
    lastPracticed: 'yesterday',
    coverImage: 'https://via.placeholder.com/100',
  },
];

export default function SetsScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sets, setSets] = useState<WordSet[]>(MOCK_SETS);
  const [showEmptyState, setShowEmptyState] = useState(false); // For testing empty state

  // Filter sets based on search query
  const filteredSets = sets.filter(set => 
    set.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    set.language.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = useCallback(({ item }: ListRenderItemInfo<WordSet>) => (
    <TouchableOpacity 
      activeOpacity={0.7} 
      onPress={() => console.log(`Set selected: ${item.name}`)}
    >
      <Card 
        elevate 
        bordered 
        size="$4" 
        theme={parseInt(item.id) % 2 === 0 ? 'light' : 'dark'} 
        padding="$4" 
        space="$2"
        marginBottom="$3"
      >
        <XStack space="$3" alignItems="center">
          <View style={styles.setCoverContainer}>
            {item.coverImage ? (
              <Card.Background>
                <View style={styles.setCoverImage} />
              </Card.Background>
            ) : (
              <View style={[styles.setCoverImage, styles.placeholderCover]}>
                <Text fontSize="$6" textAlign="center">{item.language.charAt(0)}</Text>
              </View>
            )}
          </View>
          
          <YStack flex={1} space="$1">
            <Card.Header paddingLeft="$0" paddingTop="$0">
              <Text fontSize="$5" fontWeight="bold">{item.name}</Text>
              <XStack space="$2" alignItems="center">
                <Ionicons name="globe-outline" size={14} />
                <Text fontSize="$3" opacity={0.7}>{item.language}</Text>
              </XStack>
            </Card.Header>
            
            <Card.Footer paddingLeft="$0" paddingBottom="$0">
              <XStack justifyContent="space-between" width="100%">
                <Text fontSize="$3">{item.cardCount} cards</Text>
                <Text fontSize="$2" opacity={0.7}>Last practiced: {item.lastPracticed}</Text>
              </XStack>
            </Card.Footer>
          </YStack>
        </XStack>
      </Card>
    </TouchableOpacity>
  ), []);

  const renderEmptyState = useCallback(() => (
    <YStack space="$6" alignItems="center" justifyContent="center" flex={1} padding="$6">
      <MascotImage width={150} height={150} />
      <YStack space="$2" alignItems="center">
        <Text fontSize="$6" fontWeight="bold" textAlign="center">No sets yet</Text>
        <Text fontSize="$4" textAlign="center" opacity={0.7}>
          Create your first set to start learning new words and phrases
        </Text>
      </YStack>
      <Button 
        size="$4" 
        theme="active" 
        icon={<Ionicons name="add-circle-outline" size={20} color="white" />}
        onPress={() => console.log('Create set')}
      >
        Create Your First Set
      </Button>
    </YStack>
  ), []);
  
  const keyExtractor = useCallback((item: WordSet) => item.id, []);

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <YStack flex={1} padding="$4">
        <H1 marginBottom="$2">Sets</H1>
        
        {/* Search and Filter Bar */}
        <XStack 
          space="$2" 
          marginVertical="$4" 
          alignItems="center"
          backgroundColor="$backgroundHover"
          padding="$2"
          borderRadius="$4"
        >
          <Ionicons name="search" size={20} color="#777" style={styles.searchIcon} />
          <Input
            flex={1}
            placeholder="Search by name or language..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            backgroundColor="transparent"
            borderWidth={0}
            marginRight="$1"
          />
          
          <XStack space="$1">
            <Button 
              size="$2" 
              circular
              chromeless
              icon={<Ionicons name="options-outline" size={20} />}
              onPress={() => console.log('Filter')}
            />
            <Button 
              size="$2" 
              circular
              chromeless
              icon={<Ionicons name="swap-vertical-outline" size={20} />}
              onPress={() => console.log('Sort')}
            />
          </XStack>
        </XStack>
        
        {/* Main Content - FlatList or Empty State */}
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" />
          </View>
        ) : showEmptyState || filteredSets.length === 0 ? (
          renderEmptyState()
        ) : (
          <FlatList
            data={filteredSets}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
            initialNumToRender={5}
            maxToRenderPerBatch={10}
            windowSize={5}
            removeClippedSubviews={true}
            ListFooterComponent={<View style={styles.listFooter} />}
          />
        )}
      </YStack>
      
      {/* FAB Button */}
      {!showEmptyState && filteredSets.length > 0 && (
        <View style={styles.fabContainer}>
          <Theme name="active">
            <Button
              size="$5"
              circular
              icon={<Ionicons name="add" size={24} color="white" />}
              onPress={() => console.log('Create new set')}
              elevation="$4"
            />
          </Theme>
        </View>
      )}
    </SafeAreaView>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchIcon: {
    marginLeft: 8,
  },
  listContent: {
    paddingBottom: 80, // Space for FAB
  },
  listFooter: {
    height: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabContainer: {
    position: 'absolute',
    right: 24,
    bottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  setCoverContainer: {
    width: 70,
    height: 70,
    borderRadius: 8,
    overflow: 'hidden',
  },
  setCoverImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f0f0f0',
  },
  placeholderCover: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e1e1e1',
  }
});


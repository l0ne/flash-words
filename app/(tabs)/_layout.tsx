import { Tabs } from 'expo-router';
import { BarChart3, CreditCard, LayoutGrid, User2 } from 'lucide-react-native';
import React from 'react';
import { Platform, useColorScheme as useRNColorScheme } from 'react-native';
import { useTheme } from 'tamagui';

import { HapticTab } from '@/components/HapticTab';

export default function TabLayout() {
  const colorScheme = useRNColorScheme();
  const theme = useTheme();
  const activeTintColor = theme.color.val;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: activeTintColor,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 4,
        },
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
            backgroundColor: colorScheme === 'dark' ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)',
            borderTopWidth: 0.5,
            borderTopColor: colorScheme === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
            paddingBottom: 10, // Add padding for home indicator
          },
          default: {
            backgroundColor: colorScheme === 'dark' ? '#121212' : '#FFFFFF',
            borderTopWidth: 0.5,
            borderTopColor: colorScheme === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
          },
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Cards',
          tabBarIcon: ({ color, size }) => <CreditCard size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="sets"
        options={{
          title: 'Sets',
          tabBarIcon: ({ color, size }) => <LayoutGrid size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: 'Stats',
          tabBarIcon: ({ color, size }) => <BarChart3 size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => <User2 size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}

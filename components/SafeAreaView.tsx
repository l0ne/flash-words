import { forwardRef } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'tamagui';

type EdgeType = 'top' | 'right' | 'bottom' | 'left';

interface SafeAreaViewProps {
  edges?: EdgeType[];
  children: React.ReactNode;
  style?: ViewStyle;
}

export const SafeAreaView = forwardRef<React.ElementRef<typeof View>, SafeAreaViewProps>(
  ({ edges = ['top', 'right', 'bottom', 'left'], style, children, ...props }, ref) => {
    const insets = useSafeAreaInsets();
    
    // Only apply insets if we're on iOS and not using NativeSafeAreaView directly
    const customInsets = {
      paddingTop: edges.includes('top') ? insets.top : 0,
      paddingRight: edges.includes('right') ? insets.right : 0,
      paddingBottom: edges.includes('bottom') ? insets.bottom : 0,
      paddingLeft: edges.includes('left') ? insets.left : 0,
    };
    
    return (
      <View 
        ref={ref}
        style={[styles.container, customInsets, style]}
        {...props}
      >
        {children}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

SafeAreaView.displayName = 'SafeAreaView';

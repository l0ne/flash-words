import React from 'react';
import { Image, StyleSheet, ImageStyle, ViewStyle } from 'react-native';
import { ThemedView } from './ThemedView';

export interface MascotImageProps {
  /**
   * Width of the mascot image in pixels
   * @default 100
   */
  width?: number;
  
  /**
   * Height of the mascot image in pixels
   * @default 100
   */
  height?: number;
  
  /**
   * Additional style for the image
   */
  imageStyle?: ImageStyle;
  
  /**
   * Style for the container view
   */
  containerStyle?: ViewStyle;
}

/**
 * A reusable component for displaying the LangBot mascot
 * Used in onboarding slides, empty-state illustrations, and promotional graphics
 */
export function MascotImage({
  width = 100,
  height = 100,
  imageStyle,
  containerStyle,
}: MascotImageProps) {
  return (
    <ThemedView style={[styles.container, containerStyle]}>
      <Image
        source={require('../assets/images/mascot.webp')}
        style={[
          styles.image,
          {
            width,
            height,
          },
          imageStyle,
        ]}
        resizeMode="contain"
        accessibilityLabel="LangBot mascot"
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    // Base styling for the image
  },
});

export default MascotImage;

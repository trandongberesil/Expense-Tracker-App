import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';

import { Ionicons } from '@expo/vector-icons';

export default function IconButton({ icon, color, size, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.buttonContainer}>
        <Ionicons name={icon} color={color} size={size} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    marginVertical: 2,
    marginHorizontal: 8,
  },

  pressed: {
    opacity: 0.75,
  },
});

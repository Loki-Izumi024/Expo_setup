import { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, StatusBar } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {
  const [likes, setLikes] = useState(0);

  const handleLikes = (change) => {
    setLikes((currentLikes) => Math.max(0, currentLikes + change));
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={require('./assets/icon.png')} style={styles.avatar} />
        <Text style={styles.name}>Tashi Phuntsho</Text>
        <Text style={styles.subtitle}>BE Information and Technology · Year 3</Text>
        <Text style={styles.bio}>I like to eat variety of foods and play video games. I would like to build a Restaurant Review app.</Text>

        <View style={styles.likesRow}>
          <Ionicons name="heart" size={22} color="#d64545" />
          <Text style={styles.likesText}>{likes} likes</Text>
        </View>

        {likes >= 10 && <Text style={styles.popular}>You're popular!</Text>}

        <View style={styles.row}>
          <Pressable
            style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
            onPress={() => handleLikes(1)}
          >
            <Ionicons name="arrow-up" size={22} color="#fff" />
            <Text style={styles.buttonLabel}>Upvote</Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
            onPress={() => handleLikes(-1)}
          >
            <Ionicons name="arrow-down" size={22} color="#fff" />
            <Text style={styles.buttonLabel}>Downvote</Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [styles.resetButton, pressed && styles.resetPressed]}
            onPress={() => setLikes(0)}
          >
            <Ionicons name="refresh" size={22} color="#fff" />
            <Text style={styles.buttonLabel}>Reset</Text>
          </Pressable>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef2f7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  avatar: { width: 96, height: 96, borderRadius: 48, marginBottom: 12 },
  name: { fontSize: 24, fontWeight: 'bold' },
  subtitle: { fontSize: 14, color: '#666', marginTop: 4 },
  bio: { fontSize: 15, textAlign: 'center', marginTop: 12, lineHeight: 22 },
  likesRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 20 },
  likesText: { fontSize: 18 },
  popular: {
    color: '#d64545',
    fontWeight: '700',
    marginTop: 12,
    fontSize: 15,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 12,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: '#2f6fed',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',
    minWidth: 84,
  },
  buttonPressed: {
    opacity: 0.7,
  },
  resetButton: {
    backgroundColor: '#d64545',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',
    minWidth: 84,
  },
  resetPressed: {
    opacity: 0.7,
  },
  buttonLabel: { color: '#fff', fontSize: 12, fontWeight: '600', marginTop: 2 },
});
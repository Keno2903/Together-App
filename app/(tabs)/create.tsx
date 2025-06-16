import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';
import { Post } from '@/models';
import { sampleUser } from '@/data/seed';

export default function CreateScreen() {
  const [imageUrl, setImageUrl] = useState('');
  const [caption, setCaption] = useState('');
  const [posts, setPosts] = useState<Post[]>(sampleUser.profile.posts);

  const handlePost = () => {
    const newPost: Post = {
      id: `tmp-${Date.now()}`,
      imageUrl,
      caption,
      date: new Date().toISOString(),
    };
    setPosts([newPost, ...posts]);
    setImageUrl('');
    setCaption('');
    alert('Post created (local only)');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Image URL</Text>
      <TextInput
        style={styles.input}
        value={imageUrl}
        onChangeText={setImageUrl}
        placeholder="https://example.com/image.jpg"
      />
      <Text style={styles.label}>Caption</Text>
      <TextInput
        style={[styles.input, styles.captionInput]}
        value={caption}
        onChangeText={setCaption}
        placeholder="What's on your mind?"
        multiline
      />
      <Button
        title="Post"
        onPress={handlePost}
        disabled={!imageUrl || !caption}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  label: {
    marginTop: 12,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
  },
  captionInput: {
    height: 80,
    textAlignVertical: 'top',
    marginBottom: 12,
  },
});

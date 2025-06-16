import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { sampleUser } from '@/data/seed';
import { Post } from '@/models';

export default function HomeScreen() {
  const renderItem = ({ item }: { item: Post }) => (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <Image
          source={{ uri: sampleUser.profile.avatarUrl }}
          style={styles.avatar}
        />
        <Text style={styles.username}>{sampleUser.username}</Text>
      </View>
      <Image source={{ uri: item.imageUrl }} style={styles.postImage} />
      <Text style={styles.postCaption}>{item.caption}</Text>
    </View>
  );

  return (
    <FlatList
      data={sampleUser.profile.posts}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.listContent}
    />
  );
}

const styles = StyleSheet.create({
  listContent: {
    paddingVertical: 16,
  },
  postContainer: {
    marginBottom: 24,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  username: {
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 250,
  },
  postCaption: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});

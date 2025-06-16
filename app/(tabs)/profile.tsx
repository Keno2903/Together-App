import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import { sampleUser } from '@/data/seed';

export default function ProfileScreen() {
  const { profile } = sampleUser;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={{ uri: profile.avatarUrl }} style={styles.avatar} />
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.bio}>{profile.bio}</Text>
        <View style={styles.countRow}>
          <View style={styles.countItem}>
            <Text style={styles.countNumber}>{profile.postsCount}</Text>
            <Text style={styles.countLabel}>Posts</Text>
          </View>
          <View style={styles.countItem}>
            <Text style={styles.countNumber}>{profile.inspiresCount}</Text>
            <Text style={styles.countLabel}>Inspires</Text>
          </View>
          <View style={styles.countItem}>
            <Text style={styles.countNumber}>{profile.inspiredByCount}</Text>
            <Text style={styles.countLabel}>Inspired By</Text>
          </View>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Passions</Text>
      <View style={styles.tagContainer}>
        {profile.passions.map((p) => (
          <Text key={p} style={styles.tag}>
            {p}
          </Text>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Hobbies</Text>
      <View style={styles.tagContainer}>
        {profile.hobbies.map((h) => (
          <Text key={h} style={styles.tag}>
            {h}
          </Text>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Dreams</Text>
      <View style={styles.tagContainer}>
        {profile.dreams.map((d) => (
          <Text key={d} style={styles.tag}>
            {d}
          </Text>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Recent Posts</Text>
      {profile.posts.map((post) => (
        <View key={post.id} style={styles.postContainer}>
          <Image source={{ uri: post.imageUrl }} style={styles.postImage} />
          <Text style={styles.postCaption}>{post.caption}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Life Timeline</Text>
      {profile.lifeTimeline.map((event) => (
        <View key={event.id} style={styles.timelineItem}>
          <Text style={styles.timelineTitle}>{event.title}</Text>
          <Text style={styles.timelineDescription}>{event.description}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Inspirations</Text>
      {profile.inspirations.map((i) => (
        <View key={i.id} style={styles.inspirationItem}>
          <Text style={styles.inspirationContent}>
            {i.type === 'quote' ? `"${i.content}"` : i.content}
          </Text>
          {i.author && (
            <Text style={styles.inspirationAuthor}>- {i.author}</Text>
          )}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bio: {
    marginTop: 4,
    marginHorizontal: 16,
    textAlign: 'center',
  },
  postContainer: {
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  postCaption: {
    fontSize: 14,
  },
  countRow: {
    flexDirection: 'row',
    marginTop: 12,
  },
  countItem: {
    alignItems: 'center',
    marginHorizontal: 12,
  },
  countNumber: {
    fontWeight: 'bold',
  },
  countLabel: {
    fontSize: 12,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
  },
  tag: {
    backgroundColor: '#E0E0E0',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 4,
    margin: 4,
    fontSize: 12,
  },
  timelineItem: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  timelineTitle: {
    fontWeight: 'bold',
  },
  timelineDescription: {
    fontSize: 12,
    color: '#555',
  },
  inspirationItem: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  inspirationContent: {
    fontStyle: 'italic',
  },
  inspirationAuthor: {
    alignSelf: 'flex-end',
    marginTop: 4,
    fontSize: 12,
  },
});

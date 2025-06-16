import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { sampleUser } from '@/data/seed';
import CommentSection from '@/components/CommentSection';

export default function ProfileScreen() {
  const { profile } = sampleUser;

  return (
    <SafeAreaView style={styles.safeArea}>
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

        <Text style={styles.sectionTitle}>Posts</Text>
        {profile.posts.map((post) => (
          <View key={post.id} style={styles.card}>
            <Image source={{ uri: post.imageUrl }} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{post.caption}</Text>
            <View style={styles.actionRow}>
              <Button title="Inspire" onPress={() => {}} />
            </View>
            <CommentSection />
          </View>
        ))}

        <Text style={styles.sectionTitle}>Life Timeline</Text>
        {profile.lifeTimeline.map((event) => (
          <View key={event.id} style={styles.card}>
            {event.media?.type === 'image' && (
              <Image
                source={{ uri: event.media.url }}
                style={styles.cardImage}
              />
            )}
            <Text style={styles.cardTitle}>{event.title}</Text>
            <Text style={styles.cardText}>{event.description}</Text>
            <View style={styles.actionRow}>
              <Button title="Inspire" onPress={() => {}} />
            </View>
            <CommentSection />
          </View>
        ))}

        <Text style={styles.sectionTitle}>Writings</Text>
        {profile.writings.map((w) => (
          <View key={w.id} style={styles.card}>
            {w.headerImageUrl && (
              <Image
                source={{ uri: w.headerImageUrl }}
                style={styles.cardImage}
              />
            )}
            <Text style={styles.cardTitle}>{w.title}</Text>
            <Text style={styles.cardText}>{w.content}</Text>
            <View style={styles.actionRow}>
              <Button title="Inspire" onPress={() => {}} />
            </View>
            <CommentSection />
          </View>
        ))}

        <Text style={styles.sectionTitle}>Inspirations</Text>
        {profile.inspirations.map((i) => (
          <View key={i.id} style={styles.card}>
            <Text style={styles.cardText}>
              {i.type === 'quote' ? `"${i.content}"` : i.content}
            </Text>
            {i.author && (
              <Text style={styles.inspirationAuthor}>- {i.author}</Text>
            )}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    paddingVertical: 16,
    paddingBottom: 32,
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
  card: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  cardTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardText: {
    fontSize: 14,
    marginBottom: 4,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 4,
  },
  inspirationAuthor: {
    alignSelf: 'flex-end',
    marginTop: 4,
    fontSize: 12,
  },
});

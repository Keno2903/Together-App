import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

interface CommentSectionProps {
  initialComments?: string[];
}

export default function CommentSection({
  initialComments = [],
}: CommentSectionProps) {
  const [comments, setComments] = useState<string[]>(initialComments);
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (!text.trim()) return;
    setComments([...comments, text.trim()]);
    setText('');
  };

  return (
    <View style={styles.container}>
      {comments.map((c, idx) => (
        <Text key={idx} style={styles.comment}>
          {c}
        </Text>
      ))}
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Add a comment..."
        />
        <Button title="Post" onPress={handleAdd} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  comment: {
    fontSize: 12,
    marginBottom: 4,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 8,
  },
});

import { View, Text, StyleSheet, Pressable } from "react-native";
import { IconCheck, IconPencil, IconTrash } from "../Icons";

export default function TaskItem({ completed, text, onToggleComplete, onPressEdit, onPressDelete  }) {
    const cardStyles = [styles.container];
    if (completed) {
        cardStyles.push(styles.cardCompleted)
      }
    return (
        <View style={cardStyles}>
            <Pressable onPress={onToggleComplete}>
                <IconCheck checked={completed} />
            </Pressable >
            <Text style={styles.text}>{text}</Text>
            <Pressable onPress={onPressEdit}>
                <IconPencil />
            </Pressable>
            <Pressable onPress={onPressDelete}>
                <IconTrash />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#98A0A8',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        paddingVertical: 18,
        borderRadius: 8,
        gap: 8
    },
    cardCompleted: {
        backgroundColor: '#0F725C'
    },
    text: {
        flex: 1,
        color: '#021123',
        fontSize: 18,
        fontWeight: 'bold'
    }
})
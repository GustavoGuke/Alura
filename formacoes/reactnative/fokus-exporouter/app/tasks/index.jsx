import { FlatList, StyleSheet, Text, View } from "react-native";
import TasksItem from "../../components/TasksItem";
import { FokusButton } from "../../components/FokusButton";
import { IconPlus } from "../../components/Icons";
import { router } from "expo-router";
import useTaskContext from "../../components/context/useTaskContext"
import { useEffect } from "react";
export default function Tasks() {
    const { tasks, deleteTask, toggleTaskCompleted } = useTaskContext()
    console.log(tasks)

    return (<View style={styles.container}>
        <View style={styles.wrapper} >
            <Text style={styles.text}>
                Lista de tarefas:
            </Text>
            <View style={styles.inner}>

                <FlatList
                    data={tasks}
                    keyExtractor={task => task.id}
                    renderItem={({ item }) => <TasksItem 
                    completed={item.completed}
                    text={item.description} 
                    onPressDelete={() => deleteTask(item.id)}
                    onToggleComplete={() => {toggleTaskCompleted(item.id)}}
                    />}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    contentContainerStyle={styles.listContent}
                    ListEmptyComponent={() => <Text style={styles.empty}>Nenhum item aqui.</Text>}
                />
            </View>
            <FokusButton
                title="Adicionar nova tarefa"
                icon={<IconPlus outline />}
                outline
                onPress={() => router.navigate('/add-task')}
            />
        </View>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#021123',
        alignItems: 'center'
    },
    wrapper: {
        gap: 40,
        width: '90%'
    },
    text: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 26
    },
    inner: {
        gap: 8
    },
    separator: {
      width: "100%",
      height: 1,
      backgroundColor: "#EEF0F5",
      marginVertical: 8,
    },
    listContent: {
      paddingTop: 24,
      paddingBottom: 20,
    },
    empty: {
      fontSize: 14,
      color: "#808080",
      textAlign: 'center'
    },
})
import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import TaskItem from "../../components/TasksItem";
import { FokusButton } from "../../components/FokusButton";
import { IconPlus } from "../../components/Icons";
import { router } from "expo-router";


export default function Tasks() {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <Text style={styles.text}>
                        lista de tarefas
                    </Text>
                    <View style={styles.inner}>

                        <TaskItem completed text="estudar react" />
                    </View>
                    <FokusButton
                        title="Adicionar nova tarefa"
                        icon={<IconPlus />}
                        outline
                        onPress={() => router.navigate('/add-task')}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#021123',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 26
    },
    inner: {
        gap: 8
    },
    wrapper: {
        gap: 40,
        width: '90%',
        backgroundColor: '#021123'
    }
})
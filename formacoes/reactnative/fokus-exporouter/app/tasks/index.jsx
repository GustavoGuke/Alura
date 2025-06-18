import { SafeAreaView, Text, View } from "react-native";
import TaskItem from "../../components/TasksItem";


export default function Tasks() {
    return (
        <SafeAreaView>
            <View >
                <Text>
                    Página para listar tarefas
                </Text>
                <TaskItem completed text="estudar react"/>
            </View>
        </SafeAreaView>
    )
}


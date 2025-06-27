import { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
export const TaskContext = createContext()


export function TasksProvider({children}) {
    const [tasks, setTasks] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        const getData = async () => {
            try {
              const jsonValue = await AsyncStorage.getItem('fokus-tasks');
              const loadedData = jsonValue != null ? JSON.parse(jsonValue) : [];
              setTasks(loadedData)
              setIsLoading(true)
            } catch (e) {
              // error reading value
            }
          };
          getData()
    },[])

    useEffect(() => {
        const storeData = async (value) => {
            try {
              const jsonValue = JSON.stringify(value);
              await AsyncStorage.setItem('fokus-tasks', jsonValue);
            } catch (e) {
              // saving error
            }
          };

          if(isLoading){
            storeData(tasks)
          }
    },[tasks])

    const addTask = (description) => {
        setTasks(oldState => {
            return [...oldState, {description: description, id: oldState.length + 1}]
        })
    }
    const toggleTaskCompleted = (id) => {
        setTasks(oldState => 
            oldState.map(t => {
                if (t.id === id) {
                    t.completed = !t.completed;
                }
                return t;
            })
        );
    };
    const deleteTask = (id) => {
        setTasks(oldState => oldState.filter(t => t.id !== id));
    };
    return (
        <TaskContext.Provider value={{tasks, addTask, toggleTaskCompleted,deleteTask}}>
            {children}
        </TaskContext.Provider>
    )
}
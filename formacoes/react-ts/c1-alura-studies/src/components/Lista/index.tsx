

export const Lista = () => {

    const tarefas = [
        {
            tarefa: "React-ts",
            tempo: "02:00:00"
        },
        {
            tarefa: "C#",
            tempo: "02:00:00"
        }
    ]
    return (
        <aside>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((tarefa, index) => (
                    <li key={index}>
                        <h3>{tarefa.tarefa}</h3>
                        <span>{tarefa.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}
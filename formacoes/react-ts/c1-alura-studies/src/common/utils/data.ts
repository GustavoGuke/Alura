export const tempoSegundos = (tempo: string) => {
    const [horas = '0', minutos = '0', segundos = '0'] = tempo.split(':')

    const horasEmsegundos = Number(horas) * 3600;
    const minutosEmSegundos = Number(minutos) * 60;
    return horasEmsegundos + minutosEmSegundos + Number(segundos)
}
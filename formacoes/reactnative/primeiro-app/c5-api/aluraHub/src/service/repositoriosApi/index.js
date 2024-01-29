import api from "../api";

export async function RepositorioUsuario(id) {
    try {
        const resultado = await api.get(`/repos?postId=${id}`)
        return resultado.data
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function SalvarRepositorioUsuario(postId, nome, data, id) {
    try {
        await api.put(`/repos/${id}`, {
            name: nome,
            data, data,
            postId: postId,
            id: id
        })

        return 'sucesso'
    } catch (error) {
        console.log(error)
        return 'erro'
    }
}

export async function CriarRepositorioUsuario(postId, nome, data) {
    try {
        await api.post(`/repos`, {
            name: nome,
            data, data,
            postId: postId,
        })

        return 'sucesso'
    } catch (error) {
        console.log(error)
        return 'erro'
    }
}

export async function DeletarRepositorioUsuario(id) {
    try {
        await api.post(`/repos/${id}`)
        return 'sucesso'
    } catch (error) {
        console.log(error)
        return 'erro'
    }
}
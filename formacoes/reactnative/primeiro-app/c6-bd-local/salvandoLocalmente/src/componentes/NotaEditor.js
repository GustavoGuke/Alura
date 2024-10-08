import React, { useEffect, useState } from "react"
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native"
import { Picker } from '@react-native-picker/picker'
import { adcionarNota, atualizarNota, deletarNota } from "../services/db_notas"
//import AsyncStorage from '@react-native-async-storage/async-storage';

export default function NotaEditor({ mostrarNotas, notaSelecionada, setNotaSelacionada }) {

  const [texto, setTexto] = useState("")
  const [titulo, setTitulo] = useState("")
  const [categoria, setCategoria] = useState("Pessoal")
  const [urgencia, setUrgencia] = useState("Urgente")
  const [modalVisivel, setModalVisivel] = useState(false)
  const [notaParaAtualizar, setNotaParaAtualizar] = useState(false)

  useEffect(() => {
    if (notaSelecionada.id) {
      preencherModal()
      setNotaParaAtualizar(true)
      setModalVisivel(true)
      return
    }
    setNotaParaAtualizar(false)

  },[notaSelecionada])

  // criar id no asyncstorage
  // async function gerarId(){
  //   const chaves = await AsyncStorage.getAllKeys()
  //   if (chaves.length <= 0){
  //     return 1
  //   }
  //   return chaves.length + 1
  // }

  // função com asyncstorage
  // async function salvarNotas() {
  //   const novoId = await gerarId()
  //   const nota = {
  //     id: novoId.toString(),
  //     texto: texto
  //   }
  //   await AsyncStorage.setItem(nota.id, nota.texto)
  //   mostrarNotas()

  // }

  async function salvarNotas() {
    const nota = {
      titulo: titulo,
      categoria: categoria,
      urgencia: urgencia,
      texto: texto
    }
    console.log(nota)
    await adcionarNota(nota)
    console.log("nao passeo")
    mostrarNotas()
    limpaModal()
  }

  async function modificaNotas() {
    const nota = {
      titulo: titulo,
      categoria: categoria,
      urgencia: urgencia,
      texto: texto,
      id: notaSelecionada.id
    }
    await atualizarNota(nota)
    mostrarNotas()
    limpaModal()
  }

  async function removeNota(){
    await deletarNota(notaSelecionada)
    mostrarNotas()
    limpaModal()
  }

  function preencherModal() {
    setTitulo(notaSelecionada.titulo)
    setCategoria(notaSelecionada.categoria)
    setUrgencia(notaSelecionada.urgencia)
    setTexto(notaSelecionada.texto)
  }

  function limpaModal() {
    setTitulo("")
    setCategoria("Pessoal")
    setUrgencia("")
    setTexto("")
    setNotaSelacionada({})
    setModalVisivel(false)
  }

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisivel}
        onRequestClose={() => { setModalVisivel(false) }}
      >
        <View style={estilos.centralizaModal}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={estilos.modal}>
              <Text style={estilos.modalTitulo}>Criar nota</Text>
              <Text style={estilos.modalSubTitulo}>Titulo</Text>
              <TextInput
                style={estilos.modalInput}
                onChangeText={novoTitulo => setTitulo(novoTitulo)}
                placeholder="Digite aqui o Titulo"
                value={titulo} />
              <View style={estilos.modalPicker}>
                <Picker
                  selectedValue={categoria}
                  onValueChange={(itemValue) => setCategoria(itemValue)}
                >
                  <Picker.Item label="Pessoal" value="Pessoal" />
                  <Picker.Item label="Trabalho" value="Trabalho" />
                  <Picker.Item label="Outros" value="Outros" />
                </Picker>

                <Picker
                  selectedValue={urgencia}
                  onValueChange={(itemValue) => setUrgencia(itemValue)}
                >
                  <Picker.Item label="Urgente" value="Urgente" />
                  <Picker.Item label="Esperar" value="Esperar" />
                  <Picker.Item label="Pouco" value="Pouco" />
                </Picker>
                <Text style={estilos.modalSubTitulo}>Conteudo da nota</Text>
                <TextInput
                  style={estilos.modalInput}
                  multiline={true}
                  numberOfLines={2}
                  onChangeText={novoTexto => setTexto(novoTexto)}
                  placeholder="Digite aqui seu lembrete"
                  value={texto} />

              </View>
              <View style={estilos.modalBotoes}>
                <TouchableOpacity
                  style={estilos.modalBotaoSalvar}
                  onPress={() => { notaParaAtualizar ? modificaNotas() : salvarNotas() }}
                >
                  <Text style={estilos.modalBotaoTexto}>Salvar</Text>
                </TouchableOpacity>
                {
                  notaParaAtualizar ?
                    <TouchableOpacity style={estilos.modalBotaoDeletar} onPress={() => { removeNota() }}>
                      <Text style={estilos.modalBotaoTexto}>Deletar</Text>
                    </TouchableOpacity>
                    : <></>
                }
                <TouchableOpacity style={estilos.modalBotaoCancelar} onPress={() => { limpaModal() }}>
                  <Text style={estilos.modalBotaoTexto}>Cancelar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => { setModalVisivel(true) }} style={estilos.adicionarMemo}>
        <Text style={estilos.adicionarMemoTexto}>+</Text>
      </TouchableOpacity>
    </>
  )
}

const estilos = StyleSheet.create({
  centralizaModal: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end"
  },
  modal: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
    marginTop: 8,
    marginHorizontal: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  modalTitulo: {
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 18,
  },
  modalInput: {
    fontSize: 18,
    marginBottom: 12,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#FF9A94",
  },
  modalPicker: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#EEEEEE",
    marginBottom: 12,
  },
  modalSubTitulo: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: "600"
  },
  modalBotoes: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  modalBotaoSalvar: {
    backgroundColor: "#2ea805",
    borderRadius: 5,
    padding: 8,
    width: 80,
    alignItems: "center",
  },
  modalBotaoDeletar: {
    backgroundColor: "#d62a18",
    borderRadius: 5,
    padding: 8,
    width: 80,
    alignItems: "center",
  },
  modalBotaoCancelar: {
    backgroundColor: "#057fa8",
    borderRadius: 5,
    padding: 8,
    width: 80,
    alignItems: "center",
  },
  modalBotaoTexto: {
    color: "#FFFFFF",
  },
  adicionarMemo: {
    backgroundColor: "#54ba32",
    justifyContent: "center",
    height: 64,
    width: 64,
    margin: 16,
    alignItems: "center",
    borderRadius: 9999,
    position: "absolute",
    bottom: 0,
    right: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  adicionarMemoTexto: {
    fontSize: 32,
    lineHeight: 40,
    color: "#FFFFFF",
  }
});

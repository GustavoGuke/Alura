const secoes = [
    {
        id: 1,
        titulo: 'Insira os seguintes dados',
        entradaTexto: [
            {
                id: 1,
                label: 'Nome',
                placeholder: 'Digite seu nome completo'
            },
            {
                id: 2,
                label: 'Email',
                placeholder: 'Digite seu email completo'
            },
            {
                id: 3,
                label: 'Crie uma senha',
                placeholder: 'Insira sua senha'
            },
            {
                id: 4,
                label: 'Repita a senha',
                placeholder: 'Insira sua senha'
            }
        ],
        checkbox: []
    },
    {
        id: 2,
        titulo: 'Falta pouco',
        entradaTexto: [
            {
                id: 1,
                label: 'Cep',
                placeholder: 'insira o cep'
            },
            {
                id: 2,
                label: 'Endereço',
                placeholder: 'Insira o seu endereço'
            },
            {
                id: 3,
                label: 'Número',
                placeholder: 'Insira o seu número'
            },
            {
                id: 4,
                label: 'Complemento',
                placeholder: 'Insira o seu complemento'
            },
            {
                id: 5,
                label: 'Telefone',
                placeholder: '(00) 00000-0000'
            }
        ],
        checkbox: []
    },
    {
        id: 3,
        titulo: 'Qual o seu plano?',
        entradaTexto: [],
        checkbox: [
            {
                id: 1,
                value: 'Sulamerica'
            },
            {
                id: 2,
                value: 'Unimed'
            },
            {
                id: 3,
                value: 'Bradesco'
            },
            {
                id: 4,
                value: 'Biosaúde'
            },
            {
                id: 6,
                value: 'Biovida'
            },
            {
                id: 7,
                value: 'Outros'
            },
            {
                id: 8,
                value: 'Não tenho plano'
            },
         
        ]
    }
]

export { secoes }
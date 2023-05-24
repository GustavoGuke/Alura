Imports _01primeirra_classe.ByteBank
Public Class ContaCorrente

#Region "CONSTRUTORES"
    Public Sub New(m_saldo)
        Saldo = m_saldo
    End Sub
#End Region
#Region "PROPRIEDADES"
    Public Titular As Cliente
    Public Agencia As Integer
    Public Conta As Integer
    Public retirado As Double

    ' declararção de propriedade sem a ultilização do get e set
    Public Property Depositado As Double
    Public m_Extrato As String = ""
    Public Property Extrato As String
        Get
            Return m_Extrato
        End Get
        Set(value As String)
            m_Extrato = value
        End Set
    End Property
    Private m_Saldo As Double
    Public Property Saldo As Double

        Get
            Return m_Saldo
        End Get
        Set(value As Double)
            If value < 0 Then
                m_Saldo = 0
            Else
                m_Saldo = value
            End If
        End Set
    End Property
#End Region

    'Public Function GetSaldo() As Double
    '    Return m_Saldo
    'End Function

    'Public Sub DefinirSaldo(saldoInicial)
    '    If saldoInicial < 0 Then
    '        m_Saldo = 0
    '    Else
    '        m_Saldo = saldoInicial
    '    End If
    'End Sub

#Region "METODOS"
    Public Function Sacar(valor As Double) As Boolean

        Dim retorno As Boolean
        If valor > m_Saldo Then
            retorno = False
        Else
            m_Saldo -= valor
            retirado += valor
            retorno = True
        End If

        Return retorno
    End Function

    Public Function Transferir(valor As Double, ByRef contaDestinoo As ContaCorrente) As Boolean

        Dim retorno As Boolean
        If valor > m_Saldo Then
            retorno = False
        Else
            m_Saldo -= valor
            retirado += valor
            contaDestinoo.Depositar(valor)
            retorno = True
        End If

        Return retorno
    End Function

    Public Sub Depositar(value As Double)
        m_Saldo += value
        depositado += value
    End Sub
#End Region
End Class
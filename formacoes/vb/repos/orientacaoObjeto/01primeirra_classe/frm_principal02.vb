Imports _01primeirra_classe.ByteBank
Public Class frm_principal02
    Dim contaKessilin = New ContaCorrente(180)
    Dim contagustavo = New ContaCorrente(55)


    Public Sub New()

        ' Esta chamada é requerida pelo designer.
        InitializeComponent()
        Dim kessilin As New Cliente("Kessilin", "1234")
        kessilin.profissao = "bebe"
        kessilin.cidade = "aruja"
        contaKessilin.Titular = kessilin
        Dim Gustavo As New Cliente("Gustavo", "1234")

        Gustavo.profissao = "ti"
        Gustavo.cidade = "aruja"
        contagustavo.Titular = Gustavo




        ' Adicione qualquer inicialização após a chamada InitializeComponent().

        Me.Text = "Classes"
        GroupBox1.Text = contaKessilin.Titular.nome
        GroupBox2.Text = contagustavo.Titular.nome
        btn_depositar.Text = "Depositar"
        btn_deposito_gu.Text = "Depositar"
        txt_saldo.Text = contaKessilin.Saldo.ToString
        txt_saldo_gu.Text = contagustavo.Saldo.ToString
        Label4.Text = "Numero de clientes: " + Cliente.NumeroClientes.ToString
    End Sub

    Private Sub btn_saque_Click(sender As Object, e As EventArgs) Handles btn_saque.Click

        Dim valor As Double = Val(txt_value.Text)
        Dim retornoSaque As Boolean = contaKessilin.Sacar(valor)

        If retornoSaque = False Then
            txt_resultado.Text = "Operação não pode ser realizada o valor do saque é maior que o saldo!"
        Else
            txt_saldo.Text = contaKessilin.Saldo.ToString
            txt_conta.Text = contaKessilin.retirado.ToString
            txt_resultado.Text = "Operação realizada com sucesso!"
            txt_extrato.Text += Now.ToString + " Saque: " + valor.ToString + " Saldo: " + contaKessilin.Saldo.ToString + vbCrLf
        End If
    End Sub

    Private Sub btn_depositar_Click(sender As Object, e As EventArgs) Handles btn_depositar.Click
        Dim depositardim As Double = Val(txt_value.Text)
        contaKessilin.Depositar(depositardim)
        txt_saldo.Text = contaKessilin.Saldo.ToString
        txt_deposito.Text = contaKessilin.depositado.ToString
        txt_extrato.Text += Now.ToString + " Deposito: " + depositardim.ToString + "Saldo: " + contaKessilin.Saldo.ToString + vbCrLf
    End Sub

    Private Sub btn_deposito_gu_Click(sender As Object, e As EventArgs) Handles btn_deposito_gu.Click
        Dim depositardim As Double = Val(txt_valor_gu.Text)
        contagustavo.Depositar(depositardim)
        txt_saldo_gu.Text = contagustavo.Saldo.ToString
        txt_deposito_gu.Text = contagustavo.depositado.ToString
        txt_extrato_gu.Text += Now.ToString + " Deposito: " + depositardim.ToString + "Saldo: " + contagustavo.Saldo.ToString + vbCrLf
    End Sub

    Private Sub btn_saque_gu_Click(sender As Object, e As EventArgs) Handles btn_saque_gu.Click
        Dim valor As Double = Val(txt_valor_gu.Text)
        Dim retornoSaque As Boolean = contagustavo.Sacar(valor)

        If retornoSaque = False Then
            txt_resultado_gu.Text = "Operação não pode ser realizada o valor do saque é maior que o saldo!"
        Else
            txt_saldo_gu.Text = contagustavo.Saldo.ToString
            txt_saque_gu.Text = contagustavo.retirado.ToString
            txt_resultado_gu.Text = "Operação realizada com sucesso!"
            txt_extrato_gu.Text += Now.ToString + " Saque: " + valor.ToString + " Saldo: " + contagustavo.Saldo.ToString + vbCrLf
        End If
    End Sub

    Private Sub btn_transferir_gu_Click(sender As Object, e As EventArgs) Handles btn_transferir_gu.Click
        Dim valor As Double = Val(txt_valor_gu.Text)
        Dim retornoTransferencia As Boolean = contagustavo.Transferir(valor, contaKessilin)

        If retornoTransferencia = False Then
            txt_resultado_gu.Text = "Tranferencia não pode ser realizada!"
        Else
            txt_saldo_gu.Text = contagustavo.Saldo.ToString
            txt_saldo.Text = contaKessilin.Saldo.ToString

            txt_saque_gu.Text = contagustavo.retirado.ToString

            txt_resultado_gu.Text = "Transferencia realizada com sucesso!"
            txt_extrato_gu.Text += Now.ToString + " Saque: " + valor.ToString + " Saldo: " + contagustavo.Saldo.ToString + vbCrLf
        End If
    End Sub

    Private Sub btn_transferir_Click(sender As Object, e As EventArgs) Handles btn_transferir.Click
        Dim valor As Double = Val(txt_value.Text)
        Dim retornoTransferencia As Boolean = contaKessilin.Transferir(valor, contagustavo)

        If retornoTransferencia = False Then
            txt_resultado.Text = "Tranferencia não pode ser realizada!"
        Else
            txt_saldo_gu.Text = contagustavo.Saldo.ToString
            txt_saldo.Text = contaKessilin.Saldo.ToString

            txt_conta.Text = contaKessilin.retirado.ToString

            txt_resultado.Text = "Transferencia realizada com sucesso!"
            txt_extrato.Text += Now.ToString + " Saque: " + valor.ToString + " Saldo: " + contaKessilin.Saldo.ToString + vbCrLf
        End If
    End Sub
End Class
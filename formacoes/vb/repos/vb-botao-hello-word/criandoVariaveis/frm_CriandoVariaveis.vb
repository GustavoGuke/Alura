Public Class frm_CriandoVariaveis
    Public Sub New()

        ' Esta chamada é requerida pelo designer.
        InitializeComponent()

        ' Adicione qualquer inicialização após a chamada InitializeComponent().

    End Sub

    Private Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click
        Dim anoNasc, anoAtual, idade As Integer
        anoNasc = 1994
        anoAtual = 2023
        idade = anoAtual - anoNasc

        MsgBox("Idade: " + idade.ToString, MsgBoxStyle.Information, "Mensagem info")
    End Sub
End Class

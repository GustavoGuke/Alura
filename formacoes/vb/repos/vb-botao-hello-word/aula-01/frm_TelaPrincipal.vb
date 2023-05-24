Public Class frm_TelaPrincipal
    Public Sub New()

        ' Esta chamada é requerida pelo designer.
        InitializeComponent()

        ' Adicione qualquer inicialização após a chamada InitializeComponent().

    End Sub

    Private Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click
        MsgBox("OLA MUNDO", MsgBoxStyle.Critical, "Mensagem erro")

    End Sub
End Class

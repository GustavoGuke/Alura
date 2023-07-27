Public Class frm_principal


    Public Sub New()

        ' Esta chamada é requerida pelo designer.
        InitializeComponent()

        ' Adicione qualquer inicialização após a chamada InitializeComponent().

        Me.Text = "Primeira - Classe"
        lbl_principal.Text = "primeira - Classe"
        btn_acao.Text = "Clique Aqui"
    End Sub

    Private Sub btn_acao_Click(sender As Object, e As EventArgs) Handles btn_acao.Click

    End Sub
End Class

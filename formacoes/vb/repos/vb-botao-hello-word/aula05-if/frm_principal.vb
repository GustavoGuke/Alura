Public Class Form1
    Public Sub New()

        ' Esta chamada é requerida pelo designer.
        InitializeComponent()

        btn_principal.Text = "Checagem de permissão de entrada"
        ' Adicione qualquer inicialização após a chamada InitializeComponent().

    End Sub

    Private Sub Button1_Click(sender As Object, e As EventArgs) Handles btn_principal.Click
        Dim idade As Integer
        idade = txt_idade.Text

        If (idade >= 18) Then
            txt_resultado.ForeColor = Color.Green
            txt_resultado.Text = "Seja bem vindo"
        ElseIf (idade < 18 And idade >= 16 And chk_responsavel.Checked = True) Then
            txt_resultado.ForeColor = Color.Green
            txt_resultado.Text = "Seja bem vindo, 'menor acompanhado'"
        Else
            txt_resultado.ForeColor = Color.red
            txt_resultado.Text = "Não é permitido entrada de menores sem o responsável"
        End If
    End Sub
End Class

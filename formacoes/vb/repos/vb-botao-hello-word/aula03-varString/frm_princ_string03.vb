Public Class frm_princ_string03
    Dim lista_curso As String
    Private Sub Button1_Click(sender As Object, e As EventArgs) Handles btn_char.Click
        Dim valo_char As Integer = txt_char.Text
        Dim codChr As Char = Chr(valo_char)
        txt_res.Text = "O numero digitado refere a seguinte letra em ascii = " + codChr

    End Sub

    Private Sub btn_curso_Click(sender As Object, e As EventArgs) Handles btn_curso.Click
        Dim new_curso As String = txt_curso.Text
        lista_curso = lista_curso + new_curso + vbCrLf
        txt_curso.Text = ""
        txt_lista_curso.Text = lista_curso

    End Sub
End Class

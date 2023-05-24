Public Class frm_principal
    Public Sub New()

        ' Esta chamada é requerida pelo designer.
        InitializeComponent()

        ' Adicione qualquer inicialização após a chamada InitializeComponent().

    End Sub

    Private Sub btn_calcular_Click(sender As Object, e As EventArgs) Handles btn_calcular.Click
        Dim invest As Double = Val(txt_aplicado.Text)
        Dim juros As Double = Val(txt_juros.Text)
        Dim periodo As Integer = Val(txt_periodo.Text)
        Dim contador As Integer

        While contador < periodo
            invest = (invest + (invest * (juros / 100)))
            contador += 1
        End While

        MsgBox("O valor de juros no periodo de " + periodo.ToString() + " meses: " + invest.ToString())
    End Sub

    Private Sub Button1_Click(sender As Object, e As EventArgs) Handles btn_while_for.Click
        Dim contador As Integer
        txt_for.Text = ""
        txt_while.Text = ""

        While contador <= 10
            txt_while.Text += "-" + contador.ToString()
            contador += 1
        End While

        For i As Integer = 0 To 10
            txt_for.Text += "-" + i.ToString()
        Next
    End Sub

    Private Sub Button1_Click_1(sender As Object, e As EventArgs) Handles Button1.Click
        Dim invest As Double = Val(txt_aplicado_for.Text)
        Dim juros As Double = Val(txt_juros_for.Text)
        Dim periodo As Integer = Val(txt_periodo_for.Text)

        For i As Integer = 1 To periodo
            invest = (invest + (invest * (juros / 100)))
        Next

        MsgBox("O valor de juros no periodo de " + periodo.ToString() + " meses: " + invest.ToString())
    End Sub

    Private Sub btn_rendimento_Click(sender As Object, e As EventArgs) Handles btn_rendimento.Click
        Dim invest As Double = Val(txt_aplic_encadeado.Text)
        Dim juros As Double = Val(txt_juros_encadeado.Text)
        Dim anos As Integer = Val(txt_ano_encadeado.Text)
        Dim acrescimo As Double = Val(txt_acresc_encadeado.Text)
        Dim contador As Integer
        Dim extrato As String = ""

        For i As Integer = 1 To anos
            For j As Integer = 1 To 12
                invest = (invest + (invest * (juros / 100)))
                extrato += "Saldo do mes: " + contador.ToString() + "é: " + invest.ToString() +
                    "quando a taxa" + juros.ToString + "% mes" + vbCrLf
                contador += 1
            Next
            juros = juros + (juros * acrescimo / 100)
        Next
        txt_res.Text = extrato
    End Sub

    Private Sub btn_tab_Click(sender As Object, e As EventArgs) Handles btn_tab.Click
        Dim valor As Integer = Val(txt_tab.Text)
        Dim res As String = ""

        For i As Integer = 0 To 9
            Dim mult As Integer = i * valor
            res += i.ToString + " * " + valor.ToString + " = " + mult.ToString + vbCrLf
        Next
        txt_tab_res.Text = res

    End Sub
End Class

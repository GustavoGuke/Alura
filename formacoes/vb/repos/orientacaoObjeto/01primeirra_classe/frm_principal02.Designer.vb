<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class frm_principal02
    Inherits System.Windows.Forms.Form

    'Descartar substituições de formulário para limpar a lista de componentes.
    <System.Diagnostics.DebuggerNonUserCode()> _
    Protected Overrides Sub Dispose(ByVal disposing As Boolean)
        Try
            If disposing AndAlso components IsNot Nothing Then
                components.Dispose()
            End If
        Finally
            MyBase.Dispose(disposing)
        End Try
    End Sub

    'Exigido pelo Windows Form Designer
    Private components As System.ComponentModel.IContainer

    'OBSERVAÇÃO: o procedimento a seguir é exigido pelo Windows Form Designer
    'Pode ser modificado usando o Windows Form Designer.  
    'Não o modifique usando o editor de códigos.
    <System.Diagnostics.DebuggerStepThrough()> _
    Private Sub InitializeComponent()
        Me.btn_saque = New System.Windows.Forms.Button()
        Me.lbl_value = New System.Windows.Forms.Label()
        Me.txt_value = New System.Windows.Forms.TextBox()
        Me.txt_conta = New System.Windows.Forms.TextBox()
        Me.lbl_valor = New System.Windows.Forms.Label()
        Me.txt_resultado = New System.Windows.Forms.TextBox()
        Me.lbl_resultado = New System.Windows.Forms.Label()
        Me.txt_saldo = New System.Windows.Forms.TextBox()
        Me.lbl_saldo = New System.Windows.Forms.Label()
        Me.btn_depositar = New System.Windows.Forms.Button()
        Me.txt_deposito = New System.Windows.Forms.TextBox()
        Me.lbl_deposito = New System.Windows.Forms.Label()
        Me.txt_extrato = New System.Windows.Forms.TextBox()
        Me.GroupBox1 = New System.Windows.Forms.GroupBox()
        Me.btn_transferir = New System.Windows.Forms.Button()
        Me.GroupBox2 = New System.Windows.Forms.GroupBox()
        Me.btn_transferir_gu = New System.Windows.Forms.Button()
        Me.txt_extrato_gu = New System.Windows.Forms.TextBox()
        Me.btn_saque_gu = New System.Windows.Forms.Button()
        Me.Label1 = New System.Windows.Forms.Label()
        Me.Label2 = New System.Windows.Forms.Label()
        Me.txt_deposito_gu = New System.Windows.Forms.TextBox()
        Me.txt_valor_gu = New System.Windows.Forms.TextBox()
        Me.btn_deposito_gu = New System.Windows.Forms.Button()
        Me.txt_saque_gu = New System.Windows.Forms.TextBox()
        Me.txt_saldo_gu = New System.Windows.Forms.TextBox()
        Me.Label3 = New System.Windows.Forms.Label()
        Me.lbl_saldo_gu = New System.Windows.Forms.Label()
        Me.txt_resultado_gu = New System.Windows.Forms.TextBox()
        Me.Label5 = New System.Windows.Forms.Label()
        Me.Label4 = New System.Windows.Forms.Label()
        Me.GroupBox1.SuspendLayout()
        Me.GroupBox2.SuspendLayout()
        Me.SuspendLayout()
        '
        'btn_saque
        '
        Me.btn_saque.Location = New System.Drawing.Point(58, 229)
        Me.btn_saque.Name = "btn_saque"
        Me.btn_saque.Size = New System.Drawing.Size(162, 29)
        Me.btn_saque.TabIndex = 0
        Me.btn_saque.Text = "Saque"
        Me.btn_saque.UseVisualStyleBackColor = True
        '
        'lbl_value
        '
        Me.lbl_value.AutoSize = True
        Me.lbl_value.Location = New System.Drawing.Point(60, 123)
        Me.lbl_value.Name = "lbl_value"
        Me.lbl_value.Size = New System.Drawing.Size(46, 20)
        Me.lbl_value.TabIndex = 1
        Me.lbl_value.Text = "Valor:"
        '
        'txt_value
        '
        Me.txt_value.Location = New System.Drawing.Point(60, 146)
        Me.txt_value.Name = "txt_value"
        Me.txt_value.Size = New System.Drawing.Size(162, 27)
        Me.txt_value.TabIndex = 2
        '
        'txt_conta
        '
        Me.txt_conta.Location = New System.Drawing.Point(60, 404)
        Me.txt_conta.Name = "txt_conta"
        Me.txt_conta.ReadOnly = True
        Me.txt_conta.Size = New System.Drawing.Size(162, 27)
        Me.txt_conta.TabIndex = 3
        '
        'lbl_valor
        '
        Me.lbl_valor.AutoSize = True
        Me.lbl_valor.Location = New System.Drawing.Point(60, 381)
        Me.lbl_valor.Name = "lbl_valor"
        Me.lbl_valor.Size = New System.Drawing.Size(104, 20)
        Me.lbl_valor.TabIndex = 4
        Me.lbl_valor.Text = "Valor Retirado"
        '
        'txt_resultado
        '
        Me.txt_resultado.Location = New System.Drawing.Point(60, 457)
        Me.txt_resultado.Name = "txt_resultado"
        Me.txt_resultado.ReadOnly = True
        Me.txt_resultado.Size = New System.Drawing.Size(510, 27)
        Me.txt_resultado.TabIndex = 5
        '
        'lbl_resultado
        '
        Me.lbl_resultado.AutoSize = True
        Me.lbl_resultado.Location = New System.Drawing.Point(58, 434)
        Me.lbl_resultado.Name = "lbl_resultado"
        Me.lbl_resultado.Size = New System.Drawing.Size(78, 20)
        Me.lbl_resultado.TabIndex = 6
        Me.lbl_resultado.Text = "Resultado:"
        '
        'txt_saldo
        '
        Me.txt_saldo.Location = New System.Drawing.Point(60, 90)
        Me.txt_saldo.Name = "txt_saldo"
        Me.txt_saldo.ReadOnly = True
        Me.txt_saldo.Size = New System.Drawing.Size(162, 27)
        Me.txt_saldo.TabIndex = 8
        '
        'lbl_saldo
        '
        Me.lbl_saldo.AutoSize = True
        Me.lbl_saldo.Location = New System.Drawing.Point(60, 67)
        Me.lbl_saldo.Name = "lbl_saldo"
        Me.lbl_saldo.Size = New System.Drawing.Size(47, 20)
        Me.lbl_saldo.TabIndex = 7
        Me.lbl_saldo.Text = "Saldo"
        '
        'btn_depositar
        '
        Me.btn_depositar.Location = New System.Drawing.Point(58, 190)
        Me.btn_depositar.Name = "btn_depositar"
        Me.btn_depositar.Size = New System.Drawing.Size(162, 29)
        Me.btn_depositar.TabIndex = 9
        Me.btn_depositar.UseVisualStyleBackColor = True
        '
        'txt_deposito
        '
        Me.txt_deposito.Location = New System.Drawing.Point(60, 347)
        Me.txt_deposito.Name = "txt_deposito"
        Me.txt_deposito.ReadOnly = True
        Me.txt_deposito.Size = New System.Drawing.Size(162, 27)
        Me.txt_deposito.TabIndex = 10
        '
        'lbl_deposito
        '
        Me.lbl_deposito.AutoSize = True
        Me.lbl_deposito.Location = New System.Drawing.Point(58, 324)
        Me.lbl_deposito.Name = "lbl_deposito"
        Me.lbl_deposito.Size = New System.Drawing.Size(106, 20)
        Me.lbl_deposito.TabIndex = 11
        Me.lbl_deposito.Text = "Valor deposito"
        '
        'txt_extrato
        '
        Me.txt_extrato.Location = New System.Drawing.Point(252, 80)
        Me.txt_extrato.Multiline = True
        Me.txt_extrato.Name = "txt_extrato"
        Me.txt_extrato.ReadOnly = True
        Me.txt_extrato.ScrollBars = System.Windows.Forms.ScrollBars.Vertical
        Me.txt_extrato.Size = New System.Drawing.Size(383, 294)
        Me.txt_extrato.TabIndex = 12
        '
        'GroupBox1
        '
        Me.GroupBox1.Controls.Add(Me.btn_transferir)
        Me.GroupBox1.Controls.Add(Me.txt_extrato)
        Me.GroupBox1.Controls.Add(Me.btn_saque)
        Me.GroupBox1.Controls.Add(Me.lbl_deposito)
        Me.GroupBox1.Controls.Add(Me.lbl_value)
        Me.GroupBox1.Controls.Add(Me.txt_deposito)
        Me.GroupBox1.Controls.Add(Me.txt_value)
        Me.GroupBox1.Controls.Add(Me.btn_depositar)
        Me.GroupBox1.Controls.Add(Me.txt_conta)
        Me.GroupBox1.Controls.Add(Me.txt_saldo)
        Me.GroupBox1.Controls.Add(Me.lbl_valor)
        Me.GroupBox1.Controls.Add(Me.lbl_saldo)
        Me.GroupBox1.Controls.Add(Me.txt_resultado)
        Me.GroupBox1.Controls.Add(Me.lbl_resultado)
        Me.GroupBox1.Location = New System.Drawing.Point(12, 33)
        Me.GroupBox1.Name = "GroupBox1"
        Me.GroupBox1.Size = New System.Drawing.Size(674, 506)
        Me.GroupBox1.TabIndex = 13
        Me.GroupBox1.TabStop = False
        Me.GroupBox1.Text = "Gp_Kessilin"
        '
        'btn_transferir
        '
        Me.btn_transferir.Location = New System.Drawing.Point(58, 270)
        Me.btn_transferir.Name = "btn_transferir"
        Me.btn_transferir.Size = New System.Drawing.Size(162, 29)
        Me.btn_transferir.TabIndex = 13
        Me.btn_transferir.Text = "Transferir"
        Me.btn_transferir.UseVisualStyleBackColor = True
        '
        'GroupBox2
        '
        Me.GroupBox2.Controls.Add(Me.btn_transferir_gu)
        Me.GroupBox2.Controls.Add(Me.txt_extrato_gu)
        Me.GroupBox2.Controls.Add(Me.btn_saque_gu)
        Me.GroupBox2.Controls.Add(Me.Label1)
        Me.GroupBox2.Controls.Add(Me.Label2)
        Me.GroupBox2.Controls.Add(Me.txt_deposito_gu)
        Me.GroupBox2.Controls.Add(Me.txt_valor_gu)
        Me.GroupBox2.Controls.Add(Me.btn_deposito_gu)
        Me.GroupBox2.Controls.Add(Me.txt_saque_gu)
        Me.GroupBox2.Controls.Add(Me.txt_saldo_gu)
        Me.GroupBox2.Controls.Add(Me.Label3)
        Me.GroupBox2.Controls.Add(Me.lbl_saldo_gu)
        Me.GroupBox2.Controls.Add(Me.txt_resultado_gu)
        Me.GroupBox2.Controls.Add(Me.Label5)
        Me.GroupBox2.Location = New System.Drawing.Point(722, 33)
        Me.GroupBox2.Name = "GroupBox2"
        Me.GroupBox2.Size = New System.Drawing.Size(674, 506)
        Me.GroupBox2.TabIndex = 14
        Me.GroupBox2.TabStop = False
        Me.GroupBox2.Text = "Gp_Gustavo"
        '
        'btn_transferir_gu
        '
        Me.btn_transferir_gu.Location = New System.Drawing.Point(60, 270)
        Me.btn_transferir_gu.Name = "btn_transferir_gu"
        Me.btn_transferir_gu.Size = New System.Drawing.Size(162, 29)
        Me.btn_transferir_gu.TabIndex = 13
        Me.btn_transferir_gu.Text = "Transferir"
        Me.btn_transferir_gu.UseVisualStyleBackColor = True
        '
        'txt_extrato_gu
        '
        Me.txt_extrato_gu.Location = New System.Drawing.Point(252, 80)
        Me.txt_extrato_gu.Multiline = True
        Me.txt_extrato_gu.Name = "txt_extrato_gu"
        Me.txt_extrato_gu.ReadOnly = True
        Me.txt_extrato_gu.ScrollBars = System.Windows.Forms.ScrollBars.Vertical
        Me.txt_extrato_gu.Size = New System.Drawing.Size(383, 294)
        Me.txt_extrato_gu.TabIndex = 12
        '
        'btn_saque_gu
        '
        Me.btn_saque_gu.Location = New System.Drawing.Point(60, 229)
        Me.btn_saque_gu.Name = "btn_saque_gu"
        Me.btn_saque_gu.Size = New System.Drawing.Size(162, 29)
        Me.btn_saque_gu.TabIndex = 0
        Me.btn_saque_gu.Text = "Saque"
        Me.btn_saque_gu.UseVisualStyleBackColor = True
        '
        'Label1
        '
        Me.Label1.AutoSize = True
        Me.Label1.Location = New System.Drawing.Point(58, 332)
        Me.Label1.Name = "Label1"
        Me.Label1.Size = New System.Drawing.Size(106, 20)
        Me.Label1.TabIndex = 11
        Me.Label1.Text = "Valor deposito"
        '
        'Label2
        '
        Me.Label2.AutoSize = True
        Me.Label2.Location = New System.Drawing.Point(60, 123)
        Me.Label2.Name = "Label2"
        Me.Label2.Size = New System.Drawing.Size(46, 20)
        Me.Label2.TabIndex = 1
        Me.Label2.Text = "Valor:"
        '
        'txt_deposito_gu
        '
        Me.txt_deposito_gu.Location = New System.Drawing.Point(60, 355)
        Me.txt_deposito_gu.Name = "txt_deposito_gu"
        Me.txt_deposito_gu.ReadOnly = True
        Me.txt_deposito_gu.Size = New System.Drawing.Size(162, 27)
        Me.txt_deposito_gu.TabIndex = 10
        '
        'txt_valor_gu
        '
        Me.txt_valor_gu.Location = New System.Drawing.Point(60, 146)
        Me.txt_valor_gu.Name = "txt_valor_gu"
        Me.txt_valor_gu.Size = New System.Drawing.Size(162, 27)
        Me.txt_valor_gu.TabIndex = 2
        '
        'btn_deposito_gu
        '
        Me.btn_deposito_gu.Location = New System.Drawing.Point(60, 190)
        Me.btn_deposito_gu.Name = "btn_deposito_gu"
        Me.btn_deposito_gu.Size = New System.Drawing.Size(162, 29)
        Me.btn_deposito_gu.TabIndex = 9
        Me.btn_deposito_gu.UseVisualStyleBackColor = True
        '
        'txt_saque_gu
        '
        Me.txt_saque_gu.Location = New System.Drawing.Point(60, 408)
        Me.txt_saque_gu.Name = "txt_saque_gu"
        Me.txt_saque_gu.ReadOnly = True
        Me.txt_saque_gu.Size = New System.Drawing.Size(162, 27)
        Me.txt_saque_gu.TabIndex = 3
        '
        'txt_saldo_gu
        '
        Me.txt_saldo_gu.Location = New System.Drawing.Point(60, 90)
        Me.txt_saldo_gu.Name = "txt_saldo_gu"
        Me.txt_saldo_gu.ReadOnly = True
        Me.txt_saldo_gu.Size = New System.Drawing.Size(162, 27)
        Me.txt_saldo_gu.TabIndex = 8
        '
        'Label3
        '
        Me.Label3.AutoSize = True
        Me.Label3.Location = New System.Drawing.Point(60, 385)
        Me.Label3.Name = "Label3"
        Me.Label3.Size = New System.Drawing.Size(104, 20)
        Me.Label3.TabIndex = 4
        Me.Label3.Text = "Valor Retirado"
        '
        'lbl_saldo_gu
        '
        Me.lbl_saldo_gu.AutoSize = True
        Me.lbl_saldo_gu.Location = New System.Drawing.Point(60, 67)
        Me.lbl_saldo_gu.Name = "lbl_saldo_gu"
        Me.lbl_saldo_gu.Size = New System.Drawing.Size(47, 20)
        Me.lbl_saldo_gu.TabIndex = 7
        Me.lbl_saldo_gu.Text = "Saldo"
        '
        'txt_resultado_gu
        '
        Me.txt_resultado_gu.Location = New System.Drawing.Point(60, 473)
        Me.txt_resultado_gu.Name = "txt_resultado_gu"
        Me.txt_resultado_gu.ReadOnly = True
        Me.txt_resultado_gu.Size = New System.Drawing.Size(510, 27)
        Me.txt_resultado_gu.TabIndex = 5
        '
        'Label5
        '
        Me.Label5.AutoSize = True
        Me.Label5.Location = New System.Drawing.Point(60, 450)
        Me.Label5.Name = "Label5"
        Me.Label5.Size = New System.Drawing.Size(78, 20)
        Me.Label5.TabIndex = 6
        Me.Label5.Text = "Resultado:"
        '
        'Label4
        '
        Me.Label4.AutoSize = True
        Me.Label4.Location = New System.Drawing.Point(879, 12)
        Me.Label4.Name = "Label4"
        Me.Label4.Size = New System.Drawing.Size(53, 20)
        Me.Label4.TabIndex = 15
        Me.Label4.Text = "Label4"
        '
        'frm_principal02
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(8.0!, 20.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(1490, 670)
        Me.Controls.Add(Me.Label4)
        Me.Controls.Add(Me.GroupBox2)
        Me.Controls.Add(Me.GroupBox1)
        Me.Name = "frm_principal02"
        Me.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen
        Me.Text = "frm_principal02"
        Me.GroupBox1.ResumeLayout(False)
        Me.GroupBox1.PerformLayout()
        Me.GroupBox2.ResumeLayout(False)
        Me.GroupBox2.PerformLayout()
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub

    Friend WithEvents btn_saque As Button
    Friend WithEvents lbl_value As Label
    Friend WithEvents txt_value As TextBox
    Friend WithEvents txt_conta As TextBox
    Friend WithEvents lbl_valor As Label
    Friend WithEvents txt_resultado As TextBox
    Friend WithEvents lbl_resultado As Label
    Friend WithEvents txt_saldo As TextBox
    Friend WithEvents lbl_saldo As Label
    Friend WithEvents btn_depositar As Button
    Friend WithEvents txt_deposito As TextBox
    Friend WithEvents lbl_deposito As Label
    Friend WithEvents txt_extrato As TextBox
    Friend WithEvents GroupBox1 As GroupBox
    Friend WithEvents GroupBox2 As GroupBox
    Friend WithEvents txt_extrato_gu As TextBox
    Friend WithEvents btn_saque_gu As Button
    Friend WithEvents Label1 As Label
    Friend WithEvents Label2 As Label
    Friend WithEvents txt_deposito_gu As TextBox
    Friend WithEvents txt_valor_gu As TextBox
    Friend WithEvents btn_deposito_gu As Button
    Friend WithEvents txt_saque_gu As TextBox
    Friend WithEvents txt_saldo_gu As TextBox
    Friend WithEvents Label3 As Label
    Friend WithEvents lbl_saldo_gu As Label
    Friend WithEvents txt_resultado_gu As TextBox
    Friend WithEvents Label5 As Label
    Friend WithEvents btn_transferir As Button
    Friend WithEvents btn_transferir_gu As Button
    Friend WithEvents Label4 As Label
End Class

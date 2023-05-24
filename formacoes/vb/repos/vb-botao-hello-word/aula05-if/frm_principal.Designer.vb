<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()>
Partial Class Form1
    Inherits System.Windows.Forms.Form

    'Form overrides dispose to clean up the component list.
    <System.Diagnostics.DebuggerNonUserCode()>
    Protected Overrides Sub Dispose(ByVal disposing As Boolean)
        Try
            If disposing AndAlso components IsNot Nothing Then
                components.Dispose()
            End If
        Finally
            MyBase.Dispose(disposing)
        End Try
    End Sub

    'Required by the Windows Form Designer
    Private components As System.ComponentModel.IContainer

    'NOTE: The following procedure is required by the Windows Form Designer
    'It can be modified using the Windows Form Designer.  
    'Do not modify it using the code editor.
    <System.Diagnostics.DebuggerStepThrough()>
    Private Sub InitializeComponent()
        Me.btn_principal = New System.Windows.Forms.Button()
        Me.txt_idade = New System.Windows.Forms.TextBox()
        Me.txt_resultado = New System.Windows.Forms.TextBox()
        Me.lbl_idade = New System.Windows.Forms.Label()
        Me.Label1 = New System.Windows.Forms.Label()
        Me.chk_responsavel = New System.Windows.Forms.CheckBox()
        Me.Label2 = New System.Windows.Forms.Label()
        Me.SuspendLayout()
        '
        'btn_principal
        '
        Me.btn_principal.Location = New System.Drawing.Point(117, 183)
        Me.btn_principal.Name = "btn_principal"
        Me.btn_principal.Size = New System.Drawing.Size(438, 35)
        Me.btn_principal.TabIndex = 0
        Me.btn_principal.Text = "CHECAGEM"
        Me.btn_principal.UseVisualStyleBackColor = True
        '
        'txt_idade
        '
        Me.txt_idade.Location = New System.Drawing.Point(80, 29)
        Me.txt_idade.Name = "txt_idade"
        Me.txt_idade.Size = New System.Drawing.Size(125, 27)
        Me.txt_idade.TabIndex = 1
        '
        'txt_resultado
        '
        Me.txt_resultado.Location = New System.Drawing.Point(132, 103)
        Me.txt_resultado.Name = "txt_resultado"
        Me.txt_resultado.Size = New System.Drawing.Size(656, 27)
        Me.txt_resultado.TabIndex = 2
        '
        'lbl_idade
        '
        Me.lbl_idade.AutoSize = True
        Me.lbl_idade.Font = New System.Drawing.Font("Segoe UI", 12.0!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point)
        Me.lbl_idade.Location = New System.Drawing.Point(-4, 29)
        Me.lbl_idade.Name = "lbl_idade"
        Me.lbl_idade.Size = New System.Drawing.Size(78, 28)
        Me.lbl_idade.TabIndex = 3
        Me.lbl_idade.Text = "IDADE:"
        '
        'Label1
        '
        Me.Label1.AutoSize = True
        Me.Label1.Font = New System.Drawing.Font("Segoe UI", 12.0!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point)
        Me.Label1.Location = New System.Drawing.Point(-4, 99)
        Me.Label1.Name = "Label1"
        Me.Label1.Size = New System.Drawing.Size(130, 28)
        Me.Label1.TabIndex = 4
        Me.Label1.Text = "RESULTADO:"
        '
        'chk_responsavel
        '
        Me.chk_responsavel.AutoSize = True
        Me.chk_responsavel.Location = New System.Drawing.Point(227, 70)
        Me.chk_responsavel.Name = "chk_responsavel"
        Me.chk_responsavel.Size = New System.Drawing.Size(18, 17)
        Me.chk_responsavel.TabIndex = 5
        Me.chk_responsavel.UseVisualStyleBackColor = True
        '
        'Label2
        '
        Me.Label2.AutoSize = True
        Me.Label2.Font = New System.Drawing.Font("Segoe UI", 12.0!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point)
        Me.Label2.Location = New System.Drawing.Point(-4, 60)
        Me.Label2.Name = "Label2"
        Me.Label2.Size = New System.Drawing.Size(225, 28)
        Me.Label2.TabIndex = 6
        Me.Label2.Text = "C/ RESPONSÁVEL  18+"
        '
        'Form1
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(8.0!, 20.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(800, 450)
        Me.Controls.Add(Me.Label2)
        Me.Controls.Add(Me.chk_responsavel)
        Me.Controls.Add(Me.Label1)
        Me.Controls.Add(Me.lbl_idade)
        Me.Controls.Add(Me.txt_resultado)
        Me.Controls.Add(Me.txt_idade)
        Me.Controls.Add(Me.btn_principal)
        Me.Name = "Form1"
        Me.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen
        Me.Text = "Tela Principal"
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub

    Friend WithEvents btn_principal As Button
    Friend WithEvents txt_idade As TextBox
    Friend WithEvents txt_resultado As TextBox
    Friend WithEvents lbl_idade As Label
    Friend WithEvents Label1 As Label
    Friend WithEvents chk_responsavel As CheckBox
    Friend WithEvents Label2 As Label
End Class

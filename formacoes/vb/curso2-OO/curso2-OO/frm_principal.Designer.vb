<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()>
Partial Class frm_principal
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
        Me.lbl_principal = New System.Windows.Forms.Label()
        Me.btn_acao = New System.Windows.Forms.Button()
        Me.SuspendLayout()
        '
        'lbl_principal
        '
        Me.lbl_principal.AutoSize = True
        Me.lbl_principal.Location = New System.Drawing.Point(12, 9)
        Me.lbl_principal.Name = "lbl_principal"
        Me.lbl_principal.Size = New System.Drawing.Size(90, 20)
        Me.lbl_principal.TabIndex = 0
        Me.lbl_principal.Text = "lbl_principal"
        '
        'btn_acao
        '
        Me.btn_acao.Location = New System.Drawing.Point(58, 138)
        Me.btn_acao.Name = "btn_acao"
        Me.btn_acao.Size = New System.Drawing.Size(94, 29)
        Me.btn_acao.TabIndex = 1
        Me.btn_acao.Text = "Button1"
        Me.btn_acao.UseVisualStyleBackColor = True
        '
        'frm_principal
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(8.0!, 20.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(800, 450)
        Me.Controls.Add(Me.btn_acao)
        Me.Controls.Add(Me.lbl_principal)
        Me.Name = "frm_principal"
        Me.Text = "Form1"
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub

    Friend WithEvents lbl_principal As Label
    Friend WithEvents btn_acao As Button
End Class

<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()>
Partial Class frm_princ_string03
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

    Public Sub New()

        ' Esta chamada é requerida pelo designer.
        InitializeComponent()
        Me.Text = "projeto aula 03"
        ' Adicione qualquer inicialização após a chamada InitializeComponent().

    End Sub

    'NOTE: The following procedure is required by the Windows Form Designer
    'It can be modified using the Windows Form Designer.  
    'Do not modify it using the code editor.
    <System.Diagnostics.DebuggerStepThrough()>
    Private Sub InitializeComponent()
        Me.btn_char = New System.Windows.Forms.Button()
        Me.Label1 = New System.Windows.Forms.Label()
        Me.txt_char = New System.Windows.Forms.TextBox()
        Me.txt_res = New System.Windows.Forms.TextBox()
        Me.lbl_curso = New System.Windows.Forms.Label()
        Me.txt_curso = New System.Windows.Forms.TextBox()
        Me.btn_curso = New System.Windows.Forms.Button()
        Me.txt_lista_curso = New System.Windows.Forms.TextBox()
        Me.SuspendLayout()
        '
        'btn_char
        '
        Me.btn_char.Font = New System.Drawing.Font("Segoe UI", 12.0!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point)
        Me.btn_char.Location = New System.Drawing.Point(124, 67)
        Me.btn_char.Name = "btn_char"
        Me.btn_char.Size = New System.Drawing.Size(145, 45)
        Me.btn_char.TabIndex = 0
        Me.btn_char.Text = "converter"
        Me.btn_char.UseVisualStyleBackColor = True
        '
        'Label1
        '
        Me.Label1.AutoSize = True
        Me.Label1.Font = New System.Drawing.Font("Segoe UI", 13.8!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point)
        Me.Label1.Location = New System.Drawing.Point(12, 0)
        Me.Label1.Name = "Label1"
        Me.Label1.Size = New System.Drawing.Size(373, 31)
        Me.Label1.TabIndex = 1
        Me.Label1.Text = "Converte numero em codigo ascii"
        '
        'txt_char
        '
        Me.txt_char.Location = New System.Drawing.Point(73, 34)
        Me.txt_char.MaxLength = 4000
        Me.txt_char.Name = "txt_char"
        Me.txt_char.Size = New System.Drawing.Size(250, 27)
        Me.txt_char.TabIndex = 2
        '
        'txt_res
        '
        Me.txt_res.Location = New System.Drawing.Point(12, 118)
        Me.txt_res.Name = "txt_res"
        Me.txt_res.Size = New System.Drawing.Size(610, 27)
        Me.txt_res.TabIndex = 3
        '
        'lbl_curso
        '
        Me.lbl_curso.AutoSize = True
        Me.lbl_curso.Font = New System.Drawing.Font("Segoe UI", 13.8!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point)
        Me.lbl_curso.Location = New System.Drawing.Point(12, 173)
        Me.lbl_curso.Name = "lbl_curso"
        Me.lbl_curso.Size = New System.Drawing.Size(167, 31)
        Me.lbl_curso.TabIndex = 4
        Me.lbl_curso.Text = "Curso favorito"
        '
        'txt_curso
        '
        Me.txt_curso.Location = New System.Drawing.Point(12, 212)
        Me.txt_curso.Name = "txt_curso"
        Me.txt_curso.Size = New System.Drawing.Size(489, 27)
        Me.txt_curso.TabIndex = 5
        '
        'btn_curso
        '
        Me.btn_curso.Font = New System.Drawing.Font("Segoe UI", 10.2!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point)
        Me.btn_curso.Location = New System.Drawing.Point(507, 212)
        Me.btn_curso.Name = "btn_curso"
        Me.btn_curso.Size = New System.Drawing.Size(185, 160)
        Me.btn_curso.TabIndex = 6
        Me.btn_curso.Text = "Adicionar"
        Me.btn_curso.UseVisualStyleBackColor = True
        '
        'txt_lista_curso
        '
        Me.txt_lista_curso.Location = New System.Drawing.Point(12, 247)
        Me.txt_lista_curso.Multiline = True
        Me.txt_lista_curso.Name = "txt_lista_curso"
        Me.txt_lista_curso.ScrollBars = System.Windows.Forms.ScrollBars.Vertical
        Me.txt_lista_curso.Size = New System.Drawing.Size(489, 125)
        Me.txt_lista_curso.TabIndex = 7
        '
        'frm_princ_string03
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(8.0!, 20.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(704, 384)
        Me.Controls.Add(Me.txt_lista_curso)
        Me.Controls.Add(Me.btn_curso)
        Me.Controls.Add(Me.txt_curso)
        Me.Controls.Add(Me.lbl_curso)
        Me.Controls.Add(Me.txt_res)
        Me.Controls.Add(Me.txt_char)
        Me.Controls.Add(Me.Label1)
        Me.Controls.Add(Me.btn_char)
        Me.Name = "frm_princ_string03"
        Me.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen
        Me.Text = "Tela Principal"
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub

    Friend WithEvents btn_char As Button
    Friend WithEvents Label1 As Label
    Friend WithEvents txt_char As TextBox
    Friend WithEvents txt_res As TextBox
    Friend WithEvents lbl_curso As Label
    Friend WithEvents txt_curso As TextBox
    Friend WithEvents btn_curso As Button
    Friend WithEvents txt_lista_curso As TextBox
End Class

namespace WinFormsApp1
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.label1 = new System.Windows.Forms.Label();
            this.txtSicaklikBilgisi = new System.Windows.Forms.TextBox();
            this.cmbKaynakSicBir = new System.Windows.Forms.ComboBox();
            this.label2 = new System.Windows.Forms.Label();
            this.cmbDonSicBir = new System.Windows.Forms.ComboBox();
            this.txtSonuc = new System.Windows.Forms.TextBox();
            this.btnDonustur = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.label1.Location = new System.Drawing.Point(12, 43);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(326, 21);
            this.label1.TabIndex = 0;
            this.label1.Text = "Dönüştürmek istediğiniz sıcaklığı giriniz :";
            // 
            // txtSicaklikBilgisi
            // 
            this.txtSicaklikBilgisi.Location = new System.Drawing.Point(343, 43);
            this.txtSicaklikBilgisi.Name = "txtSicaklikBilgisi";
            this.txtSicaklikBilgisi.Size = new System.Drawing.Size(153, 23);
            this.txtSicaklikBilgisi.TabIndex = 1;
            // 
            // cmbKaynakSicBir
            // 
            this.cmbKaynakSicBir.FormattingEnabled = true;
            this.cmbKaynakSicBir.Items.AddRange(new object[] {
            "Celcius",
            "Fahrenheit",
            "Kelvin"});
            this.cmbKaynakSicBir.Location = new System.Drawing.Point(519, 43);
            this.cmbKaynakSicBir.Name = "cmbKaynakSicBir";
            this.cmbKaynakSicBir.Size = new System.Drawing.Size(130, 23);
            this.cmbKaynakSicBir.TabIndex = 2;
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.label2.Location = new System.Drawing.Point(12, 98);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(228, 21);
            this.label2.TabIndex = 3;
            this.label2.Text = "Hangi birime dönüştüreyim?";
            // 
            // cmbDonSicBir
            // 
            this.cmbDonSicBir.FormattingEnabled = true;
            this.cmbDonSicBir.Items.AddRange(new object[] {
            "Celcius",
            "Fahrenheit",
            "Kelvin"});
            this.cmbDonSicBir.Location = new System.Drawing.Point(343, 96);
            this.cmbDonSicBir.Name = "cmbDonSicBir";
            this.cmbDonSicBir.Size = new System.Drawing.Size(153, 23);
            this.cmbDonSicBir.TabIndex = 4;
            // 
            // txtSonuc
            // 
            this.txtSonuc.Location = new System.Drawing.Point(519, 95);
            this.txtSonuc.Name = "txtSonuc";
            this.txtSonuc.Size = new System.Drawing.Size(130, 23);
            this.txtSonuc.TabIndex = 5;
            // 
            // btnDonustur
            // 
            this.btnDonustur.Location = new System.Drawing.Point(574, 137);
            this.btnDonustur.Name = "btnDonustur";
            this.btnDonustur.Size = new System.Drawing.Size(75, 36);
            this.btnDonustur.TabIndex = 6;
            this.btnDonustur.Text = "Dönüştür";
            this.btnDonustur.UseVisualStyleBackColor = true;
            this.btnDonustur.Click += new System.EventHandler(this.btnDonustur_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.ActiveCaption;
            this.ClientSize = new System.Drawing.Size(775, 450);
            this.Controls.Add(this.btnDonustur);
            this.Controls.Add(this.txtSonuc);
            this.Controls.Add(this.cmbDonSicBir);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.cmbKaynakSicBir);
            this.Controls.Add(this.txtSicaklikBilgisi);
            this.Controls.Add(this.label1);
            this.Name = "Form1";
            this.Text = "Sıcaklık Çevirici Program";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.TextBox txtSicaklikBilgisi;
        private System.Windows.Forms.ComboBox cmbKaynakSicBir;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.ComboBox cmbDonSicBir;
        private System.Windows.Forms.TextBox txtSonuc;
        private System.Windows.Forms.Button btnDonustur;
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace HesapMakinesi
{
    public partial class Form1 : Form
    {
        double Degisken1 = 0;
        double Degisken2 = 0;
        char Islem = '+';
        public Form1()
        {
            InitializeComponent();
        }

        private void btn9_Click(object sender, EventArgs e)
        {
            txtSonuc.Text = txtSonuc.Text + "9";
        }

        private void btn8_Click(object sender, EventArgs e)
        {
            txtSonuc.Text = txtSonuc.Text + "8";
        }

        private void btn7_Click(object sender, EventArgs e)
        {
            txtSonuc.Text = txtSonuc.Text + "7";
        }

        private void btn6_Click(object sender, EventArgs e)
        {
            txtSonuc.Text = txtSonuc.Text + "6";
        }

        private void btn5_Click(object sender, EventArgs e)
        {
            txtSonuc.Text = txtSonuc.Text + "5";
        }

        private void btn4_Click(object sender, EventArgs e)
        {
            txtSonuc.Text = txtSonuc.Text + "4";
        }

        private void btn3_Click(object sender, EventArgs e)
        {
            txtSonuc.Text = txtSonuc.Text + "3";
        }

        private void btn2_Click(object sender, EventArgs e)
        {
            txtSonuc.Text = txtSonuc.Text + "2";
        }

        private void btn1_Click(object sender, EventArgs e)
        {
            txtSonuc.Text = txtSonuc.Text + "1";
        }

        private void btn0_Click(object sender, EventArgs e)
        {
            txtSonuc.Text = txtSonuc.Text + "0";
        }

        private void btnTopla_Click(object sender, EventArgs e)
        {
            if (Degisken1 == 0)
            {
                Islem = '+';
                Degisken1 = Convert.ToInt32(txtSonuc.Text);
                txtSonuc.Text = "";
                lblIslem.Text = Degisken1.ToString() + Islem;
            }

        }

     

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void btnEsittir_Click(object sender, EventArgs e)
        {
            double Sonuc = 0.0;
            Degisken2 = Convert.ToInt32(txtSonuc.Text);
            lblIslem.Text = lblIslem.Text + Degisken2 + "=";
            switch (Islem)
            {
                case '+':
                    Sonuc = Degisken1 + Degisken2;
                    break;
                case '-':
                    Sonuc = Degisken1 - Degisken2;
                    break;
                case '*':
                    Sonuc = Degisken1 * Degisken2;
                    break;
                case '/':
                    Sonuc = Degisken1 / Degisken2;
                    break;
                case '^':
                    Sonuc = Math.Pow(Degisken1, Degisken2);
                    break;
                case '%':
                    Sonuc = (Degisken1*Degisken2)/100;
                    break;
            }

            Degisken1 = 0;
            Degisken2 = 0;
            txtSonuc.Text = Sonuc.ToString();
        }

        private void btnCikart_Click(object sender, EventArgs e)
        {
            if (Degisken1 == 0)
            {
                Islem = '-';
                Degisken1 = Convert.ToInt32(txtSonuc.Text);
                txtSonuc.Text = "";
                lblIslem.Text = Degisken1.ToString() + Islem;
            }
            else
                txtSonuc.Text = "";
        }

        private void btnCarp_Click(object sender, EventArgs e)
        {
            if (Degisken1 == 0)
            {
                Islem = '*';
                Degisken1 = Convert.ToInt32(txtSonuc.Text);
                txtSonuc.Text = "";
                lblIslem.Text = Degisken1.ToString() + Islem;
            }
        }

        private void btnBol_Click(object sender, EventArgs e)
        {
            if (Degisken1 == 0)
            {
                Islem = '/';
                Degisken1 = Convert.ToInt32(txtSonuc.Text);
                txtSonuc.Text = "";
                lblIslem.Text = Degisken1.ToString() + Islem;
            }
        }

        private void btnTemizle_Click(object sender, EventArgs e)
        {
            txtSonuc.Text = "";
            lblIslem.Text = "";
        }

        private void btnus_Click(object sender, EventArgs e)
        {
            Islem = '^';
            Degisken1 = Convert.ToInt32(txtSonuc.Text);
            txtSonuc.Text = "";
            lblIslem.Text = Degisken1.ToString() + Islem;
        }

        private void btnkarekok_Click(object sender, EventArgs e)
        {
            double karekok = Convert.ToDouble(txtSonuc.Text);
            karekok = Math.Sqrt(karekok);
            txtSonuc.Text = Convert.ToString(karekok);
        }

        private void btnyuzde_Click(object sender, EventArgs e)
        {
            Islem = '%';
            Degisken1 = Convert.ToInt32(txtSonuc.Text);
            txtSonuc.Text = "";
            lblIslem.Text = Degisken1.ToString() + Islem;
        }
    }
}

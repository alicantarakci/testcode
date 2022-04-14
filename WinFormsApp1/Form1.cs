using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WinFormsApp1
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_MouseClick(object sender, MouseEventArgs e)
        {
            
        }

        private void btnDonustur_Click(object sender, EventArgs e)
        {
            int sicaklik= Convert.ToInt32(txtSicaklikBilgisi.Text);
            String KaynakBirim = cmbKaynakSicBir.Text;
            String DonusturulecekBirim = cmbDonSicBir.Text;
            double DonusturulenSicaklik = 0;
            switch (DonusturulecekBirim) 
            {
                case "Celcius":
                    if (KaynakBirim == "Celcius")
                        DonusturulenSicaklik = sicaklik;
                    else if (KaynakBirim == "Fahrenheit")
                        DonusturulenSicaklik = (sicaklik - 32) / 1.8;
                    else if (KaynakBirim == "Kelvin")
                        DonusturulenSicaklik = sicaklik - 273.15;
                    break;
                case "Kelvin":

                    break;

                case "Fahrenheit":

                    break;
            
            }

            txtSonuc.Text = DonusturulenSicaklik.ToString();
        }
    }
}

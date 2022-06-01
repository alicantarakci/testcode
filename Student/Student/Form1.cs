using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Student
{
    public partial class Form1 : Form
    {
       
        List<Student> Students=new List<Student>();
       

        public Form1()
        {
            InitializeComponent();
        }
        DataTable tablo = new DataTable();
        private void btnRecord_Click(object sender, EventArgs e)
        {  
            


                Student tmpStudent = new Student();
                tmpStudent.Age = Convert.ToInt32(txtAge.Text);
                tmpStudent.Name = txtName.Text;
                tmpStudent.Surname = txtSurname.Text;
                tmpStudent.Department = txtDepartment.Text;
                tmpStudent.No = txtNo.Text;

            if (Students.FindIndex(a => a.No == tmpStudent.No) == -1)
            {
                Students.Add(tmpStudent);
                tablo.Rows.Add(txtNo.Text, txtName.Text, txtSurname.Text, txtDepartment.Text, txtAge.Text);
                dataGridView1.DataSource = tablo;
                File.WriteAllText(@"C:\Users\Kullanıcı\Desktop\ders\odev.txt", txtNo.Text + "-" + txtName.Text + "-" + txtSurname.Text + "-" + txtDepartment.Text + "-" + txtAge.Text);
                txtDosyaYolu.Text = @"C:\Users\Kullanıcı\Desktop\ders\odev.txt";

            }




            else
                MessageBox.Show("Kayıt zaten var");

                lblStudentCount.Text = "" + Students.Count;
            }
       
        private void btnSearch_Click(object sender, EventArgs e)
        {
            int index=Students.FindIndex(x => x.No == txtNo.Text);
            if (index == -1)
                MessageBox.Show("Böyle bir öğrenci kaydı bulunmuyor");
            else
            {
                txtAge.Text=""+Students[index].Age;
                txtName.Text=Students[index].Name;
                txtSurname.Text=Students[index].Surname;
                txtNo.Text =Students[index].No;
                txtDepartment.Text=Students[index].Department;

            }
        }

        private void btnDelete_Click(object sender, EventArgs e)
        {
            Students.RemoveAll(x=>x.No== txtNo.Text);
            lblStudentCount.Text = ""+Students.Count;
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            tablo.Columns.Add("No", typeof(string));
            tablo.Columns.Add("Name", typeof(string));
            tablo.Columns.Add("Surname", typeof(string));
            tablo.Columns.Add("Department", typeof(string));
            tablo.Columns.Add("Age", typeof(int));
           
            
            dataGridView1.DataSource = tablo;
        }

        private void dataGridView1_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {
           
        }

        private void btnRead_Click(object sender, EventArgs e)
        {
            
        }
    }
}

#80 ile 120 arasındaki tek sayıların hangileri  oldugunu ve
#tek sayıların toplamlarını bulan kodu yazınız
liste=""
toplam=0
for x in range(80,120) :
if x%2==1: #tek sayı olma koşulu
liste=liste+str(x)+'-' #81-83-85-87-.....119
toplam=toplam+x #toplam
print(liste)
print(toplam)

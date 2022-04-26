#include<stdio.h>
#include<stdlib.h>
int a[6][6],i,j,k;
float tp,ort;
main()
{
	tp=0;
	for(i=1;i<=5;i++) {
		for(j=1;j<=5;j++) {
			printf("%d %d.sayiyi gir..",i,j);
			scanf("%d",&a[i][j]);
			tp=tp+a[i][j];
		}
	}
	ort=tp/25;
	k=0;
	if(ort==int(ort)) {
		for(i=1;i<=5;i++) {
			for(j=1;j<=5;j++)
			  if(ort==a[i][j]) k++;
		}
		if(k==0) printf("%2.1f ortalamasindan yok ",ort);
		else printf("%2.1f ortalamasindan %d tane var  ",ort,k);
	}
	else printf("%2.1f ortalamasi tam sayi degil  ",ort);	 
}	
#include<stdio.h>
#include<stdlib.h>
int a[6][6],i,j,eb;
main()
{
	for(i=1;i<=5;i++) {
		for(j=1;j<=5;j++) {
			printf("%d %d.sayiyi gir..",i,j);
			scanf("%d",&a[i][j]);
	    }
    }
    for(i=1;i<=5;i++) {
    	eb=a[i][1];
    	for(j=2;j<=5;j++)
    	  if(eb<a[i][j]) eb=a[i][j];
    	printf("%d. satirin en buyuk elemani %d dir.\n",i,eb);
	}
}
    
#include<stdio.h>
#include<stdlib.h>
int a[6][6],i,j;
main()
{
	for(i=1;i<=5;i++) {
		for(j=1;j<=5;j++) {
			printf("%d %d. sayiyi gir..",i,j);
			scanf("%d",&a[i][j]);	
		}
	}
	for(i=1;i<=5;i++) {
		for(j=1;j<=5;j++)
		   printf("%d   ",a[i][j]);
	printf("\n");
	}
}

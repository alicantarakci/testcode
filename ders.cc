#include<stdio.h>
#include<stdlib.h>
int a[11],i,k,m,b;
main()
{
	for(i=1;i<=10;i++) {
		printf("%d. sayiyi gir..",i);
		scanf("%d",&a[i]);
	}
	m=9;
	do
	{
		k=0;
		for(i=1;i<=m;i++) {
			if(a[i]>a[i+1]) {
				b=a[i];a[i]=a[i+1];a[i+1]=b;k=1;
			}
		}
		m--;	
	}
	while(k!=0);
	for(i=1;i<=10;i++)
	   printf("%d   ",a[i]);
}
///
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

///
#include<stdio.h>
#include<stdlib.h>
int a[6][6],i,j,eb,ek;
main()
{
	for(i=1;i<=5;i++) {
		for(j=1;j<=5;j++) {
			printf("%d %d. sayiyi gir..",i,j);
			scanf("%d",&a[i][j]);
		}
	}
	eb=a[1][1];ek=a[1][1];
	for(i=1;i<=5;i++) {
		for(j=1;j<=5;j++) {
			if(eb<a[i][j]) eb=a[i][j];
			if(ek>a[i][j]) ek=a[i][j];
		}
	}
	printf("matrisin en buyuk elemani=%d\n",eb);
	printf("matrisin en kucuk elemani=%d\n",ek);
}

///

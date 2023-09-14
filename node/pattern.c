#include<stdio.h>
void pattern(int num){
    for(int i=0;i<num;i++){
        for(int j=0;j<num;j++){
            printf("*");
        }
        printf("\n");
    }
}
void main(){
    int number;
    printf("Enter the number  ");
    scanf("%d",&number);
    pattern(number);
}
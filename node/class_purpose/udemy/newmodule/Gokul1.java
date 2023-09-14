import java.util.Scanner;
public class Gokul1{
    public static void main(String[]args){
        Scanner gb=new Scanner(System.in);
        System.out.println("enter the number");
        int a=gb.nextInt();
        int array[]={1,2,3,4,5,6,7,8,9,0,12,34,66};
        int last=array.length-1;
        int j=0;
        int flag=-1;
        for(int i=0;i<last;i++){
            j+=i;
            if(a==array[i]){
                flag=10;
                System.out.println(i);
            }
        }
        
        if(flag==-1){
            System.out.println("-1");
        }
    }
}
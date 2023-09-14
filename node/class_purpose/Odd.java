import java.util.Scanner;
public class Odd{
    public static void main(String[]arg){
        Scanner s=new Scanner(System.in);
         int i=s.nextInt();
        int a=i%2;
        if(a==0){
            System.out.println("even");
        }
        else{
            System.out.println("odd");
        }
    }

}
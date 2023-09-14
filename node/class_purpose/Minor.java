import java.util.Scanner;
public class Minor{
    public static void main(String[]arg){
        Scanner s=new Scanner(System.in);
         int i=s.nextInt();
        if(i<18){
            System.out.println("minor");
        }
        else{
            System.out.println("major");
        }
    }

}
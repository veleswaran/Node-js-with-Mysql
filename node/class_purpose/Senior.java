import java.util.Scanner;
public class Senior{
    public static void main(String[]arg){
        Scanner s=new Scanner(System.in);
         int i=s.nextInt();
        if(i<18){
            System.out.println("minor");
        }
        else if(i>=18&&i<=59){
            System.out.println("major");
        }        
        else {
            System.out.println("Senior citizen");
        }
    }

}

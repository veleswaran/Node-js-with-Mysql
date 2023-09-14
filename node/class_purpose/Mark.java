import java.util.Scanner;
public class Mark{
    public static void main(String[]arg){
        Scanner s=new Scanner(System.in);
         char m=s.next().charAt(0);
         int mark=s.nextInt();
        if(m=='m'&&mark<=75){
            System.out.println("admision");
        }
        else{
            System.out.println("not admision");
        }
    }

}
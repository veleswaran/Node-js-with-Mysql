import java.util.Scanner;
public class Vowels {
    public static void main(String[]arg){
        Scanner s=new Scanner(System.in);
        char l =s.next().charAt(0);
        if(l=='a'||l=='A'||l=='e'||l=='E'||l=='i'||l=='I'||l=='o'||l=='O'||l=='u'||l=='U'){
            System.out.println("vowel");
        }
        else{
            System.out.println("not a vowel");
        }
    }
    
}

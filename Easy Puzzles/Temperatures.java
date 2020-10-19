import java.util.*;
import java.io.*;
import java.math.*;

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
class Solution {

    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt(); // the number of temperatures to analyse
        int res = 10000;
        int rest = 0;
        int tab[] = new int[n];
        for (int i = 0; i < n; i++) {
            int t = in.nextInt(); // a temperature expressed as an integer ranging from -273 to 5526
            tab[i]=t;
if(Math.sqrt(Math.pow(t,2))<res){

res = (int)Math.sqrt(Math.pow(t,2)) ;
rest = t;
 
}
        }
        boolean zx=false;
    for(int i = 0 ; i<n;i++){
if(tab[i]==(-rest)){
zx=true;
}
    }
        if(rest<0 && zx==true){
            System.out.println(-rest);
            
        }else if(rest>=0 || rest<0){
   System.out.println(rest);
        }
        

        // Write an answer using System.out.println()
        // To debug: System.err.println("Debug messages...");

    
    }
}
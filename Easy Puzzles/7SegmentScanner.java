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
        String line1 = in.nextLine();
        String line2 = in.nextLine();
        String line3 = in.nextLine();
int[] res = new int[line1.length()/3];
        // Write an answer using System.out.println()
        // To debug: System.err.println("Debug messages...");
for(int i = 0 ; i<line1.length()/3;i++){
if(line3.charAt(((i)*3)+1)==' '){
if(line2.charAt(((i)*3)+1)=='_'){
    res[i]=4;
}else if(line1.charAt(((i)*3)+1)=='_'){
    res[i]=7;
}else{
    res[i]=1;
}

}else if(line2.charAt(((i)*3)+1)==' ' && line2.charAt(((i)*3))=='|' ){
res[i]=0;
}else if(line2.charAt(((i)*3))==' ' && line3.charAt(((i)*3))==' ' ){
res[i]=3;
}else if(line2.charAt(((i)*3)+2)==' ' && line3.charAt(((i)*3))==' ' ){
res[i]=5;
}else if(line2.charAt(((i)*3))==' ' && line3.charAt(((i)*3)+2)==' ' ){
res[i]=2;
}else if(line3.charAt(((i)*3))=='|' && line2.charAt(((i)*3)+2)==' ' ){
res[i]=6;
}else if(line3.charAt(((i)*3))==' ' && line3.charAt(((i)*3)+1)=='_'  && line2.charAt(((i)*3)+2)=='|' && line2.charAt(((i)*3))=='|'){
res[i]=9;
}else{
    res[i]=8;
}


}
for(int i = 0 ; i < res.length;i++){
System.out.print(res[i]);
}
        
    }
}
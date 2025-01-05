import com.opencsv.CSVWriter;
import org.apache.commons.lang3.ArrayUtils;

import java.io.*;
import java.util.Arrays;
import java.util.Collections;
import java.util.Scanner;
import java.util.concurrent.TimeUnit;

class averageer {
    public static void main(String args[]) throws InterruptedException, IOException {
        //path of everything
        String path = "C:\\Users\\grabn\\Desktop\\23.12.2021\\";

        //get the data from the CSV file
        Scanner scan = new Scanner(new File(path+"folds.csv"));  //scanner that will read the folds1 file
        //csvReaderTrainTest.useDelimiter(",");  //make "," the delimiter
        String[] parameters = scan.nextLine().split(","); //get the 1st line into an array (so we still have the names
        parameters = Arrays.copyOfRange(parameters,1,parameters.length);
        parameters = ArrayUtils.addAll(Arrays.copyOfRange(parameters,0,3), Arrays.copyOfRange(parameters,4,parameters.length));

        System.out.println(Arrays.toString( parameters));
        String [] fold1, fold2,fold3,averaged;

        Writer writer = new FileWriter(path+"average.csv");


        String names = String.join(",",parameters);
        writer.write(names + '\n');

        averaged = new String[parameters.length];
        //on the first 5 indexes [0-4] we have names and other non averageable data, after that everything can be averaged
        int a  = 0;
        while(scan.hasNext()){
            //System.out.println(Arrays.toString(parameters));
            //getting all 3 folds in
            fold1= scan.nextLine().split(",");
            fold2 = scan.nextLine().split(",");
            fold3 = scan.nextLine().split(",");

            int i = 1;
            //rewriting the non-averageable data
            for(;i<4;i++){
                averaged[i-1] = fold1[i];
            }
            i++;
            //averageing data
            for(;i< 23;i++){
            double sum = Double.parseDouble(fold1[i]) +  Double.parseDouble(fold2[i]) + Double.parseDouble(fold3[i]);
            double average = sum/3.0;
            averaged[i-2] = Double.toString(average);

            }
            //data for one set is now averaged (i just have to figure out where to put it now)
            //System.out.println(Arrays.toString(averaged));

            String avg = String.join(",",averaged);
            writer.write(avg + '\n');


            /*a++;
            if(a == 10) break;*/
        }
        writer.close();
    }
}




/*
totally useless code:
 for(int i = 0;i<1000;i++){

            System.out.printf("\riter: " + i+"\n");

            System.out.print("[");
            for(int j = 0;j<i/100;j++){
                System.out.printf("*");
            }
            for(int k = 0;k<10-i/100;k++){
                System.out.printf("_");
            }
            System.out.print("]");

            TimeUnit.MILLISECONDS.sleep(50);


        }
 */


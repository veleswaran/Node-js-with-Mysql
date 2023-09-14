public class task {
    
        public static int calculateOutput(int q, int[] scoreArray, int[] timeArray) {
            int totalScore = 0;
            int totalTime = 0;
    
            for (int score : scoreArray) {
                totalScore += score;
            }
    
            for (int time : timeArray) {
                totalTime += time;
            }
    
            return (q * totalScore) - totalTime;
        }
    
        public static void main(String[] args) {
            int q = 3;
            int[] scoreArray = {123};
            int[] timeArray = {115};
    
            // Calculate the output
            int result = calculateOutput(q, scoreArray, timeArray);
            System.out.println(result); // Output: 360 (not 567)
    
            // If you expect the output to be 567, the input values must be different.
            // For example:
            // int q = 1;
            // int[] scoreArray = {567};
            // int[] timeArray = {0};
            // The output will be 567.
        }
    }
    


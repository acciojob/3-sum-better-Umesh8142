function threeSum(arr, target) {
// write your code here
	   Arrays.sort(arr);

        let n=arr.length;
        let ans=arr[0]+arr[1]+arr[2];
        for(let i=0;i<n-2;i++){
            let j=i+1;
            let k=n-1;
           
            while(j<k){
                let sum=arr[i]+arr[j]+arr[k];
                if(Math.abs(target-sum)< Math.abs(target-ans)){
                    ans=sum;
                }
                else if(sum<target){
                    j++;  
                }
                else{
                    k--;  
                }
            }
        }
        return ans;
  
}

module.exports = threeSum;

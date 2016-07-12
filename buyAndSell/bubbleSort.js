/*
*
* Given an array representing prices of the stock on different days, 
* find the maximum profit that can be earned by performing maximum of 
* one transaction. A transaction consists of activity of buying and 
* selling the stock on different or same days.
*
*/

/*
*
* For example in this array - {100, 80, 120, 130, 70, 60, 100, 125} 
* the price of the stock on day-1 is 100, on day-2 is 80 and so on.
* The maximum profit that could be earned in this window is 65 
* (buy at 60 and sell at 125).
* For price array - {100, 80, 70, 65, 60, 55, 50}, maximum profit 
* that could be earned is 0.
*
*/

// Feel free to add helper functions if needed
function Max(array){
	var max=array[0];
	 for (var i=1;i<array.length;i++){
	 	if (array[i]>max){
	 		max=array[i];
	 	}
	 }
	 return max;
}

function Min(array){
	var min=array[0];
	 for (var i=1;i<array.length;i++){
	 	if (array[i]<min){
	 		min=array[i];
	 	}
	 }
	 return min;
}

var maximumProfit  = function(array) {
	 var max=Max(array);
	 var min=Min(array);
	 console.log(min,max);
	 var profit=0;
	 if (array.indexOf(max)===0){
         profit=0;
	 }
	 else{
	 	if (array.indexOf(min)<array.indexOf(max)){
	 		profit=max-min;
	 	}
	 	else {
	 		var newArray=array.splice(array.indexOf(max));
	 		var newMin=Min(newArray);
	 		console.log(newMin);
	 		profit=max-newMin;
	 	}
	 }

 return profit;
};
function cubeNumber(input_num) {
    if (typeof input_num === 'number' && input_num > 0) {
        return Math.pow(input_num, 3);
    }
     else{

        return "please privide a number";
    }

}
let input_num1 = 3;
let input_num2 = 4;
let output1 = cubeNumber(input_num1);
let output2 = cubeNumber(input_num2);
if (typeof output1 === 'number') {
//     console.log(output1);
}
else {
//     console.log(output1);
}
if (typeof output2 === 'number') {
//     console.log(output2);
} else {
//     console.log(output2);
}




function matchFinder(string1, string2) {
       if (typeof string1 !== 'string' || typeof string2 !== 'string') {
           return "Invalid input";
       }
   
       if (string1.includes(string2)) {
           return true;
       } else {
           return false;
       }
   }

   let input_string1 = ('John Doe')
   let input_string2 = ('ohn')
//    console.log(matchFinder(input_string1, input_string2));

   


function sortMaker(arr) {
       function isValidElement(element) {
           return typeof element === 'number' && element >= 0 && Number.isInteger(element);
       }
        if (arr.length !== 2 || !isValidElement(arr[0]) || !isValidElement(arr[1])) {
           return "Invalid Input";
       }
       const sortedArr = arr.slice().sort((a, b) => a - b);
       if (sortedArr[0] === sortedArr[1]) {
           return "equal";
       }
       
       return sortedArr.reverse();
   }
//    console.log(sortMaker([2, 3]));
//    console.log(sortMaker([4, 2]));
//    console.log(sortMaker([4, 4]));
//    console.log(sortMaker([1, 2]));
//    console.log(sortMaker([4, -2]));




   function findAddress(data) {
       const street = data.street || '__';
       const house = data.house || '__';
       const society = data.society || '__';
   
       const outPut = `${street},${house},${society}`;
   
       return outPut;
   }
   
   const inPut1 = {
       street: 10,
       house: "15A",
       society: "Earth Perfect"
   };
   
   const inPut2 = {
       street: 10,
       society: "Earth Perfect"
   };
   
   const inPut3 = {
       street: 10
   };
   
   const outPut1 = findAddress(inPut1);
   const outPut2 = findAddress(inPut2);
   const outPut3 = findAddress(inPut3);
   
//    console.log(outPut1);
//    console.log(outPut2);
//    console.log(outPut3);




   function canPay(coinValues, chipPrice) {
       if (coinValues.length === 0) {
           return false;
       }
       const totalCoinValue = coinValues.reduce((sum, value) => sum + value, 0);
       if (totalCoinValue >= chipPrice) {
           return true;
       } else {
           return false;
       }
   }
   const input1 = [1, 2, 5];
   const price1 = 10;
   const out_put1 = canPay(input1, price1);
//    console.log(out_put1);
   
   const input2 = [1, 5, 5];
   const price2 = 10;
   const out_put2 = canPay(input2, price2);
//    console.log(out_put2);

// function largestElement(number){
//     let max = number[0];
//     for(let i = 0; i < number.length; i++){
//         let element = number[i];
//         if(element > max){
//             if(element % 2 == 0){
//                 max = element;
//             }
//         }
//     }
//     return max;
// }

// const array = [12, 34, 24, 67, 11, 20, 56];
// const arrayVale = largestElement(array);
// console.log(arrayVale);





function smallestElement(number){
    let min = number[0];
    for(let i = 0; i < number.length; i++){
        let element = number[i];
        if(element < min){
                min = element;
        }
    }
    return min;
}

const array = [12, 34, 24, 67, 11, 20, 56];
const arrayVale = smallestElement(array);
console.log(arrayVale);
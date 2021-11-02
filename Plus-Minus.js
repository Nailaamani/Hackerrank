//Filename: Plus-Minus.js
//Author  : Naila Amani
//Desc.   : hackerrank solution code for Problem Solving: Plus-Minus
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    var i = 0;
    let plus = 0;
    let minus = 0;
    let zero = 0;
    var Rplus, Rminus,Rzero;
    var length = arr.length;
    
    for (i;i<length;i++){
        if (arr[i]>0){
            plus = plus+1;
        } else if (arr[i]<0){
            minus = minus+1;
        } else if (arr[i]==0) {
            zero = zero+1;
        }
    }
    
    Rplus= (plus/length).toFixed(6);
    Rminus=(minus/length).toFixed(6);
    Rzero= (zero/length).toFixed(6);
    
    console.log(Rplus);
    console.log(Rminus);
    console.log(Rzero);
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}

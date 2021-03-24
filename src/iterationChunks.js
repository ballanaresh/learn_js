var num=0; j=0, arr=[], slicedArr=[];
for(var i=1;i<=5000000;i++){
    arr.push(i);
}

console.log(new Date());

// for(var i=0;i<arr.length;i++){
//     j=1;
//     while(j<=100)
//     {
//         num += 2;   
//         j++;
//     }
//     if(i==arr.length - 1)
//         console.log(arr[i]);
// }
//console.log(num);
console.log('before calling the function');
console.log(new Date());

for(var i=0;i<arr.length;i++)
{
    slicedArr = arr.slice(i, i+1000000);
    i = arrChucks(i, slicedArr);
}
function arrChucks(from, arr)
{
    var num=0;
    for(var i=from;i<arr.length;i++)
    {
        num += 2;
    }
    console.log('end of the arrChunk function');
    console.log('Execution Time '  +  new Date());
    return i;
}

console.log(new Date());
console.log('end of the function');
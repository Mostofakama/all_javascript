// what is multidimansional array

//2 dimansional array 
// var arr = [ 
//     [78,71,80,90],
//     [80,75,79,80],
//     [71,75,79,80]
//  ]
// // console.log(arr[0][1]);
// // console.log(arr[1][0]);

// for(var i = 0; i< arr.length; i++){
//     for(var j = 0;j<arr[i].length;j++){
//         console.log('element ' + i + ': ' + arr[i][j]);
//     }
// }

// ay class a ja ja siklam 
// 1.multidimansional array traversing



var arr = [
    ['mostofa','kamal','tufan','robi'],
    ['hasan','firoz','mehadi'],
    ['rabea','bosory','rinki']
]
for(var i = 0 ; i < arr.length; i++){
  for(var j = 0; j <arr[i].length;j++){
    console.log('element'+ i + ':' + arr[i][j] );
  }
}


 var arr = [ 
      [78,71,80,90],
      [80,75,79,80],
      [71,75,79,80]
   ]

  //  console.log(arr[0][1]);
   for(var i = 0;i<arr.length;i++){
    for(var j = 0;j  < arr[i].length;j++){
      console.log('element ' + i + ': ' + arr[i][j]);
    }
   }
function split(wholeArray) {
    
    const halflength = Math.round(wholeArray.length / 2)

    //13 / 2 = 6.5 > 7 

    /* your code here to define the firstHalf and secondHalf arrays */
    const firstHalf = wholeArray.slice(0,halflength)
    const secondHalf = wholeArray.slice(halflength)



    return [firstHalf, secondHalf];
  }



  function merge (firstHalf, secondHalf){
    
    if (firstHalf.length === 1 && secondHalf.length ===1 ){
        if (firstHalf > secondHalf){
            return [...secondHalf,...firstHalf]
        }else {
            return [...firstHalf, ...secondHalf]
        }

    } else {
        let newArray = []
        while(firstHalf.length > 1 && secondHalf.length >1){
          
            console.log('firstHalf',firstHalf)
            console.log('secondHalf', secondHalf)
          
          if (firstHalf[0] < secondHalf[0]){
                newArray.push(firstHalf.shift()) 
            } else {
                newArray.push(secondHalf.shift())
            }
             console.log(newArray)
          }
    
          return newArray

    }


  }




function mergeSort(array) {
    debugger;

    if (array.length === 1 || array.length === 0){ 
        return array
    }
    // [1][2][3][4][5][6]



    const [firstHalf, secondHalf]= split(array)
    // [[1,2,3,4,5],[6,7,8,9,10]]
    const sortedFirstHalf = mergeSort(firstHalf)
    const sortedSecondHalf = mergeSort(secondHalf)

return merge(sortedFirstHalf,sortedSecondHalf)

}

// let array = [2,45,78,12,34,56,7,90]
// mergeSort(array)



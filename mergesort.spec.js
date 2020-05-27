describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
      // your code here 
      let array = [1,2,3,4,5,6,7,8,9,10]

      expect(split(array)).toEqual([[1,2,3,4,5],[6,7,8,9,10]])
    });
  });


  describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
      // test the merging algorithm
       let sortedFirstHalf = [45] 
       let sortedSecondHalf = [4]
      expect(merge(sortedFirstHalf,sortedSecondHalf)).toEqual([4,45])
    });

    it('is able to merge two sorted arrays into one sorted array', function(){
        // test the merging algorithm
         let sortedFirstHalf = [45,17] 
         let sortedSecondHalf = [4,32] 
        expect(merge(sortedFirstHalf,sortedSecondHalf)).toEqual([4,17,32,45])
      });
  });


  describe('MergeSort function', function(){
    it('is able to split, sort, and merge unsortedArray', function(){
      // test the merging algorithm
    //    let sortedFirstHalf = [1,2,3,4,5]
    //    let sortedSecondHalf = [6,7,8,9,10]
    let array = [1,2,3,4,5,6,7,8,9,10]
      
      expect(mergeSort(array)).toEqual([[1,2,3,4,5],[6,7,8,9,10]])
    });


    it('is able to split, sort, and merge unsortedArray', function(){
        // test the merging algorithm
      //    let sortedFirstHalf = [1,2,3,4,5]
      //    let sortedSecondHalf = [6,7,8,9,10]
        
        expect().toEqual()
      });
  });



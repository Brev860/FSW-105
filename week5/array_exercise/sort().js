    /*Sort()  *///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /* 1. smallest or Largerst  */
    function leastToGreatest(a, b){
        const results = a.sort(function(a, b){
            if(a > b) return 1;
        if(a < b) return -1;
        return 0;
        }) 
        return results
    }console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));

    /*2. Largest to smallest */
    function leastToGreatest(a, b){
        const results = a.sort(function(a, b){
            if(a < b) return -1;
        if(a > b) return 1;
        return 0;
        }) 
        return results
    }console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));
    /*3. Arrange from smallest to largest string  */
    function lengthSort(a, b){
        const results = a.sort(function(a, b){
            return a.length - b.length ||
            a.localeCompare(b);   
        }) 
        return results
    }console.log(lengthSort(["dog","wolf", "by", "family", "eaten"]));
  /* 4. Sort alphabetically */
  function alphaSort(a, b){
    const results = a.sort(function(a, b){
        if (a > b) {
            return 1;
        }
        if (b > a) {
            return -1;
        }
        return 0;
    })
    return results;
}
console.log(alphaSort(["dog","wolf", "by", "family", "eaten"]));

/*5. By Age */
function sortAge(arr) {
    return arr.sort();
    

}
  
 console.log(sortAge([
     {name: "Quiet Samurai", age: 22},
     {name: "Arrogant AMbassador", age:100},
     {name: "Misunderstood Observer", age: 100},
     {name: "Unlucky Swami", age: 77}
 ]));

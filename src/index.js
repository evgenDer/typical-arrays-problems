
exports.min = function min (array) {
  if(!Array.isArray(array) || array.length==0 ){
    return 0;}
   let minEl=array[0];
   array.forEach(element => { 
     console.log(element);
     if(element<minEl){
      //console.log(minEl);
      minEl=element;
   }    
   });
       return minEl; 
  }

exports.max = function max (array) {
  if(!Array.isArray(array) || array.length==0 ){
    return 0;
  }else{
  let maxEl=array[0];
  array.forEach(element => { 
    if(element>maxEl){
     maxEl=element;
  }    
  });
  return maxEl;
 }
}

exports.avg = function avg (array) {
  if(!Array.isArray(array) || array.length==0 ){
    return 0;}
  let sum=0;
  array.forEach(element => sum+=element)
  return sum/(array.length);

  
}

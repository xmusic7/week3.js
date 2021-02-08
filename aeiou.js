function calculateVowel(sentence){
 //
  var answer = 0;
  
  for (var i = 0; i < sentence.length; i++){
    if (sentence.charAt(i) == 'a' || sentence.charAt(i) == 'e' || sentence.charAt(i) == 'i' || sentence.charAt(i) == 'o' || sentence.charAt(i) == 'u'){
     answer = answer+1   
    }
  }
  
 //
  
  return answer;
}

console.log(calculateVowel("asia developer academy"));
console.log(calculateVowel("selamat tahun baru cina"))

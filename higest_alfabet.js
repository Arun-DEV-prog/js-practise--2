function high(x){
    let alphabets = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
      ];


      let words=x.split(' ');
      
      let highestScore=0;
      let highestScoreWord="";

      for(let word of words){
         let letterSum=0;
         
           for(let letter of word){
           
             letterSum+=alphabets.indexOf(letter)+1;
           }
           if(letterSum>highestScore){
            highestScore=letterSum;
            highestScoreWord=word;
        }
      }
  return highestScoreWord;
     
}

console.log(high('abcd i am'));



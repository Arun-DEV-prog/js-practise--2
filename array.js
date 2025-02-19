function vowelAndConsonats(s){
      let vowels=[];
      let consonats=[];
      for(let i=0; i<s.length;i++){
         if(s[i]=='a' || s[i]=='e' || s[i]=='i' || s[i]=='o' || s[i]=='u'){
             vowels.push(s[i]);
         }else{
              consonats.push(s[i]);
         }
      }

      for(let v of vowels){
             console.log(v);
      }
      for(let c of consonats){
             console.log(c);
      }
}

vowelAndConsonats("javascript");
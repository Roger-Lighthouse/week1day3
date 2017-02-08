function getArgs(){
  var myArgs = process.argv.slice(2);
  return myArgs;
}

function p(item){
  console.log(item);
}


function countLetters(phrase){
  letterBreakDown={};
  //phrase=phrase.replace(/\s/g,'');
  phrase=phrase.replace(' ','');
  var phrase1=phrase.split('');
  var unique=phrase.split('');
  unique=Array.from(new Set(unique));

  for(i=0; i<unique.length; i++){
    count=0;
    if(unique[i]!=" "){
      for(j=0; j<phrase1.length; j++){
        if(unique[i]===phrase[j]){
          count++;
        }
      }
    }
    letterBreakDown[unique[i]]=count;
  }
  return letterBreakDown;
}

var args=getArgs();
console.log(countLetters(args[0]));
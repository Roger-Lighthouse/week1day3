
function getArgs(){
  var myArgs = process.argv.slice(2);
  return myArgs;
}

function p(item){
  console.log(item);
}


function countIndices(phrase){
  letterBreakDown={};
  phrase=phrase.replace(/\s/g,'');
  //phrase=phrase.replace(' ','');
  var phrase1=phrase.split('');
  var unique=phrase.split('');
  unique=Array.from(new Set(unique));

  for(i=0; i<unique.length; i++){
    array5=[];
    if(unique[i]!=" "){
      for(j=0; j<phrase1.length; j++){
        if(unique[i]===phrase[j]){
          p(unique[i]+' // '+phrase[j]);
          array5.push(j);
        }
      }
    }
    letterBreakDown[unique[i]]=array5;
  }
  return letterBreakDown;
}

var args=getArgs();
console.log(countIndices(args[0]));
/**
 * @param {string[]} message
 * @param {string[]} bannedWords
 * @return {boolean}
 */
var reportSpam = function(message, bannedWords) {
let spamStore = {}
let count = 2
for(let i=0;i<bannedWords.length;i++){
    
    if(spamStore[bannedWords[i]]===undefined){
        spamStore[bannedWords[i]]=1
    }else{
       spamStore[bannedWords[i]]++  
    }
}

for(let j=0;j<message.length;j++){
    if(spamStore[message[j]]){
        count--
    }
    
}
return count <= 0
};
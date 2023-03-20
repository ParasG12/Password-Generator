class Password  {
    constructor(){
      this.password ="";
    }
    
     generatePassword(len){
       if(len<3){
         alert("enter len greater than 3")
       }
       else{
          let letter = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
         let digit = "0123456789"
         let specialCharacters= "@$%^&*!";
         let i = 0;
         while(i<len){
          
           if(i<len){
             i++;
           this.password+=letter[Math.floor(Math.random()*letter.length)]
           }
           if(i<len){
             i++;
           this.password+=digit[Math.floor(Math.random()*digit.length)]
           }
      if(i<len)     {
         i++;this.password+=specialCharacters[Math.floor(Math.random()*specialCharacters.length)]}
           
           
           
           
         }
         return this.password;
         
       }
     }
     
     
     
   }
   let z = document.getElementsByClassName('password')[0];
   let b = document.getElementsByClassName('text')[0]
   var c = null;
   b.addEventListener('keypress',(event)=>{
   c= event.keyCode-48;
   

   })



   let a = document.getElementsByTagName('button')[0]
   a.addEventListener('click',()=>{
    let p = new Password()
    let res = p.generatePassword(c);
     if(res==undefined){

      z.innerHTML="Not Generated!!!"
     }
     else{
      z.innerHTML=res;
     }



   })


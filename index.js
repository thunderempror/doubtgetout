
document.querySelector(".post-question").addEventListener("click",function(){
   
     var question=document.querySelector("#question").value;
     if(question=="")
     {
         alert("Please Enter Question! ");
     }
     
     else{

     var newdiv=document.createElement("div");
     newdiv.classList.add("posted-question");
     


     var answerbutton=document.createElement("button");
     answerbutton.classList.add("btn");
     answerbutton.classList.add("btn-success");
     answerbutton.classList.add("typeanswer");
     answerbutton.innerHTML="Answer"; 
  


     newdiv.innerHTML="<h3> Q: "+question+"</h3>"+"<br>";
     newdiv.appendChild(answerbutton);


     var rightcol=document.querySelector(".right-col");
     rightcol.appendChild(newdiv);

     //notification of number of question posted
     document.querySelector(".ques-notify").innerHTML=document.querySelectorAll(".posted-question").length;
    
     



     document.querySelector(".typeanswer").addEventListener("click",function(){
          
        newdiv.removeChild(answerbutton);
        answerbutton=document.createElement("section");
        answerbutton.classList.add("answer-post");
       
         answerbutton.innerHTML+="<h3> Answer : </h3>";
         
         answerbutton.innerHTML+="<textarea></textarea>";
         answerbutton.lastChild.setAttribute("id","answer");
           
         answerbutton.innerHTML+="<br>"+"<br>";

         answerbutton.innerHTML +="<button>Post Answer</button>";
         answerbutton.lastChild.setAttribute("class","btn btn-info post-answer");
                
        newdiv.appendChild(answerbutton);


       
        document.querySelector(".post-answer").addEventListener("click",function(){
        
            alert("hey");
            var answer=document.querySelector("#answer").value;
    
            newdiv.removeChild(answerbutton);
            
            var answerdiv=document.createElement("div");
    
            answerdiv.innerHTML=answer;
            console.log(answer);
            newdiv.appendChild(answerdiv);
    
      
             
    
        });
    








    });


   
    











     }
});










// document.querySelector(".ans-notify").innerHTML=document.querySelectorAll(".question-answered").length;
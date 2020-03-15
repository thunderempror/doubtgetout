
var i = 0;
document.querySelector(".post-question").addEventListener("click", function () {

    var question = document.querySelector("#question").value;
    if (question == "") {
        alert("Enter question");
    }
    else {
        i++;
        document.querySelector("#question").value="";
        console.log(i);
        
        document.querySelector(".ques-notify").innerHTML=i;

        var quesandanswer = document.createElement("div");
        quesandanswer.setAttribute("class", "qandadiv" + i);

        var questiondiv = document.createElement("div");
        questiondiv.setAttribute("class", "question" + i);

        questiondiv.innerHTML = "<h2> Q: " + question + "</h2>" + "<br>";
        quesandanswer.appendChild(questiondiv);

        var answerbutton = document.createElement("button");
        answerbutton.setAttribute("class", "btn btn-info answerbutton answerbutton" + i);
        answerbutton.setAttribute("onclick","answer("+i+")");
        answerbutton.innerHTML = "Answer";

        quesandanswer.appendChild(answerbutton);

        document.querySelector(".right-col").appendChild(quesandanswer);

        

    }

})


function answer(identity)
{   
    document.querySelector(".qandadiv"+identity).lastChild.remove();
    
    var answerdiv=document.createElement("div");
    answerdiv.innerHTML+="<h3> Answer: </h3>";
    
    var textarea=document.createElement("textarea");
    textarea.setAttribute("class","answer answer"+identity);
    answerdiv.appendChild(textarea);

     answerdiv.innerHTML+="<br><br>";
    var answerpostbutton=document.createElement("button");
    answerpostbutton.setAttribute("class","btn btn-success postanswer"+identity);
    answerpostbutton.setAttribute("onclick","postanswer("+identity+")");
    answerpostbutton.innerHTML="Post Answer";   
    answerdiv.appendChild(answerpostbutton);

    var qandadiv=document.querySelector(".qandadiv"+identity);
    qandadiv.appendChild(answerdiv);

}

var answerposted=0;

function postanswer(identity)
{
    var answer=document.querySelector(".answer"+identity).value;
    
    if(answer=="")
    {
        alert("Please! Enter answer");
    }
    else{
      
        document.querySelector(".qandadiv"+identity).lastChild.remove();

        var para=document.createElement("p")
        para.innerHTML="Answer :"+answer;

        document.querySelector(".qandadiv"+identity).appendChild(para);
      
        answerposted++;

        document.querySelector(".ans-notify").innerHTML=answerposted;

    }
}

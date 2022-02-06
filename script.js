function lastButton() {
  var marks=0;
  var correctAnswer1=document.questions.qn1.value;
  var correctAnswer2=document.questions.qn2.value;
  var correctAnswer3=document.questions.qn3.value;
  var correctAnswer4=document.questions.qn4.value;
  var correctAnswer5=document.questions.qn5.value;
  var nothing=document.getElementById("empty");
  if (correctAnswer1=="Object Oriented Language"){marks++};
  if (correctAnswer2=="Both A and B"){marks++};
  if (correctAnswer3=="Both A and B"){marks++};
  if (correctAnswer4=="Ignores the statements"){marks++};
  if (correctAnswer5=="Const"){marks++};

  nothing.textContent=marks;
  questions.style.display="none";
  
}

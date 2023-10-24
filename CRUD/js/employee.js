let saveEmp=document.getElementById("saveEmp")
let form=document?.getElementById("saveEmpForm");
let phone =document.querySelector("#Phone")
let EmployeeIdcard =document.querySelector("#EmployeeIdcard")

saveEmp.addEventListener('click' , (e) => {
  console.log(new Date( document.getElementById("BirthDay").value).toISOString())
    let inputs=document.querySelectorAll("#saveEmpForm input")
    if(startWith05()==false) {
      document.querySelector("input[id='Phone']+p").scrollIntoView({behavior:"smooth"})
      document.querySelector("input[id='Phone']+p").innerHTML="يجب ان يبدأ الرقم ب 05"
    }
    if(checkLength(phone)==false) {
      document.querySelector("input[id='Phone']+p").scrollIntoView({behavior:"smooth"})
      document.querySelector("input[id='Phone']+p").innerHTML="يجب ان يكون الرقم مكون من 10 ارقام"
    }
    if(checkLength(EmployeeIdcard)==false) {
      document.querySelector("input[id='EmployeeIdcard']+p").scrollIntoView({behavior:"smooth"})
      document.querySelector("input[id='EmployeeIdcard']+p").innerHTML="يجب ان يكون الرقم مكون من 10 ارقام"
    }
    if(checkInputs(inputs)==false ) {
        e.preventDefault()
        if( (checkLength(phone)==true && startWith05())&&checkLength(EmployeeIdcard)==true )
          subscribe()
    }  
})

const subscribe = async () => {
  try {
    const formData=new FormData();
    formData.append("EmployeeName",  document.getElementById("EmployeeName").value);
    formData.append("BirthDay",new Date( document.getElementById("BirthDay").value).toISOString());
   
    formData.append("Phone", document.getElementById("Phone").value);
    formData.append("LastQualification", document.getElementById("LastQualification").value);
    formData.append("Grade", document.getElementById("Grade").value);
    formData.append("Rank", document.getElementById("Rank").value);
    formData.append("Residence", document.getElementById("Residence").value);
    formData.append("EmployeeIdcard", document.getElementById("EmployeeIdcard").value);
    formData.append("Daraga", document.getElementById("Daraga").value);
    formData.append("Fares", document.getElementById("Fares").value=="on"?true:false);
    formData.append("CommencementDate",document.getElementById("CommencementDate").value);
    formData.append("Work", document.getElementById("Work").value);
    formData.append("EmpolyeeTitle", document.getElementById("EmpolyeeTitle").value);
      let response = await fetch('https://localhost:7041/api/Home/AddEmployee', {
      method: 'POST',
      body: formData,
      });
      const result = await response.text();
      if(await response.status==200)
        showMessage(result,true);
      else
      showMessage(result,false);
  } catch (e) {
    console.log(e);
  }
};

const showMessage = (message,f) => {
 
   let alert=document.querySelector(".alert")
   alert.innerHTML=message
   alert.scrollIntoView({ behavior: "smooth" })
   alert.classList.add("alerton");
   setTimeout(() => {
     alert.classList.remove("alerton");
   }, 2000);
   if(f!=false) {
    setTimeout(() => {
        window.location.reload()
    }, 1000);
  }
};

function checkInputs(inputs)
{
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() == '') {
            return true
        }
      }
      return false
}

function checkLength(input) {
    return input.value.length==10 ? true:false;
}

phone.addEventListener('keydown' ,(e) => {
  document.querySelector("input[id='Phone']+p").innerHTML=""
  if((isNaN(parseInt( e.key))||e.target.value.length==10)&&e.key!="Backspace"&&e.key!="Tab")
      e.preventDefault();

})

EmployeeIdcard.addEventListener('keydown' ,(e) => {
  document.querySelector("input[id='EmployeeIdcard']+p").innerHTML=""
  if((isNaN(parseInt( e.key))||e.target.value.length==10)&&e.key!="Backspace"&&e.key!="Tab")
      e.preventDefault();

})

function startWith05() {
    return phone.value.startsWith("05")?true: false
}

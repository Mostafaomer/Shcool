let saveMainIfoBtn = document.getElementById("saveMainInfo")
let saveMainIfoForm = document.getElementById("mainIfoForm");
let phones=document.querySelectorAll(".Phone")
let ids=document.querySelectorAll(".Id")


const showMessage = (message) => {

  let alert = document.querySelector(".alert")
  alert.innerHTML=message
  alert.scrollIntoView({ behavior: "smooth" })
  alert.classList.add("alerton");
  setTimeout(() => {
    alert.classList.remove("alerton");
  }, 2000);
  setTimeout(() => {
    window.location.reload()
  }, 1800);
};

saveMainIfoBtn.addEventListener('click', (e) => {
  let inputs = document.querySelectorAll("#mainIfoForm input");
  let ff=checkLength()
  let fff=checkInputs(inputs)
  // if (f==false ) {
  //   e.preventDefault()
  if(fff && ff==false)
    e.preventDefault()
  if(ff &&fff) {
    e.preventDefault()
    saveMainInfo()
  }
})

const saveMainInfo = async () => {
  try {
    const formData = new FormData();
    formData.append("ManagerName", document.getElementById("ManagerName").value);
    formData.append("ManagerPhone", document.getElementById("ManagerPhone").value);
    formData.append("ManagerId", document.getElementById("ManagerId").value);
    formData.append("WorkDate", new Date(document.getElementById("WorkDate").value).toISOString());
    formData.append("StudentsAgent", document.getElementById("StudentsAgent").value);
    formData.append("StudentsAgentId", document.getElementById("StudentsAgentId").value);
    formData.append("StudentsAgentPhone", document.getElementById("StudentsAgentPhone").value);
    formData.append("TeacherAgent", document.getElementById("TeacherAgent").value);
    formData.append("TeacherAgentId", document.getElementById("TeacherAgentId").value);
    formData.append("TeacherAgentPhone", document.getElementById("TeacherAgentPhone").value);
    formData.append("StudentGuide", document.getElementById("StudentGuide").value);
    formData.append("StudentAgentId", document.getElementById("StudentAgentId").value);
    formData.append("StudentGuidePhone", document.getElementById("StudentGuidePhone").value);
    formData.append("SecurityCoordinator", document.getElementById("SecurityCoordinator").value);
    formData.append("SecurityCoordinatorPhone", document.getElementById("SecurityCoordinatorPhone").value);
    formData.append("SecurityCoordinatorId", document.getElementById("SecurityCoordinatorId").value);
    formData.append("MediaCoordinator", document.getElementById("MediaCoordinator").value);
    formData.append("MediaCoordinatorPhone", document.getElementById("MediaCoordinatorPhone").value);
    formData.append("MediaCoordinatorId", document.getElementById("MediaCoordinatorId").value);
    formData.append("VolunteerWorkCoordinator", document.getElementById("VolunteerWorkCoordinator").value);
    formData.append("VolunteerWorkCoordinatorId", document.getElementById("VolunteerWorkCoordinatorId").value);
    formData.append("VolunteerWorkCoordinatorPhone", document.getElementById("VolunteerWorkCoordinatorPhone").value == "on" ? true : false);
    formData.append("HealthGuidanceCoordinator", document.getElementById("HealthGuidanceCoordinator").value);
    formData.append("HealthGuidanceCoordinatorPhone", document.getElementById("HealthGuidanceCoordinatorPhone").value);
    formData.append("HealthGuidanceCoordinatorId", document.getElementById("HealthGuidanceCoordinatorId").value);
    formData.append("TransferCoordinator", document.getElementById("TransferCoordinator").value);
    formData.append("TransferCoordinatorPhone", document.getElementById("TransferCoordinatorPhone").value);
    formData.append("TransferCoordinatorId", document.getElementById("TransferCoordinatorId").value);
    let response = await fetch('https://localhost:7041/api/Home/AddMainInfo', {
      method: 'POST',
      body: formData,
    });
    const result = await response.text();
    console.log(await response.status)
    showMessage(result);
  } catch (error) {
    alert("حدث خطأ في السيرفر");
    // console.log(error);
  }
};

  phones.forEach((phone)=> {
    phone.addEventListener('keydown' ,(e) => {
      document.querySelector(`#${e.target.id}+p`).innerHTML=""
      if((isNaN(parseInt( e.key))||e.target.value.length==10)&&e.key!="Backspace"&&e.key!="Tab")
          e.preventDefault();
    })
  })

function checkLength() {
  for (const phone of phones) {
    if(phone.value.length!=10) {
      phone.nextElementSibling.scrollIntoView({behavior:"smooth"})
      phone.nextElementSibling.innerHTML="يجب ان يكون الرقم مكون من 10 أرقام"
      return false
   }
   if(phone.id.includes("Phone")) {
    if(startWith05(phone)==false) {
      phone.nextElementSibling.scrollIntoView({behavior:"smooth"})
      phone.nextElementSibling.innerHTML="يجب ان يبدأ الؤقم ب 05"
      return false
    }
  } 
}
 return true;
}
function startWith05(input) {
  return input.value.startsWith("05")?true: false
}

function checkInputs(inputs) {
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value.trim() == '') {
      return false
    }
  }
  return true
}

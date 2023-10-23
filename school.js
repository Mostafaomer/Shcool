let btnSaveScool=document.getElementById("btnSaveScool")
let saveSchool=document.getElementById("saveSchool");


btnSaveScool.addEventListener('click' , (e) => {
  let inputs=document.querySelectorAll("#saveSchool input");
  if(checkInputs(inputs)==false) {
    e.preventDefault()
    saveMainInfo()
}
})

const saveMainInfo = async () => {
    try {
        let list=["ابتدائي","ثانوي"]
        const formData=new FormData();
        formData.append("SchoolGender",  document.getElementById("SchoolGender").value);
        formData.append("SchoolName",document.getElementById("SchoolName").value);
        formData.append("SchoolType", document.getElementById("SchoolType").value);
        formData.append("SchoolGroub",document.getElementById("SchoolGroub").value);
        formData.append("SchoolNameGroup", document.getElementById("SchoolNameGroup").value);
        formData.append("TotalStudent", document.getElementById("TotalStudent").value);
        formData.append("TotalRooms", document.getElementById("TotalRooms").value);
        formData.append("RoomsForMange", document.getElementById("RoomsForMange").value);
        formData.append("TotalClasses", document.getElementById("TotalClasses").value);
        formData.append("TotalResources",document.getElementById("TotalResources").value);
        formData.append("TotalLabCs", document.getElementById("TotalLabCs").value);
        formData.append("TotalLab", document.getElementById("TotalLab").value);
        formData.append("Gems",  document.getElementById("Gems").value);
        formData.append("StudentsKG2", document.getElementById("StudentsKG2").value);
        formData.append("StudentsKG3", document.getElementById("StudentsKG3").value);
        formData.append("ClassesKG2", document.getElementById("ClassesKG2").value);
        formData.append("ClassesKG3", document.getElementById("ClassesKG3").value);
        formData.append("ClassesOnePrimary", document.getElementById("ClassesOnePrimary").value);
        formData.append("ClassesSecPrimary", document.getElementById("ClassesSecPrimary").value);
        formData.append("ClassesThPrimary",  document.getElementById("ClassesThPrimary").value);
        formData.append("ClassesFourPrimary", document.getElementById("ClassesFourPrimary").value);
        formData.append("ClassesFivePrimary", document.getElementById("ClassesFivePrimary").value);
        formData.append("ClassesSixPrimary",document.getElementById("ClassesSixPrimary").value);
        formData.append("StuentsOnePrimary", document.getElementById("StuentsOnePrimary").value);
        formData.append("StuentsSecPrimary", document.getElementById("StuentsSecPrimary").value);
        formData.append("StuentsThPrimary", document.getElementById("StuentsThPrimary").value);
        formData.append("StuentsFourPrimary", document.getElementById("StuentsFourPrimary").value);
        formData.append("StuentsFivePrimary", document.getElementById("StuentsFivePrimary").value);
        formData.append("StuentsSixPrimary", document.getElementById("StuentsSixPrimary").value);
        formData.append("ClassesOneMid", document.getElementById("ClassesOneMid").value);
        formData.append("ClassesSecMid", document.getElementById("ClassesSecMid").value);
        formData.append("ClassesThMid", document.getElementById("ClassesThMid").value);
        formData.append("ClassesOneSecondary", document.getElementById("ClassesOneSecondary").value);
        formData.append("ClassesSecSecondary", document.getElementById("ClassesSecSecondary").value);
        formData.append("ClassesThSecondary", document.getElementById("ClassesThSecondary").value);
        formData.append("StudentsOneMid", document.getElementById("StudentsOneMid").value);
        formData.append("StudentsSecMid", document.getElementById("StudentsSecMid").value);
        formData.append("StudentsThMid", document.getElementById("StudentsThMid").value);
        formData.append("StudentsOneSecondary", document.getElementById("StudentsOneSecondary").value);
        formData.append("StudentsSecSecondary", document.getElementById("StudentsSecSecondary").value);
        formData.append("StudentsThSecondary", document.getElementById("StudentsThSecondary").value);
        formData.append("TotalEmps", document.getElementById("TotalEmps").value);
        formData.append("TotalTeachers", document.getElementById("TotalTeachers").value);
        formData.append("ManagerEducation", document.getElementById("ManagerEducation").value);
        formData.append("ManagerCity", document.getElementById("ManagerCity").value); 
        formData.append("ManagerUsers", document.getElementById("ManagerUsers").value); 
        formData.append("Stages[0]","ابتدائي"); 
        // formData.append("Stages[1]","ثانوي"); 
        let response = await fetch('http://Schooll.somee.com/api/Home/Addschool', {
            method: 'POST',
        body: formData,
        });
        const result = await response.text();
        console.log(result);
        document.querySelector(".alert").innerHTML=result
        showMessage();
} catch (error) {
    document.querySelector(".alert").innerHTML=result
        showMessage();
    console.log(error);
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

const showMessage = () => {

       let alert=document.querySelector(".alert")
       alert.scrollIntoView({behavior:"smooth"})
      alert.classList.add("alerton");
      setTimeout(() => {
        alert.classList.remove("alerton");
      }, 2000);
      setTimeout(() => {
        location.reload();
      }, 2000);
};
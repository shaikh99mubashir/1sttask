const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const fatherName = document.getElementById("fatherName");
const lastEdu = document.getElementById("lastEdu");
const experience = document.getElementById("experience");
const grade = document.getElementById("grade");
const dateOfBirth = document.getElementById("dateOfBirth");
const fn = document.getElementById("fn");
const ln = document.getElementById("ln");
const em = document.getElementById("em");
const btn = document.getElementById("btn");
const farhername = document.getElementById('farhername');
const lstEdu = document.getElementById('lstEdu');
const grde = document.getElementById('grde');
const exp = document.getElementById('exp');
const dob = document.getElementById('dob');

const arr = [];
function addFields() {
  let data = document.querySelector('#tableBody');
  let id = data.childElementCount + 1;
  
  let row  = `<tr id="row_${id}">`
  row += `<td id="fn">${id}</td>`
  row += `<td id="fn">${firstName.value}</td>`
  row += `<td id="ln">${lastName.value}</td>`
  row += `<td id="em">${email.value}</td>`
  row += `<td id="farhername_${id}"></td>`
  row += `<td id="exp_${id}"></td>`
  row += `<td id="lstEdu_${id}"></td>`
  row += `<td id="grde_${id}"></td>`
  row += `<td id="dob_${id}"></td>`
  row += `<td id="addMore${id}"></td>`
  row += `<td id="btn" class="tbbtn"><button onclick="openModal(${id})">Update Info</button></td>`
  row += `</tr>`

  data.innerHTML = data.innerHTML + row;
}
function openModal(id) {
  document.getElementById('id01').style.display='block';
  document.querySelector('#submitButton').setAttribute('data-row', id);
  console.log(document.querySelector('#submitButton'))
}

function updateDetails(){
  let id = document.querySelector('#submitButton').getAttribute('data-row');
  document.querySelector('#farhername_' + id).innerHTML = fatherName.value;
  document.querySelector('#lstEdu_' + id).innerHTML = lastEdu.value;
  document.querySelector('#grde_' + id).innerHTML = grade.value;
  document.querySelector('#exp_' + id).innerHTML = experience.value;
  document.querySelector('#dob_' + id).innerHTML = dateOfBirth.value;
  document.querySelector('#addMore' + id).innerHTML = addMore.value;
  document.getElementById('id01').style.display='none';
}

const addMoreFieldBTN = document.getElementById("mfb");
const addMoreDiv = document.getElementById("addMore");
const addInput = document.getElementById("addInput");
const formDiv = document.getElementById("fields");


     function createNewLabelField() {
      addMoreFieldBTN.style = "display: none;";
       addMoreDiv.style = "display: block;";
     }

function addNewInputInForm() {
  if (addInput?.value?.length > 0) {
    let labelValue = addInput.value;
    console.log("KYA HY", formDiv);
    formDiv.innerHTML += `
     <br /><label id="label">${labelValue}</label>
    <input
      class="inputid"
      type="text"
      placeholder="${labelValue}"
      required
      id="${labelValue}"
    />  `;
    addMoreFieldBTN.style = "display: block;";
    addMoreDiv.style = "display: none;";
  } else {
    alert("please fill out label field");
  }
}

// function checkInputFeilds() {
//   let fieldsValue = {
//     firstName,
//     lastName,
//     email,
//     fatherName,
//     lastEdu,
//     experience,
//     grade,
//     dateOfBirth,
//   };
//   let entries = Object.entries(fieldsValue.uniqueId);
//   let errorFields = "";
//   for (let i = 0; i < entries.length; i++) {
//     if (entries[i][1].value?.length > 0) {
//     } else {
//       errorFields += ` ${entries[i][0]}`;
//       entries[i][1].style = "color: red;";
//     }
//   }
//   if (errorFields.length > 0) {
//     alert(`fill value first? ${errorFields}`);
//   }
// }
// function displayValues() {

//   fn.innerHTML += `<p>${firstName.value}</p>`;
//   ln.innerHTML += `<p>${lastName.value}</p>`;
//   em.innerHTML += `<p>${email.value}</p>`;
//   btn.innerHTML += `<p><input type="button" value="Add more Feild?" id="mfb" onclick="createNewLabelField()"/></p>`
// }

// function submitAnotherFeilds(){
//   farhername.innerHTML += `<p>${fatherName.value}</p>`;
//   lstEdu.innerHTML += `<p>${lastEdu.value}</p>`;
//   grde.innerHTML += `<p>${grade.value}</p>`;
//   exp.innerHTML += `<p>${experience.value}</p>`;
//   dob.innerHTML += `<p>${dateOfBirth.value}</p>`;
// }
//  function update(){
//    const onlyOnceTime = document.getElementById('id01').style.display='none'

//    console.log(onlyOnceTime);
//  }
// let uniqueId = Math.floor(Math.random() *1000 +1) 
// console.log(uniqueId);





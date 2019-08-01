const alertPopUp = document.getElementById('alertPopUp');
const btnAlert = document.querySelector('.btn-alert');
const headerAlert = document.querySelector('.notification');
const messageForm = document.getElementById('messageForm');

//create pop up alert div
alertPopUp.innerHTML =
`
<div class="alert-banner">
  <div class="alert-wrapper">
    <h3>Alert!</h3>
    <p>This is an alert message</p>
  </div>
  <div class="btn-wrapper">
    <button class="btn-alert" type=button name=button>&times;</button>
  </div>
</div>
`;

// Event-handler to close alert popup
const displayNone = (el, value) => {
  el.addEventListener('click', e => {
    const element = e.target;
    if(element.classList.contains(value)) {
        el.style.display = 'none';
    }
  });
}
displayNone(alertPopUp, 'btn-alert');



// Name and Email validation Function.
function validation(){
  const name = document.querySelector(".user-search").value;
  const message = document.querySelector(".search-text").value;

  if( name ==='') {
    alert("Please fill in the user name...!!!!!!");
    return false;
  } else if( message ==='') {
    alert("Please type your message...!!!!!!");
    return false;
   }else {
    return true;
  }
}


// Submit form with id function.
function formSubmit() {
  if (validation()) {
    messageForm.submit(); //form submission
    alert("Form Submitted Successfully......");
  }
}

messageForm.addEventListener('click', e => {
  const element = e.target;
  if(element.className === 'user-search-btn') {
    formSubmit();
    messageForm.reset();
  }
});










// // Header Icon Alert Popup
// headerAlert.addEventListener('click', e => {
// const unread = document.createElement('div');
//   for (let i = 0; i < 4; i++) {
//     if (headerAlert.className === 'notification')
//     headerAlert.appendChild(unread);
//   }
// });

const alertPopUp = document.getElementById('alertPopUp');
const btnAlert = document.querySelector('.btn-alert');

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


const displayNone = (el, value) => {
  el.addEventListener('click', e => {
    const element = e.target;
    if(element.classList.contains(value)) {
        el.style.display = 'none';
    }
  });
}
displayNone(alertPopUp, 'btn-alert');

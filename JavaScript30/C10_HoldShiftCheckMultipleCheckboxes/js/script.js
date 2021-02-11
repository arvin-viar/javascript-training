const checkboxes = document.querySelectorAll('.chkboxes__list input[type="checkbox"]');

let lastCheckbox;
function checkBoxClicked(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastCheckbox) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastCheckbox = this;
}

checkboxes.forEach((checkbox) => checkbox.addEventListener('click', checkBoxClicked));

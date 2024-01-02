// Saņem izvēlnes elementu
const backgroundDropdown = document.querySelector('#yourDropdownId');

// Pievieno event listeneru izvēlnei, lai klausītos izmaiņas
backgroundDropdown.addEventListener('change', (event) => {
  // Get the selected value
  const selectedValue = event.target.value;

  // Izmanto izvēlēto vertību, lai mainītu fona attēlu
  let newBackgroundImage;
  if (selectedValue === 'option1') {
    newBackgroundImage = 'url("../images/logo.png")';
  } else if (selectedValue === 'option2') {
    newBackgroundImage = 'url("../images/smile.png")';
  } else if (selectedValue === 'option3') {
    newBackgroundImage = 'url("../images/option3.jpg")';
  } else if (selectedValue === 'option4') {
    newBackgroundImage = 'url("../images/option4.png")';
  }

  // Atjaunina vērtību --background-image pielāgotajam propertijam
  console.log(newBackgroundImage);
  document.documentElement.style.setProperty('--background-image', newBackgroundImage);
});
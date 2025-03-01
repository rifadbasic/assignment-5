// to fixed date
const date = new Date('2025-03-02');

const format = { year: 'numeric', month: 'long', day: 'numeric'};
const dateFormat = date.toLocaleDateString('en-US', format);

document.getElementById("date").textContent = dateFormat;

// for clear data 

document.getElementById('clr-data')
.addEventListener('click', function clearData(){
  document.getElementById("history").textContent = '';
  alert("Do you want to delete history");
})
const content = document.getElementById("content");

const english = document.querySelector("#english");
const khmer = document.querySelector("#khmer");

english.addEventListener('click', () => {
if(khmer.classList.contains('hidden')){
khmer.classList.remove('hidden');
} else {
khmer.classList.add('hidden');
}
})
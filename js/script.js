// show hide form
const show_hide_form = document.querySelector("#show-hide-button");
const form = document.querySelector("form");

show_hide_form.addEventListener("click", function(){

	if(form.style.display === "none"){
		form.style.display = "block";
		show_hide_form.textContent = "Hide Form Add New Student";
	}
	else{
		form.style.display = "none";
		show_hide_form.textContent = "Show Form Add New Student";
	}
});
//end show hide form


//faculties and program study
const faculties = [
	{
		name:"Computer Science",
		sub: ['Information Systems','Informatics']
	},
	{
		name:"Ekonomi",
		sub: ['Management','Accounting']
	},
	{
		name:"Anime Summer 2020",
		sub: ['Re:Zero 2nd Season','The God of Highschool']
	},
]

const faculty_option = document.querySelector("#faculty-form");

for(faculty of faculties){
	let tag = document.createElement('option');
	let text = document.createTextNode(faculty.name);
	tag.appendChild(text);
	faculty_option.appendChild(tag);
}


let program_study = document.querySelector("#program-study-form");

faculty_option.addEventListener('change',function(e){

	let options = e.target.value;

	//check if selected faculty is valid
	if(faculties.map((faculty) => faculty.name).indexOf(options) != -1){
		faculties.filter((i) => {
			if(i.name == options){

				program_study.innerHTML = '';

				let tag = document.createElement('option');
				let text = document.createTextNode("-- SELECT PROGRAM OF STUDY --");
				tag.appendChild(text);
				program_study.appendChild(tag);

				for(j of i.sub){
					let tag = document.createElement('option');
					let text = document.createTextNode(j);
					tag.appendChild(text);
					program_study.appendChild(tag)
					
				}
			}
		});
	}
	else{
		// console.log('');
	}
});
//end faculties and program study

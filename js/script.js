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
		program_study.innerHTML = '';

		let tag = document.createElement('option');
		let text = document.createTextNode("-- SELECT PROGRAM OF STUDY --");
		tag.appendChild(text);
		program_study.appendChild(tag);
	}
});
//end faculties and program study


//gel all from value
const submit_button = document.querySelector("#submit-button");

submit_button.addEventListener('click',() =>{
	let student_nim = document.querySelector("#NIM").value;
	let student_name = document.querySelector("#full-name").value;
	let student_gender = document.querySelector('input[name="gender"]:checked').value;
	let student_faculty = document.querySelector("#faculty-form").options[document.querySelector("#faculty-form").selectedIndex].value;
	let student_program_study = document.querySelector("#program-study-form").options[document.querySelector("#program-study-form").selectedIndex].value;;

	
	//validating form data
	if(/^\d+$/.test(student_nim) != true){
		alert("Invalin Student NIM");
		return;
	}

	if(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(student_name) != true){
		alert("Invalid Student Name");
		return;
	}

	if(student_faculty == '-- SELECT FACULTY --'){
		alert("Invalid Faculty");
		return;
	}

	if(student_program_study == '-- SELECT PROGRAM OF STUDY --'){
		alert("Invalid Program Study");
		return;
	}

});







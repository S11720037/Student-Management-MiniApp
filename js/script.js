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
		sub: [
			'Re:Zero kara Hajimeru Isekai Seikatsu 2nd Season',
			'The God of Highschool',
			'Yahari Ore no Seishun Love Comedy wa Machigatteiru. Kan',
			'Kanojo, Okarishimasu',
			'Maou Gakuin no Futekigousha: Shijou Saikyou no Maou no Shiso, Tensei shite Shison-tachi no Gakkou e',
			'Sword Art Online: Alicization - War of Underworld 2nd Season',
		]
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


let students = [
	{
		nim: '105021810020',
		name: 'Tendean Arter',
		gender: 'Male',
		faculty: 'Computer Science',
		program_study: 'Informatics',
	},
	{
		nim: '105021810021',
		name: 'Emilia',
		gender: 'Female',
		faculty: 'Computer Science',
		program_study: 'Informatics',
	},
	{
		nim: '105021810022',
		name: 'Subaru Natsuki',
		gender: 'Male',
		faculty: 'Computer Science',
		program_study: 'Informatics',
	},
	{
		nim: '105021810023',
		name: 'Rem',
		gender: 'Female',
		faculty: 'Computer Science',
		program_study: 'Informatics',
	},
	// {
	// 	nim: '105021810024',
	// 	name: 'Echidna',
	// 	gender: 'Female',
	// 	faculty: 'Computer Science',
	// 	program_study: 'Informatics',
	// },
	// {
	// 	nim: '105021810025',
	// 	name: 'Felix Argyle',
	// 	gender: 'Male',
	// 	faculty: 'Computer Science',
	// 	program_study: 'Informatics',
	// },
	// {
	// 	nim: '105021810026',
	// 	name: 'Ram',
	// 	gender: 'Female',
	// 	faculty: 'Computer Science',
	// 	program_study: 'Informatics',
	// }
]


//get all from data
const submit_button = document.querySelector("#submit-button");

submit_button.addEventListener('click',() => {
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

	//append valid form data to student list
	students.push({
		nim: student_nim,
		name: student_name,
		gender: student_gender,
		faculty: student_faculty,
		program_study: student_program_study,
	});

	//update student list and reset form data
	alert("Success");
	update_student_list();
	document.querySelector("form").reset();


});
//end get all from data


//display all students
const student_list = document.querySelector("#student-list");

function update_student_list(fiter_name){

	student_list.innerHTML = "";

	for(student of students){

		let tr = document.createElement("tr");

		for(key in student){

			let td = document.createElement("td");
			td.appendChild(document.createTextNode(student[key]));

			tr.appendChild(td);
		}

		//action
		let action = document.createElement("td");
		let trash_icon = `<button type="button" onclick="delete_row(this)" class="btn btn-danger"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/> </svg></button>`
		action.innerHTML = trash_icon;
		tr.appendChild(action);

		student_list.appendChild(tr);
	}
}
update_student_list();
//end display all students


//delete row
function delete_row(btn) {
	var row = btn.parentNode.parentNode;

	student_nim = (row.querySelector("tr td").textContent);

	students = students.filter((s) =>{
		return s.nim != student_nim;
	});

	update_student_list();

	//don't forget to reset input text
	document.querySelector("#search-student-form").reset();

}
//end delete row


//search students by name
let search_student = document.querySelector("#search-student");

search_student.addEventListener("input",() => {
	if(search_student.length == 0){
		update_student_list();
	}
	else{
		student_list.innerHTML = "";

		//filter the student
		let filtered_students = students.filter((s) => {
			return s.name.toLowerCase().includes(search_student.value.toLowerCase());
		});

		for(student of filtered_students){

			let tr = document.createElement("tr");

			for(key in student){

				let td = document.createElement("td");
				td.appendChild(document.createTextNode(student[key]));

				tr.appendChild(td);
			}
			
			//action #delete, 
			let action = document.createElement("td");
			let trash_icon = `<button type="button" onclick="delete_row(this)" class="btn btn-danger"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/> </svg></button>`
			action.innerHTML = trash_icon;
			tr.appendChild(action);

			student_list.appendChild(tr);
		}

	}
});

//disable "Enter"
search_student.addEventListener('keydown',(e) =>{
	if(e.keyCode == 13){
		e.preventDefault();
	}

	return false;
});

//end search student by name



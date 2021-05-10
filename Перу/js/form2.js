const form2 = document.getElementById('question_data');
const username2 = document.getElementById('question_name');
const email2 = document.getElementById('question_email');
const question = document.getElementById('question');


form2.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs2();
});

function checkInputs2() {
	// trim to remove the whitespaces
	const username2Value = username2.value.trim();
	const email2Value = email2.value.trim();
	const questionValue = question.value.trim();

	
	if(username2Value === '') {
		setErrorFor2(username2, 'Это поле не может быть пустым');
	} else {
		setSuccessFor2(username2);
	}
	
	if(email2Value === '') {
		setErrorFor2(email2, 'Это поле не может быть пустым');
	} else if (!isEmail(email2Value)) {
		setErrorFor2(email2, 'Неправельный email');
	} else {
		setSuccessFor2(email2);
	}
  
	if(questionValue === '') {
		setErrorFor2(question, 'Это поле не может быть пустым');
	} else {
		setSuccessFor2(question);
	}
}

function setErrorFor2(input, message) {
	const formControl2 = input.parentElement;
	const small = formControl2.querySelector('small');
	formControl2.className = 'form-control2 error';
	small.innerText = message;
}

function setSuccessFor2(input) {
	const formControl2 = input.parentElement;
	formControl2.className = 'form-control2 success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
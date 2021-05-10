
const form3 = document.getElementById('form_modal');
const username3 = document.getElementById('username_m');
const email3 = document.getElementById('email_m');
const phone3 = document.getElementById('phone_m');


form3.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs3();
});

function checkInputs3() {
	// trim to remove the whitespaces
	const username3Value = username3.value.trim();
	const email3Value = email3.value.trim();
  const phone3Value = phone3.value.trim();
	
	
	if(username3Value === '') {
		setErrorFor3(username3, 'Введите имя');
	} else {
		setSuccessFor3(username3);
	}
	
	if(email3Value === '') {
		setErrorFor3(email3, 'Введите email');
	} else if (!isEmail(email3Value)) {
		setErrorFor3(email3, 'Неправельный email');
	} else {
		setSuccessFor3(email3);
	}
	
  if(phone3Value === '') {
		setErrorFor3(phone3, 'Введите номер');
	} else if (!isPhone(phone3Value)) {
		setErrorFor3(phone3, 'Неправельный номер');
	} else {
		setSuccessFor3(phone3);
	}
	
}

function setErrorFor3(input, message) {
	const formControl3 = input.parentElement;
	const small = formControl3.querySelector('small');
	formControl3.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor3(input) {
	const formControl3 = input.parentElement;
	formControl3.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPhone(phone) {
	return /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(phone);
}

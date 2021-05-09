console.log(1)
document.querySelector('.header__burger').addEventListener('click', (event)=>{
    event.currentTarget.classList.toggle('active')
    document.querySelector('.header__menu').classList.toggle('active')
    document.body.classList.toggle('lock')
})

if(window.screen.width>767){
    window.addEventListener('scroll',()=>{
        document.querySelector('.header').style.opacity='0.95'
        
    })
}
console.log(window.screen.width)

function functionForDop() {
    
    let button=document.getElementById("nice-button");
    let dop=document.getElementById("dopolnitelno");

    if(button.value==="Дополнительно"){
        button.value="Скрыть";
        
        dop.style.display='';
    }

    else if(button.value==="Скрыть"){
        button.value="Дополнительно";
        
        dop.style.display="none";
    }
    

}



// const form = document.getElementById('myForm');
// const email = document.getElementById('email');

// const username = document.getElementById('name');

// const cards = document.getElementById('cards');
// const cvv = document.getElementById('cvv');
// const date = document.getElementById('date');

// form.addEventListener('submit', e => {
// 	e.preventDefault();
// 	checkInputs();
// });


// function checkInputs() {

// 	const usernameValue = username.value.trim();
// 	const emailValue = email.value.trim();
//     const cardsValue = cards.value.trim();
//     const cvvValue = cvv.value.trim();
//     const dateValue = date.value.trim();

// 	if(usernameValue === '') {
// 		setErrorFor(username, 'Username cannot be blank');
// 	} else {
// 		setSuccessFor(username);
// 	}
	
// 	if(emailValue === '') {
// 		setErrorFor(email, 'Email cannot be blank');
// 	} else if (!isEmail(emailValue)) {
// 		setErrorFor(email, 'Not a valid email');
// 	} else {
// 		setSuccessFor(email);

// 	}
	
// 	if(cardsValue === '') {
// 		setErrorFor(cards, 'Cards cannot be blank');
// 	} else {
// 		setSuccessFor(cards);
// 	}
	
// 	if(cvvValue === '') {
// 		setErrorFor(cvv, 'cvv cannot be blank');
// 	} else {
// 		setSuccessFor(cards);
// 	}
//     if(dateValue === '') {
// 		setErrorFor(date, 'cvv cannot be blank');
// 	} else {
// 		setSuccessFor(date);
// 	}

// 	return check;
// }

// function setErrorFor(input, message) {
// 	const formControl = input.parentElement;
// 	const small = formControl.querySelector('small');
// 	formControl.className = 'form-control error';
// 	small.innerText = message;
// }

// function setSuccessFor(input) {
// 	const formControl = input.parentElement;
// 	formControl.className = 'form-control success';
// }
	
// function isEmail(email) {
// 	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// }
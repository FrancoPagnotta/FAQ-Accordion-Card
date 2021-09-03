const d = document;

d.querySelectorAll('.accordion-question').forEach((question)=> question.addEventListener('click', ()=> {

	if (question.nextElementSibling.classList.contains('open')) question.nextElementSibling.classList.toggle('open');
	
	else {
		d.querySelectorAll('.accordion-question').forEach((question)=> question.nextElementSibling.classList.remove('open'));

		question.nextElementSibling.classList.add('open');
	}

}));

d.querySelectorAll('.accordion-question').forEach((question)=> question.addEventListener('click', ()=> {

	if (question.parentNode.classList.contains('open')) question.parentNode.classList.toggle('open');
	
	else {
		d.querySelectorAll('.accordion-question').forEach((question)=> question.parentNode.classList.remove('open'));

		question.parentNode.classList.add('open');
	}

}));

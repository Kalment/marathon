/*function getRow(firstRow, secondRow) {
	let countFirstRow = 0; 
	let countSecondRow = 0;

	for (let i = 0; i < firstRow.length; i++) {
		if (firstRow.charAt(i) == 'а'){
			countFirstRow++;
		}
	}
	for (let i = 0; i < secondRow.length; i++) {
		if (secondRow.charAt(i) == "а"){
			countSecondRow++;
		}
	}
	if (countFirstRow > countSecondRow) {
		return firstRow;
	} return secondRow;
	
}


const firstRow = prompt("Введите первую строку");// мама мыла раму
const secondRow = prompt("Введите вторую строку");// собака друг человека

alert(getRow(firstRow, secondRow)); // мама мыла раму*/




function formattedPhone(phone) {
	let formatPhone = '';
	for (let i = 0; i < phone.length; i++){
		if (i === 2) {
			formatPhone += ' (';
		} else if (i === 5){
			formatPhone += ') ';
		} else if (i === 8){
			formatPhone += '-';
		} else if (i === 10){
			formatPhone += '-';
		}
		formatPhone += phone.charAt(i);
	}
	return formatPhone;
}


function verification (phone){
	for (let i = 0; i < phone.length; i++){
		if (isNaN(phone.charAt(i) == false)){
			return 0;
			break
		}
	}
	return 1;
} 

while(true){
let number = '+7' 
number += prompt('Введите номер телефона без 8 и +7');
	if (number.length === 12){
		if (verification(number) == 1){
			alert(formattedPhone(number)); // +7 (123) 456-78-90
			break;
		} else { alert('Вы ввели символы, повторите попытку снова используя только цифры!')}
	} else { alert('Неверный формат номера телефона, должно быть 10 цифр, пожалуйста повторите попытку.')}
}
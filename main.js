function getRow(firstRow, secondRow) {
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

alert(getRow(firstRow, secondRow)); // мама мыла раму

document.getElementById('gradeForm').addEventListener('submit', function(e) {
	e.preventDefault();

	const name = document.getElementById('name').value.trim();
	const grades = [];
	for (let i = 1; i <= 7; i++) {
		const val = parseFloat(document.getElementById('grade' + i).value);
		if (isNaN(val)) {
			grades.push(0);
		} else {
			grades.push(val);
		}
	}
	
	const gwa = grades.reduce((a, b) => a + b, 0) / grades.length;
	
	const resultContainer = document.getElementById('resultContainer');
	const resultText = document.getElementById('resultText');
	resultText.textContent = gwa.toFixed(2);
	resultContainer.style.display = 'block';
		const encourageMsg = document.getElementById('encourageMsg');
		if (encourageMsg) encourageMsg.style.display = 'block';
});

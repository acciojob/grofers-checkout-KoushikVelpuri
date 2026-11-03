const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const table = document.getElementById('table')
	const tr = document.createElement('tr')
	const td = document.createElement('td')
	const itemsPrice = document.querySelectorAll('.price')
	let totalAmount = 0
	itemsPrice.forEach(item)=>{
		totalAmount += Number(item.textContent)
	}
	td.appendChild(totalAmount)
	tr.append(td)
	table.append(tr)
};

getSumBtn.addEventListener("click", getSum);


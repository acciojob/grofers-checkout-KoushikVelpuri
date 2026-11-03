const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const tr = document.createElement('tr')
	const itemsPrice = document.querySelectorAll('.price')
	let totalAmount = 0
	itemsPrice.forEach(item)=>{
		totalAmount += Number(item.textContent)
	}
	console.log(totalAmount)
	table.append(tr)
};

getSumBtn.addEventListener("click", getSum);


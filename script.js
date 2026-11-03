const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  const itemsPrice = document.querySelectorAll('.price')
	let totalAmount = 0
	itemsPrice.forEach((item)=>{
		totalAmount += Numebr(item.textContent)
	})console.log(totalAmount)
};

getSumBtn.addEventListener("click", getSum);


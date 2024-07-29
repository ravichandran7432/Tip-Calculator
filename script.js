document.getElementById('tip-form').addEventListener('submit', function(event) {
    event.preventDefault();const billAmount = parseFloat(document.getElementById('bill-amount').value);
    const tipPercentage = parseFloat(document.getElementById('tip-percentage').value);
    if (isNaN(billAmount) || billAmount <= 0 || isNaN(tipPercentage) || tipPercentage < 0) {
        alert('Please enter valid values.');
        return;
    }const tipAmount = (billAmount * tipPercentage) / 100;
    const totalAmount = billAmount + tipAmount;document.getElementById('tip-amount').textContent = `Tip Amount: $${tipAmount.toFixed(2)}`;
    document.getElementById('total-amount').textContent = `Total Amount: $${totalAmount.toFixed(2)}`;
});
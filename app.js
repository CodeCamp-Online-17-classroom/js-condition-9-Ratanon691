let numbers = []
for (let i = 0; i < 3; i++) {
    let number = parseFloat(prompt(`Enter number ${i + 1}: `))
    numbers.push(number)
}
numbers.sort((a, b) => b - a)
console.log(numbers)

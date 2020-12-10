class Calculator {
    calculatePercentage = (partialValue, totalValue) => {
        return Math.round((partialValue / totalValue) * 100);
    };
}

export default Calculator;
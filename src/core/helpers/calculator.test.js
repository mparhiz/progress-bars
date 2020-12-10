import Calculator from "./calculator";

const calculator = new Calculator();

test('should returns percentage', () => {
    const partialValue = 47;
    const totalValue = 180;
    const result = calculator.calculatePercentage(partialValue, totalValue);

    expect(result).toEqual(26);
});

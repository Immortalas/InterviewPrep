console.log(0.1 + 0.2 === 0.3);
// Outputs:
// 1: false // TRUE
// 2: true 

// Explanation:
// In JavaScript, numbers are represented in a binary floating-point format (IEEE 754). Some decimal fractions cannot be represented exactly as binary fractions, leading to precision errors. In this case, 0.1 and 0.2 cannot be precisely represented in binary, so their sum results in a value slightly greater than 0.3, making the comparison false.
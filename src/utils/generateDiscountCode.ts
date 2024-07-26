export const generateDiscountCode = (): string => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const getRandomLetter = () =>
    letters.charAt(Math.floor(Math.random() * letters.length));
  const getRandomDigit = () => Math.floor(Math.random() * 10).toString();

  // Generate 7 or 8 uppercase letters
  const letterCount = Math.floor(Math.random() * 2) + 7;
  const letterPart = Array.from({ length: letterCount }, getRandomLetter).join(
    '',
  );

  // Generate 3 or 4 digits
  const digitCount = Math.floor(Math.random() * 2) + 3;
  const digitPart = Array.from({ length: digitCount }, getRandomDigit).join('');

  return letterPart + digitPart;
};

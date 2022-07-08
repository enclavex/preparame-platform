export function cpfValidation(cpf) {
  cpf = cpf.replace(/\D/g,"");

  let result1 = 0;
  let result2 = 0;
  let firstDigitVerifier = 0
  let secondDigitVerifier = 0
  let mod = 0

  for (let i = 0; i < 9; i++) {
    result1 += (10 - i) * cpf.charAt(i)
  }

  mod = result1 % 11

  if (mod < 2) {
    firstDigitVerifier = 0
  } else {
    firstDigitVerifier = 11 - mod
  }

  if (firstDigitVerifier != cpf.charAt(9)) {
    return false
  }

  for (let i = 0; i < 10; i++) {
    result2 += (11 - i) * cpf.charAt(i)
  }

  mod = result2 % 11

  if (mod < 2) {
    secondDigitVerifier = 0
  } else {
    secondDigitVerifier = 11 - mod
  }

  if (secondDigitVerifier != cpf.charAt(10)) {
    return false
  }

  return true
}

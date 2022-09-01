export function passwordValidation(password) {
    let percentualValidation = 0

    const regexPatternOneDigit = /^(?=.*\d)$/
    const regexPatternOneLowerCase = /^(?=.*[a-z])$/
    const regexPatternOneUpperCase = /^(?=.*[A-Z])$/
    const regexPatternOneNumber = /^(?=.*[0-9])$/
    const regexPatternOneSpecialCharacter = /(?=.*[$*&@#]) $/
    const regexPatternEightCharacters = /^[0-9a-zA-Z$*&@#]{8,}$/

    if (regexPatternOneDigit.test(password)) {
        percentualValidation += 16
    }

    if (regexPatternOneLowerCase.test(password)) {
        percentualValidation += 16
    }

    if (regexPatternOneUpperCase.test(password)) {
        percentualValidation += 17
    }

    if (regexPatternOneNumber.test(password)) {
        percentualValidation += 17
    }

    if (regexPatternOneSpecialCharacter.test(password)) {
        percentualValidation += 17
    }

    if (regexPatternEightCharacters.test(password)) {
        percentualValidation += 17
    }
  
    return percentualValidation;
  }
  
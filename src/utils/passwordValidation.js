export function passwordValidation(password) {
    let percentualValidation = 0

    const numberValidation = /([0-9])/
    const lowerCaseValidation = /([a-z])/
    const upperCaseValidation = /([A-Z])/
    const specialCharacterValidation = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;

    if (password.match(numberValidation)) {
        percentualValidation += 20
    }

    if (password.match(lowerCaseValidation)) {
        percentualValidation += 20
    }

    if (password.match(upperCaseValidation)) {
        percentualValidation += 20
    }

    if (password.match(specialCharacterValidation)) {
        percentualValidation += 20
    }

    if (password.length > 7) {
        percentualValidation += 20
    }
  
    return percentualValidation;
  }
  
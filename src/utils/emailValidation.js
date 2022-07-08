export function emailValidation(email) {
  const regexPattern = /\S+@\S+\.\S+/;

  return regexPattern.test(email);
}

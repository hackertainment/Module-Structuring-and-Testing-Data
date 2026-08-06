function passwordValidator(password) {
    const uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const lowercases = "abcdefghijklmnopqrstuvwxyz".split("");
    const numbers = "0123456789".split("");
    const symbols = "!#$%.*&".split("");
    let passwords = [];
    let hasUppercase = false;
    let hasLowercase = false;
    let hasNumber = false;
    let hasSymbol = false;
    let isValid = false;

    if (password.length>=5) {  // check at least 5 characters
        for (let i=0; i<password.length; i++) {
            hasUppercase = hasUppercase || uppercases.includes(password[i]);  // check at least one English uppercase letter
            hasLowercase = hasLowercase || lowercases.includes(password[i]);  // check at least one English lowercase letter
            hasNumber = hasNumber || numbers.includes(password[i]);  // check at least one number
            hasSymbol = hasSymbol || symbols.includes(password[i]);  // check at least one of the following non-alphanumeric symbols
        }
        isValid = hasUppercase && hasLowercase && hasNumber && hasSymbol && (!passwords.includes(password));  // check not be any previous password in the passwords array
    }

    return isValid;
}


module.exports = passwordValidator;
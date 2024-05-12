function generateConfirmationNumber() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 8;
    let confirmationNumber = '';
    for (let i = 0; i < length; i++) {
        confirmationNumber += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return confirmationNumber;
}

module.exports = { generateConfirmationNumber };
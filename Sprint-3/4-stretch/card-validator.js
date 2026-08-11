function cardValidator(card) {
    let invalidCards = ["1".repeat(16), "2".repeat(16), "3".repeat(16), "4".repeat(16), "5".repeat(16), "6".repeat(16), "7".repeat(16), "8".repeat(16), "9".repeat(16)];
    let sum = 0;

    if (card.length==16 ) {  // must be 16 digits
        if (card.replace(/[0-9]/g, "")=="") {  // all of them must be numbers
            if (!invalidCards.includes(card)) {  // must have at least two different digits represented
                if (Number(card[15])%2==0) {  // the final digit must be even
                    for (let i=0; i<card.length; i++) {  // the sum of all the digits must be greater than 16
                        sum = sum+Number(card[i]);
                    }
                }
            }
        }
    }

    return sum>16;
}


module.exports = cardValidator;
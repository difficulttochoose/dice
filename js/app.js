let money = 1000, move = 0, cube1, cube2, bet = 0, guess, continueGame;

while (money < 10000 && money > 0) {
    bet = prompt('Make your bet from 1 to maximum:');
    if (bet != 0 && bet <= money) {
        money -= bet;
        console.log('Your money:', money);
        do {
            guess = prompt('Enter your number from 2 to 12:');
        } while (guess > 12 || guess < 2)
        console.log('Your number:', guess);
        cube1 = Math.floor(Math.random() * 6 + 1);
        cube2 = Math.floor(Math.random() * 6 + 1);
        console.log('cube1:', cube1, 'cube2:', cube2);
        money = money + Number(bet) * ((cube1 + cube2 == Number(guess) && cube1 == cube2) ? 3 : (cube1 + cube2 == Number(guess) ? 2 : 0));
        console.log('Your money:', money);
        move++;
        console.log('Number of moves:', move);
    }
}
console.log(money == 0 || money < 0 ? 'You lose...' : 'You win!!!');

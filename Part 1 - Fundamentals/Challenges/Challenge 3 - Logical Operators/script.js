// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

GOOD LUCK 😀
*/

const firstTeamTitle = 'Scientists';
const secondTeamTitle = 'Historians';

const scoreScientists = (197 + 73 + 88) / 3;
const scoreHistorians = (99 + 49 + 89) / 3;

console.log(`${firstTeamTitle}: ${scoreScientists.toFixed(1)}
${secondTeamTitle}: ${scoreHistorians.toFixed(1)}`);

if (scoreScientists > scoreHistorians && scoreScientists >= 100) {
    console.log(`${firstTeamTitle} — winners! 🏆`)
} else if (scoreScientists < scoreHistorians && scoreHistorians >= 100) {
    console.log(`${secondTeamTitle} — winners! 🏆`)
} else if (scoreScientists === scoreHistorians && scoreScientists >= 100 && scoreHistorians >= 100) {
    console.log(`Draw! 🎊`)
} else {
    console.log('Nobody has won the challenge! 😢');
}
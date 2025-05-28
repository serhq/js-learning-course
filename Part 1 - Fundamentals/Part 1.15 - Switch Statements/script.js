const day = 'Thursday';

switch(day) { 
    case 'Monday': // day === 'Monday'
        console.log(`No plans for ${day}. Relax! 😊`)
        break; // essential to stop the code
    case 'Tuesday':
        console.log(`Water the plants`);
        console.log(`Go to coding meetup`);
        break;
    case 'Wednesday':
        console.log(`Go shopping`);
        break;
    case 'Thursday': // watch the courses
    case 'Friday': // watch the courses
        console.log('Watch the courses');
        break;
    case 'Saturday':
        console.log('Go for a walk');
        break;
    case 'Sunday':
        console.log(`Tidy up my house`);
        break;

        default: // if the user entered wrong input
            console.log('Not a valid day!'); // display this
}

// if-else practical (instead of switch statement)

if (day === 'Monday') {
    console.log(`No plans for ${day}. Relax! 😊`)
} else if (day === 'Tuesday') {
    console.log(`Water the plants`);
    console.log(`Go to coding meetup`);
} else if (day === 'Wednesday') {
    console.log(`Go shopping`);
} else if (day === 'Thursday' || day === 'Friday') {
    console.log('Check if it works both for Thursday and Friday :D');
} else if (day === 'Saturday') {
    console.log('Go for a walk')
} else if (day === 'Sunday') {
    console.log('Tidy up my house')
} else {
    console.log('Not a valid day!')
}
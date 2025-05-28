/*
    const, let, var
    what to use? where? when?
*/

/* 
    let (1)
    when we need to mutate (modify, change) a varable, that's the perfect case for using let. and when we want to declare 'empty' variables.
*/

let age = 18;
age = 20; // assign new value (reassign)

let city; // declaring undefined value
city = 'New York';

/* 
    const (2)
    only for usage when the variables never be changed. for example, PI value equals to 3.1415 and cannot be changed because it's constant value. it can't be overwritten (reassign)
*/

const birthdayMonth = 12;
birthdayMonth = 9; // const declaration (reassigning) is strictly prohibited. output: error

/* 
    var (3)
    the same as let, but it's older.
    ❌ Not allowed to use it in modern development.
*/

var job = 'coder';
job = 'mechanic';

// without let, const, var
// it's not recommended!
lastName = 'Schmedtmann';
console.log(lastName);

function analyzeWorkWeek(hours) {
  if (!Array.isArray(hours) || hours.length !== 7) {
    throw new Error("Input must be an array of exactly 7 numbers, one for each day of the week.");
  }

  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const totalHours = hours.reduce((sum, day) => sum + day, 0);

  const daysWorked = hours.filter(day => day > 0).length;

  const averageDailyHours = daysWorked ? totalHours / daysWorked : 0;

  const maxHours = Math.max(...hours);
  const maxDayIndex = hours.indexOf(maxHours);
  const dayWithMostHours = dayNames[maxDayIndex];

  const isFullTime = totalHours >= 35;

  return {
    totalHours,
    averageDailyHours,
    dayWithMostHours,
    daysWorked,
    isFullTime
  };
}

// TEST DATA
const weekHours = [7.5, 8, 6.5, 0, 8.5, 4];

console.log(analyzeWorkWeek(weekHours));

'use strict';

// Make sure you 100% understand the problem. Ask questions to get a clear picture
// Choose AI and give it a very specific prompt and enough context (language, style, etc.)
// Review and test the output solution. Make sure you introduce no bugs into your app

// Let's say you're building a time tracking application for freelancers. At some point in building this app, you need a function that receives daily work hours for a certain week, and returns:
// 1. Total hours worked
// 2. Average daily hours
// 3. The day with the most hours worked
// 4. Number of days worked
// 5. Whether the week was full-time (worked 35 hours or more)

// TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]

// 1) Understand the problem
// - Where should I store the days of week?
// - What should the function return?
// - What are daily work hours?
// - How to get the average daily hours?
// - How to find the day with the most hours worked?
// - How to receive type of job (full-time or not)?

// Write my code below:

const timeTracking = {

    daysOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],

    dailyHours: [7.5, 8, 6.5, 0, 8.5, 4, 0],

    getTotalHours: function () {
        let total = 0;
        for (let i = 0; i < this.dailyHours.length; i++) {
            total += this.dailyHours[i];
        }
        return total;
    },

    getAverageHours: function () {
        let total = this.getTotalHours();
        let allDays = this.dailyHours.length;

        let averageHours = total / allDays;  
        return Number(averageHours.toFixed(2));
    },

    getMostProductive: function () {
        let max = 0;
        let mostProductiveDay = '';

        for (let i = 0; i < this.dailyHours.length; i++) {
            if (this.dailyHours[i] > max) {
                max = this.dailyHours[i];
                mostProductiveDay = this.daysOfWeek[i];
             }
        }
        return mostProductiveDay;
    },

    getWorkedDays: function () {
        let days = 0;
        for (let i = 0; i < this.dailyHours.length; i++) {
            this.dailyHours[i] > 0 ? days++ : null;
        }
        return days;
    },

    isFullTime: function () {
        return this.getTotalHours() >= 35;
    }

}

console.log(timeTracking.getTotalHours(), timeTracking.getAverageHours(), timeTracking.getMostProductive(), timeTracking.getWorkedDays(), timeTracking.isFullTime());
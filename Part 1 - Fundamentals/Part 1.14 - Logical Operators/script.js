const name = 'Richael';
const hasDriverLicense = true;
const hasGoodVision = true;
const isDrunk = false;

if (hasDriverLicense && hasGoodVision && !isDrunk) {
    console.log(`Yes, ${name} is able to drive.`);
} else {
    console.log(`No, ${name} is being drunk at the moment. You should avoid driving.`);
}


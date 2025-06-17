const amountString2 = "Please give Rs.1000 for the project.";
const prefix = "Please give Rs.";
const suffix = " for the project.";
const amount2 = amountString2.slice(prefix.length, amountString2.length - suffix.length).trim();
console.log(`Extracted amount: ${amount2}`);
"use strict";

const checkForSpam = function (message) {
  let messages = message.toLowerCase();

  return messages.includes(`spam`) || messages.includes(`sale`);
};

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

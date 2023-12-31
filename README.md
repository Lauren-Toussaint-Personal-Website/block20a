# Unit2.Prescription.StarterCode

As a tester for an online medical company, you are tasked with ensuring that the subscription service is functioning correctly and that customers are receiving the promised savings. You decide to use Jest to test the functionality of the program.

## Setup

1. Fork and clone this repo.
2. Run `npm install`.
3. Run `npm test` to see the Jest output!

## Instructions

1. Read through `index.js` and answer the following warm-up questions:
   1. What is the discount for a subscription? .25% off the PricePerRefill x # of Refills 
   2. How much money does a coupon save? $10 off the total PricePerRefill x # of Refills, with or without a subscription
   3. Is the coupon applied before or after the subscription discount? I don't see why it can't be applied after the 25% has been deducted 
   4. What happens when the calculate button is clicked? The customer is given the Total Cost for which they are responsible, after all discounts have been applied
2. Live serve `index.html` to explore the app.
3. Study the example test cases already written for you in `prescriptions.test.js`.
4. Write the missing tests! Can you think of any that weren't included?
5. Study the provided code in `dom.test.js`.
6. Fill in the missing code in `dom.test.js` so that all test cases pass.
7. If you have extra time, try to write more robust test cases!

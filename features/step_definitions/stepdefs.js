const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");
const fizzBuzz = require("../../src/fizzbuzz");

Given('FizzBuzz exists', function () {
    return fizzBuzz !== null;
});

When('FizzBuzz is running', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('FizzBuzz counts to {int}', function (int) {
    // Then('FizzBuzz counts to {float}', function (float) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

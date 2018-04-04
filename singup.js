'use strict';
/* global $ */


const handleLoginClick = function(event) {
  event.preventDefault();
  const enteredUsername = $('.username').val();
  const enteredPassword = $('.password').val();
  console.log(`Username entered is ${enteredUsername} and password is ${enteredPassword}`);
  createAccountApiCall();
}; 

const createAccountApiCall = function()

$(() => {
  $('.signup-form').on('submit', handleLoginClick);
});
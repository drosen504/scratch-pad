'use strict';
/* global $ */

const handleLoginClick = function(event) {
  event.preventDefault();
  const enteredUsername = $('.username').val();
  const enteredPassword = $('.password').val();
  console.log(`Username entered is ${enteredUsername} and password is ${enteredPassword}`);
  createAccountApiCall();
}; 

const createAccountApiCall = function() {
  //POST request to create account;
};

$(() => {
  $('.signup-form').on('submit', handleLoginClick);
});
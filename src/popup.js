'use strict';

import './popup.css';

(function () {
  const extensionFields =
    ['LastName', 'FirstName', 'phonetic', 'Phone', 'Password',
      'Email', 'MailingPostalcode', 'MailingState', 'MailingCity',
      'MailingStreet', 'EmeRelationship1', 'EmeTell'];

  document.querySelector("#set_reserve").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (activeTabs) {
      let inputValues = getInputValuesFromForm();

      chrome.scripting.executeScript({
        target: { tabId: activeTabs[0].id },
        function: function (extensionFields, inputValues) {
          extensionFields.forEach(function(name){
            document.querySelector('[name=' + name + ']').value = inputValues['fumotoppara_' + name];
          });

          document.querySelector('[name=ReservationDateE]').value = "2";
          document.querySelector('#carNum_rd2').checked = true;
          document.querySelector('[name=peopleNum1_01]').value = "1";
          document.querySelector('[name=Method1]').value = "1";
        },
        args: [extensionFields, inputValues]
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    let inputValues = JSON.parse(localStorage.getItem('inputValues'));

    extensionFields.forEach(function (name) {
      if (inputValues['fumotoppara_' + name]) {
        document.querySelector('[name=' + name + ']').value = inputValues['fumotoppara_' + name];
      }
    });
  });


  extensionFields.forEach(function (name) {
    console.log(name);
    document.querySelector('[name=' + name + ']').addEventListener("change", function () {
      localStorage.setItem('inputValues', JSON.stringify(getInputValuesFromForm()));
    });
  });

  function getInputValuesFromForm() {
    let inputValues = {};
    extensionFields.forEach(function (name) {
      inputValues['fumotoppara_' + name] = document.querySelector('[name=' + name + ']').value;
    });
    return inputValues;
  }

})();

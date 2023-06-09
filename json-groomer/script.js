function prettifyJSON() {
  var jsonInput = document.getElementById('jsonInput').value;
  var prettifiedJSON = JSON.stringify(JSON.parse(jsonInput), null, 2);
  document.getElementById('prettifiedJSON').textContent = prettifiedJSON;
  
  // Show the "Copy to Clipboard" and "Reset" buttons
  var copyButton = document.getElementById('copyButton');
  var resetButton = document.getElementById('resetButton');
  copyButton.style.display = 'inline-block';
  resetButton.style.display = 'inline-block';
}

function copyToClipboard() {
  var copyText = document.getElementById('prettifiedJSON').textContent;
  var textarea = document.createElement('textarea');
  textarea.value = copyText;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  displayCopyMessage();
}

function displayCopyMessage() {
  var copyMessage = document.getElementById('copyMessage');
  copyMessage.textContent = 'Copied to clipboard!';
  setTimeout(function() {
    copyMessage.textContent = '';
  }, 2000);
}

function resetForm() {
  document.getElementById('jsonInput').value = '';
  document.getElementById('prettifiedJSON').textContent = '';
  document.getElementById('copyButton').style.display = 'none';
  document.getElementById('resetButton').style.display = 'none';
  document.getElementById('copyMessage').textContent = '';
}
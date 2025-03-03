generateResolutionNB();

function clearFields() {

  document.getElementById('impact').value = '';
  document.getElementById('cusImpact').value = '';
  document.getElementById('sysAffected').value = '';
  document.getElementById('errtrace').value = '';
  document.getElementById('affectedScenario').value = '';
  document.getElementById('steps').value = '';
  document.getElementById('actual').value = '';
  document.getElementById('expected').value = '';
  document.getElementById('design').value = '';
  document.getElementById('can').value = '';
  document.getElementById('link').value = '';
  document.getElementById('soid').value = '';
  document.getElementById('errmsg').value = '';

  generateResolutionNB();
}


function copyToClipboard() {
  const outputText = document.getElementById('output').innerText;
  const tempTextArea = document.createElement('textarea');
  tempTextArea.value = outputText;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  tempTextArea.setSelectionRange(0, 9999999);
  document.execCommand('copy');
  document.body.removeChild(tempTextArea);

  const statusMessage = document.getElementById('statusMessage');
  statusMessage.textContent = 'Resolution copied to clipboard!';

  setTimeout(() => {
    statusMessage.textContent = '';
  }, 1500);
}

// Theme
function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark-mode');
  const isDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);

  const themeToggle = document.querySelector('.theme-toggle');
  themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
}

const isDarkMode = JSON.parse(localStorage.getItem('darkMode'));
if (isDarkMode) {
  document.body.classList.add('dark-mode');
}

const themeToggle = document.querySelector('.theme-toggle');
themeToggle.textContent = isDarkMode ? '☀️' : '🌙';




function generateResolutionNB() {
  const impact = document.getElementById('impact').value || 'N/A';
  const cusImpact = document.getElementById('cusImpact').value || 'N/A';
  const sysAffected = document.getElementById('sysAffected').value || 'N/A';
  const errtrace = document.getElementById('errtrace').value || 'N/A';
  const affectedScenario = document.getElementById('affectedScenario').value || 'N/A';
  const steps = document.getElementById('steps').value || 'N/A';
  const actual = document.getElementById('actual').value || 'N/A';
  const expected= document.getElementById('expected').value || 'N/A';
  const design = document.getElementById('design').value || 'N/A';
  const can = document.getElementById('can').value || 'N/A';
  const link = document.getElementById('link').value || 'N/A';
  const soid = document.getElementById('soid').value || 'N/A';
  const errmsg = document.getElementById('errmsg').value || 'N/A';




  const impPart = `Impact: ${impact} <br /> <br />`;
  const cusPart = `Customer Impact: ${cusImpact} <br /> <br />`;
  const sysPart = `Sys/app affected:${sysAffected} <br /> <br />`;
  const tracePart = `Error stack trace: ${errtrace} <br /> <br />`;
  const scePart = `Affecetd Scenario: ${affectedScenario} <br /> <br />`;
  const stePart = `Steps: ${steps} <br /> <br />`;
  const actualPart = `Actual Result: ${actual} <br /> <br />`;
  const expectedPart = `Expected Result: ${expected} <br /> <br />`;
  const dPart = `Link to Design: ${design} <br /> <br />`;
  const canPart = `Ex Customer: ${can} <br /> <br />`;
  const lPart = `BSS/OSS link: ${link} <br /> <br />`;
  const soPart = `Sales order id: ${soid} <br /> <br />`;
  const errorPart = `Error Msg: ${errmsg} <br /> <br />`;
  


  const resolutionOutput =  impPart + cusPart + sysPart + tracePart + scePart + stePart +
   actualPart + expectedPart + dPart + canPart + lPart + soPart + errorPart;

  document.getElementById('output').innerHTML = resolutionOutput;
}



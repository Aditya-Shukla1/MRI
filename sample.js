generateResolutionNB();

function clearFields() {

  document.getElementById('issueDescription').value = '';
  document.getElementById('scenario').value = '';
  document.getElementById('analysis').value = '';
  document.getElementById('steps').value = '';
  document.getElementById('design').value = '';
  document.getElementById('impact').value = '';
  document.getElementById('example').value = '';
  document.getElementById('impactList').value = '';
  document.getElementById('waDetails').value = '';
  document.getElementById('actual').value = '';
  document.getElementById('expected').value = '';
  document.getElementById('priority').value = '';

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

function toggleTheme() {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.querySelector('.theme-toggle').textContent = isDark ? '☀️' : '🌙';
  }

  function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark');
      document.querySelector('.theme-toggle').textContent = '☀️';
    } else {
      document.querySelector('.theme-toggle').textContent = '🌙';
    }
  }

  loadTheme();

/* 
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

 */


function generateResolutionNB() {
  const issueDescription = document.getElementById('issueDescription').value || 'N/A';
  const scenario = document.getElementById('scenario').value || 'N/A';
  const analysis = document.getElementById('analysis').value || 'N/A';
  const steps = document.getElementById('steps').value || 'N/A';
  const design = document.getElementById('design').value || 'N/A';
  const impact = document.getElementById('impact').value || 'N/A';
  const example = document.getElementById('example').value || 'N/A';
  const impactList= document.getElementById('impactList').value || 'N/A';
  const waDetails = document.getElementById('waDetails').value || 'N/A';
  const actual = document.getElementById('actual').value || 'N/A';
  const expected = document.getElementById('expected').value || 'N/A';
  const priority = document.getElementById('priority').value || 'N/A';




  const impPart = `Issue Description: ${issueDescription} <br /> <br />`;
  const cusPart = `Scenario: ${scenario} <br /> <br />`;
  const sysPart = `Analysis:${analysis} <br /> <br />`;
  const tracePart = `Steps: ${steps} <br /> <br />`;
  const scePart = `Design: ${design} <br /> <br />`;
  const StePart = `Impact: ${impact} <br /> <br />`;
  const actualPart = `Example: ${example} <br /> <br />`;
  const expectedPart = `Impact List: ${impactList} <br /> <br />`;
  const dPart = `WA Details: ${waDetails} <br /> <br />`;
  const canPart = `Actual: ${actual} <br /> <br />`;
  const lPart = `Expected: ${expected} <br /> <br />`;
  //const soPart = `Sales order id: ${priority} <br /> <br />`;
  


  const resolutionOutput =  impPart + cusPart + sysPart + tracePart + scePart + StePart +
   actualPart + expectedPart + dPart + canPart + lPart ;

  document.getElementById('output').innerHTML = resolutionOutput;
}



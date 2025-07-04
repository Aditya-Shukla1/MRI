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
  statusMessage.classList.add('show');

  setTimeout(() => {
    statusMessage.textContent = '';
    statusMessage.classList.remove('show');
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

function generateResolutionNB() {
  const issueDescription = document.getElementById('issueDescription').value.trim();
  const scenario = document.getElementById('scenario').value.trim();
  const analysis = document.getElementById('analysis').value.trim();
  const steps = document.getElementById('steps').value.trim();
  const design = document.getElementById('design').value.trim();
  const impact = document.getElementById('impact').value.trim();
  const example = document.getElementById('example').value.trim();
  const impactList = document.getElementById('impactList').value.trim();
  const waDetails = document.getElementById('waDetails').value.trim();
  const actual = document.getElementById('actual').value.trim();
  const expected = document.getElementById('expected').value.trim();

  let resolutionOutput = '';

  if (issueDescription) {
    resolutionOutput += `Issue Description: ${issueDescription} <br /> <br />`;
  }
  
  if (scenario) {
    resolutionOutput += `Scenario: ${scenario} <br /> <br />`;
  }
  
  if (analysis) {
    resolutionOutput += `Analysis: ${analysis} <br /> <br />`;
  }
  
  if (steps) {
    resolutionOutput += `Steps: ${steps} <br /> <br />`;
  }
  
  if (design) {
    resolutionOutput += `Design: ${design} <br /> <br />`;
  }
  
  if (impact) {
    resolutionOutput += `Impact: ${impact} <br /> <br />`;
  }
  
  if (example) {
    resolutionOutput += `Example: ${example} <br /> <br />`;
  }
  
  if (impactList) {
    resolutionOutput += `Impact List: ${impactList} <br /> <br />`;
  }
  
  if (waDetails) {
    resolutionOutput += `WA Details: ${waDetails} <br /> <br />`;
  }
  
  if (actual) {
    resolutionOutput += `Actual: ${actual} <br /> <br />`;
  }
  
  if (expected) {
    resolutionOutput += `Expected: ${expected} <br /> <br />`;
  }

  document.getElementById('output').innerHTML = resolutionOutput;
}

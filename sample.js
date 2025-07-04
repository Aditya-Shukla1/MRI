generateResolutionNB();

function clearFields() {
  const fields = [
    'issueDescription', 'scenario', 'analysis', 'steps', 
    'design', 'impact', 'example', 'impactList', 
    'waDetails', 'actual', 'expected'
  ];

  fields.forEach(field => {
    const element = document.getElementById(field);
    if (element) {
      element.value = '';
    }
  });

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
  const fields = [
    { id: 'issueDescription', label: 'Issue Description' },
    { id: 'scenario', label: 'Scenario' },
    { id: 'analysis', label: 'Analysis' },
    { id: 'steps', label: 'Steps' },
    { id: 'design', label: 'Design' },
    { id: 'impact', label: 'Impact' },
    { id: 'example', label: 'Example' },
    { id: 'impactList', label: 'Impact List' },
    { id: 'waDetails', label: 'WA Details' },
    { id: 'actual', label: 'Actual' },
    { id: 'expected', label: 'Expected' }
  ];

  let resolutionOutput = '';

  fields.forEach(({ id, label }) => {
    const value = document.getElementById(id)?.value.trim();
    if (value) {
      resolutionOutput += `${label}: ${value} <br /> <br />`;
    }
  });

  document.getElementById('output').innerHTML = resolutionOutput;
}


const passwordLengthInput = document.getElementById('password-length');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const generateBtn = document.getElementById('generate-btn');
const passwordInput = document.getElementById('password');
const copyBtn = document.getElementById('copy-btn');

/**
 * Retorna um caractere aleatório a partir de uma string de caracteres.
 * @param {string} characters - Conjunto de caracteres possíveis.
 * @returns {string} Caractere aleatório.
 */
function getRandomChar(characters) {
  return characters[Math.floor(Math.random() * characters.length)];
}

/**
 * Gera a senha com base nas opções selecionadas.
 */
function generatePassword() {
  const length = Number(passwordLengthInput.value);

  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()-_=+[]{};:,.<>?/|';

  let availableChars = '';

  if (uppercaseCheckbox.checked) {
    availableChars += uppercaseChars;
  }
  if (lowercaseCheckbox.checked) {
    availableChars += lowercaseChars;
  }
  if (numbersCheckbox.checked) {
    availableChars += numberChars;
  }
  if (symbolsCheckbox.checked) {
    availableChars += symbolChars;
  }

  // Se nenhum tipo de caractere estiver selecionado, não gerar senha
  if (!availableChars) {
    passwordInput.value = 'Selecione pelo menos um tipo de caractere!';
    return;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    password += getRandomChar(availableChars);
  }

  passwordInput.value = password;
}

/**
 * Copia a senha gerada para a área de transferência.
 */
function copyToClipboard() {
  const password = passwordInput.value.trim();

  // Se não houver senha gerada, não copiar
  if (!password || password === 'Selecione pelo menos um tipo de caractere!') {
    alert('Nenhuma senha para copiar!');
    return;
  }

  // Seleciona o texto
  passwordInput.select();
  passwordInput.setSelectionRange(0, 99999); // Para dispositivos móveis
  document.execCommand('copy');

  alert('Senha copiada para a área de transferência!');
}

// Eventos
generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyToClipboard);

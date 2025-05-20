// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function () {
  console.log('TheAdage Hive is now open!');
});

// Function to change text
function changeText() {
  const textElement = document.getElementById('dynamicText');
  const texts = [
    'Discover wisdom from around the world',
    'Ancient proverbs for modern times',
    'Timeless adages to guide your journey',
    'Wisdom collected across cultures and generations',
  ];

  // Get current text
  const currentText = textElement.textContent;
  // Find current index
  const currentIndex = texts.indexOf(currentText);
  // Calculate next index
  const nextIndex = (currentIndex + 1) % texts.length;

  // Apply new text with transition
  textElement.style.opacity = 0;
  setTimeout(() => {
    textElement.textContent = texts[nextIndex];
    textElement.style.opacity = 1;
  }, 300);
}

// Function to toggle box style
function toggleBoxStyle() {
  const box = document.getElementById('interactive-box');
  box.classList.toggle('box-style-alt');
}

// Function to add an adage element
function addElement() {
  const box = document.getElementById('interactive-box');
  const adages = [
    'A journey of a thousand miles begins with a single step. - Chinese Proverb',
    'The best time to plant a tree was 20 years ago. The second best time is now. - African Proverb',
    'Fall seven times, stand up eight. - Japanese Proverb',
    'A bird in hand is worth two in the bush. - English Proverb',
    'The pen is mightier than the sword. - Edward Bulwer-Lytton',
    'Where there is no struggle, there is no strength. - Oprah Winfrey',
    'The only way to do great work is to love what you do. - Steve Jobs',
    "The wise person doesn't give the right answers, but poses the right questions. - Claude Levi-Strauss",
    'Knowledge speaks, but wisdom listens. - Jimi Hendrix',
    'The fool doth think he is wise, but the wise man knows himself to be a fool. - William Shakespeare',
  ];

  // Create new element
  const newAdage = document.createElement('p');
  newAdage.className = 'quote';
  newAdage.textContent = adages[Math.floor(Math.random() * adages.length)];

  // Add to box
  box.appendChild(newAdage);
}

// Function to remove the last adage
function removeElement() {
  const box = document.getElementById('interactive-box');
  const adages = box.querySelectorAll('.quote');

  if (adages.length > 0) {
    // Remove the last adage with animation
    const lastAdage = adages[adages.length - 1];
    lastAdage.style.opacity = 0;
    setTimeout(() => {
      box.removeChild(lastAdage);
    }, 300);
  }
}

// Function to toggle theme
function toggleTheme() {
  document.body.classList.toggle('dark-theme');

  // Update theme message
  const themeMessage = document.querySelector('section:nth-child(3) p');
  if (document.body.classList.contains('dark-theme')) {
    themeMessage.textContent =
      'Dark mode active. Wisdom often reveals itself in darkness.';
  } else {
    themeMessage.textContent =
      'Light mode active. Let wisdom illuminate your path.';
  }
}

// Contact form submission
function submitForm(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // In a real application, you would send this data to a server
  console.log('Wisdom contribution received:', { name, email, message });

  // Show confirmation
  alert(
    'Thank you for contributing to TheAdage Hive! Your wisdom has been added to our collection.'
  );

  // Reset form
  document.getElementById('contactForm').reset();
}

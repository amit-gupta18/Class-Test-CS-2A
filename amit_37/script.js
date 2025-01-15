const startButton = document.getElementById('startButton');
const modal = document.getElementById('modal');
const doneButton = document.getElementById('doneButton');
const lightContainer = document.getElementById('lightContainer');
const resetButton = document.getElementById('resetButton');

startButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

doneButton.addEventListener('click', () => {
    modal.style.display = 'none';
    lightContainer.innerHTML = '';
    for (let i = 0; i < 4; i++) {
        const light = document.createElement('div');
        light.className = 'light';
        light.innerHTML = `
            <img src="off_bulb.png" alt="Light Bulb" class="bulb">
            <button class="toggle">Off</button>
        `;
        light.querySelector('.toggle').addEventListener('click', (e) => {
            const bulb = light.querySelector('.bulb');
            if (e.target.classList.contains('on')) {
                bulb.src = 'off_bulb.png';
            } else {
                bulb.src = 'on_bulb.png';
            }
        });
        lightContainer.appendChild(light);
    }
    resetButton.style.display = 'inline-block';
});

lightContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('toggle')) {
    e.target.classList.toggle('on');
    e.target.textContent = e.target.classList.contains('on') ? 'On' : 'Off';
  }
});

resetButton.addEventListener('click', () => {
  lightContainer.innerHTML = '';
  resetButton.style.display = 'none';
});
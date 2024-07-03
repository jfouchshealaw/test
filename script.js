const currentDate = new Date();
const options = { timeZone: 'America/New_York', timeZoneName: 'short' };
const estTime = currentDate.toLocaleString('en-US', options);

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('#show_time').textContent = `Current Eastern Standard Time (EST): ${estTime}`;
});

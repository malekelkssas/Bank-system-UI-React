// Fake reminders data
const reminders = [
    { text: 'Buy groceries', date: '2023-05-21' },
    { text: 'Pay bills', date: '2023-05-22' },
    { text: 'Meeting with clients', date: '2023-05-23' }
  ];
  
  // Function to create a reminder item
  function createReminderItem(reminder) {
    const listItem = document.createElement('li');
    listItem.textContent = reminder.text;
  
    const date = document.createElement('span');
    date.textContent = reminder.date;
    date.classList.add('date');
  
    listItem.appendChild(date);
  
    return listItem;
  }
  
  // Function to display the reminders
  function displayReminders() {
    const reminderList = document.getElementById('reminder-list');
  
    reminders.forEach(function (reminder) {
      const reminderItem = createReminderItem(reminder);
      reminderList.appendChild(reminderItem);
    });
  }
  
  // Call the displayReminders function to initially populate the reminders
  displayReminders();
  

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reminder-form');
    const reminderList = document.getElementById('reminder-list');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const reminderInput = document.getElementById('reminder');
      const dateInput = document.getElementById('date');
  
      const reminder = reminderInput.value;
      const date = dateInput.value;
  
      if (reminder && date) {
        const reminderItem = document.createElement('li');
        reminderItem.classList.add('reminder-item');
  
        const reminderText = document.createElement('span');
        reminderText.classList.add('reminder');
        reminderText.textContent = reminder;
  
        const reminderDate = document.createElement('span');
        reminderDate.classList.add('date');
        reminderDate.textContent = date;
  
        reminderItem.appendChild(reminderText);
  
        const space = document.createElement('span');
        space.textContent = ' '; // Add a space between the text and date
        reminderItem.appendChild(space);
  
        reminderItem.appendChild(reminderDate);
  
        reminderList.appendChild(reminderItem);
  
        reminderInput.value = '';
        dateInput.value = '';
      }
    });
  });
  
function updateTime() {
  const now = new Date();

  // Format the date without time
  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  const formattedDate = now.toLocaleString('vi-VN', dateOptions);

  // Format the time
  const timeOptions = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  const formattedTime = now.toLocaleString('vi-VN', timeOptions);

  // Combine date and time 
  const formattedDateTime = `${formattedTime} ${formattedDate}`;

  // Get the current year
  const currentYear = now.getFullYear();

  document.getElementById('datetime').textContent = formattedDateTime;
  document.getElementById('currentyear').textContent = currentYear;

  setTimeout(updateTime, 1000);
}

updateTime();
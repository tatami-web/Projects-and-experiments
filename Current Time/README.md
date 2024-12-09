#Current Time Web Application

## Overview

This project is a responsive web application that displays the current time and date in both English and Spanish. It adapts to dark mode with a modern and clean user interface. Users can toggle between languages ​​via a dropdown menu.

---

##Features

1. **Responsive Design**: The interface adjusts seamlessly to different screen sizes.
2. **Dark Mode**: Aesthetic and readable dark theme for better user experience.
3. **Internationalization**: Supports English and Spanish, with dynamic content updates based on user selection.
4. **Time Synchronization**: Fetches accurate time from an external API when the device is connected to the internet. Defaults to the local device time if the API is unavailable.

---

## Technical Details

### File Structure

- **`index.html`**: The main HTML structure.
- **`styles.css`**: Custom CSS for the interface styling.
- **`script.js`**: JavaScript for functionality, including API integration and language switching.

### Core Functionalities

1. **Fetching Time Data**

- **API Used**: [WorldTimeAPI](https://worldtimeapi.org/)
- **Endpoint**: `https://worldtimeapi.org/api/ip`
- Fetches the current time based on the user's IP address.
- Fallback mechanism: If the API call fails, the app uses the local device time.

2. **Dynamic Language Switching**

- A dropdown allows the user to switch between English (`en`) and Spanish (`es`).
- UI texts and date formats update dynamically.

3. **Real-Time Updates**

- The clock updates every second using JavaScript's `setInterval`.

---

##How to Build and Run

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox).
- Internet access for fetching time from the API.

### Steps

1. Create the following files in the same directory:

- `index.html`
- `styles.css`
- `script.js`

2. Copy and paste the respective code provided above into these files.
3. Open `index.html` in a web browser.

---

## Code Explanation

### HTML (`index.html`)

You define the structure of the webpage:

- **Header (`<h1>`)**: Displays the title in both English and Spanish.
- **Clock (`<div id="clock">`)**: Placeholder for real-time clock updates.
- **Language Selector**: Dropdown for switching between languages.

### CSS (`styles.css`)

- Implements a dark theme with modern styling.
- Uses flexible dimensions and responsive typography.

### JavaScript (`script.js`)

1. **`updateClock()`**:

- Fetches time from the WorldTimeAPI.
- Falls back to the device's local time if the API call fails.
- Formats the time and date based on the selected language.

2. **`formatTime(date)`**:

- Formats the given date object to include the day, date, and time in the chosen language.

3. **`changeLanguage(lang)`**:

- Updates UI text and date formats dynamically based on the selected language.

4. **Event Listeners**:

- Listens for changes in the language dropdown and updates the interface accordingly.

---

## Example Output

**Default View**:

```
Current Time
[Formatted Date and Time]
Language / Idioma: [Dropdown Menu]
```

**Language Toggle**:

- English: `Sunday, December 7, 2024, 4:30:00 PM`
- Spanish: `Sunday, December 7, 2024, 16:30:00`

---

##API Information

- **API Name**: WorldTimeAPI
- **URL**: [https://worldtimeapi.org/api/ip](https://worldtimeapi.org/api/ip)
- **Purpose**: Provides the current time and timezone information based on the user's IP address.
- **Usage**:

```javascript
fetch("https://worldtimeapi.org/api/ip")
  .then((response) => response.json())
  .then((data) => {
    const networkTime = new Date(data.datetime);
    // Process the networkTime
  })
  .catch(() => {
    console.error("Failed to fetch time from API");
  });
```

---

##Author
Developed by: &#64;Tatami.

-

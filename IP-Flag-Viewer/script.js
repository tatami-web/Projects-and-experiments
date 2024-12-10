async function fetchCountryData() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        if (data && data.country_name && data.country_code) {
            document.getElementById('country-info').textContent = `You are in ${data.country_name}`;
            const flagUrl = `https://flagcdn.com/w640/${data.country_code.toLowerCase()}.png`;
            document.getElementById('flag').src = flagUrl;
        } else {
            document.getElementById('country-info').textContent = "Unable to fetch country information.";
        }
    } catch (error) {
        document.getElementById('country-info').textContent = "An error occurred while fetching data.";
    }
}

// Fetch country data on page load
fetchCountryData();

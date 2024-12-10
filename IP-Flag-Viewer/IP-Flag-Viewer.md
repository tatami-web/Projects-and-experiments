# IP Flag Viewer

A simple and minimalist web page that displays the flag of the country corresponding to the visitor's IP address. This project uses geolocation APIs to obtain country information and image services to display the flag.

## Main Functionality

- The page automatically detects the user's country based on their IP address and displays the country's flag along with its name.

## Technologies and APIs Used

### Technologies
- **HTML**: To structure the page.
- **CSS**: For a minimalist and modern design.
- **JavaScript**: To consume APIs and manage dynamic content.

### APIs
1. **[ipapi](https://ipapi.co/)**:
   - Provides geolocation data based on the IP address, such as the country name and code.

2. **[Flagcdn](https://flagcdn.com/)**:
   - Allows loading high-resolution flag images using the country's ISO 3166-1 alpha-2 code.

## How it Works

1. **IP Data Retrieval**:
   - In `script.js`, the `ipapi` API is used to obtain the user's geographical location based on their IP address. The response includes the country name (`country_name`) and country code (`country_code`).

2. **Flag Loading**:
   - With the obtained country code, a URL is generated in `Flagcdn` to obtain the corresponding flag image. The image is displayed on the page with a stylized design.

3. **Link**:
   - At the bottom of the page, a link leads to the GitHub repository.

## Testing the Project

1. Download all project files.
2. Open the `index.html` file in your favorite browser.
3. Observe how your country's flag and name are displayed.

## Future Improvements

- Add multilingual support to display information in different languages.
- Optimize API usage to improve loading speed.
- Integrate more geographical data, such as region or city.

## License

This project is open-source and can be used for your own purposes. If you improve it, share your ideas!
# Word Count 

Word Count for URLs is a web application that allows users to check the word count of any website or webpage by providing its URL. It fetches the content of the URL, counts the words, and displays the result to the user.

[Frontend_Link](https://wordcount-kiymxfuvy-rohit2216.vercel.app/)

[Backend_Link](https://word-1miz.onrender.com)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Rohit2216/wordcount.git
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

## Usage

To run the application, use the following command:

```bash
npm run server
```

Once the server is running, open your web browser and go to `http://localhost:8800` to access the application. Enter the URL of the website you want to analyze, and click "Check Word Count" to see the result.

## Features

- **Word Count Checking:** Enter any valid URL to check the word count of the corresponding webpage.
- **Simple and Intuitive:** User-friendly interface for easy interaction.
- **Persistent Data:** Stores word count data for analyzed URLs using MongoDB.
- **CRUD Operations:** Allows users to add, edit, delete, and view word count data for different URLs.

## Technologies Used

- **Node.js:** Backend runtime environment.
- **Express.js:** Web framework for building the API endpoints.
- **MongoDB:** Database for storing word count data.
- **Mongoose:** ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Axios:** HTTP client for making requests to fetch website content.
- **HTML/CSS/JavaScript:** Frontend technologies for the user interface.
  
## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to help improve this project.

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- Special thanks to the open-source community for providing valuable tools and resources.
- Inspired by [mention any sources or projects that inspired your work here].

--- 

Feel free to modify or expand any section according to your project's specific features and requirements. Providing clear and detailed information in your README will help users and contributors understand and engage with your application effectively.

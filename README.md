# Web Scraping OSU - Find People and Their Emails

## Overview

This project is a **web scraping tool** designed to extract publicly available information from **Ohio State University (OSU)**'s online directories or websites. It aims to gather data such as people’s names, roles, and associated emails from OSU's publicly available resources.

> **Note**: This project is meant for educational purposes only. Make sure to respect OSU's [terms of service](https://www.osu.edu/privacy/) and any privacy regulations when using this tool.

## Features

- Scrapes publicly available data from OSU's website
- Extracts names, email addresses, and other details from public profiles (if available)
- Outputs data into a structured format (JSON)

## Requirements

Before running the project, make sure you have the following installed:

- Python 3.x
- `pip` (Python package manager)

## Setup

1. **Clone the repository:**

   Clone this repository to your local machine:

   ```bash
   git clone https://github.com/dgonz10152/osu-web-scraper.git
   ```

2. **Create a virtual environment:**

   It's a good practice to use a virtual environment to manage dependencies. Create one by running:

   ```bash
   python3 -m venv venv
   ```

   Then activate the virtual environment:

   - **On Windows:**

     ```bash
     .\venv\Scripts\activate
     ```

   - **On macOS/Linux:**

     ```bash
     source venv/bin/activate
     ```

3. **Install the required dependencies:**

   Once the virtual environment is activated, install the required libraries by running:

   ```bash
   pip install -r requirements.txt
   ```

4. **Configure the `sites.txt` file:**

   You will need to configure the `sites.txt` file to include a list of comma-separated URLs for the pages you'd like to scrape. For example:

   ```
   https://site1.com, https://site2.com, https://site3.com
   ```

## Usage

To run the scraper, use the following command:

```bash
python scraper.py
```

Ensure you have set up everything according to the instructions above. Once you run the script, it will start scraping the OSU websites given and output the list of people and emails into the file "output.json"

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Disclaimer

Please use this tool responsibly. Web scraping may be against the terms of service of certain websites. Always ensure that your actions comply with Ohio State University’s terms and conditions and respect the privacy of others. This tool is provided for educational purposes only.

---

If you have any questions or suggestions, feel free to open an issue on GitHub!

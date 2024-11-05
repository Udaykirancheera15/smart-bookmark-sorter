# Smart Bookmark Sorter

## Overview
The Smart Bookmark Sorter is a simple browser extension I created for Firefox to help manage the overwhelming number of bookmarks cluttering my toolbar. Frustrated by the disorganization, I developed this extension to meet my own needs. This project serves as a demonstration of the fundamentals of browser extension development, showcasing how to structure the extension, interact with browser APIs, and manage user interfaces. As a curious student, I aimed to deepen my understanding of how extensions function and how to implement their basic features.

## Features

- Organizes bookmarks into predefined folders.
- Simple user interface for sorting bookmarks.
- Built using standard web technologies (HTML, CSS, JavaScript).

## Project Structure

The project is organized as follows:

smart-bookmark-sorter/ ├── background.js # Background script for managing bookmarks ├── manifest.json # Extension metadata and permissions ├── popup.html # HTML for the extension popup ├── popup.js # JavaScript for handling popup interactions ├── style.css # CSS for styling the popup └── icons/ # Icons for the extension ├── icon16.png # 16x16 icon ├── icon48.png # 48x48 icon └── icon128.png # 128x128 icon

bash


## Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/Udaykirancheera15/smart-bookmark-sorter.git

    Open Firefox and navigate to about:debugging#/runtime/this-firefox.

    Click on "Load Temporary Add-on" and select the manifest.json file from the cloned repository.

Usage

    Click on the extension icon in the browser toolbar to open the popup.
    Use the provided functionality to sort your bookmarks as needed.

Contribution

Feel free to contribute to this project by forking the repository and submitting pull requests. I welcome any suggestions for improving the extension!

Acknowledgments

Thanks to the Firefox Developer documentation for providing valuable resources on building extensions. My curiosity and willingness to learn have made me to do this simple extension to know how it works and solving the problem I faced, and I look forward to expanding its capabilities in the future.


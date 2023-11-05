# assignmentapp
## Project Overview

This document outlines the technical implementation details for the React Native Project Assignment . The application involves permissions handling, integration with the Segment Android SDK, deep linking functionality, and the implementation of a QnA system.


## Prerequisites

Before you begin, ensure you have the following installed on your development machine:

- **Node.js:** Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
- **Yarn (optional but recommended):** Yarn is a fast, reliable, and secure dependency management tool. You can install Yarn by following the instructions at [yarnpkg.com](https://yarnpkg.com/).

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project-directory>
   ```

3. Install dependencies:

   ```bash
   yarn install
   ```
   
## Usage

### Running the App

To run the app on an Android or iOS emulator/simulator, use the following commands:

- **Android:**

  ```bash
  npx react-native run-android
  ```

- **iOS:**

  ```bash
  npx react-native run-ios
  ```

  
### Project Structure

The project follows a standard React Native project structure with TypeScript integration. Here's an overview of the main directories:

- **`src/components/`:** Contains reusable components used throughout the app.
- **`src/config/`:** Contains axios and response config used throughout the app.
- **`src/constants/`:** Contains defined endpoints used throughout the app.
- **`src/helper/`:** Contains defined permissions and nested question logic used in the app.
- **`src/hooks/`:** Contains deeplink hooks logic used in the app.
- **`src/navigations/`:** Contains navigations stacks used in the app.
- **`src/screens/`:** Contains individual screens of the app.
- **`src/services/`:** Contains api services of the app.
- **`src/theme/`:** Contains color theme used throughout the app.
- **`src/types/`:** Contains TypeScript object modals interfaces used in the project.

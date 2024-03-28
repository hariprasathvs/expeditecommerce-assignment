# Lightweight Performance test framework
# Performance Monitor with Lighthouse

A script that uses the Lighthouse tool to monitor the performance of web applications. It measures the First Contentful Paint (FCP) and Cumulative Layout Shift (CLS) metrics for a specified number of tests and calculates the average scores.

## Table of Contents

- [Description](#description)
- [Usage](#usage)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Script](#running-the-script)

## Description

This script/application utilizes the Lighthouse tool to assess the performance of web applications. It performs multiple tests, measures the FCP and CLS metrics, and then calculates the average scores. The results can provide insights into the web application's performance over a given number of tests.

## Usage

This script requires Node.js to be installed on your machine. It uses the `lighthouse` and `chrome-launcher` packages to automate the performance monitoring process.

## Prerequisites

- Node.js (Download and install from https://nodejs.org/)

## Installation

1. Clone this repository or download the script to your local machine.
2. Open a terminal and navigate to the directory containing the script.

## Configuration

Before running the script, you need to configure the environment variables by creating a `.env` file in the same directory. Define the following variables in the `.env` file:

```
URL=<URL_OF_THE_APPLICATION>
NUMBEROFTESTS=<NUMBER_OF_TESTS_TO_RUN>
```

Replace `<URL_OF_THE_APPLICATION>` with the URL of the web application you want to monitor, and `<NUMBER_OF_TESTS_TO_RUN>` with the desired number of performance tests.

## Running the Script

1. Open a terminal and navigate to the directory containing the script and the `.env` file.
2. Install the required dependencies using the following command:

   ```
   npm install
   ```

3. Run the script using the following command:

   ```
   node performanceMonitorWithLighthouse.js
   ```

4. The script will execute the specified number of tests, measure FCP and CLS metrics, and output the average scores in the console.

---

Replace `<URL_OF_THE_APPLICATION>` and `<NUMBER_OF_TESTS_TO_RUN>` in the `.env` file as needed. The README provides instructions for installing dependencies, configuring environment variables, and running the script. Make sure to include the `performanceMonitorWithLighthouse.js` file along with the README in the same directory.

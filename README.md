# Ping latency peaks

## Table of Contents

* [Getting Started](#getting-started)
  * [Installation](#installation)
  * [Configuration](#configuration)
* [Usage](#usage)
  * [Basic usage](#basic-usage)
  * [Logging in file](#logging-in-file)

## Getting Started

To get started follow these simple steps.

### Installation

1. Clone the repo
```sh
git clone https://github.com/vjarysta/ping-latency-peaks
```
2. Install NPM packages
```sh
npm install
```

### Configuration

In `index.js`, you can edit those values :
  - `MAX_PING` Number of milliseconds above which you want your latency peak and time to be logged. _Default: 50_
  - `HOST` Host to ping. _Default: 'google.com'_
  - `INTERVAL_TIME` Interval before 2 pings. _Default: 500_


## Usage

## Basic usage
```sh
node index.js
```

## Logging in file
```sh
node index.js > log.txt
```

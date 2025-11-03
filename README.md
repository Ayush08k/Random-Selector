<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>
# Baseline Browser Mapping

# Run and deploy your AI Studio app
This document provides a summary of the `baseline-browser-mapping` package, a tool by the W3C WebDX Community Group designed to provide browser compatibility data related to Baseline feature sets.

This contains everything you need to run your app locally.
## What It Does

View your app in AI Studio: https://ai.studio/apps/drive/1S-cS0BSPI-pUnBU-yBY0izlOWj9g3YYZ
`baseline-browser-mapping` helps you understand which browser versions support specific sets of web features defined by the Baseline status. This is useful for:

## Run Locally
- Determining the minimum browser versions your project should support.
- Analyzing your website's traffic to see how well different Baseline feature sets are supported by your users.

**Prerequisites:**  Node.js
## Core Features

The package provides two main functions to access this compatibility data.

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
### 1. `getCompatibleVersions()`

This function returns an array of the minimum browser versions that are compatible with a given Baseline feature set.

**Example: Get versions for "Baseline Widely Available"**
```javascript
import { getCompatibleVersions } from 'baseline-browser-mapping';

// Returns minimum versions for browsers supporting "Widely Available" features.
const versions = getCompatibleVersions();
console.log(versions);
```

**Configuration Options:**
- `targetYear`: Get browser versions compatible with features newly available in a specific year (e.g., `2022`).
- `widelyAvailableOnDate`: Get versions compatible with "Widely Available" features on a specific date.
- `includeDownstreamBrowsers`: Include browsers built on core engines like Chromium (e.g., Opera, Samsung Internet).
- `listAllCompatibleVersions`: List all compatible browser versions, not just the minimums.

### 2. `getAllVersions()`

This function returns a comprehensive list of all browser versions in the dataset, along with their level of Baseline support. This is ideal for analytics or creating dashboards.

**Example: Get all browser data**
```javascript
import { getAllVersions } from 'baseline-browser-mapping';

// Returns an array of objects, each describing a browser version's support.
const allData = getAllVersions();
console.log(allData);
```

**Configuration Options:**
- `outputFormat`: Get the data as an `array` (default), `object`, or `csv` string.
- `includeDownstreamBrowsers`: Include downstream browsers in the output.
- `useSupports`: Adds a `supports` property to indicate support for `widely` or `newly` available features.

## Installation

To add this package to your project, run:

```sh
npm install --save-dev baseline-browser-mapping
```




<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1S-cS0BSPI-pUnBU-yBY0izlOWj9g3YYZ

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

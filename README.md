[![Build Status](https://travis-ci.org/FDMediagroep/fd-ts-react-breaking-news-alert.svg?branch=master)](https://travis-ci.org/FDMediagroep/fd-ts-react-breaking-news-alert)
[![Coverage Status](https://coveralls.io/repos/github/FDMediagroep/fd-ts-react-breaking-news-alert/badge.svg?branch=master)](https://coveralls.io/github/FDMediagroep/fd-ts-react-breaking-news-alert?branch=master)
[![npm version](https://badge.fury.io/js/%40fdmg%2Ffd-breaking-news-alert.svg)](https://badge.fury.io/js/%40fdmg%2Ffd-breaking-news-alert)
[![Greenkeeper badge](https://badges.greenkeeper.io/FDMediagroep/fd-ts-react-breaking-news-alert.svg)](https://greenkeeper.io/)

# fd-breaking-news-alert
FD-themed breaking news alert.

# Installation
* Run `npm i -D @fdmg/fd-breaking-news-alert`

# Demo
To run the demo, check-out this repository and run `npm run build-demo`.
After the build succeeded you can open `dist/demo.html` with your webbrowser.
* [Demo](http://static.fd.nl/react/breaking-news-alert/demo.html)

# Usage
```
import BreakingNewsAlert from '@fdmg/fd-breaking-news-alert';
...
<BreakingNewsAlert
    cardStyle="default"
    onChange={this.onBreakingNewsAlertChange}
/>
```

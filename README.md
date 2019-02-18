# zoned-0-of-clock
get 0 o'clock just before a given date in a standard timezone

## Motivation

A convenient utility to get 0 o'clock before a given date in a standard timezone,
useful for get statistics.

## Usage

### common js
```javascript
const getZonedZeroOfClock = require('zoned-0-of-clock')
```

### esm
```javascript
import getZonedZeroOfClock from 'zoned-0-of-clock'
```

### Example

```javascript
// return the 0 o'clock just passed away in Tokyo
getZonedZeroOfClock(new Date(), 'Asia/Tokyo')
```

### Development

```bash
$ git clone git@github.com:xiechao06/zoned-0-of-clock.git
$ cd zoned-0-of-clock
$ npm run test
``` 

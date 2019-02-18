const test = require('tape')
const getZonedZeroOfClock = require('./')

test('Shanghai is one hour after Tokyo', t => {
  let d1 = getZonedZeroOfClock(new Date(), 'Asia/Shanghai')
  let d2 = getZonedZeroOfClock(new Date(), 'Asia/Tokyo')
  t.equal(d1.getTime() - d2.getTime(), 3600 * 1000)
  t.end()
})

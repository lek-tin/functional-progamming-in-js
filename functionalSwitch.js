// Inspiration: https://hackernoon.com/rethinking-javascript-eliminate-the-switch-statement-for-better-code-5c81c044716d
export functionSwitch = cases => defaultCase => key =>
  cases.hasOwnProperty(key) ? cases[key] : defaultCase 

// Usage
const switchColors = (value = 0, type) =>
  switchcase({
    'GREEN': state + 10,
    'BLUE': state + 5,
    'ORANGE': state - 5,
    'RED': state - 10
  })(value)(type)

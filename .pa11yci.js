module.exports = {
  urls: [
    "http://127.0.0.1:4200/recipes",
    "https://github.com/pa11y/pa11y-ci",
  ],
  options: {
    standard: 'WCAG2AA',
    runners: ['chrome'],
  }
}

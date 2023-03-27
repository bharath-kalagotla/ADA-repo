module.exports = {
  launch_url: "http://127.0.0.1:4200",
  src_folders: "ada-tests",
  reports_path: "reports",
  reporter: ["json", "html"],
  test_settings: {
    runners: [
      'axe',
      'htmlcs'
    ],
    standard: 'WCAG2A',
    timeout: 120000,
    includeNotices: true,
    includeWarnings: true
  },
  puppeteer_settings: {
    headless: true,
    ignoreDefaultArgs: ["--disable-extensions"],
    args: ["--no-sandbox"],
    executablePath: "chrome.exe"
  }
};

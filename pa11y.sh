#!/bin/bash
pa11y-ci --config .pa11y-ci.json

if [ $? -eq 0 ]; then
  echo "\033[0;32m\xE2\x9C\x94 Pa11y accessibility tests passed!"
  exit 0
else
  echo "\033[0;31m\xE2\x9D\x8C Pa11y accessibility tests failed! To view reports in html format, please run command in terminal - open reports/index.html"
  exit 1
fi


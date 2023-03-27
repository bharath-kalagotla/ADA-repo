require('dotenv').config({
  path: process.env.dotenv_config_path
});

module.exports = {
  url: `${process.env.BASE_URL}/shopping-list`,
  actions: []
}

// postcss.config.js

const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    autoprefixer,
    cssnano({ preset: 'default' })
  ]
};

// P.S ВЗЯТО ИЗ СПРИНТА - занятие "Минификация CSS и добавление префиксов"
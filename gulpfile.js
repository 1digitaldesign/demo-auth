/* gulpfile.js */
/**
* Import uswds-compile
*/
const uswds = require("@uswds/compile");
var log = require('fancy-log');

/**
* USWDS version
* Set the major version of USWDS you're using
* (Current options are the numbers 2 or 3)
*/
uswds.settings.version = 3;
uswds.settings.src = ".node_modules/@uswds/uswds";


// Source Settings
uswds.paths.dist.css = './public/assets/uswds/css';
// Project destination for compiled JS
// Source for USWDS source files - version 3
// Set the path to the USWDS source files and override the defaults as stated
// in the uswds-compile package
uswds.paths.src.base = "./node_modules/@uswds/uswds";
uswds.paths.src.projectSass = "./src/styles";
uswds.paths.src.projectIcons = "./src/styles/icons";
uswds.paths.src.projectJs = "./src/js";
uswds.paths.src.projectImages = "./src/images";
uswds.paths.src.projectFonts = "./src/fonts";

// Destination for compiled assets
// Project destination for theme files (Sass entry point and settings)
uswds.paths.dist.theme = './src/styles/';
// Project destination for compiled CSS
uswds.paths.dist.js = './public/assets/uswds/js';
// Project destination for compiled fonts
uswds.paths.dist.fonts = './public/assets/uswds/fonts';
// Project destination for compiled images
uswds.paths.dist.img = './public/assets/uswds/img';
// Project destination for compiled icons
uswds.paths.dist.icons = './public/assets/uswds/icons';
// Project destination for compiled SVGs
uswds.paths.dist.svg = './public/assets/uswds/svg';


/**
* Exports
* Add as many as you need
*/
exports.init = uswds.init;
exports.compile = uswds.compile;
exports.watch = uswds.watch;

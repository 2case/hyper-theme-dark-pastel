module.exports.onWindow = browserWindow =>
    browserWindow.setVibrancy("ultra-dark");

const foregroundColor = '#c7c7c7';
const backgroundColor = "#000";
const tabBackgroundColor = "#000";
const tabActiveBackgroundColor = "rgba(255, 255, 255, .05)";
const tabActiveAccentColor = "#7070ff";
const borderColor = '#333';
const cursorColor = 'rgba(255, 180, 144, 0.8)';
const cursorAccentColor = '#000';
const selectionColor = 'rgba(69, 77, 149, 0.5)';
const searchBackgroundColor = '#333';
const searchForgroundColor = '#c7c7c7';

const black = '#000000';
const red = '#ff8272';
const green = '#b4fa72';
const yellow = '#fefdc2';
const blue = '#a5d5fe';
const magenta = '#ff8ffd';
const cyan = '#d0d1fe';
const white = '#f1f1f1';
const lightBlack = '#8e8e8e';
const lightRed = '#ffc4bd';
const lightGreen = '#d6fcb9';
const lightYellow = '#fefdd5';
const lightBlue = '#c1e3fe';
const lightMagenta = '#ffb1fe';
const lightCyan = '#e5e6fe';
const lightWhite = '#feffff';

const defaultConfig = {
    fontFamily: '"DejaVu Sans Mono for Powerline", Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',
    fontSize: 14,
    fontWeight: 'normal',
    fontWeightBold: 'bold',
    foregroundColor: foregroundColor,
    backgroundColor: backgroundColor,
    borderColor: borderColor,
    cursorColor: cursorColor,
    cursorAccentColor: cursorAccentColor,
    selectionColor: selectionColor,
};

// Check if theme configuration exists in ~/.hyper.js. If not, fall back to default configuration.
const checkConfig = function (config, setting) {
    return (
        (config.hasOwnProperty("custom") && config.custom[setting]) ||
        defaultConfig[setting]
    );
};

exports.decorateConfig = config =>
    Object.assign({}, config, {
        fontFamily: checkConfig(config, "fontFamily"),
        fontSize: checkConfig(config, "fontSize"),
        fontWeight: checkConfig(config, "fontWeight"),
        fontWeightBold: checkConfig(config, "fontWeightBold"),
        backgroundColor: checkConfig(config, "backgroundColor"),
        foregroundColor: checkConfig(config, "foregroundColor"),
        borderColor: checkConfig(config, "borderColor"),
        cursorColor: checkConfig(config, "cursorColor"),
        cursorAccentColor: checkConfig(config, "cursorAccentColor"),
        selectionColor: checkConfig(config, "selectionColor"),
        colors: {
            black,
            red,
            green,
            yellow,
            blue,
            magenta,
            cyan,
            white,
            lightBlack,
            lightRed,
            lightGreen,
            lightYellow,
            lightBlue,
            lightMagenta,
            lightCyan,
            lightWhite
        },
        css: `
    ${config.css}
    .hyper_main {
      border: none !important;
    }
    .header_header {
      background-color: ${tabBackgroundColor} !important;
    }
    .tabs_nav.tabs_title {
        border-bottom: 2px solid ${tabActiveAccentColor} !important;
    }
    .tabs_borderShim {
      border-color: transparent !important;
    }
    .tab_tab {
        border: 0;
    }
    .tab_active {
        background-color: ${tabActiveBackgroundColor} !important;
        border-bottom: 2px solid ${tabActiveAccentColor} !important;
    }
    .hyper-search-wrapper {
        border: 0 !important;
        padding: 0 !important;
        background-color: transparent !important;
        display: flex;
        opacity: 0.8 !important;
    }
    .hyper-search-wrapper button {
        top: 0 !important;
        opacity: 0.8 !important;
        padding: 0 6px;
        cursor: pointer;
    }
    .hyper-search-wrapper button:hover {
        opacity: 1.0 !important;
    }
    .hyper-search-wrapper button:nth-of-type(1) {
        border-radius: 4px 0 0 4px !important;
        border-right: 1px solid #ddd !important;
        background-color: ${searchBackgroundColor} !important;
        color: ${searchForgroundColor} !important;
        border-right: 1px solid ${backgroundColor} !important;
    }
    .hyper-search-wrapper button:nth-of-type(2) {
        border-radius: 0 4px 4px 0 !important;
        background-color: ${searchBackgroundColor} !important;
        color: ${searchForgroundColor} !important;
    }
    .hyper-search-wrapper:before {
        width: 20px;
        color: ${searchForgroundColor};
        position: absolute;
        content: "🔍";
        font-size: 10px;
        margin: 7px;
        z-index: 999;
    }
    #hyper-search-input {
        background-color: ${searchBackgroundColor} !important;
        border-radius: 4px;
        box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
        padding: 3px 6px 3px 24px !important;
        color: ${searchForgroundColor} !important;
        opacity: 0.9 !important;
        margin-right: 2px;
    }
    #hyper-search-input:focus {
        opacity: 1.0 !important;
        box-shadow: 0 1px 10px rgba(0, 0, 0, 1.0);
    }
  `,
    });

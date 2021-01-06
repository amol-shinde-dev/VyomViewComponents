'use strict';

/**
 * BMC Innovation Suite View Loader
 *
 * This script can be used to embed Innovation Suite views into external web applications.
 * Step 1. Include the script before closing the <body> tag of your web page, e.g.
 *
 * <script id="rx-view-loader-script" src="https://hostname:port/innovationsuite/view-loader.js"></script>
 *
 * NOTE: the id attribute must be specified exactly as shown.
 *
 * At this point, the view loader button will be displayed in the lower right corner of the page.
 * When the button is clicked, a panel will open on the right side of the page. The panel will
 * contain an <iframe> pointing to the location of the Chatbot view, e.g.
 * https://hostname:port/com.bmc.dsm.chatbot/index.html#/chatbot/window.
 *
 * Step 2. If Innovation Suite uses Cloud RSSO
 * a. Include a <button> element on your page and specify the RSSO server address
 *    in the data-rsso-server attribute, e.g.
 *
 *    <button class="rx-view-loader-button" data-rsso-server="http://rsso.com:8080"></button>
 *
 *    NOTE: the class attribute must be specified exactly as shown.
 *
 * b. Call rxViewLoader.onRequestJwt() API by passing it a callback function that returns a JWT token, e.g.
 *
 *    <script type="text/javascript">
 *        rxViewLoader.onRequestJwt(function () {
 *            // return JWT token
 *        });
 *    </script>
 *
 *    NOTE. JWT tokens may quickly expire, so make sure you are returning a fresh, active token.
 *          The callback function will be called every time a user clicks on the view loader button.
 *          If the callback is not registered, or if it does not return a string,
 *          clicking the view loader button will have no effect and an error will be logged in
 *          the browser console.

 * Step 3. Open BMC Helix Chatbot with a specific Bot
 * a. Include a <button> element on your page, unless already included as instructed in step 2a,
 *    and specify the bot ID in the data-bot-id attribute, e.g.
 *
 *    <button class="rx-view-loader-button" data-bot-id="AGGADG1AAP0ICAPK3J44P96ELYOE5E"></button>
 *
 *    NOTE: the class attribute must be specified exactly as shown.
 *
 * Step 4. The position of the button/panel can be customized as described below.
 * a. This will display the button and the view panel on the left side of the page.
 *
 *    <button class="rx-view-loader-button" data-view-position="left"></button>
 *
 * b. This will add a tooltip and an aria-label to the button.
 *
 *    <button class="rx-view-loader-button" title="Launch Chatbot" aria-label="Launch Chatbot"></button>
 *
 * Step 5. Use CSS to customize the look of the button as shown in the following examples.
 * a. Change the button colors.
 *
 *    .rx-view-loader-button {
 *      background-color: blue;
 *      border-color: darkblue;
 *    }
 *
 * b. Change the button icon.
 *
 *    .rx-view-loader-button-icon {
 *      background: url('data:image/png;base64...') no-repeat;
 *    }
*/
document.addEventListener('DOMContentLoaded', function () {
  var bodyElement = document.getElementsByTagName('body')[0],
    viewLoaderButton = document.getElementsByClassName('rx-view-loader-button')[0],
    botId = viewLoaderButton ? viewLoaderButton.getAttribute('data-bot-id') : null,
    closeIframeButton,
    viewContainer,
    viewContainerIframe,
    iframeLoader;

  var viewProperties = {
    viewPosition: 'right',
    buttonColor: '#f86e00',
    buttonBorderColor: '#d75f00',
    buttonColorOnHover: '#d75f00',
    buttonBorderColorOnHover: '#883c00',
    buttonSize: '60px',
    buttonInnerSize: '58px',
    buttonRadius: '50%',
    buttonPadding: '40px',
    cursor: 'pointer',
    transition: 'all .3s ease-in-out',
    transformScaleIn: 'scale(1.1)',
    transformScaleOut: 'scale(0.9)',
    buttonIcon: 'data:image/png;base64,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',
    screens: {
      phone: '100%',
      phablet: '75%',
      tablet: '45%',
      small: '45%',
      medium: '35%',
      big: '35%'
    }
  };

  init();

  if (!isBrowserSupported()) {
    console.warn('This version of Microsoft Internet Explorer is not supported.');
  }

  function init() {
    initUI();
    setPropertiesFromDataAttrs();
    appendStyles();
  }

  function isBrowserSupported() {
    // appName for IE 10 and earlier versions is "Microsoft Internet Explorer".
    // appName for IE 11, Firefox, Chrome and Safari is "Netscape".
    // We only support IE 11 and the modern browsers.
    return navigator.appName !== 'Microsoft Internet Explorer';
  }

  function initUI() {
    addElementsToDom();
    addClickEventListeners();
  }

  function setPropertiesFromDataAttrs() {
    var viewPosition = viewLoaderButton.getAttribute('data-view-position');

    if (viewPosition === 'left') {
      viewProperties.viewPosition = 'left';
    }
  }

  function getPlainViewUrl() {
    var currentScriptElement = document.getElementById('rx-view-loader-script') || document.currentScript,
      pathArray = currentScriptElement.src.split('/'),
      protocol = pathArray[0],
      host = pathArray[2];


    return protocol + '//' + host + '/com.bmc.dsm.chatbot/index.html?allow-from-domain=' + encodeURIComponent(window.location.origin) + '#/chatbot/window' + (botId ? '/' + botId : '');
  }

  function getRssoViewUrl(rssoServer, jwt) {
    var plainViewUrl = getPlainViewUrl();

    return rssoServer + '/rsso/cross-sso?goto=' + encodeURIComponent(plainViewUrl) + '#jwt=' + jwt;
  }

  function appendStyles() {
    var cssId = 'rx-view-loader-styles';

    if (!document.getElementById(cssId)) {
      var head = document.getElementsByTagName('head')[0],
        styleElement = document.createElement('style');

      styleElement.type = 'text/css';
      styleElement.id = cssId;

      styleElement.innerHTML = compileCss();

      head.appendChild(styleElement);
    }
  }

  function compileCss() {
    var css = '';

    css += compileBtnDefaultStyles();
    css += compileIframeDefaultStyles();
    css += compileMediaQueries();

    return css;
  }

  function compileBtnDefaultStyles() {
    var buttonStyles = '';

    if (viewProperties) {
      buttonStyles = '.rx-view-loader-button {' +
        'height: ' + viewProperties.buttonSize + ';' +
        'width: ' + viewProperties.buttonSize + ';' +
        'position: fixed;' +
        'bottom: ' + viewProperties.buttonPadding + ';' +
        viewProperties.viewPosition + ':' + viewProperties.buttonPadding + ';' +
        'text-align: center;' +
        'border: 1px solid;' +
        'outline: none;' +
        'background: ' + viewProperties.buttonColor + ';' +
        'border-color: ' + viewProperties.buttonBorderColor + ';' +
        'border-radius: ' + viewProperties.buttonRadius + ';' +
        'cursor: ' + viewProperties.cursor + ';' +
        'transition: ' + viewProperties.transition + ';' +
        'padding: 0;' +
        '}' +
        '.rx-view-loader-button:hover, ' +
        '.rx-view-loader-button:focus {' +
        'background-color: ' + viewProperties.buttonColorOnHover + ';' +
        'border: 1px solid;' +
        'border-color: ' + viewProperties.buttonBorderColorOnHover + ';' +
        'transform: ' + viewProperties.transformScaleIn + ';' +
        '}' +
        '.rx-view-loader-button:active {' +
        'transform: ' + viewProperties.transformScaleOut + ';' +
        '}' +
        '.rx-view-loader-button-icon {' +
        'color: #ffffff;' +
        'font-size: 22px;' +
        '}';
    }

    return buttonStyles;
  }

  function compileIframeDefaultStyles() {
    var iframeStyles = '.rx-view-container_open {' +
      'overflow: hidden;' +
      '}' +
      '.rx-view-container_open .rx-view-container {' +
      'overflow-x: hidden;' +
      'overflow-y: auto;' +
      'background: #ffffff;' +
      'opacity: 1;' +
      viewProperties.viewPosition + ': 0;' +
      '}' +
      '.rx-view-container {' +
      'position: fixed;' +
      'height: 100%;' +
      'z-index: 999999999;' +
      'top: 0;' +
      'overflow: hidden;' +
      'outline: none;' +
      'opacity: 0;' +
      'transition: all .3s linear;' +
      '}' +
      '.rx-view-container-iframe {' +
      'position: absolute;' +
      'top: 0;' +
      'left: 0;' +
      'height: 100%;' +
      'border-width: 0;' +
      '}' +
      '.rx-view-close-button {' +
      'position: absolute;' +
      'z-index: 1;' +
      'top: 14px;' +
      'padding: 0 0 1px 0;' +
      'right: 14px;' +
      'cursor: pointer;' +
      'height: 24px;' +
      'width: 24px;' +
      'border: none;' +
      'background-color: #ffffff;' +
      'font-size: 14px;' +
      'color: #414042;' +
      'border-radius: 50px;' +
      'outline: none;' +
      '}' +
      '.rx-view-close-button:hover {' +
      'background-color: #f2f2f2;' +
      '}' +
      '.rx-view-container-backdrop {' +
      'opacity: 0;' +
      '}' +
      '.rx-view-container_open .rx-view-container-backdrop {' +
      'position: fixed;' +
      'opacity: 0.5;' +
      'z-index: 999999998;' +
      'top: 0;' +
      'right: 0;' +
      'bottom: 0;' +
      'left: 0;' +
      'background-color: #000;' +
      '}' +
      '.rx-view-loader-button-icon {' +
      'background: url(' + viewProperties.buttonIcon + ') no-repeat;' +
      'height: ' + viewProperties.buttonSize + ';' +
      'background-size:' + viewProperties.buttonInnerSize + ';' +
      '}' +
      '.iframe-loader {' +
      'border: 3px solid transparent;' +
      'border-top: 4px solid #666;' +
      'border-radius: 50%;' +
      'position: absolute;' +
      'top: 40%;' +
      'left: 50%;' +
      'width: 45px;' +
      'height: 45px;' +
      'animation: spin 0.8s linear infinite;' +
      '}' +
      '@keyframes spin {' +
      '0% { transform: rotate(0deg); }' +
      '100% { transform: rotate(360deg); }' +
      '}';

    return iframeStyles;
  }

  function compileMediaQueries() {
    var mediaQueries = '@media screen and (max-width: 375px) {' +
      '.rx-view-container {' +
      'width: ' + viewProperties.screens.phone + ';' +
      viewProperties.viewPosition + ': -' + viewProperties.screens.phone + ';' +
      '}' +
      '}' +
      '@media screen and (min-width: 376px) and (max-width: 576px) {' +
      '.rx-view-container {' +
      'width: ' + viewProperties.screens.phablet + ';' +
      viewProperties.viewPosition + ': -' + viewProperties.screens.phablet + ';' +
      '}' +
      '}' +
      '@media screen and (min-width: 577px) and (max-width: 768px) {' +
      '.rx-view-container {' +
      'width: ' + viewProperties.screens.tablet + ';' +
      viewProperties.viewPosition + ': -' + viewProperties.screens.tablet + ';' +
      '}' +
      '}' +
      '@media screen and (min-width: 769px) and (max-width: 1024px) {' +
      '.rx-view-container {' +
      'width: ' + viewProperties.screens.small + ';' +
      viewProperties.viewPosition + ': -' + viewProperties.screens.small + ';' +
      '}' +
      '}' +
      '@media screen and (min-width: 1025px) and (max-width: 1200px) {' +
      '.rx-view-container {' +
      'width: ' + viewProperties.screens.medium + ';' +
      viewProperties.viewPosition + ': -' + viewProperties.screens.medium + ';' +
      '}' +
      '}' +
      '@media screen and (min-width: 1201px) {' +
      '.rx-view-container {' +
      'width: ' + viewProperties.screens.big + ';' +
      viewProperties.viewPosition + ': -' + viewProperties.screens.big + ';' +
      '}' +
      '}';

    return mediaQueries;
  }

  function addElementsToDom() {
    if (!viewLoaderButton) {
      viewLoaderButton = document.createElement('button');
      viewLoaderButton.className = 'rx-view-loader-button';
      bodyElement.appendChild(viewLoaderButton);
    }

    viewContainer = document.createElement('div');
    viewContainer.className = 'rx-view-container';

    var viewContainerBackDrop = document.createElement('div');
    viewContainerBackDrop.className = 'rx-view-container-backdrop';

    closeIframeButton = document.createElement('button');
    closeIframeButton.className = 'rx-view-close-button';
    closeIframeButton.innerHTML = '&#x2716;';

    viewContainer.appendChild(closeIframeButton);

    bodyElement.appendChild(viewContainer);
    bodyElement.appendChild(viewContainerBackDrop);
  }

  function addIframeToDom() {
    var iframeSrc = getIframeSrc();

    if (iframeSrc) {
      viewContainerIframe = document.createElement('iframe');
      viewContainerIframe.className = 'rx-view-container-iframe';
      viewContainerIframe.src = iframeSrc;
      viewContainerIframe.tabIndex = -1;
      viewContainerIframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-forms allow-popups');

      // Set zero size to prevent broken mark-up before css is loaded
      viewContainerIframe.width = 0;
      viewContainerIframe.height = 0;

      viewContainerIframe.onload = function () {
        // add a delay to allow angular to compile the application
        // and avoid a momentary display of the horizontal scrollbar
        setTimeout(function () {
          removeIframeLoaderFromDom();
          viewContainerIframe.style.width = '100%';
        }, 500);
      };

      viewContainer.appendChild(viewContainerIframe);

      addIframeLoaderToDom();
      focusOnIframe();

      bodyElement.classList.toggle('rx-view-container_open');
    }
  }

  function getIframeSrc() {
    var rssoServer = viewLoaderButton.getAttribute('data-rsso-server'),
      src = null;

    if (rssoServer) {
      var jwt = getJwt();

      if (jwt) {
        src = getRssoViewUrl(rssoServer, jwt);
      }
    } else {
      src = getPlainViewUrl();
    }

    return src;
  }

  function removeIframeFromDom() {
    bodyElement.classList.toggle('rx-view-container_open');
    viewContainer.removeChild(viewContainerIframe);
    viewContainerIframe = null;
  }

  function addIframeLoaderToDom() {
    iframeLoader = document.createElement('div');
    iframeLoader.className = 'iframe-loader';
    viewContainer.appendChild(iframeLoader);
  }

  function removeIframeLoaderFromDom() {
    viewContainer.removeChild(iframeLoader);
    iframeLoader = null;
  }

  function addClickEventListeners() {
    viewLoaderButton.addEventListener('click', toggleViewVisibility);

    closeIframeButton.addEventListener('click', toggleViewVisibility);

    viewLoaderButton.tabIndex = 0;
    viewLoaderButton.setAttribute('role', 'button');

    viewLoaderButton.classList.add('rx-view-loader-button');
    viewLoaderButton.classList.add('rx-view-loader-button-' + viewProperties.viewPosition);

    if (!viewLoaderButton.innerHTML) {
      viewLoaderButton.innerHTML = '<div class="rx-view-loader-button-icon"></div>';
    }
  }

  function toggleViewVisibility() {
    if (viewContainerIframe) {
      removeIframeFromDom();

      if (iframeLoader) {
        removeIframeLoaderFromDom();
      }
    } else {
      addIframeToDom();
    }
  }

  function focusOnIframe() {
    if (viewContainerIframe.tabIndex === -1) {
      viewContainerIframe.tabIndex = 0;
      viewContainerIframe.focus();
    } else {
      viewContainerIframe.tabIndex = -1;
    }
  }

  function getJwt() {
    var jwt = null;

    if (rxViewLoader.requestJwtCallback && typeof (rxViewLoader.requestJwtCallback) == "function") {
      jwt = rxViewLoader.requestJwtCallback();

      if (typeof jwt !== 'string') {
        jwt = null;
        console.log('Invalid JWT received from the host application.');
      }
    } else {
      console.log('Cannot request JWT from the host application.');
    }

    return jwt;
  }
});

var rxViewLoader = {
  onRequestJwt: function (callback) {
    rxViewLoader.requestJwtCallback = callback;
  }
};
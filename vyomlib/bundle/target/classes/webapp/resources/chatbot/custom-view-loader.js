'use strict';

/**
 * BMC Innovation Suite Custom View Loader
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
 *
 * Step 3. Open BMC Helix Chatbot with a specific Bot or a list of Bots
 * a. Specific Bot:
 *    Include a <button> element on your page, unless already included as instructed in step 2a,
 *    and specify the bot ID in the data-bot-id attribute, e.g.
 *
 *    <button class="rx-view-loader-button" data-bot-id="AGGADG1AAP0ICAPK3J44P96ELYOE5E"></button>
 *
 *    NOTE: the class attribute must be specified exactly as shown.
 *
 * b. List of Bots, displayed in a contextual menu (replaces Step 3a):
 *    Include a <button> element on your page, unless already included as instructed in step 2a,
 *    and specify the list of Bots in the data-bot-list attribute, e.g.:
 *      name, [required]
 *      Bot Id, [required]
 *      icon to display (class name), [optional]
 *
 *    data-bot-list='[{"name": "HR Bot", "botId": "AGGADG1AAP0ICAPK3J44P96ELYOE5E"}, {"name": "IT Bot", "botId": "AGGADG1AAP0ICAPK3J44P96ELYOE5F", "iconClassName": "my-bot-icon"}]'
 *
 *    NOTES: the data-bot-list attribute must be specified exactly as shown, using single quotes to define the array of bots.
 *    If only one Bot is specified no contextual menu will be displayed and the Bot will be opened automatically.
 *    You can only use data-bot-id or data-bot-list.
 *    The attribute "iconClassName" is optional. If not specified a BMC Helix bot icon will be displayed
 *    next to the bot name. Please check Step 6c for an example of custom class.
 *
 * Step 4. Specify the authentication type
 * a. In popup or in the blade:
 *    By default when the Bot is chosen a blade will open, displaying the selected Bot.
 *    If you are not logged in a login page will be displayed and you will be redirected to the Bot.
 *    Some IDP providers do not allow to be displayed in iFrames, you have in this case the option
 *    to detect if the user is already logged in and if not display the login page in a popup.
 *    Once the user is logged in, the popup will close, the blade will open and will display the Selected Bot.
 *
 *    Include a <button> element on your page, unless already included as instructed in steps 2 or 3,
 *    and specify if the authentication should be embedded (in the iFrame) or not (popup), e.g.
 *    data-embedded-authentication='false'
 *
 *    The default value is 'true' (authentication in the iFrame). 'false' will perform the authentication
 *    in a popup.
 *
 *    NOTE: If the parameter is set to 'false' a popup will be displayed as soon as the user selects a Bot.
 *    A verification will be done to check if the user is logged in or not. An animation is displayed.
 *    If the user is logged in, the popup will close automatically and the Bot will be displayed in a blade.
 *    If the user is not logged in, the popup will display the login page and once the user logged in the popup
 *    will close automatically and the Bot will be displayed in a blade.
 *
 * Step 5. The position of the button/panel can be customized as described below.
 * a. This will display the button and the view panel on the left side of the page.
 *
 *    <button class="rx-view-loader-button" data-view-position="left"></button>
 *
 * b. This will add a tooltip and an aria-label to the button.
 *
 *    <button class="rx-view-loader-button" title="Launch Chatbot" aria-label="Launch Chatbot"></button>
 *
 * Step 6. Use CSS to customize the look of the button as shown in the following examples.
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
 *
 * c. Define a custom contextual menu icon.
 * Insert a class in your html page and define the picture to be used, e.g:
 *     .my-bot-icon {
 *        background: url('data:image/png;base64,iVBO...ggg==') no-repeat;
 *        height: 20px;
 *        width: 20px;
 *        margin-left: 15px;
 *        background-size:20px;
 *        cursor: pointer;
 *    }
 *
 *    Use this class name in the data-bot-list as shown in Step 4b.
 *
 * d. Change a default contextual menu icons.
 * There are three default icons displayed in the contextual menu (rx-blue-bot, rx-green-bot, rx-yellow-bot).
 * You can override them to use custom icons, e.g
 *     .rx-green-bot {
 *        background: url('data:image/png;base64,iVBO...QmCC') no-repeat;
 *        height: 20px;
 *        width: 20px;
 *        margin-left: 15px;
 *        background-size:20px;
 *        cursor: pointer;
 *    }
 *
 *
 * Step 7. Use rxLaunchBot() global Javascript method to launch a specific Bot.
 * a. Launch a Specific Bot.
 *    You can use the global javascript method rxLaunchBot() to launch a specific Bot from your
 *    Javascript code. This method has three parameters:
 *      rxLaunchBot(botId, rssoServer, embeddedAuthentication)
 *          botId: [optional, default value is ''] Bot ID (as in data-bot-id),
 *          rssoServer: [optional, default value is ''] Rsso Server Url (as in data-rsso-server),
 *          embeddedAuthentication: [optional, default value is 'true'] as in data-embedded-authentication,
 *                                  accept values 'true' of 'false'
 *    eg:
 *    <button onclick="rxLaunchBot('', '', false)">Default Bot with popup authentication</button><br/>
 *
 * Step 8. Create your own contextual Bot menu.
 *    If you have an existing menu or Html elements you want to use to launch a Bot,
 *    you can add the custom class 'rx-view-loader-launch-bot' to those Html tags to identify them.
 *
 *    To specify a Bot Id to open, a Rsso server or if the authentication should be done
 *    in a popup you can use the parameters already described:
 *    data-bot-id, data-rsso-server, data-embedded-authentication.
 *
 *    In this example several links will be displayed and each one of them will launch a different Bot with
 *    different options:
 *    <a href="#" class="rx-view-loader-launch-bot" data-bot-id="AG001">Bot Id 001</a><br/>
 *    <a href="#" class="rx-view-loader-launch-bot" data-bot-id="AG002">AG002</a><br/>
 *    <a href="#" class="rx-view-loader-launch-bot" data-bot-id="AG001" data-rsso-server="https://amsterdam-rsso.onbmc.com/rsso">AG001 with RSSO</a><br/>
 *    <a href="#" class="rx-view-loader-launch-bot">default Bot</a><br/>
 *    <a href="#" class="rx-view-loader-launch-bot" data-rsso-server="https://amsterdam-rsso.onbmc.com/rsso">default Bot with RSSO</a><br/>
 *    <a href="#" class="rx-view-loader-launch-bot" data-bot-id="AG002" data-embedded-authentication="false">AG002 with popup authentication</a><br/>
 *
 *     NOTE: The parameter data-bot-list is not supported in this case.
 */

function displayChatbotIconInView(innovationSuiteUrl) {
    var bodyElement = document.getElementsByTagName('body')[0],
        viewLoaderButton = document.getElementsByClassName('rx-view-loader-button')[0],
        viewLoaderBotList = viewLoaderButton ? viewLoaderButton.getAttribute('data-bot-list') : null,
        viewLoaderEmbeddedAuthentication = viewLoaderButton ? viewLoaderButton.getAttribute('data-embedded-authentication') : 'true',
        viewLoaderRssoServer = viewLoaderButton ? viewLoaderButton.getAttribute('data-rsso-server') : null,
        isLoginVerificationInPogress = false,
        isPopupListeningInitialized = false,
        isEmbeddedAuthentication = false,
        contextMenuIcons = [],
        botId,
        closeIframeButton,
        viewContainer,
        viewContainerIframe,
        iframeLoader,
        viewLoaderLaunchBotElement,
        rssoServer,
        popupId;

    if (!viewLoaderButton) {
        console.log('Error:: No view loader button found!');

        return;
    }

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
        contextMenuOffsetX: '100px',
        contextMenuOffsetY: '100px',
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

    var contextMenuActiveClass = 'rx-context-menu--active',
        isContextMenuVisible = false,
        isContextMenuNecessary = false,
        contextMenuElement;

    init();

    if (!isBrowserSupported()) {
        console.warn('This version of Microsoft Internet Explorer is not supported.');
    }

    function init() {
        // Initializing the context menu if necessary.
        try {
            viewLoaderBotList = JSON.parse(viewLoaderBotList);
        } catch (error) {
            viewLoaderBotList = null;
            console.error('The chatbot list does appear correct. A selected chatbot may not launch.');
            console.log(error);
        }

        isContextMenuNecessary = viewLoaderBotList && Array.isArray(viewLoaderBotList) && viewLoaderBotList.length;

        initUI();
        setPropertiesFromDataAttrs();
        appendStyles();

        if (isContextMenuNecessary) {
            initContextMenu();
        }
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
        return innovationSuiteUrl + '/com.bmc.dsm.chatbot/index.html?allow-from-domain=' + encodeURIComponent(window.location.origin) + '#/chatbot/window' + (botId ? '/' + botId : '');
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
        css += isContextMenuNecessary ? compileContextMenuStyles() : '';

        return css;
    }

    function compileContextMenuStyles() {
        var contextMenuStyles = '';

        contextMenuIcons.push({
            className: 'rx-blue-bot',
            picture: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAvhJREFUOBG1VU1IVFEU/u5782YmmxyVLJ3AEpkgmAnyB4RqnUsrCgxMcJBorYbgxk2D5KK1UrRzMUK6mGgVhpa4ELJGEBJpGmJIxkmZeY1vfm/nPn3PmZeBEd3Fu/eee853zrnnu+cxHDEmV7jyZS/SzRi6wdEOMM++Go+DYYVzzDWf8M89aGd5qzmzCkYXIzdLDBOc8xbrWfmeMbYpcQw/vu6frZAbmzHOJe392jg4HzZkx5oZm3Be9Y2MMVYS+jbD6E9gisRQ57SjxiZjN5fHlmbJkgIgWwHzSHz0lEWaRfCXdlnC5dNunK1ywkZA1XYF3loXFElCIpGAqqpgsgwNMopknC5yLG2rSGTzJGG3RPpMFCCqra07Zakl4GvGh7dvMD8/j0wmg/r6evT29sLr9SIWiyGZTCIcDmNjYwMOhwMdHR240dWF10kNsUxu84LTd4mNLH66Q85Ct73n8DE8i2AwKCKvGB6PB3a7XQctlfSrMs/7+vpwv78fk9EdIbsr6dSgVYvbhampKVOxfBGPxxGNRmEFEzozMzPg+TycMoPAkgTPmlxOuBSbnlI5EGxKxVbfWGTianK5HHw1LggsSZD2PAGKIhD3TIC6h6NoCD6D5Ko2ZVJ1LRrGn6N2oJJZIvKmkw7SYx4CPHpwLQOey4IXC4cKJaotRcO1vUOZZUU85PGvqnaxUOKQiB7GPe28eEoOiVVlUZfUFL6PDlTIBJ5MVIr9zNKKxyXxNmOqBjVfQGNjY6U/Auvs7MT09DRCoRB6enp+A3O73VAUBZEfqmD1ik08dEK5t7mrYmhoCIODg2aUAn15eRmrq6s6bVKpVKVD2gUCATAqVHY/kzmT2A6J6cTe+ryOhYUFndjlRUqn06Yjagw6sdva2nCltRWvtjV82zsgtnBpPj26Qz89vTNVDr3q5eGcKmTByu+TDlWq0dJ2Gslc4fDpGUYj7yJP/rrTGMbUccav+fXmYNJGtCCq6oShc+z5oH0Z+v+vwRoexPwvv4BfmM1XVy8Iy18AAAAASUVORK5CYII='
        });

        contextMenuIcons.push({
            className: 'rx-green-bot',
            picture: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAwRJREFUOBGtVU1ME0EU/mZ2t7WAVEpQqCmJAv4EL0j5uXqSI5iIYoKghBjPgDEhIYRDQ+TgWSLxRqQk2hgOxksTDlhIoyQelCBICjYELJS2lFLojjOLW7YVE4y+w87M+5v33nzvLcER5Pc/U76mvjeCsEYudoLBrqkRBPnqByOecumsx+l8sJdtTrIZ7um+JpWoQ4yhLFtmPBOCBcpoT3PdwOsMvn5grJ+OzaiDDGqPzjvOSkCHbtXSx4T0q0Jf1o3+5EyiCvLMBbDIp7CdDCO6u6abaKsIYGxG2z4SXy1lkWYK6iuZmlBquwJrzmlIRIHFdBLF1nIIp+vr64jFYqASgUoTUJmKXTWKxU0fYskfkEBviPSJ9gDq8meZnii7dukeprwf4PV6EY/HUVRUhNbWVlRUVCAQCCAUCmFiYgLz8/Mwm82oqalBQ8N1zG29w0YisFBOHZfJy+m+mzxsd+25JnjffITL5dLiN37sdjtMJpPmVFW1UqXFbW1taL9/F1PBEZ4ubaa/oIEz+ecxPDycVjRugsEglpaWkO1M6IyPjyO1x6BQMy8ga6Sc5yzMccAs52opGR1BVjKO2iGLJ0qTTCZht1YKsZMK0BbmlvLCy2AcfDrZHvai2PUcNC9fZ4HmF6B4cAQFnZnIEpHbLA4IXyLCI4kl4mDJXbDU/qFcTYGHA5bYOeRl7WReyWBoO3Ahpe6DUpqu0+aLp7wmHFWGqNVYBKu9nRk84U+SJGzsrAgQBkWE/lB8GYn9GEpKSjLv487q6+sxOjoKt9uNlpaW35xZrVYoioLl8Cdh6+eFIx6udWctsoju7m50dXWloxQaPp8Ps7OzGmwikYhgZVBHRwckhSDFkgI2nkxgX2zHt7lVTE5OasA2PlI0Gk1fRHgpBLCrq6tRdbUKX7beIpxYOQC2uM7Yeg5bJfItvPX4qxuJJvP40TCctNaLYTH8nvf45mHr6Ua8Y5787aTRbcXEuV03oA2HNGy0EcQFutJxV3186fqGHA5Y/23A6jeI9V9+AT8BS9NX1SguVHMAAAAASUVORK5CYII='
        });

        contextMenuIcons.push({
            className: 'rx-yellow-bot',
            picture: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAvlJREFUOBGlVT1MU1EU/u59r33ITwsKSBt1USQsGm2JHZwNyIImmpSEEIMMzoDR4ODUGBncCQYHw1ASZajRuJDg0sQS0YUQJGITGwhWSlsKLe273vPgvbaAOHCXc8/fd8+57zv3MRyyRMRj21hJd4GhS7q9QsBNYYwhJkUEAlPOpuop5p3dIXvpYqUK7dfft95iemFEgpzf7yvVJfiS4MpQXcf821I7NxUhnvLEu5bnKBTe/A+McowYGUs5lGviWBXuOsSQ6bAkrwCvPAtdOwOxHQPbXLBc5oYxNlLbufCQdAOQ2qTKoFTB7u4Ar74Apkigikao9dflXsPa2hrS6TRULmDHHzA9B2VnFfzXGFjmO6Aot6l9ZnyA1dQ8VMf5qmuv8OHTD0xPTyOTyaChoQE9PT1obm5GNBpFPB5HKBTC4uIiNE1DW1sb2ttvwBF9Apb8vOQ8XdPKEqGWOwIieOJSAK8/JhAIBMxOLOl2u2G32w1QXdctO216e3tx/143Kr91ynbZXb5HDdhO+TA6OloWbCqxWAzLy8vYD0b+yclJZPMKhOKgC+yir+NlTg+YVm+0ZIIYUrWVqYfZ6GpyuRx4Ywe5vZxIy2o9ALdLKggL4OSDYTQFxuQHkifvLe6oQ9Ozl6jrLycDVS4kBmFZ/DGTTCm2MxC5LEQhb5oAvQBZjqTPVtG2b6fSOInE7EWhZ8E5t+5pffyFMWt0rLn0dBIrw/0Gq00bSUVRwDZm6Q5jVGFESEVkf8PlcpXGGYk+nw8TExMIBoPw+/0HwJxOJ2w2G/TVEOVGVBp0uenOx8MYHBzEwMCAVSVFhMNhzM3NGbRJJpNkKlt9fX3Q1AJYYVPa2VSR2EqNJPY4vi7lMDMzYxC79COlUinrIDlqBrE9Hg+uXrmMmuhj8NSXXWLTccXRq4Td1b43elpZJUlxTjajFm0iL0dvBYocPWz9LI6eGfHPx8EMOEKWPg4WbZw3/Y/IcUTeoS7KoVzTaT1fpuG4D+wBQAI+zi/gL5ugVAcSGPf5AAAAAElFTkSuQmCC'
        });

        contextMenuStyles = '.rx-context-menu {' +
            'display: none;' +
            'position: fixed;' +
            'padding: 12px 0;' +
            'background-color: white;' +
            'border: solid 1px #dfdfdf;' +
            'box-shadow: 0 6px 8px rgba(0, 0, 0, .17), 0 18px 20px rgba(0, 0, 0, .09), 0 -0.0625rem 0 0.0125rem rgba(240, 241, 241, .75), 0 0.0625rem 0 0.0125rem rgba(255, 255, 255, .75), -0.0625rem -0.0625rem 0 0.0125rem rgba(244, 245, 245, .25), 0.0625rem -0.0625rem 0 0.0125rem rgba(244, 245, 245, .25), 0.0625rem 0.0625rem 0 0.0125rem rgba(252, 252, 252, .25), -0.0625rem 0.0625rem 0 0.0125rem rgba(252, 252, 252, .25), 0.0625rem 0 0 0.0125rem rgba(248, 248, 248, .5), -0.0625rem 0 0 0.0125rem rgba(248, 248, 248, .5);' +
            'bottom: calc(' + viewProperties.contextMenuOffsetY + ' + 20px);' +
            viewProperties.viewPosition + ': calc(' + viewProperties.contextMenuOffsetY + ' - 55px);' +
            '}' +
            '.rx-context-menu--active {' +
            'display: block;' +
            '}' +
            '.rx-context-menu__items {' +
            'list-style: none;' +
            'margin: 0;' +
            'padding: 0;' +
            '}' +
            '.rx-context-menu__item {' +
            'display: flex;' +
            'margin-bottom: 10px;' +
            'align-items: center;' +
            '}' +
            '.rx-context-menu__item:last-child {' +
            'margin-bottom: 0;' +
            '}' +
            '.rx-context-menu__link {' +
            'cursor: pointer;' +
            'display: block;' +
            'padding: 4px 12px;' +
            'text-decoration: none;' +
            'color: #333333;' +
            'font-family: Open Sans;' +
            'font-variant: normal;' +
            'font-size: 13px' +
            '}' +
            '.rx-context-menu-arrow {' +
            'position: absolute;' +
            'display: block;' +
            'bottom: calc((10px + 1px) * -1);' +
            viewProperties.viewPosition + ': 25px;' +
            '}' +
            '.rx-context-menu-arrow::before {' +
            'border-top-color: #dfdfdf;' +
            'content: \'\';' +
            'border-bottom-color: transparent;' +
            'border-bottom-style: solid;' +
            'border-bottom-width: 0;' +
            'border-left-color: transparent;' +
            'border-left-style: solid;' +
            'border-left-width: 10px;' +
            'border-right-color: transparent;' +
            'border-right-style: solid;' +
            'border-right-width: 10px;' +
            'border-top-style: solid;' +
            'border-top-width: 10px;' +
            'bottom: 0;' +
            'box-sizing: border-box;' +
            'display: block;' +
            'position: absolute;' +
            'height: 10px;' +
            'width: 20px;' +
            '}' +
            '.rx-context-menu-arrow::after {' +
            'border-top-color: white;' +
            'content: \'\';' +
            'border-bottom-color: transparent;' +
            'border-bottom-style: solid;' +
            'border-bottom-width: 0;' +
            'border-left-color: transparent;' +
            'border-left-style: solid;' +
            'border-left-width: 10px;' +
            'border-right-color: transparent;' +
            'border-right-style: solid;' +
            'border-right-width: 10px;' +
            'border-top-style: solid;' +
            'border-top-width: 10px;' +
            'bottom: 1px;' +
            'box-sizing: border-box;' +
            'display: block;' +
            'position: absolute;' +
            'height: 10px;' +
            'width: 20px;' +
            '}' +
            '.rx-icon-wrapper {' +
            'display: flex;' +
            '}';

        contextMenuIcons.forEach(function (menuIcon) {
            contextMenuStyles += '.' + menuIcon.className + ' {' +
                'background: url(' + menuIcon.picture + ') no-repeat;' +
                'height: 20px;' +
                'width: 20px;' +
                'margin-left: 15px;' +
                'background-size:20px;' +
                'cursor: pointer;' +
                '}';
        });

        return contextMenuStyles;
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

        // Adding an invisible div element to be used by global method rxLaunchBot().
        viewLoaderLaunchBotElement = document.createElement('div');
        viewLoaderLaunchBotElement.style.display = 'hidden';
        viewLoaderLaunchBotElement.className = 'rx-view-loader-custom-element';
        bodyElement.appendChild(viewLoaderLaunchBotElement);

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
        var src = null;

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
        // Listener for the default "brain" icon, class "rx-view-loader-button".
        viewLoaderButton.addEventListener('click', toggleViewVisibility);

        // Listener for the div used for global javascript call (rxLaunchBot).
        viewLoaderLaunchBotElement.addEventListener('click', toggleViewVisibility);

        // Listener for html objects using class "rx-view-loader-launch-bot".
        var botElements = document.getElementsByClassName('rx-view-loader-launch-bot');

        if (botElements) {
            Array.prototype.forEach.call(botElements, function (botElement) {
                botElement.addEventListener('click', toggleViewVisibility);
            });
        }

        closeIframeButton.addEventListener('click', toggleViewVisibility);

        viewLoaderButton.tabIndex = 0;
        viewLoaderButton.setAttribute('role', 'button');

        viewLoaderButton.classList.add('rx-view-loader-button');
        viewLoaderButton.classList.add('rx-view-loader-button-' + viewProperties.viewPosition);

        if (!viewLoaderButton.innerHTML) {
            viewLoaderButton.innerHTML = '<div class="rx-view-loader-button-icon"></div>';
        }
    }

    function toggleViewVisibility($event) {
        var clickedElement = $event.target;

        if (isLoginVerificationInPogress) {
            return;
        }

        if (viewContainerIframe) {
            removeIframeFromDom();

            if (iframeLoader) {
                removeIframeLoaderFromDom();
            }
        } else {
            // Default brain icon.
            // Firefox, Edge, Chrome detect the click event on 'rx-view-loader-button-icon'
            // but IE11 returns 'rx-view-loader-button'.
            if (clickedElement.className.indexOf('rx-view-loader-button') !== -1) {
                if (isContextMenuNecessary) {
                    $event.stopImmediatePropagation();

                    // If there is only one bot in the bot list, we open it.
                    if (viewLoaderBotList.length === 1) {
                        botId = viewLoaderBotList[0].botId;
                        rssoServer = viewLoaderRssoServer;
                        isEmbeddedAuthentication = viewLoaderEmbeddedAuthentication;
                    } else {
                        showContextMenu();

                        return;
                    }
                } else {
                    // data-bot-id attribute can be changed dynamically.
                    botId = viewLoaderButton ? viewLoaderButton.getAttribute('data-bot-id') : null;
                    rssoServer = viewLoaderRssoServer;
                    isEmbeddedAuthentication = viewLoaderEmbeddedAuthentication;
                }
            } else {
                // Open a specific bot.
                botId = clickedElement.getAttribute('data-bot-id');
                rssoServer = clickedElement.getAttribute('data-rsso-server');
                isEmbeddedAuthentication = clickedElement.getAttribute('data-embedded-authentication');
            }

            if (isEmbeddedAuthentication === 'false') {
                loginVerification();

                return;
            }

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

    // Context menu code
    function initContextMenu() {
        generateContextMenu();

        contextMenuElement = document.getElementsByClassName('rx-context-menu')[0];

        document.addEventListener('click', function (e) {
            hideContextMenu();
        });

        window.onkeyup = function (e) {
            if (e.keyCode === 27) {
                hideContextMenu();
            }
        }
    }

    function showContextMenu() {
        isContextMenuVisible = true;
        contextMenuElement.classList.add(contextMenuActiveClass);
    }

    function hideContextMenu() {
        isContextMenuVisible = false;
        contextMenuElement.classList.remove(contextMenuActiveClass);
    }

    function generateContextMenu() {
        // We need to build the contextual menu:
        /*
        <nav class="rx-context-menu">
            <ul class="rx-context-menu__items">
                <li class="rx-context-menu__item">
                    <a class="rx-context-menu__link rx-view-loader-launch-bot" data-bot-id="botId" data-rsso-server="rsso server url">Bot Name</a>
                </li>
            </ul>
        </nav>
        */

        var navElement = document.createElement('nav'),
            arrowElement = document.createElement('div'),
            ulElement = document.createElement('ul'),
            currentIconIndex = 0,
            numberOfIcons = contextMenuIcons.length;

        navElement.className = 'rx-context-menu';
        arrowElement.className = 'rx-context-menu-arrow';
        ulElement.className = 'rx-context-menu__items';

        // Adding each li to the ul.
        viewLoaderBotList.forEach(function (bot) {
            var liElement = document.createElement('li'),
                botIconElement = document.createElement('div'),
                aElement = document.createElement('a');

            if (bot.iconClassName) {
                botIconElement.className = bot.iconClassName;
            } else {
                if (currentIconIndex >= numberOfIcons) {
                    currentIconIndex = 0;
                }

                botIconElement.className = contextMenuIcons[currentIconIndex].className;
            }

            liElement.className = 'rx-context-menu__item';

            if (bot.botId) {
                aElement.setAttribute('data-bot-id', bot.botId);
                botIconElement.setAttribute('data-bot-id', bot.botId);
            }

            aElement.innerHTML = bot.name;

            if (viewLoaderRssoServer) {
                aElement.setAttribute('data-rsso-server', viewLoaderRssoServer);
                botIconElement.setAttribute('data-rsso-server', viewLoaderRssoServer);
            }

            if (viewLoaderEmbeddedAuthentication) {
                aElement.setAttribute('data-embedded-authentication', viewLoaderEmbeddedAuthentication);
                botIconElement.setAttribute('data-embedded-authentication', viewLoaderEmbeddedAuthentication);
            }

            aElement.classList.add('rx-context-menu__link');
            aElement.classList.add('rx-view-loader-launch-bot');
            botIconElement.classList.add('rx-view-loader-launch-bot');
            aElement.addEventListener('click', toggleViewVisibility);
            botIconElement.addEventListener('click', toggleViewVisibility);

            liElement.appendChild(botIconElement);
            liElement.appendChild(aElement);
            ulElement.appendChild(liElement);

            currentIconIndex++;
        });

        navElement.appendChild(arrowElement);
        navElement.appendChild(ulElement);
        bodyElement.appendChild(navElement);
    }

    // The url needs to be set to '/' for IE11 to allow the use of
    // window.opener.postMessage() in the popup:
    // https://gist.github.com/mbajur/8325540
    function openAuthenticationPopup() {
        var title = '_blank',
            options = ['scrollbars=1', 'height=600', 'width=670'],
            url = isIE11() ? '/' : '',
            style = '<style>.rx-login-verification{top: 50%;left: 50%; position: fixed;transform: translate(-50%, -50%); width: 670px;}</style>',
            picture = '<img src="' + innovationSuiteUrl + '/com.bmc.arsys.rx.settings/resources/images/login-verification.gif"' +
                'class="rx-login-verification"' +
                'alt="Login verification in progress"/>';

        popupId = window.open(url, title, options.join(','));
        popupId.document.write(style + picture);
    }

    function isIE11() {
        return Boolean(window.navigator.userAgent.match(/Trident.*rv[ :]*11\./));
    }

    function initPopupAuthentication() {
        var url = innovationSuiteUrl + '/innovationsuite/index.html#/com.bmc.arsys.rx.settings/iview/com.bmc.arsys.rx.settings:BMCLoginVerification';

        if (!isPopupListeningInitialized) {
            window.addEventListener('message', handlePopupEvent);
        }

        // Those two steps are necessary for IE11 to allow the use of
        // window.opener.postMessage() in the popup:
        // https://gist.github.com/mbajur/8325540
        if (isIE11()) {
            popupId.location.href = 'about:blank';
            popupId.location.href = url;
        } else {
            popupId.location = url;
        }
    }

    function allowClickOnBots(isClickEventAllowed) {
        identifyElements('.rx-view-loader-button', isClickEventAllowed);
        identifyElements('.rx-view-loader-launch-bot', isClickEventAllowed);
    }

    function identifyElements(className, isClickEventAllowed) {
        var elements = document.querySelectorAll(className);

        if (elements) {
            Array.prototype.forEach.call(elements, function (element) {
                element.setAttribute('style', isClickEventAllowed ? 'cursor: pointer' : 'cursor: not-allowed');
            });
        }
    }

    function handlePopupEvent(event) {
        if (event.origin !== innovationSuiteUrl || event.data !== 'LOGIN_SUCCESSFUL') {
            return;
        }

        window.removeEventListener('message', handlePopupEvent);
        isPopupListeningInitialized = false;
        popupId.close();

        addIframeToDom();
    }

    function loginVerification() {
        var xmlHttpRequest = new XMLHttpRequest(),
            queryParameters = '?allow-from-domain=' + encodeURIComponent(window.location.origin) + '&chatBotId=' + encodeURIComponent(botId);

        // We need to have the popup opened at this stage due to web browser security
        // rules where popups are blocked if not issued from an user interaction.
        openAuthenticationPopup();

        isLoginVerificationInPogress = true;
        allowClickOnBots(false);

        xmlHttpRequest.onreadystatechange = function () {
            if (xmlHttpRequest.readyState === XMLHttpRequest.DONE) {
                isLoginVerificationInPogress = false;
                allowClickOnBots(true);

                if (xmlHttpRequest.status === 200) {
                    addIframeToDom();
                    allowClickOnBots(true);
                    popupId.close();
                } else {
                    initPopupAuthentication();
                }
            }
        };

        xmlHttpRequest.open('GET', innovationSuiteUrl + '/api/com.bmc.dsm.chatbot/rx/application/chatbot/crosslaunch' + queryParameters, true);
        xmlHttpRequest.withCredentials = true;
        xmlHttpRequest.send();
    }
}

var rxViewLoader = {
    onRequestJwt: function (callback) {
        rxViewLoader.requestJwtCallback = callback;
    }
};

function rxLaunchBot(botId, rssoServer, embeddedAuthentication) {
    var viewLoaderCustomElement = document.getElementsByClassName('rx-view-loader-custom-element')[0];

    if (botId) {
        viewLoaderCustomElement.setAttribute('data-bot-id', botId);
    } else {
        viewLoaderCustomElement.removeAttribute('data-bot-id');
    }

    if (rssoServer) {
        viewLoaderCustomElement.setAttribute('data-rsso-server', rssoServer);
    } else {
        viewLoaderCustomElement.removeAttribute('data-rsso-server');
    }

    if (embeddedAuthentication === false || embeddedAuthentication === 'false') {
        viewLoaderCustomElement.setAttribute('data-embedded-authentication', 'false');
    } else {
        viewLoaderCustomElement.setAttribute('data-embedded-authentication', 'true');
    }

    viewLoaderCustomElement.click();
}

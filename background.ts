// This type is incomplete and only includes the values used in this project
declare const chrome: {
    tabs: {
        onUpdated: {
            addListener: (callback: (tabId: number, changeInfo: { url: string }, tab: { url: string }) => void) => void
        },
        update: (tabId: number, updateProperties: { url: string }, callback?: (tab?: any) => void) => void
    }
}

let updated: boolean = false;
chrome.tabs.onUpdated.addListener(onTabUpdated);

function onTabUpdated(tabId: number, changeInfo: { url: string }, tab: { url: string }): void {
    if (updated) {
        if (changeInfo.url !== undefined) updated = false;
        return;
    }
    const url: URL = new URL(tab.url);
    let newLocation: string | undefined = undefined;
    switch (url.origin) {
        case 'https://duckduckgo.com':
        case 'https://www.google.com':
            switch (getParameterByName('q', url.search)) {
                case 'yt':
                    chrome.tabs.update(tabId, {url: 'https://www.youtube.com/feed/subscriptions'});
                    updated = true;
                    break;
            }
            break;
        case 'http://tw.tv':
        case 'http://www.tw.com':
            newLocation = 'https://twitch.tv';
            break;
        case 'http://www.r.com':
            newLocation = 'https://reddit.com/r';
            break;
    }
    if (newLocation) {
        chrome.tabs.update(tabId, {url: `${newLocation}${url.pathname}`});
        updated = true;
    }
}

/**
 * Retrieves given parameter of given url. Source: {@link https://stackoverflow.com/a/901144/9634099}
 * @param {string} name - The name of the parameter
 * @param {string} [search] - The url.search parameter 
 * @returns {string} The value of the parameter
 */
function getParameterByName(name: string, search: string): string {
    if (!search) search = location.search;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`),
        results = regex.exec(search);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

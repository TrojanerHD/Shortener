# URL Shortener
A browser extension to “shorten” preset links
## Important Note
I originally programmed this plugin for private use and made it public just for the case that anybody wants to use it. I neither guarantee that this extension works at all on your system nor do I guarantee that I will fulfill feature requests or fix any bugs that might occur. You may try creating an [issue](https://github.com/TrojanerHD/Shortener/issues) and if I have time I will maybe fix your problem or add a feature but I do not guarantee anything 
## Installation
Open the .xpi file from the [releases](https://github.com/TrojanerHD/Shortener/releases) and add it as extension to the browser.
## Usage
Currently supported:

Keyword | Redirects to | Limitations
--- | --- | ---
`yt` | https://<!---->youtube.com/feed/subscriptions/ | Only available when duckduckgo.com or google.com is set as default search engine
`r/<subreddit>` | https://<!---->reddit.com/r/\<subreddit> | None 
`tw.tv/<username`<br>`tw/<username>` | https://<!---->twitch.tv/\<username> | None 
## Deployment
- Install [Node.js](https://nodejs.org/en/) if you haven't already
- Install typescript (`npm i -g typescript` or `yarn global add typescript`) if you haven't already
- Download the repository's source code, unzip it and open the files with an editor of your choice
- To test the extension, save the files and execute `tsc background.ts` in the main directory. In Firefox you can now add that extension by going to Tools -> Add-ons, clicking on the setting wheel and Debug Add-ons. There you can temporarily add the extension by clicking on `Load Temporary Add-on…` and selecting the `manifest.json`
- If you want to get a .xpi file to permanently load the add-on, please head to https://extensionworkshop.com/documentation/publish/
## Testing
This plugin was only tested in Firefox 77.0.1 on Ubuntu 20.04

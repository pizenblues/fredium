async function openMyPage(tab) {

    let result = await browser.scripting.executeScript({
        target: {tabId: tab.id},
        func: () => {
            const meta = document.querySelector("meta[content=Medium]");
            return meta !== null;
        }
    });

    if (result[0].result) {
        const articleURL = tab.url.toString();
        const freeArticle = "https://freedium.cfd/" + articleURL;
        browser.tabs.create({
            url: freeArticle
        });
    }
}

  browser.browserAction.onClicked.addListener(openMyPage);
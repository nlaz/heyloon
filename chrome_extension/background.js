chrome.browserAction.onClicked.addListener(function(tab) {
  console.log("HEY LOON...")
  chrome.tabs.executeScript(null, {
    file: "heyloon.js"
  });
});

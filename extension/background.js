// Обработчик клика на иконке расширения
chrome.action.onClicked.addListener(function() {
    chrome.tabs.create({ url: "https://www.youtube.com" });
  });
  
  // Обработчик горячих клавиш
  chrome.commands.onCommand.addListener(function(command) {
    if (command === "open-youtube") {
      chrome.tabs.create({ url: "https://www.youtube.com" });
    }
  });
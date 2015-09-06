// Redirector
chrome.extension.onMessage.addListener(function(req, sender) {
	chrome.tabs.query({
		currentWindow: true,
		active: true
	}, function(tabs) {
		chrome.tabs.update(tabs[0].id, {
			url: req.redirect
		});
	});
});
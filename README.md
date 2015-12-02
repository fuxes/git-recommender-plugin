Git Recommender Extension
==========================
This is an Chrome extension for DrDub's Git Recommender project, you can check it out here: [https://github.com/DrDub/gitrecommender](https://github.com/DrDub/gitrecommender)

## Usage
### Loading the extension
1. First start by cloning the repository `git clone https://github.com/fuxes/git-recommender-plugin.git`.
2. Then in a new tab go to `chrome://extensions`.
3. In the upper right corner enable the developer mode.
4. Hit the `Load unpacked extension...` button and look for the cloned folder.
5. Close chrome (or chromium) and restart with the `--disable-web-security` argument [(more info)](http://stackoverflow.com/a/6083677)

### Run the API Demo Server
In order to work you need to run the API Demo Server from DrDub's Git Recommender following the instructions [here](https://github.com/DrDub/gitrecommender/blob/master/README.md).

### Use the extension!
1. Now go to any github reposity (i.e. https://github.com/apache/mahout)
2. Click the github's octocat icon in the upper right corner of your browser.
3. That's it! You should get some recommendations to check, you can click them to get see the files.

<p align="center">
  <img src="http://i.imgur.com/4k9Au98.png" alt="Git Recommender Chrome Extension"/>
</p>

Recommendations are based on the files that you see in the current folder (not subfolders). Since the API Demo Server downloads the repo and then compute it, it may take few minutes in answer back with the recommendations.


## Errors and alerts
**You are not in github!**: Your current active tab should be in a github.com repository.  
**Problem with the API**: There is a problem with the API Demo Server. Check if you have started the API server.

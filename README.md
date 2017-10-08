# Steam Auto Curation
> Automatically curate a list of games using the same blurb

## Setup
You'll need [git](https://git-scm.org) and [node](https://nodejs.org).
1. `git clone` the repo
2. `npm install` in the root directory
3. Open up [games.json](games.json) and configure the games you want to review.
   * This can be done automatically if your curator's Steam group has a list of associated games you want to review.
      1. Open up [games.js](games.js)
      2. Change the group URL on line 5 to whatever you want
      3. Then run the games script (see below)
4. Open up [review.json](review.json) and configure the review options
   * REQUIRED: `sessionID` (get this from Chrome by inspecting any curation creation request
   * REQUIRED: `Cookie` header string (get this from Chrome by inspecting any curation creation request
   * `blurb` - this is the actual review text
   * `uri` - change the name after `/groups/` to whatever your group's vanity URL name is
   * the rest should be self explanatory
   
## Running
* `npm run games` to run the games script which will populate [games.json](games.json) with the associated games from a Steam group.
* `npm run review` to run the review script which will post reviews for every game inside [games.json](games.json) according to the [review configuration](review.json)
   * Reviews are posted every three seconds to avoid getting rate limited.

## Warranty
There is no warranty, if you get banned for using this it's your own fault lmao

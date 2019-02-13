# Southern Dev Conf website

## Welcome!

Thank you for stopping by our humble repo. We are building a website for the Southern Dev conference in Augusta GA that is going to be held in April 27th 2019.

#### How to contribute
Please checkout the issues we have on the repo to help guide the direction we're trying to go. 

If you have your own issue you would like to start please feel free to submit a PR or add a new issue. 

###### To get this project started:

```
git clone https://github.com/theClubhouse-Augusta/southern-dev.git
cd southern-dev
npm install
```

To run project use `npm run start`
Edit files in `src` folder and Gulp along with Browser sync will reload browser.

- Known Gulp bugs
    - Pug errors break gulp needing to restart
    - HTML does not reload process (change a sass file and will run HTML)
    - If images are added when Gulp isn't running Image process doesn't run. Need to be running Gulp to get it to work

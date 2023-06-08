# youtube-clone

- mkdir youtube-clone
- cd into folder
```sh
npx create-react-app ./
```

Additional dependencies:
- emotion and emotion styles - needed for material ui 
as well as mui icons and mui/material as ui kit 
- axios - to make api calls
- react-router-dom - for the routing

note: for mui and react-router-dom its the latest versions that came out recently

after copying over the package.json (or just the dependecies), install the packages and add the --legacy-peer-deps for older versions

```sh
npm install --legacy-peer-deps
```

- following instructions on mui.com  -> installation
  
https://mui.com/material-ui/getting-started/installation/

To install the Roboto font in your project using the Google Web Fonts CDN use the provided link tag and paste it in the index.html
- same for the material icons

- the nice thing about mui is: hover (eg) over the imported "Stack" in the Navbar.jsx and follow the "Demos" link to the mui.com components page where you can find all details about the Stack component, how it is used (with ready to use code examples)

- if you hover again over Stack and follow the 2nd link (Stack API), you can see what attributes a specific component accepts

---

- After scaffolding the project the data from the youtube api has to be fetched for which i use RapidAPI\
  **https://rapidapi.com/ytdlfree/api/youtube-v31?utm_source=youtube.com%2FJavaScriptMastery&utm_medium=referral&utm_campaign=DevRel**
- if not already: sign in with Email/PW or one of your social media accounts like google, facebook or github
- press "subscribe to test", choose the basic/free tier (500 requests per day possible!)
- go back to the endpoints, and now you can copy the code snippet of the options object (whcih contains the rapidAPI-Key)
- create utils/fetchFromApi.js and paste it in
- create .env and put your API-Key in there

- 'react-scripts' uses dotenv library under the hood
- important: set environment variables starting with 'REACT_APP_' !

- in order to get the desired data from different endpoints, i create a generic fn "fetchFromApi" which accepts the url-enpoint as parameter
- then use the lifecycle hook useEffect in the Feed component to call this fn (when the component initially loads or the page gets reloaded)
 
---

## Make use of the rapidAPI extension

- 1st: go again to rapidapi.com, copy one of the urls that you are interested in, like:   
https://youtube-v31.p.rapidapi.com/search
- ..and make a GET request: open the vscode extension 
- click: "create new project", name it (eg) "youbube" (its like postman and creating a new collection)
- go back to rapidapi.com and copy over the auth headers
- and finally the query params (that are required from rapidapi)
- so for the "search"-endpoint it would be: "q" (as the key, "q" short 4 query of course), and "part" as key and "snippet" as value
- send the request and with a successful 200 response you have several options like: JSON Tree, Raw, JSON Text
- AND: you have an input field for "filter expressions" (eg: $.items[0].snippet.thumbnails.default.url )
- this ability to have the result filtered live in advance saves you a lot of time!
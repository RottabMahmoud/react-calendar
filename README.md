# iPro Suite Case Study

## What the Application does

- A Calendar web app using React.
- Full CRUD operation with Calendar Events.
- Persisting Data upon refresh. (TO be Saved Offline)

## App Usage

- User can reload the page and the data/ events will still persist.
- User can add an event by clicking over any day and add an event.
- User can press and hold, while dragging multiple days to add an event, which will take several days.
- User can update or delete an existing event upon clicking on an existing Event.
- User can swap between different views, like Month, Work Week, Week, day views.
- User can see his/ her agenda, that represents all events for 1 month starting from the current date.
- The App is fully responseive and user can use it in any screen size as well.
- On Mobile screen user need to press a long press to add an event, and easily drag up to multiple days to make a 
  long event.
- User can use route params in the URL. Example (/calendar/2023-11-21 for November 21, 2023), and after it routes, 
  user need to press on the day view to show the certain day in the route URL.
- User can use the Header bar in the top to route between Home Page and About Page, the home page shows the   
  calendar and the about page shows the app version.

## Technologies

- JavaScript
- React
- React hooks
- Redux
- React Router
- React-Big-Calendar
- moment
- Bootstrap/ Material UI
- React Datetime

## Some of the challenges I've faced and how I've tackled them

- To use React-Big-Calendar Library at the first time, I had to go throught the documentation to specify the prop   
  types.
- The UI of the Time picker is not working properly on laptop browser, but working perfectly on mobile, after 
  checking the DateTime picker recent github documentation, found that there is browser issue, and they are working on it. You have to enter the time using the keyboard not the UI time theme picker. So Assume the Time will be entered manually using the keyboard, to add or edit certain times on PC. (The proof that isn't a Code logic Issue, is that the time gets updated on mobile/ or if the user stricly type it using keyboard over PC UI)

## Project Installation

```bash
git clone https://github.com/RottabMahmoud/react-calendar.git
cd react-calendar
npm install
```

## To Start the App

```bash
npm start
```

## For Building

```bash
npm build
```

## Usage

Used React Big Calendar, LocalForage and moment libraries to ease the Implementation of the Calendar UI.

```bash
npm install moment --save
npm install react-bootstrap bootstrap
npm i react-datetime
npm i localforage
npm install date-fns@2.30.0 react-big-calendar@1.8.2 react-colorful@5.6.1 @mui/x-date-pickers@5.0.12 @types/react-big-calendar
```

## Project Hierarchy

```bash
  crealytics
    ├─ public
    │  ├─ index.html
    │  ├─ manifest.json
    ├─ src                   ### root Folder
    │  ├─ index.js           ### project index
    │  ├─ components         ### used to group all the project components
    │  │  ├─ CalendarInfo.js ### Our Calendar Representation
    │  │  ├─ Details.js      ### Our Events CRUD Modal
    │  │  ├─ Header.js       ### Our Header to navigate between Home and About Views
    │  ├─ css                ### Our css Stylings folder
    │  │  ├─ datetime.css
    │  ├─ logos              ### Our Logos folder
    │  │  └─ Logo.png        ### iPro Suites Logo
    │  ├─ store              ### Our Store/ Redux folder
    │  │  └─ reducer.js      ### Our reducer
    │  ├─ views              ### Our Views Folder
    │  │  ├─ About.js        ### Our About Page
    │  │  ├─ Home.js         ### Our Home Page, where the CalendarInfo is rendered
    │  │─ App.css
    │  │─ App.js
    │  │─ index.css
    │  │─ index.js
    │  │─ reportWebVitals
    │  │─ StateProvider.js  ### Our StateProvider to wrap the app with Store/ Redux
    ├─ .gitignore
    ├─ node_modules
    ├─ package.json
    ├─ package-lock.json
    ├─ README.md
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Badge

<a href="https://www.linkedin.com/company/ipro-suite/"> <img src="https://img.shields.io/badge/iPro%20Suite-Mahmoud%20Rottab-brightgreen?link=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fipro-suite%2F" alt="iPro Suite" /> </a>

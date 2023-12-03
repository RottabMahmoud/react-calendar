# iPro Suite Case Study

## What the Application does

- A Calendar web app using React.
- Full CRUD operation with Calendar Events.
- Persisting Data upon refresh. (TO be Saved Offline)

## Technologies

- JavaScript
- React
- React hooks
- Redux
- React Router
- React-Big-Calendar
- moment
- Bootstrap

## Some of the challenges I've faced and how I've tackled them

- To use React-Big-Calendar Library at the first time and go throught the documentation to specify the prop types.

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

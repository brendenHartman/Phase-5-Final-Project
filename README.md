# Phase 5 Final Project

### ZooOlogy 

  Welcome to the zoo!!
  ZooOlogy is a mini FullStack/(React/Flask) application that simulates opening your own zoo and managing animals. Its structure is as follows

## Structure

├── CONTRIBUTING.md
├── LICENSE.md
├── Pipfile
├── Pipfile.lock
├── Procfile.dev
├── README.md
├── client
│   ├── README.md
│   ├── node_modules
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   └── src
├── node_modules
│   ├── @reduxjs
│   ├── js-tokens
│   ├── loose-envify
│   ├── property-expr
│   ├── react
│   ├── tiny-case
│   ├── toposort
│   ├── type-fest
│   └── yup
├── package-lock.json
├── package.json
└── server
    ├── __pycache__
    ├── app.py
    ├── config.py
    ├── instance
    ├── migrations
    ├── models.py
    ├── node_modules
    ├── package-lock.json
    ├── package.json
    └── seed.py

## Server

├── __pycache__
│   ├── app.cpython-38.pyc
│   ├── config.cpython-38.pyc
│   └── models.cpython-38.pyc
├── app.py
├── config.py
├── instance
│   └── app.db
├── migrations
│   ├── README
│   ├── __pycache__
│   ├── alembic.ini
│   ├── env.py
│   ├── script.py.mako
│   └── versions
├── models.py
├── node_modules
│   ├── anymatch
│   ├── async
│   ├── binary-extensions
│   ├── braces
│   ├── chokidar
│   ├── duplexer
│   ├── event-stream
│   ├── fill-range
│   ├── from
│   ├── glob-parent
│   ├── honcho
│   ├── honchoflatfile
│   ├── is-binary-path
│   ├── is-extglob
│   ├── is-glob
│   ├── is-number
│   ├── lodash.assign
│   ├── map-stream
│   ├── mbtcpprotocol
│   ├── mcprotocol
│   ├── mingo
│   ├── nodepccc
│   ├── nodes7
│   ├── normalize-path
│   ├── pause-stream
│   ├── picomatch
│   ├── readdirp
│   ├── save
│   ├── serialipprotocol
│   ├── split
│   ├── stream-combiner
│   ├── tail
│   ├── through
│   ├── to-regex-range
│   └── underscore
├── package-lock.json
├── package.json
└── seed.py

### Models

The models file holds the structure of all models used in this project:

1. User: the main model and structure of all users data as accounts are created
2. Animal: the model that holds animal information like name and cost
3. Enclosure: the model that holds enclosure data like how many animals and cost
4. Achievements: the model that holds the goal and reward of the 8 achieivements in the game
5. Completes: the association table that holds data about users and their completed achievements

### app.py

Holds all the server side restful route data for fetching and how the responses are handled

### seed.py

an optional seed file to erase all data except one standard user

## Client

├── 3527105-200.png
├── components
│   ├── Achievement.js
│   ├── Achievements.js
│   ├── Animal.js
│   ├── App.js
│   ├── CashCollector.js
│   ├── Enclosure.js
│   ├── Login.js
│   ├── MainMenu.js
│   ├── Signup.js
│   └── Zoo.js
├── freepik__expand__29261.jpeg
├── index.css
├── index.js
├── slices
│   ├── achievementsSlice.js
│   ├── animalSlice.js
│   ├── cashSlice.js
│   ├── completesSlice.js
│   ├── enclosuresSlice.js
│   ├── progressSlice.js
│   └── userSlice.js
└── store.js

### components: 

the main structure is as follows: 

INDEX>APP>ROUTE

routes are:

'/' Home page;
'/login' Login page;
'/signup' Signup page;
'/zoo' Main Zoo page;
'/achievements' Achievements page;

all other components handle smaller visual sections of those pages

## Setup

This Project uses honcho and as such You may launch the app entirely from your own machine by running the command 
```
  honcho start -f Procfile.dev
```

## Where Do I Start?

Just as with any online game create your account or login from the main page!
Then hit play and have fun!!!!

## Collaboration

This project was completed to fulfill Phase 5 requirements only and is part of tech school ciriculum and as such is not open to collaboration, feel free to make a clone and tweak whatever you like (I Won't Sue)

## Conclusion

Thanks for taking a look at this project! I hope you have fun collecting the animals and achievements!!!!

Happy coding!

---

## Resources

- [Flatiron School Homepage](https://flatironschool.com/)
- [RepoPage](https://github.com/brendenHartman/Phase-5-Final-Project)

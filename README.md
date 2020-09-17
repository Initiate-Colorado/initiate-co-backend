# Initiate Colorado - Backend

Initiate Colorado is the final Capstone project for Front End  and Back End Module 4 students at the Turing School of Software and Design. The idea behind the project was to build an application that allowed a user to walk through the steps of filing an initiative to appear on the ballot for the upcoming election in Colorado. The main goals of this project were to use an agile development process in which our team would set goals and deadlines in order to reach a Minimum Viable Product, implement technologies that have not been explicitly taught at Turing, and develop a "full stack" application in which Back End and Front End teams would have to work together to produce one cohesive application. This repository holds code in which the Front End portion of the application lives.  

## Contributors

[Alex Eickelman](https://github.com/Aeickelman40)

[Charles Wefso](https://github.com/cwefso)

[Danny Ramos](https://github.com/muydanny)

[Mariana Cid](https://github.com/Mariana-21)

[Michelle Foley](https://github.com/foleymichelle9)

[Rostam Mahabadi](https://github.com/Rostammahabadi)

## Back End Technologies Used

- Node.js Framework

- GraphQL for data queries 

- Python/ Flask Webscraper

- Jest/Supertest testing library

- Github Projects to track stories and progress


## Installing / Getting started

To view the deployed version of our application, go to the following link:

https://initiate-co-app.herokuapp.com/

To view this application in development mode and run tests, follow these steps:


Clone down this repo and change into the newly created directory:

```
git clone https://github.com/Initiate-Colorado/initiate-co-backend.git

cd initiate-co-backend
```
Once inside the code base, in order to run tests, type the following command in the terminal:

```
npm install
npm run setup
npm test
```

If you would like to view the application "communicate" with our Python API and retrieve the scraped data, run:

```
npm run db:scrape
```

Sample of response:

```
ballotData [
  {
    ballotNumber: '76',
    ballotTitle: 'Citizenship Qualification of Electors* '
  },
  { ballotNumber: '107', ballotTitle: 'Restoration of Gray Wolves* ' },
  {
    ballotNumber: '120',
    ballotTitle: 'Prohibition on Late-Term Abortions* '
  },
  {
    ballotNumber: '257',
    ballotTitle: 'Local Voter Approval of Gaming Limits in Black Hawk, Central City, and Cripple Creek* '
  },
  {
    ballotNumber: '283',
    ballotTitle: 'Paid Family and Medical Leave Insurance Program* '
  },
  {
    ballotNumber: '295',
    ballotTitle: 'Voter Approval Requirement for Creation of Certain Fee-Based Enterprises* '
  },
  {
    ballotNumber: '306',
    ballotTitle: 'State Income Tax Rate Reduction* '
  },

```


## In action!

Signing up as a new user:

![login](https://user-images.githubusercontent.com/57731927/93401380-4b68aa00-f83f-11ea-876c-f2707f12abcd.gif)

Initial steps of filing an initiative:

![steps](https://user-images.githubusercontent.com/57731927/93401754-2de81000-f840-11ea-8052-7c79a33d87be.gif)

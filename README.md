# HabitHero™
*Unleash Your Inner Champion, One Habit at a Time*

<img src="assets/coverimage.png">

<hr>

### Technologies

Frontend 🎨

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Apollo-GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql)

Backend 📊

![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)
![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)

<hr>

### Getting Started

Terminal 1

```
cd server
node src/index.js
```

Terminal 2

```
cd frontend
npm run dev
```

<hr>

### TO BE ADDED

- [ ] A short explanation of what you built
- [ ] How to test/demo/run (if applicable)
- [ ] Any feedback/notes (i.e. if something was hard, easy, confusing, frustrating, etc)
- [ ] Anything else you'd lke us to know about your submission

<hr>

### Frontend Exercise

```
TIMEBOX:    2-3 hours max. We mean it!
LANGUAGES:  Javascript/Typescript
FRAMEWORKS: React and any libraries you want
TESTS:      nice to have, but not mandatory
DOCS:       nice to have, but not mandatory
```

Implement the following design in the Figma file using [React](https://reactjs.org/) consuming the API. Feel free to implement using any techniques you feel are appropriate.

- [Design File](https://www.figma.com/file/wuTVYU1iqFg8Mjkgr170jz/Takehome?node-id=0%3A1)

- [Prototype](https://www.figma.com/proto/wuTVYU1iqFg8Mjkgr170jz/Takehome?page-id=0%3A1&node-id=1%3A1192&viewport=241%2C48%2C0.55&scaling=min-zoom&starting-point-node-id=1%3A1192)

<hr>

### Backend Exercise

```
TIMEBOX:    2-4 hours max. We mean it! Set at timer and hard-stop at 4 hours ⏱
LANGUAGES:  Typescript
FRAMEWORKS: Express, Apollo, NodeJS, etc
TESTS:      nice to have, but not mandatory
DOCS:       nice to have, but not mandatory
```

Create a public GraphQL API using [Apollo Server](https://www.apollographql.com/docs/apollo-server/) and [Prisma](https://www.prisma.io/).

In the backend folder you will find a NodeJS project preconfigured with database models using [Prisma](https://www.prisma.io/) as an ORM.

`./backend/db/prisma/schema.prisma`

The database models consist of a:

- [Player] A record for a user that has signed up
- [Action] A type of "action" a player can perform
- [Reward] A reward granted to user for performing specific actions
- [ActionRequirement] The action(s) required for a reward to be granted
- [PlayerAction] A record of actions the player has performed
- [PlayerReward] A record of rewards the player has been granted

Run the seed file to populate the database.

`npm run prisma:seed`

#### The task:

- Create a `Mutation` for signing up a `Player` by `email`.
- Create a `Query` for returning the fields required by the application for `Player` by `email`.
- The player should return an additional `score` field which is the cumulative score of their rewards

What a user signs up the following should happen:

- A `Player` is created
- Record a `PlayerAction` that the player has performed the `PLAYER_SIGNUP` action
- Determine if the `Player` can be granted any rewards based on the action and create a `PlayerReward` record

<hr>

<img src="assets/footer.png">

<hr>

Source Inc 🚀 Lucie Chevreuil 👩‍💻 Tuesday, October 1st 🎃

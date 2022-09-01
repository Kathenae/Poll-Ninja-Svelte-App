# Poll Ninja Svelt App

This is a simple poll app built using svelte following the tutorial by The Net Ninja on [Youtube](https://www.youtube.com/watch?v=zojEMeQGGHs&list=PL4cUxeGkcC9hlbrVO_2QFVqVPhlZmz7tO)

## Installation
 Simply pull the app and run `npm install` to install all packages and then `npm run dev` to start
the development server

## Project Structure
 The main app components are located under the `src/componenets` folder, and other ui components are under the `src/shared` folder. The stores folder contains all of the data stores the app uses, currently we only have one store, the `PollStore` which stores the list of polls create so far

## Component Tree
- App
  - Header
  - Tabs
  = PollList
    = PollDetail
  - PollForm
  - Footer
  = Button
  = Card

# Special Thanks
 Specials thanks go to [The Net Ninja](https://www.youtube.com/c/TheNetNinja) for making the [Tutorial Series](https://www.youtube.com/watch?v=zojEMeQGGHs&list=PL4cUxeGkcC9hlbrVO_2QFVqVPhlZmz7tO) on youtube that helped to create this app!
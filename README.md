# Poll Ninja Svelt App

This is a simple poll app built using svelte following the tutorial by The Net Ninja on [Youtube](https://www.youtube.com/watch?v=zojEMeQGGHs&list=PL4cUxeGkcC9hlbrVO_2QFVqVPhlZmz7tO)

## Running
 Simply clone the project running `git clone https://github.com/Kathenae/Poll-Ninja-Svelte-App.git` and run `npm install` to install all packages and then `npm run dev` to start the development server.

## Project Structure
 The main app components are located under the `src/components` folder, and other ui components are under the `src/shared` folder. The `src/stores` folder is where we keep all of the stores the app uses, currently we only have one store, the `PollStore` which is a writable store containing a list of polls, this store is no longer being used though. We are now using Firebase Firestore to save and load polls without using svelts store features, we will implement a writable store for that soon aswell (When i figure out how to do that 😅).

## Component Tree
- App
  - Header
  - Tabs
  - PollList
    - PollDetail
  - PollForm
  - Footer
  - Button
  - Card

## Firestore
  I've taken some time to integrate the app with Firebases firestore database, on the `Firebase.js`, here i've created the app using my project's configuration and exported the db connection 
 

# Special Thanks
 Specials thanks go to [The Net Ninja](https://www.youtube.com/c/TheNetNinja) for making the [Tutorial Series](https://www.youtube.com/watch?v=zojEMeQGGHs&list=PL4cUxeGkcC9hlbrVO_2QFVqVPhlZmz7tO) on youtube that helped to create this app!
# Movie App

A movie-based application that consumes the [OMDb API](https://www.omdbapi.com/).

> Preview link: https://hakudevtw.github.io/test-inbound-platform/

## Requirements

- Set up a React project using **Vite** with **TypeScript**.
- Use **Ant Design** for UI components.
- Fetch data from the OMDb API using **fetch API**.
- Manage favorite movies using **Zustand** for global state and **localStorage**.
- Display a list of movies on the **homepage**.
- Add a **favorite icon** using `react-icons` (toggle save/remove).
- Create a **movie detail page** at `/movies/:movieId`.
- Implement **search by title** with debounce.
- Ensure **responsiveness** across devices.

## Bonus

- Clean and reusable **component structure**.
- Show **loading indicators** when fetching.
- Follow **best practices** (error handling, stale time, caching).
- Properly handle OMDb "not found" and "incorrect IMDb ID" errors.

## Notes

- Used Tanstack Router and Tanstack Query for routing and data fetching.
- Trim search title before sending request in order to get correct results.
- Favorite page for quick access to favorite movies.
- Show README file in /readme route.

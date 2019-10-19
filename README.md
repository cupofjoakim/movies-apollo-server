# Movies-apollo

The scope if this project is simply to fetch data from omdbapi nad relay them using graphql and apollo-server to a dedicated frontend.

## Developing

To trigger nodemon to watch for changes, simply run `yarn start`. The server will restart every time you save a file, so development becomes kinda smooth.

## Running the production build

Run `yarn build` followed by `yarn serve`. This lets you run the service without nodemon looking for file changes, saving a bit of memory.
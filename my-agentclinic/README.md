# AgentClinic

## Input from stakeholders

- Mary in engineering wants a reliable site with a popular stack based on TypeScript, giving agents and staff a dashboard for easy access.
- Susan in product has a set of features about agents and their ailments, therapies, and booking appointments.
- Steve in marketing wants an attractive site that works well with a modern browser.

## Running the app

Requires Node.js 18 or newer.

```sh
npm install          # install dependencies
npm run dev          # start with live reload at http://localhost:3000
npm run build        # compile TypeScript to dist/
npm start            # run the compiled server
npm test             # run the Vitest suite once
npm run test:watch   # re-run tests on change
npm run typecheck    # type-check the tests
```

Set `PORT` to use a different port, for example `PORT=4000 npm start`.

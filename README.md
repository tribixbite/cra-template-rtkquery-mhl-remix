# CRA RTK Query Template

## React App Implementing RTK Query + MHL Template

This opinionated [Create React App](https://github.com/facebook/create-react-app) (CRA) includes these Must-Have Libraries (MHL):

- React v17.0.2
- Type Checker - TypeScript ^4.2.3
- Preprocessors - Sass/SCSS
- State management - Redux Toolkit - RTK Query
- CSS Framework - Material-UI
- CSS-in-JS Modules — Styled Components
- Router - React Router
- Unit Testing - Jest & Enzyme + Sinon
- E2E Testing - Jest & Puppeteer
- Folder structure
- Generate templates
- Format & Lint - ESLint & Prettier
- Useful utilities - Moment, Classnames, Serve, react-snap, React-Helmet, Analyzer Bundle, react-uuid.

As well as custom Templates, format, and ESLint configurations.
The original Create React App README is available [here](./README_CRA.md).

The newer, recommended [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) is implemented and supercedes (see "[TIP](https://redux-toolkit.js.org/api/createAsyncThunk)") the traditional createSlice and createAsyncThunk APIs to make development faster, more concise, and simpler.

The foundation starting code is modeled after [redux-toolkit's official authentication example](https://github.com/reduxjs/redux-toolkit/tree/master/examples/query/react/advanced/src), you can view it in codesandbox [here](https://codesandbox.io/s/kgur4).

The foundation folder structure is modeled using [redux-toolkit's official folder structure documentation](https://redux.js.org/style-guide/style-guide#structure-files-as-feature-folders-with-single-file-logic), which recommends a "feature folder" approach (all files for a feature in the same folder). Within a given feature folder, the Redux logic for that feature should be written as a single "slice" file.

Redux-toolkit developers opted for chakra-ui over material-ui, but they both can be used. See [here](https://chakra-ui.com/docs/comparison) for how they differ.

## Requirements
* RTK-Query [recommends](https://redux-toolkit.js.org/rtk-query/usage-with-typescript) typescript 4.1+
* Install the official react + redux chrome (or firefox) extensions.
* Install the [advanced redux devtools extension](https://github.com/zalmoxisus/redux-devtools-extension#installation) as explained [in the official documentation](https://redux.js.org/style-guide/style-guide#use-the-redux-devtools-extension-for-debugging)
## Sources/Documentation/Reference/Guides
* [4 min overview](https://dev.to/jack/organizing-your-react-app-into-modules-d6n)
* [5 min overview](https://blog.logrocket.com/rtk-query-future-data-fetching-caching-redux/)
* [20 min RTK Query deep dive - Auth app](https://www.toptal.com/react/redux-toolkit-and-rtk-query)
* [repo](https://github.com/gdagundaridze/rtk-query-toptal-example)
* [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)
* [Official style guide](https://redux.js.org/style-guide/style-guide)

## To-Dos:
* Setup [error handling](https://www.reactiflux.com/learning/)
* Add a global reset state action & 401 handling[see 'configuration'](https://www.toptal.com/react/redux-toolkit-and-rtk-query)
* GraphQL [code generation](https://redux-toolkit.js.org/rtk-query/usage/code-generation)
* Jest [setup](https://medium.com/@matthew.holman/testing-url-hash-query-with-jest-8165f26ab94e)
* [Inject endpoints](https://redux-toolkit.js.org/rtk-query/usage/code-splitting)
## Usage

```bash
yarn start
```

This runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Additional Run Scripts

Inside the project directory run:

- `yarn test` - launches the test runner in the interactive watch mode.
- `yarn build` - builds the app for production to the `build` folder.
- `yarn build:serve` - run a local static build using the production build using serve library. Install `yarn install -g serve`.
- `yarn build:profile` - profiling production build.
- `yarn eject` - exposes content of `react-script` package
- `yarn lint` - lints project files according to Airbnb — as part of their style guide 👍 — it provides an ESLint configuration that anyone can use and it is the standard.
- `yarn fix` - fix lints issues according to style guide set.
- `yarn format` - will format your code prettier using opinionated settings inside `.prettierrc` file.
- `yarn isready` - will check if the code is ready for showtime (production), run lint, format and build.
- `yarn test:e2e` - run e2e integration testing with the help of Jest & Puppeteer.
- `yarn test:e2e-watch` - same as test:e2e just with a watcher.
- `yarn test:e2e-alone` - stand-alone e2e integration testing NodeJS script for testing using Puppeteer.
- `yarn test:debug` - debug your jest tests using the debugger statement, more info [here](https://medium.com/react-courses/six-best-debugging-options-to-crush-your-reacts-bugs-like-a-champion-70b11b6a1a2d).
- `yarn coverage` - this test is to create a coverage report at needs extra setting in order to work as expected.
- `analyze` - source-map-explorer to Analyzer Bundle.
- `analyzer` - uses cra-bundle-analyzer to Analyzer Bundle.

CRA template only support `scripts` and `dependencies` inside the generated `package.json`. No `devDependencies` is possible currently.

## Docker

Docker hub: [https://hub.docker.com/repository/docker/elieladelrom/cra-template-must-have-libraries](https://hub.docker.com/repository/docker/elieladelrom/cra-template-must-have-libraries)

Check project running: <http://localhost:8080/>

````
docker run -p 8080:80 elieladelrom/cra-template-must-have-libraries
````

## Need bootstrap?

If you need bootstrap. Just add;

```
yarn add bootstrap
```

Uncomment import in index.tsx;

```
import 'bootstrap/dist/css/bootstrap.css';
```

More here: <https://create-react-app.dev/docs/adding-bootstrap>

## **Removed:** Router

Router via React Router v5.2.0 and is set on 'AppRouter.tsx' and included in 'index.tsx', read [here](https://medium.com/react-courses/how-to-integrate-routing-in-typescript-project-with-react-router-v5-2-0-a6b0ab160a1b).

The code is set for [Recoil](https://medium.com/react-courses/integrate-recoil-with-typescript-to-share-your-state-across-react-components-8cf1a3910fae) or [Redux Toolkit](https://medium.com/react-courses/instant-learn-react-redux-toolkit-with-a-simple-minimalistic-example-3c63c296ed65) you pick.

## **TODO:** Unit Testing

Unit Testing is supported with [Enzyme](https://airbnb.io/enzyme/) that works with [Jest](https://github.com/facebook/jest).  Additionally, [Sinon](https://github.com/sinonjs/sinon) - a standalone test spies, stubs and mocks that works with Enzyme & Jest.  

Jest and Sinon serve the same purpose. So why add Sinon?
The answer is that there are times that you may find one framework more natural and easier to work for the specific test you need than the other so it wouldn’t hurt to have both.

You can compare the list of APIs on Jest (<https://jestjs.io/docs/en/api>) and Sinon (<https://sinonjs.org/releases/v9.2.0/>)

The 'src/setupTests.ts' file is already configured to work with enzyme using the enzyme react adapter.

For snapshot -- update 'package.json';

```
// package.json
  "jest": {
    "snapshotSerializers": ["enzyme-to-json/serializer"]
  }
```

Note: remember to update / delete 'src/App.test.tsx' in case you update 'App.tsx'

For instance to check if a component you added
include in App.tsx;

```
import { shallow } from "enzyme";
import Calculator from "./common/genericComponents/SomeComponent/SomeComponent";

test('should render SomeComponent', () => {
  const wrapper = shallow(<App />);
  const calculator = wrapper.find(SomeComponent);
  expect(calculator.exists()).toBe(true);
})
```

You can read more about unit testing: [hello-jest-enzyme-ts](https://medium.com/react-courses/unit-testing-react-typescript-app-with-jest-jest-dom-enzyme-11f52487aa18)

To run the tests:

`$ yarn test`

## Coverage

To set coverage we can use Jest. Jest allow us to create reports in different format and set where we want to collect these reports from (or not collect them from), as well as ensure the coverageThreshold. Take a look at my 'package.json' settings;

To get testing coverage report, you need to include the following settings in your 'package.json' file;

```
// package.json
"jest": {
  "coverageReporters": [
    "json",
    "text",
    "html",
    "lcov"
  ],
  "collectCoverageFrom": [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*/*.d.ts",
    "!src/**/*/Loadable.{js,jsx,ts,tsx}",
    "!src/**/*/types.ts",
    "!src/**/store.ts",
    "!src/index.tsx",
    "!src/serviceWorker.ts",
    "!<rootDir>/node_modules/",
    "!**/templates/**",
    "!**/template/**"
  ],
  "coverageThreshold": {
    "global": {
      "branches": 50,
      "functions": 50,
      "lines": 50,
      "statements": 50
    }
  }
```

In this example, I am enforcing 50% 'coverageThreshold', when I set these it can ensure that I am testing in within my threshold or get an error. That can come handy, because we can set these setting to ensure that every single function, statement, lines and branches get at least 50% or even set it to 100% test coverage.

## **TODO:** E2E Testing

E2E testing provided by Jest & Puppeteer.  Check the E2E folder for stand-alone and testing app.test.tsx component.  You can read more about it [here](https://medium.com/react-courses/deliver-quality-software-reduce-qa-load-integrate-end-to-end-e2e-testing-on-cra-react-a20486a39ac2?sk=c9610ea9812363b262f141f1c30ae445).

To run the E2E stand-alone and Jest & Puppeteer tests run;

`$ yarn test:e2e`

And;

`$ yarn test:e2e-alone`

## Eslint configurations

Lint set according to Airbnb style guide — as part of their style guide. Feel free to tweak `.eslintrc`.

## Format configurations

[Prettier](https://prettier.io/) is set using my opinionated settings, feel free to [tweak prettier rules](https://prettier.io/docs/en/configuration.html) inside config file `.prettierrc` to match your code style.

## Configure Components Templates

[generate-react-cli](https://github.com/arminbro/generate-react-cli) helps speed up productivity in React projects, feel free to tweak rules inside the config file `generate-react-cli.json` to match your needs.

## Debugging and Profiling

There are many options to debug such as using this run script and placing `debugger` statements
```$ yarn test:debug```. Read how on how to debug the App in [this article](https://medium.com/react-courses/six-best-debugging-options-to-crush-your-reacts-bugs-like-a-champion-70b11b6a1a2d).

For Profiling you can use methods such as Chrome DevTools or the `<Profile>` Component. Here is an example;

````
// src/AppRouter.tsx

import { Profiler } from 'react'

const AppRouter: FunctionComponent = () => {
  return (
    <Profiler onRender={(id, phase, actualTime, baseTime, startTime, commitTime) => {
      console.log(`${id}'s ${phase} phase:`);
      console.log(`Actual time: ${actualTime}`);
      console.log(`Base time: ${baseTime}`);
      console.log(`Start time: ${startTime}`);
      console.log(`Commit time: ${commitTime}`);
    }}>
    <Router>
      <RecoilRoot>
        <Suspense fallback={<span>Loading...</span>}>
          <Switch>
            <Route exact path="/" component={App} />
          </Switch>
        </Suspense>
      </RecoilRoot>
    </Router>
    </Profiler>
  )
}
````

Read more about profiling options [here](https://medium.com/react-courses/4-ways-to-profile-your-react-app-75b740e39ab2?sk=9e73055e0f3d99caddb0f4f229f4b160).

## Optimizing

- Prerender - almost static pages using `react-snap`. See comments in: `src/index.tsx`;
- Precache - src/index.tsx > `serviceWorker.register()`
- Analyzer Bundle - `yarn add -D cra-bundle-analyzer` -> Create the report: `npx cra-bundle-analyzer`

Read more about optimizing in [this article](https://medium.com/react-courses/optimize-react-app-best-optimzing-techniques-i-wish-i-knew-before-i-wrote-my-first-line-of-code-2b4651f45a48).

## Analyzing the Bundle Size

‘bundle-analyzer’ (<https://github.com/svengau/cra-bundle-analyzer>), is the preferred bundle analyzer, it's more colorful and includes all the bundles in one page instead of calling them one by one with source-map-explorer.

Install (yarn add --dev cra-bundle-analyzer) & you use the run script:

````
yarn analyzer
````

Other option is to use source-map-explorer (yarn add  --dev source-map-explorer);

````
yarn analyze
````

## Cost

Including MHL for this project comes with a cost of 33 kb out of the gate.

React v17 costs are a split between React library itself parsed cost 129.17KB that is broken down to parsed 8.67kb (or 2.4 gzipped) and the React DOM parsed 120.5kb (or 38kb gzipped).

## Further reading
* [React Overview](https://www.notion.so/buccaneer/For-Will-ee11a49140d7408eb899b29e7ebf3511)
* [Structure](https://blog.bitsrc.io/structuring-a-react-project-a-definitive-guide-ac9a754df5eb)
* [Functional Programming 101](https://www.notion.so/buccaneer/Functional-Programming-101-73902a0a4167494dba19f05a7e8cf516)
* [React Concepts](https://www.freecodecamp.org/news/these-are-the-concepts-you-should-know-in-react-js-after-you-learn-the-basics-ee1d2f4b8030/)
* [Reactiflux](https://www.reactiflux.com/learning/)
* [RTK Query Advanced Patterns](https://redux.js.org/tutorials/essentials/part-8-rtk-query-advanced)
## Future Upgrades & Potentially Useful Tools
* Replace generate-react-cli with [plopjs](https://github.com/plopjs/plop)
* [onsen.io](https://onsen.io/v2/api/react/Page.html)
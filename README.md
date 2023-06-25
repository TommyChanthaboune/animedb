## Getting Started

* Node Version: 18.16.1 LTS
* NPM Version: 9.5.1

#### Install dependencies
```
$ npm i
```

#### Run development environment
```
$ npm run dev
```
Frontend runs on localhost:3000
Backend runs on localhost:3001


## Notes

### Vite + SWC instead of CRA

I will be using Vite + SWC for tooling and compilation instead of CRA. CRA is obsolete and slow whereas Vite and SWC are more performant in comparison. 

### TurboRepo
I wanted to demonstrate frontend infrastructure by implementing the frontend and mock api as two seperate packages in a monorepo using Turborepo. This was valuable experience working with a frontend repo at scale in my past experience. I also wanted to do more on the backend such as store the data in a sqlite db and use prisma for an ORM. The data was generated using ChatGPT.

**Data and CRUD actions are performed in memory**

### CSS Modules + PureCSS
To keep things simple, lean, and to demonstrate some basic CSS - I decided to use CSS modules along with PureCSS for forms and buttons. The demonstration app should be fully responsive.

### Testing with Vitest + RTL
I used Vitest because it doesn't take a whole lot of configuration to get started and it has feature parity and the same API as jest.


#### Folder Structure
```
├── apps/
│ ├── api/ 
│ ├── mediaApp/ (Where you should start)
│ │ ├── src/
│ │ │ ├── components/
│ │ │ ├── context/
│ │ │ ├── services/
│ │ │ ├── stores/
├── packages/
│ ├──eslint-config-custom/
│ ├──eslint-config-custom-server/
│ ├──tsconfig/

```

### TODOs
- [x] List all media content 
- [x] Add new media content
- [x] Edit Existing media content
- [x] Delete media content
- [x] Filter media content by Type
- [x] Routing
- [x] Responsive Design
- [x] Basic Design
- [x] Unit Tests
#### Components to be implemented
  - [x] MediaList
  - [x] MediaForm
  - [x] MediaItem
  - [x] FilterBar

#### Requirements
- [x] Use React w/ Typescript for Component Development
- [x] Apply OOP Principles to media content model
- [x] Use MobX for state management
- [x] Use RxJS to handle async operations, (API Calls)
- [x] Clean, maintainable, and well maintable code
#### Extra
- [x] Configure TurboRepo
- [x] Configure Vite + SWC
- [ ] sqlite db
- [ ] CRUD w/ prisma
- [ ] Cypress E2E tests
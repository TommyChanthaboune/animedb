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
I wanted to demonstrate frontend infrastructure by implementing the frontend and mock api as two seperate packages in a monorepo using Turborepo. This was valuable experience working with a frontend repo at scale in my past experience.

#### Folder Structure
```
├── apps/
│ ├── api/ 
│ ├── mediaApp/
│ │ ├── src/
│ │ │ ├── components/
│ │ │ ├── context/
│ │ │ ├── services/
│ │ │ ├── stores/
├── packages/
│ ├──eslint-config-custom/
│ ├──eslint-config-custom-server/
│ ├──jest-presets/
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
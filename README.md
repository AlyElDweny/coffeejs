# A structured rest api app in express using typescript, typeorm (based on repository pattern).

- module.api.ts : a controller layer to handle how to access this module.
- module.service.ts : a logic layer to write our business logic.
- module.repository.ts : a db logic layer to hanle all queries logic written against our data source.
- module.entity.ts: a class that gather a relation intrinsic to the business.
- Dtos: interfaces used only to transfer data from one process or context to another.

Prerequisites:

- get Docker installed.
- get nodejs > 16v installed.

Steps to run this project:

1. Run `docker-compose up -d`
2. Run `npm i` command
3. Run `npm start` command

to access pgAdmin :- - visit http://localhost:5433 from your browser.

to test apis :- - if you are on vscode, download (REST Client) extention - go to ./restApisTests - click on `Send Request` on each Api.

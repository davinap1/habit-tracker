Application was designed using Electron and PostgreSQL. The application helps you add, track, and manage daily habits from a local desktop interface.

The dependencies necessary are: 
- Node.js & npm
- Electron
- PostgreSQL

To initialize the schema file:
psql -U your_user -d habittracker -f schema.sql

To start the app:
npm start 

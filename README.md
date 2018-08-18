# Instructions

*Important Info*

The built files are in `dist` directory.
Just open the `index.html` in the browser.


#### Build Instructions
The source files are in the `src` directory.

*Step 1*
```bash 
npm install
```
or 

```bash 
yarn
```

*Step 2*
```bash 
npm start
```
or 

```bash 
yarn start
```

***


#### Project Dynamic Data

The project is based on dynamic data which is kept in `src/mock-data/data.js`

mock-data in use currently:
```javascript
export default [
    {
        name: "Folder One",
        children: [{
            name: "Sub-Folder One",
            children: [{
                name: "List One",
                children: [],
                type: "file"
            }, {
                name: "List Two",
                children: [],
                type: "file"
            }, {
                name: "List Three",
                children: [],
                type: "file"
            }],
            type: "folder"
        }],
        type: "folder"
    },
    {
        name: "Folder Two",
        children: [{
            name: "Sample One",
            children: [],
            type: "private"
        }],
        type: "folder"
    },
    {
        name: "Folder Three",
        children: [{
            name: "File One",
            children: [],
            type: "file"
        }, {
            name: "File Three",
            children: [],
            type: "file"
        }],
        type: "folder"
    },
    {
        name: "Private Folder",
        children: [{
            name: "Confidential One",
            children: [],
            type: "file"
        }, {
            name: "FBI Report 🤓",
            children: [],
            type: "file"
        }],
        type: "private"
    }
]
```

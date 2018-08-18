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
];
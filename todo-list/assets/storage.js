
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction; 

window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

if (!window.indexedDB) {
    console.log("Your browser doesn't support a stable version of IndexedDB.");
}
const todos = [
    {
      title:"Title 1",
      desc:"Desc 1",
      active:true,
      dueDate: new Date(),
      curDate: new Date()
    },
    {
      title:"Title 2",
      desc:"Desc 2",
      active:true,
      dueDate: new Date(),
      curDate: new Date()
    },
    {
      title:"Title 3",
      desc:"Desc 3",
      active:true,
      dueDate: new Date(),
      curDate: new Date()
    }
  ];

var db;
const request = window.indexedDB.open("todoDB",1);

request.onupgradeneeded = e => {
    db = e.target.result;
    const objectStore = db.createObjectStore("todo_notes",{keyPath:"title"});
    objectStore.transaction.oncomplete = event => {
        var todoObjectStore = db.transaction("todo_notes", "readwrite").objectStore("todo_notes");
        todos.forEach(function(todo) {
          todoObjectStore.put(todo);
        });
      };
}
request.onsuccess = e => {
    db = e.target.result;
}
request.onerror = e => {
    alert("Error is called" + e.target.result);
}

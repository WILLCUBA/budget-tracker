let db;

const request = indexDB.open('budget', 1);

request.onupgradeneeded = function(e) {
    const db = e.target.result;
    db.createObjectStore('new_budget',{autoIncrement: true})
};

request.onsuccess = function(e) {
    db = e.target.result;

    if (navigator.onLine) {

    }
}

request.onerror = function(e) {
    console.log(e.target.errorCode);
}

function saveRecord(record) {
    const transaction = db.transaction(['new_budget'], 'readwrite');

    const budgetObjectStore = transaction.objectStore('new_budget');

    budgetObjectStore.add(record)
}
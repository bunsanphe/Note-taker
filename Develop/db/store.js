const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);


class Store {

    read() {
        return readFileAsync( path.join(__dirname, "../db/db.json"), "utf8");
    };

    getNotes() {
        
        return this.read().then( (data) => {
            return data ? JSON.parse(data) : [];
        })
            
    }

    addNotes() {
        this.getNotes().then( (data) => {

        })
    }

    saveNotes (notes) {
        return this.write( JSON.)
    }

    deleteNotes(noteId) {
        return this.getNotes().then( (notes) => {

            const newList = notes.filter( (note) => note.id !== noteId)

            this.saveNotes(newList);
        });
    }
}

module.exports = new Store;
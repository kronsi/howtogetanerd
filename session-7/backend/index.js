import express from 'express';
import mysql from "mysql";
import fs from "fs";
import moment from 'moment';

const config = require("config.json")("./bn-config.json");
const app = express();
const port = 3000;


const dbConnection = mysql.createPool({
    connectionLimit : config.mysql.connectionLimit,
    host            : config.mysql.host,
    user            : config.mysql.user,
    password        : config.mysql.password,
    database        : config.mysql.database
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})
//get books
app.get('/books', (req, res) => {    
    let query = "SELECT * FROM books";
    dbConnection.query(query, (error, results, fields) => { 
        if(error){
            res.json(error);
        }
        else {
            res.json(results);
        }
    });            
})
//get tours
app.get('/tours', (req, res) => {    
    const data = fs.readFileSync('./example_tour.csv', 'utf8');
    const lines = data.split("\n");
    let header = [];
    let tours = [];
    for(let i=0; i < lines.length; i++){
        if(i==0){//header
            header = lines[i].split(";");
            header.push("DateTime");
        }
        else {//body
            const rows = lines[i].split(";");
            let tour = {};
            for(let j=0; j < header.length; j++){
                
                switch( header[j] ){
                    case "DateTime":
                        tour[header[j]] = moment().format("YYYY-DD-MM") + " 12:00:00";
                    default:
                        if( rows[j] ){
                            tour[header[j]] = rows[j];
                        }
                        break;                    
                }
            }
            if( Object.keys(tour).length > 0 ){
                tours.push(tour);
            }
        }
    }
    
    res.json(tours);    
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
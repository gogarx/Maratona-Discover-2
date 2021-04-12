const Database = require('./config')

const initDB = {
    async init(){

const db = await Database();

await db.exec(`CREATE TABLE profile (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    name TEXT, 
    avatar TEXT, 
    monthly_buget INT, 
    day_per_week INT, 
    hour_per_day INT, 
    vacation_per_year INT, 
    value_hour INT
    )`);
await db.exec(`CREATE TABLE jobs (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    name TEXT, 
    daily_hours INT,
    total_hours INT,
    created_at DATETIME
    );`);
await db.run(`INSERT INTO profile (
    name, 
    avatar, 
    monthly_buget, 
    day_per_week, 
    hour_per_day, 
    vacation_per_year, 
    value_hour
    ) VALUES(
        "gogadfs",
        "https://github.com/gogarx.png",
        2999,
        5,
        5,
        4,
        75
    )
`);
await db.run(`INSERT INTO jobs (
    name, 
    daily_hours,
    total_hours,
    created_at
    ) VALUES (
        "Pizzaria Guloso",
        2,
        1,
        1617514376018
    );
`);
await db.run(`INSERT INTO jobs(
    name, 
    daily_hours,
    total_hours,
    created_at
    ) VALUES (
        "OneTwo Projects",
        2,
        10,
        1617514376018
    );
`);

await db.close();
 }
}
initDB.init();
import * as fs from 'fs'

fs.readFile('../', 'utf8', (err, data) => {
    if (err) console.log(err)
    console.log(data)
})
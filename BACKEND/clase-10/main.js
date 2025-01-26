console.log('hola a todos')

const filesystem = require('fs')

filesystem.writeFileSync('test.txt', 'hola mundo', {encoding: 'utf-8'})
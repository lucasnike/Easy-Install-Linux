const rfc = require('read-file-cache');

rfc('../rep.txt', (err, content) => {
    console.log(typeof content);
    const packages = content.split('\n')
    console.log(packages);
    console.log(packages.length);
})
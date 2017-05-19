import app = require('commander');

app.version('0.0.1')
    .arguments('<count>')
    .action(function(count) {
        console.log("%d items.", count);
    });

if (process.argv.length == 2) {
    process.argv.push("1");
}

app.parse(process.argv);

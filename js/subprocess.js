// Redirect console.log and console.error
let log = '[log]', err = '[err]';
let _log = console.log;
console.log = function () {
    let str = Array.from(arguments).join(' ');
    _log(str);
    process.send(log + str);
}
let _error = console.error;
console.error = function () {
    let str = Array.from(arguments).join(' ');
    _error(str);
    process.send(err + str);
}
const Promise = require('bluebird');
let api = require(process.cwd() + '/api');

process.on('message', (msg) => {
    let args = msg.args,
        cmd = () => Promise.resolve();
    switch (msg.command) {
        case 'dirextract':
            cmd = () => api.dirextract(args.src, args.outdir);
            break;
        case 'soundfix':
            cmd = () => api.soundfix(args.src, args.ulpath);
            break;
        case 'xcpextract':
            cmd = () => api.xcpextract(args.src, args.outdir, args.samplePath);
            break;
        case 'extract':
            cmd = () => api.extract(args.src, args.outdir);
            break;
        default:
            process.send('Unknown command');
            process.send(false);
            return ;
            break;
    }
    // Run cmd
    cmd().then(() => {
        process.send(log + 'Done!');
        process.send(true);
    });
});
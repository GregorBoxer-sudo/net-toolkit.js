const netJS = require('../index.js');

async function run() {
    console.log(await netJS.isLocalhost('192.168.178.67'));
}

run();
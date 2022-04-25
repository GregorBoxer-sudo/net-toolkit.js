const netJS = require('../index.js');

async function run() {
    console.log(await netJS.pingIp('192.168.178.1'));
}

run();
const netJS = require('../index');

async function main() {

    const ip = await netJS.getLocalIpv4();
    console.log(ip);
    console.log(await netJS.isLocalhost(ip));

}

main();
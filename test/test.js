import * as netJS from '../index.js'

async function run() {
    console.log(await netJS.getAllIpv4AddressesWithNetmask('192.168.178.1', '255.255.255.0'))
}

run();
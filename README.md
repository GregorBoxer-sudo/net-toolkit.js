# Net-Toolkit.js
Collection of Tools for Network interaction

## Quickstart
```javascript
// import NetworkToolkit
const netJS = require('net-toolkit.js');

// starting async function
async function start() {
    // loggin local ip
    console.log(await netJS.getLocalIpv4());

    // getting all devices connected to local network
    console.log(await netJS.getDevices());

    // getting all ips and belonging ports in local network in special range (0 to 100) with a timeout of 1000 ms
    console.log(await netJS.getOpenPortsOfLocalNetworkInRange(0, 100, 1000));
}

start();
```
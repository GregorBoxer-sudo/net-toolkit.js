/*----------------------------------*/
/* Copyright 2022 Gregor Katzschner */
/*----------------------------------*/

const os = require('os');
const https = require('https');
const net = require('net');
const dns = require('dns');
const ping = require('ping');
const WebSocket = require('ws');

/**
 * This function returns the local ipv4 address of the machine.
 * @returns The function returns the local ipv4 address of the machine.
 */
function getLocalIpv4() {
    return new Promise(function (resolve, reject) {
        const ifaces = os.networkInterfaces();
        let ipv4 = '';
        Object.keys(ifaces).forEach(function (ifname) {
            let alias = 0;
            ifaces[ifname].forEach(function (iface) {
                if (4 !== iface.family || iface.internal !== false) {
                    // skip over internal (i.e. unknown) and non-ipv4 addresses
                    return;
                } else if (alias >= 1) {
                    // this single interface has multiple ipv4 addresses
                    // console.log(ifname + ':' + alias, iface.address);
                    ipv4 = iface.address;
                } else {
                    // this interface has only one ipv4 adress
                    // console.log(ifname, iface.address);
                    ipv4 = iface.address;
                }
                ++alias;
            });
        });
        resolve(ipv4);
    });
}

/**
 * This function returns the ipv6 address of the local machine.
 * @returns The function returns the ipv6 address of the local machine.
 */
function getLocalIpv6() {
    return new Promise(function (resolve, reject) {
        const ifaces = os.networkInterfaces();
        let ipv6 = '';
        Object.keys(ifaces).forEach(function (ifname) {
            let alias = 0;
            ifaces[ifname].forEach(function (iface) {
                if (6 !== iface.family || iface.internal !== false) {
                    // skip over internal (i.e. unknown) and non-ipv6 addresses
                    return;
                } else if (alias >= 1) {
                    // this single interface has multiple ipv6 addresses
                    // console.log(ifname + ':' + alias, iface.address);
                    ipv6 = iface.address;
                } else {
                    // this interface has only one ipv6 adress
                    // console.log(ifname, iface.address);
                    ipv6 = iface.address;
                }
                ++alias;
            });
        });
        resolve(ipv6);
    });
}

/**
 * This function returns a promise that resolves to an array of ipv4 addresses of the local machine.
 * @returns The promise resolves to an array of ipv4 addresses of the local machine.
 */
function getLocalIpv4s() {
    return new Promise(function (resolve, reject) {
        const ifaces = os.networkInterfaces();
        let ipv4s = [];
        Object.keys(ifaces).forEach(function (ifname) {
            let alias = 0;
            ifaces[ifname].forEach(function (iface) {
                if (4 !== iface.family || iface.internal !== false) {
                    // skip over internal (i.e. unknown) and non-ipv4 addresses
                    return;
                } else if (alias >= 1) {
                    // this single interface has multiple ipv4 addresses
                    // console.log(ifname + ':' + alias, iface.address);
                    ipv4s.push(iface.address);
                } else {
                    // this interface has only one ipv4 adress
                    // console.log(ifname, iface.address);
                    ipv4s.push(iface.address);
                }
                ++alias;
            });
        });
        resolve(ipv4s);
    });
}

/**
 * This function returns a promise that resolves to an array of ipv6 addresses of the local machine.
 * @returns The promise resolves to an array of ipv6 addresses of the local machine.
 */
function getLocalIpv6s() {
    return new Promise(function (resolve, reject) {
        const ifaces = os.networkInterfaces();
        let ipv6s = [];
        Object.keys(ifaces).forEach(function (ifname) {
            let alias = 0;
            ifaces[ifname].forEach(function (iface) {
                if (6 !== iface.family || iface.internal !== false) {
                    // skip over internal (i.e. unknown) and non-ipv6 addresses
                    return;
                } else if (alias >= 1) {
                    // this single interface has multiple ipv6 addresses
                    // console.log(ifname + ':' + alias, iface.address);
                    ipv6s.push(iface.address);
                } else {
                    // this interface has only one ipv6 adress
                    // console.log(ifname, iface.address);
                    ipv6s.push(iface.address);
                }
                ++alias;
            });
        });
        resolve(ipv6s);
    });
}

/**
 * Get the local ipv4 and ipv6 addresses.
 * @returns A promise that resolves to an object with ipv4 and ipv6 keys.
 */
async function getLocalIpv4AndIpv6() {
    const ipv4 = await getLocalIpv4s();
    const ipv6 = await getLocalIpv6s();
    return new Promise(function (resolve, reject) {
        resolve({
            ipv4: ipv4,
            ipv6: ipv6,
        });
    });
}

/**
 * This function returns the external IPv4 address of the machine it is run on.
 * @returns The function returns the external IPv4 address of the machine it is run on.
 */
function getExternalIpv4() {
    return new Promise(function (resolve, reject) {
        const options = {
            host: 'api.ipify.org',
            port: 443,
            path: '/?format=json',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const req = https.request(options, function (res) {
            let data = '';
            res.on('data', function (chunk) {
                data += chunk;
            });
            res.on('end', function () {
                resolve(JSON.parse(data).ip);
            });
        });
        req.on('error', function (e) {
            reject(e);
        });
        req.end();
    });
}

/**
 * This function returns the external IPv6 address of the machine.
 * @returns The function returns the external IPv6 address of the machine.
 */
function getExternalIpv6() {
    return new Promise(function (resolve, reject) {
        const options = {
            host: 'api6.ipify.org',
            port: 443,
            path: '/?format=json',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const req = https.request(options, function (res) {
            let data = '';
            res.on('data', function (chunk) {
                data += chunk;
            });
            res.on('end', function () {
                resolve(JSON.parse(data).ip);
            });
        });
        req.on('error', function (e) {
            reject(e);
        });
        req.end();
    });
}

/**
 * This function returns a promise that resolves to true if the user is connected to the internet, otherwise it resolves to false.
 * @returns A promise that resolves to true if the user is connected to the internet, otherwise it resolves to false.
 */
function isConnected() {
    return new Promise(function (resolve, reject) {
        const options = {
            host: 'api.ipify.org',
            port: 443,
            path: '/',
            method: 'GET'
        };
        const req = https.request(options, function (res) {
            resolve(true);
        });
        req.on('error', function (e) {
            resolve(false);
        });
        req.end();
    });
}

/**
 * This function checks if a connection can be made to a given ip and port.
 * @param ip - the ip to connect to
 * @param port - the port to connect to
 * @param timeout - the timeout in milliseconds
 * @returns The function returns a promise that resolves to true if a connection can be made, otherwise it resolves to false.
 */
function checkConnection(ip, port, timeout) {
    return new Promise(function (resolve, reject) {
        const socket = new net.Socket();
        socket.setTimeout(timeout);
        socket.on('connect', () => {
            socket.end();
            resolve(true);
        });
        socket.on('timeout', () => {
            socket.end();
            resolve(false);
        });
        socket.on('error', (err) => {
            socket.end();
            resolve(false);
        });
        socket.connect(port, ip);
    });
}

/**
 * Given an ip and port, check if the ip is reachable via https.
 * @param ip - the ip to check
 * @param port - the port to check
 * @returns The function returns true or false depending on whether the ip is reachable via https.
 */
function checkHttp(ip, port) {
    return new Promise(function (resolve, reject) {
        const options = {
            host: ip,
            port: port,
            path: '/',
            method: 'GET'
        };
        const req = https.request(options, function (res) {
            resolve(true);
        });
        req.on('error', function (e) {
            resolve(false);
        });
        req.end();
    });
}

/**
 * Given an ip address and a port number, return true if the websocket is open, otherwise return false.
 * @param ip - the ip address of the websocket
 * @param port - the port number of the websocket
 * @returns The function returns true or false depending on whether the websocket is open.
 */
function checkWs(ip, port) {
    return new Promise(function (resolve, reject) {
        const ws = new WebSocket('ws://' + ip + ':' + port);
        ws.on('open', () => {
            ws.close();
            resolve(true);
        });
        ws.on('error', () => {
            ws.close();
            resolve(false);
        });
    });
}

/**
 * Given a hostname, return an array of IP addresses for that hostname.
 * @param hostname - the hostname to resolve
 * @returns The function returns an array of IP addresses for the hostname.
 */
function getIpArrayFromHostname(hostname) {
    return new Promise(function (resolve, reject) {
        const options = {
            all: true,
        };
        dns.lookup(hostname, options, (err, address, family) => {
            if (err) {
                reject(err);
            } else {
                resolve(address);
            }
        });
    });
}

/**
 * Given a hostname, return the IPv4 address of the host.
 * @param hostname - the hostname to resolve
 * @returns The function returns the IPv4 address of the host.
 */
function getIpv4FromHostname(hostname) {
    return new Promise(function (resolve, reject) {
        const options = {
            family: 4,
            hints: dns.ADDRCONFIG | dns.V4MAPPED,
        };

        dns.lookup(hostname, options, (err, address, family) => {
            if (err) {
                reject(err);
            } else {
                resolve(address);
            }
        });
    });
}

/**
 * Given a hostname, return the IPv6 address of the host.
 * @param hostname - the hostname to lookup
 * @returns The function returns the IPv6 address of the host.
 */
function getIpv6FromHostname(hostname) {
    return new Promise(function (resolve, reject) {
        const options = {
            family: 6,
            hints: dns.ADDRCONFIG | dns.V4MAPPED,
        };

        dns.lookup(hostname, options, (err, address, family) => {
            if (err) {
                reject(err);
            } else {
                resolve(address);
            }
        });
    });
}

/**
 * Given an IPv6 address, return the IPv4 address.
 * @param ipv6 - the IPv6 address
 * @returns The function returns the IPv4 address.
 */
function getIpv4FromIpv6(ipv6) {
    return new Promise(function (resolve, reject) {
        const options = {
            family: 4,
            hints: dns.ADDRCONFIG | dns.V4MAPPED,
        };

        dns.lookup(ipv6, options, (err, address, family) => {
            if (err) {
                reject(err);
            } else {
                resolve(address);
            }
        });
    });
}

/**
 * Given an IPv4 address, return the IPv6 address.
 * @param ipv4 - the IPv4 address
 * @returns The function returns the IPv6 address.
 */
function getIpv6FromIpv4(ipv4) {
    return new Promise(function (resolve, reject) {
        const options = {
            family: 6,
            hints: dns.ADDRCONFIG | dns.V4MAPPED,
        };

        dns.lookup(ipv4, options, (err, address, family) => {
            if (err) {
                reject(err);
            } else {
                resolve(address);
            }
        });
    });
}

/**
 * Given an IPv4 address, return the hostname of the machine that the address is associated with.
 * @param ipv4 - the IPv4 address to look up
 * @returns The function returns the hostname of the machine that the address is associated with.
 */
function getHostnameFromIpv4(ipv4) {
    return new Promise(function (resolve, reject) {
        const hostname = dns.reverse(ipv4, (err, hostnames) => {
            if (err) {
                reject(err);
            } else {
                resolve(hostnames[0]);
            }
        });
    });
}

/**
 * Given an IPv6 address, return the hostname of the machine that it belongs to.
 * @param ipv6 - the IPv6 address to get the hostname of
 * @returns The function returns the hostname of the machine that the IPv6 address belongs to.
 */
function getHostnameFromIpv6(ipv6) {
    return new Promise(function (resolve, reject) {
        const hostname = dns.reverse(ipv6, (err, hostnames) => {
            if (err) {
                reject(err);
            } else {
                resolve(hostnames[0]);
            }
        });
    });
}

/**
 * This function returns a promise that resolves to an array of mac addresses.
 * @returns The promise resolves to an array of mac addresses.
 */
function getMacAddresses() {
    return new Promise(function (resolve, reject) {
        const ifaces = os.networkInterfaces();
        const macAddresses = [];
        Object.keys(ifaces).forEach(function (ifname) {
            ifaces[ifname].forEach(function (iface) {
                if (4 !== iface.family || iface.internal !== false) {
                    // skip over internal (i.e. unknown) and non-ipv4 addresses
                    return;
                } else {
                    macAddresses.push(iface.mac);
                }
            });
        });
        resolve(macAddresses);
    });
}

/**
 * Given an IPv4 address, return an array of all valid IP addresses that can be derived from it.
 * @param ipv4 - the IPv4 address to derive from
 * @returns The function returns an array of all valid IP addresses that can be derived from the given IPv4 address.
 */
function getAllIpv4Addresses(ipv4) {
    return new Promise(function (resolve, reject) {
        let ipv4Addresses = [];
        let ipv4Array = ipv4.split('.');
        ipv4Array.pop();
        for (let i = 0; i < 255; i++) {
            const ip = ipv4Array[0] + '.' + ipv4Array[1] + '.' + ipv4Array[2] + '.' + i;
            ipv4Addresses.push(ip);
        }
        resolve(ipv4Addresses);
    });
}

/**
 * Given a timeout in milliseconds, return an array of all devices on the local network that are currently online.
 * @param timeout - the timeout in milliseconds
 * @returns The function returns an array of all devices on the local network that are currently online.
 */
function getDevices(timeout) {
    return new Promise(async function (resolve, reject) {
        const devices = [];
        const possibleAdresses = await getAllIpv4Addresses(await getLocalIpv4());
        await Promise.all(possibleAdresses.map(async function (address) {
            try {
                const result = await ping.promise.probe(address, {
                    timeout: timeout / 1000,
                });
                if (result.alive) {
                    devices.push(address);
                }
            } catch (err) {
                console.log(err);
            }
        }));
        resolve(devices);
    });
}

/**
 * This function returns a promise that resolves to an array of IP addresses.
 * @returns The promise resolves to an array of IP addresses.
 */
function getGateways() {
    return new Promise(function (resolve, reject) {
        const ifaces = os.networkInterfaces();
        const gateways = [];
        Object.keys(ifaces).forEach(function (ifname) {
            ifaces[ifname].forEach(function (iface) {
                if (4 !== iface.family || iface.internal !== false) {
                    // skip over internal (i.e. unknown) and non-ipv4 addresses
                    return;
                } else {
                    let gateway = iface.address.split('.')[0] + '.' + iface.address.split('.')[1] + '.' + iface.address.split('.')[2] + '.1';
                    gateways.push(gateway);
                }
            });
        });
        resolve(gateways);
    });
}

/**
 * This function returns a promise that resolves to an array of netmasks.
 * @returns The function returns a promise that resolves to an array of netmasks.
 */
function getNetmasks() {
    return new Promise(function (resolve, reject) {
        const ifaces = os.networkInterfaces();
        const netmasks = [];
        Object.keys(ifaces).forEach(function (ifname) {
            ifaces[ifname].forEach(function (iface) {
                if (4 !== iface.family || iface.internal !== false) {
                    // skip over internal (i.e. unknown) and non-ipv4 addresses
                    return;
                } else {
                    let netmask = iface.netmask;
                    netmasks.push(netmask);
                }
            });
        });
        resolve(netmasks);
    });
}

/**
 * Ping an IP address and return the result.
 * @param ip - the IP address to ping
 * @param timeout - the timeout in milliseconds
 * @returns The function returns a promise that resolves with the result of the ping.
 */
function pingIp(ip, timeout) {
    return new Promise(function (resolve, reject) {
        const result = ping.promise.probe(ip, {
            timeout: timeout / 1000,
        });
        resolve(result);
    });
}

/**
 * Given an ip address and a timeout, return true if the ip address responds to a ping request, otherwise return false.
 * @param ip - the ip address to ping
 * @param timeout - the timeout in milliseconds
 * @returns The function returns true or false depending on whether the ip address responds to a ping request.
 */
function checkPingIp(ip, timeout) {
    return new Promise(function (resolve, reject) {
        const result = ping.promise.probe(ip, {
            timeout: timeout / 1000,
        });
        resolve(result.alive);
    });
}

/**
 * Given an ip address, return true if the ip address is localhost, otherwise return false.
 * @param ip - the ip address to check
 * @returns The function returns true or false depending on whether the ip address is localhost.
 */
// todo fix documentation
async function isLocalhost(ip) {
    return ip === await getLocalIpv4() || ip === await getLocalIpv6() || ip === '127.0.0.1' || ip === '::1' || ip === 'localhost';
}

/**
 * Given a port number and a timeout, return an array of IP addresses that have a server running on the specified port.
 * @param port - the port number to search for
 * @param timeout - the timeout in milliseconds
 * @returns The function returns an array of IP addresses that have a server running on the specified port.
 */
function getLocalIpAddressesWithSpecifiedOpenPort(port, timeout) {
    return new Promise(async function (resolve, reject) {
        const devices = await getDevices();
        const openIpAddresses = [];
        await Promise.all(devices.map(async function (ip) {
            try {
                const result = await ping(ip);
                if (result.alive) {
                    const socket = new net.Socket();
                    socket.setTimeout(timeout);
                    socket.on('timeout', function () {
                        socket.destroy();
                    });
                    socket.on('error', function (err) {
                        if (err.code === 'ECONNREFUSED') {
                            // connection was refused
                            socket.destroy();
                        } else {
                            // some other error
                            socket.destroy();
                        }
                    });
                    socket.on('close', function () {
                        socket.destroy();
                    });
                    socket.connect(port, ip, function () {
                        openIpAddresses.push(ip);
                        socket.destroy();
                    });
                }
            } catch (err) {
                console.log(err);
            }
        }));
        resolve(openIpAddresses);
    });
}

/**
 * Given an IP address, a start port, an end port, and a timeout, return an array of open ports.
 * @param ip - the IP address to check
 * @param startPort - the first port to check
 * @param endPort - the last port to check
 * @param timeout - the timeout in milliseconds
 * @returns The function returns an array of open ports.
 */
function getOpenPortsOfIpInRange(ip, startPort, endPort, timeout) {
    return new Promise(async function (resolve, reject) {
        const openPorts = [];
        await Promise.all(Array.from(Array(endPort - startPort + 1).keys()).map(async function (port) {
            const portNumber = startPort + port;
            const result = await checkConnection(ip, portNumber, timeout);
            if (result) {
                openPorts.push(portNumber);
            }
        }));
        resolve(openPorts);
    });
}

/**
 * Given an IP address, return an array of all open ports on that IP address.
 * @param ip - the IP address to search
 * @param timeout - the timeout in milliseconds
 * @returns The function returns an array of all open ports on the IP address.
 */
async function getOpenPortsOfIp(ip, timeout) {
    return (await getOpenPortsOfIpInRange(ip, 0, 65535, timeout));
}

/**
 * Given a start port and an end port, return an array of objects containing the ip address and the open ports of the local network.
 * @param startPort - the first port to check
 * @param endPort - the last port to check
 * @param timeout - the timeout in milliseconds
 * @returns The function returns an array of objects containing the ip address and the open ports of the local network.
 */
async function getOpenPortsOnLocalNetworkInRange(startPort, endPort, timeout) {
    const devices = await getDevices();
    const openPorts = [];
    await Promise.all(devices.map(async function (ip) {
        const ports = await getOpenPortsOfIpInRange(ip, startPort, endPort, timeout);
        openPorts.push({
            ip: ip,
            ports: ports,
        });
    }));
    return openPorts;
}

/**
 * Given a timeout, return an array of objects containing the ip and open ports of all devices on the local network.
 * @param timeout - the timeout in milliseconds
 * @returns The function returns an array of objects containing the ip and open ports of all devices on the local network.
 */
async function getOpenPortsOnLocalNetwork(timeout) {
    const devices = await getDevices();
    const openPorts = [];
    await Promise.all(devices.map(async function (ip) {
        const ports = await getOpenPortsOfIp(ip, timeout);
        openPorts.push({
            ip: ip,
            ports: ports,
        });
    }));
    return openPorts;
}

/**
 * Returns an array of all cidr on the local network interfaces.
 * @returns The function returns an array of all cidr on the local network interfaces.
 */
async function getLocalNetworkCidr() {
    const devices = await getDevices();
    const localNetworkCidr = [];
    await Promise.all(devices.map(async function (ip) {
        const cidr = await getCidr(ip);
        localNetworkCidr.push(cidr);
    }));
    return localNetworkCidr;
}

module.exports = {
    checkConnection,
    getDevices,
    getLocalIpv4,
    getLocalIpv6,
    getLocalIpv4s,
    getLocalIpv6s,
    getLocalIpv4AndIpv6,
    pingIp,
    checkPingIp,
    isLocalhost,
    getLocalIpAddressesWithSpecifiedOpenPort,
    getOpenPortsOfIpInRange,
    getOpenPortsOfIp,
    getOpenPortsOnLocalNetworkInRange,
    getOpenPortsOnLocalNetwork,
    getExternalIpv4,
    getExternalIpv6,
    isConnected,
    checkHttp,
    checkWs,
    getAllIpv4Addresses,
    getIpv4FromIpv6,
    getIpv6FromIpv4,
    getNetmasks,
    getIpv4FromHostname,
    getIpv6FromHostname,
    getHostnameFromIpv4,
    getHostnameFromIpv6,
    getIpArrayFromHostname,
    getGateways,
    getMacAddresses,
    getLocalNetworkCidr
};
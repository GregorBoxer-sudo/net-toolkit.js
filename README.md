# Net-Toolkit.js

Collection of Tools for Network interaction

## Quickstart

```javascript
// import Net-Toolkit
const netJS = require('net-toolkit.js');

// starting async function
async function start () {

    // we want to get our local ipv4 address
    console.log( await netJS.getLocalIpv4() );

    // we want to check if it's the localhost
    console.log( await netJS.isLocalhost() );

    // we want to get all connected client in the local networks and their open ports (within a range of 0 to 100) with a timeout of a 1000 milliseconds
    console.log( await netJS.getOpenPortsOfLocalNetworkInRange( 0, 100, 1000) );
}

// let's start the function
start();
```

## Documentation

> <i>Please note, that the functions are asynchronous or return a promise</i> 
### getLocalIpv4

> With this function you can get the ipv4 address of the local machine
<br>
@returns local ipv4 address

```javascript
    const localIpv4 = await netJS.getLocalIpv4();
```

### getLocalIpv6

> With this function you can get the ipv6 address of the local machine
<br>
@returns local ipv6 address

```javascript
    const localIpv6 = await netJS.getLocalIpv6();
```

### getLocalIpv4s

> With this function you can get an array of ipv4 adresses of the local machine
<br>
@returns array of local ipv4 adresses

```javascript
    const localIpv4s = await netJS.getLocalIpv4s();
```

### getLocalIpv6s

> With this function you can get an array of ipv6 adresses of the local machine
<br>
@returns array of local ipv6 adresses

```javascript
    const localIpv6s = await netJS.getLocalIpv6s();
```

### getLocalIpv4AndIpv6

> With this function you can get an object containing the ipv4 and ipv6 addresses
<br>
@returns object containing ipv4 and ipv6 addresses

```javascript
    const adressObjects = await netJS.getLocalIpv4AndIpv6();
```

### getExternalIpv4

> With this funcion you can get the external ipv4 address of the local machine
<br>
@returns external ipv4

```javascript
    const externalIpv4 = await netJS.getExternalIpv4();
```

### getExternalIpv6

> With this funcion you can get the external ipv6 address of the local machine
<br>
@returns external ipv6

```javascript
    const externalIpv6 = await netJS.getExternalIpv6();
```

### isConnected

> With this function you can check if the local machine is connected to the internet
<br>
@returns true if the local machine is connected

```javascript
    const isConnected =  await netJS.isConnected();
```

### checkHttp

> With this function you can check if a special ipAdress is reachable with http on given port
<br>
@param ip adress to check
<br>
@param port to check
<br>
@returns true if the given ip adress and port are reachable with http

```javascript
    const httpCheck = await netJS.checkHttp(ip, port);
```

### checkWs

> With this function you can check if a special ipAdress is reachable with webSocket on given ports
<br>
@param ip adress to check
<br>
@param port to check
<br>
@returns true if the given ip adress and port are reachable with webSocket

```javascript
    const wsCheck = await netJS.checkWs(ip, port);
```

### getIpArrayFromHostname

> With this function you can get an array of Objects containing IP address and belonging family from a hostname by looking up on the dns
<br>
@param hostname
<br>
@returns an array of IP addresses

```javascript
    const ips = getIpArrayFromHostname(hostname);
    /*
        Out for 'google.com' as hostname
        { address: '142.250.185.78', family: 4 },
        { address: '2a00:1450:4001:80e::200e', family: 6 }
    */
```

### getIpv4FromHostname

> With this function you can get the Ipv4 adress from a hostname by looking up on the dns
<br>
@param hostnames
<br>
@returns ipv4 adress

```javascript
    const ip = getIpv4FromHostname(hostname);
```

### getIpv6FromHostname

> With this function you can get the Ipv6 address from a hostname by looking up on the dns
<br>
@param hostname
<br>
@returns ipv6 adress

```javascript
    const ip = getIpv4FromHostname(hostname);
```

### getIpv4FromIpv6

> With this function you can get the Ipv4 adress from an ipv6 adress by looking up in the dns
<br>
obviously it only works if an ipv4 is registered
<br>
@param ipv6
<br>
@returns ipv4

```javascript
    const ipv4 = await netJS.getIpv4FromIpv6(ipv6);
```

### getIpv6FromIpv4

> With this function you can get the Ipv6 adress from an ipv6 adress by looking up in the dns
<br>
obviously it only works if an ipv6 is registered
<br>
@param ipv6
@returns ipv4

```javascript
    const ipv6 = await netJS.getIpv6FromIpv4(ipv4);
```

### getHostnameFromIpv4

> With this function you can get the Ipv6 adress from an ipv4 adress by looking up in the dns
<br>
obviously it only works if an hostname is registered
<br>
@param ipv4
<br>
@returns hostname

```javascript
    const hostname = await netJS.getHostnameFromIpv4(ipv4);
```

### getHostnameFromIpv6

> With this function you can get the Ipv6 adress from an ipv6 adress by looking up in the dns
<br>
obviously it only works if an hostname is registered
<br>
@param ipv6
<br>
@returns hostname

```javascript
    const hostname = await netJS.getHostnameFromIpv6(ipv6);
```

### getMacAdresses

> With this function you can get an Array of Mac Adresses
<br>
@returns macAdress

```javascript
    const macAdresses = await netJS.getMacAdresses();
```

### getAllIpv4Adresses

> With this function you can get an Array of all possible Ipv4 Adresses
<br>
@param ipv4
<br>
@returns array of all possible Ipv4 Adresses in typical local network

```javascript
    const allIpv4Adresses = await netJS.getAllIpv4Adresses(ipv4);
```

### getDevices

> With this function you can get an Array of all devices connected to the local network
<br>
@param timeout in milliseconds
<br>
@returns array of devices connected to the local network

```javascript
    const devices = await netJS.getDevices();
```

### getGateways

> With this function you can get an array of all the gateways connected to the typical local network
<br>
@returns array of gateways connected to the typical local network

```javascript
    const gateways = await netJS.getGateways();
```

### getNetmasks

> With this function you can get an array of all the netmasks of the connected local networks
<br>
@returns array of all the netmasks of the connected local networks

```javascript
    const netmasks = await netJS.getNetmasks();
```

### pingIp

> With this function you can ping an ip adress
<br>
@param ip adress
<br>
@param timeout in milliseconds
<br>
@returns data result of ping

```javascript
    const ping = netJS.ping(ip, timeout)
```

### checkPingIp

> With this function you can check if an ip adress is reachable
<br>
@param ip adress
<br>
@param timeout in milliseconds
<br>
@returns true if the given ip adress is reachable

```javascript
    const ping = await netJS.checkPingIp(ip, timeout)
```

### isLocalhost

> With this function you can check if an ip adress is localhost
<br>
@param ip adress
<br>
@returns true if the given ip adress is localhost

```javascript
    const ping = await netJS.isLocalhost(ip)
```

### getLocalIpAdressesWithSpecifiedOpenPort

> With this function you can get an array of all local ip adresses with specified open port
<br>
@param port
<br>
@returns array of all local ip adresses with specified open port

```javascript
    const localIpAdressesWithSpecifiedOpenPort = await netJS.getLocalIpAdressesWithSpecifiedOpenPort(port)
```

### getOpenPortsOfIpInRange

> With this function you can get an array of all open ports of an ip adress in range
<br>
@param ip adress
<br>
@param startPort
<br>
@param endPort
<br>
@param timeout in milliseconds
<br>
@returns array of all open ports of an ip adress in range

```javascript
    const openPortsOfIpInRange = await netJS.getOpenPortsOfIpInRange(ip)
```

### getOpenPortsOfIp

> With this function you can get an array of all open ports of an ip adress
<br>
@param ip adress
<br>
@param timeout in milliseconds
<br>
@returns array of all open ports of an ip adress

```javascript
    const openPortsOfIp = await netJS.getOpenPortsOfIp(ip)
```

### getOpenPortsOfLocalNetworkInRange

> With this function you can get an array of all open ports of the local network in range and the belonging ip adresses
<br>
@param startPort
<br>
@param endPort
<br>
@param timeout in milliseconds
<br>
@returns array of all open ports of the local network in range

```javascript
    const openPortsOfLocalNetworkInRange = await netJS.getOpenPortsOfLocalNetworkInRange(startPort, endPort)
```

### getOpenPortsOfLocalNetwork

> With this function you can get an array of all open ports of the local network and the belonging ip adresses
<br>
@param timeout in milliseconds
<br>
@returns array of all open ports of the local network

```javascript
    const openPortsOfLocalNetwork = await netJS.getOpenPortsOfLocalNetwork()
```

### getLocalNetworkCidr

> With this function you can get all the local network cidr
<br>
@returns all local network cidr

```javascript
    const localNetworkCidr = await netJS.getLocalNetworkCidr()
```

---

## Future support
- typesript definitions
- import

## Changelog

### v1.1.2
- fixed documentation
- fixed isLocalhosts
- fixed import

### v1.1.1
- reverted to require
- added future list

### v1.1.0
- fixed documentation

### v1.0.9
- added v to changelog v1.0.7

### v1.0.8
- changed to module.exports

### v1.0.7
- Changed from require to import
- added Documentation for all functions
- added getting array of local ip Adresses (ipv4 and ipv6)
- added check if ping is possible
- fixed typo
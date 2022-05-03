declare module 'netJS';

/**
 * This function returns the local ipv4 address of the machine.
 * @returns The function returns the local ipv4 address of the machine.
 */
 declare function getLocalIpv4() : Promise<string>;

 /**
  * This function returns the ipv6 address of the local machine.
  * @returns The function returns the ipv6 address of the local machine.
  */
 declare function getLocalIpv6() : Promise<string>;
 
 /**
  * This function returns a promise that resolves to an array of ipv4 addresses of the local machine.
  * @returns The promise resolves to an array of ipv4 addresses of the local machine.
  */
 declare function getLocalIpv4s() : Promise<string[]>;
 
 /**
  * This function returns a promise that resolves to an array of ipv6 addresses of the local machine.
  * @returns The promise resolves to an array of ipv6 addresses of the local machine.
  */
 declare function getLocalIpv6s() : Promise<string[]>;
 
 /**
  * Get the local ipv4 and ipv6 addresses.
  * @returns A promise that resolves to an object with ipv4 and ipv6 keys.
  */
 declare function getLocalIpv4AndIpv6() : Promise<{ ipv4: string, ipv6: string }>;
 
 /**
  * This function returns the external IPv4 address of the machine it is run on.
  * @returns The function returns the external IPv4 address of the machine it is run on.
  */
 declare function getExternalIpv4() : Promise<string>;
 
 /**
  * This function returns the external IPv6 address of the machine.
  * @returns The function returns the external IPv6 address of the machine.
  */
 declare function getExternalIpv6() : Promise<string>;
 
 /**
  * This function returns a promise that resolves to true if the user is connected to the internet, otherwise it resolves to false.
  * @returns A promise that resolves to true if the user is connected to the internet, otherwise it resolves to false.
  */
 declare function isConnected() : Promise<boolean>;
 
 /**
  * This function checks if a connection can be made to a given ip and port.
  * @param ip - the ip to connect to
  * @param port - the port to connect to
  * @param timeout - the timeout in milliseconds
  * @returns The function returns a promise that resolves to true if a connection can be made, otherwise it resolves to false.
  */
 declare function checkConnection(ip: string, port: number, timeout?: number) : Promise<boolean>;
 
 /**
  * Given an ip and port, check if the ip is reachable via https.
  * @param ip - the ip to check
  * @param port - the port to check
  * @returns The function returns true or false depending on whether the ip is reachable via https.
  */
 declare function checkHttp(ip: string, port: number) : Promise<boolean>;
 
 /**
  * Given an ip address and a port number, return true if the websocket is open, otherwise return false.
  * @param ip - the ip address of the websocket
  * @param port - the port number of the websocket
  * @returns The function returns true or false depending on whether the websocket is open.
  */
 declare function checkWs(ip: string, port: number) : Promise<boolean>;
 
 /**
  * Given a hostname, return an array of IP addresses for that hostname.
  * @param hostname - the hostname to resolve
  * @returns The function returns an array of IP addresses for the hostname.
  */
 declare function getIpArrayFromHostname(hostname: string) : Promise<string[]>;
 
 /**
  * Given a hostname, return the IPv4 address of the host.
  * @param hostname - the hostname to resolve
  * @returns The function returns the IPv4 address of the host.
  */
 declare function getIpv4FromHostname(hostname: string) : Promise<string>;
 
 /**
  * Given a hostname, return the IPv6 address of the host.
  * @param hostname - the hostname to lookup
  * @returns The function returns the IPv6 address of the host.
  */
 declare function getIpv6FromHostname(hostname: string) : Promise<string>;
 
 /**
  * Given an IPv6 address, return the IPv4 address.
  * @param ipv6 - the IPv6 address
  * @returns The function returns the IPv4 address.
  */
 declare function getIpv4FromIpv6(ipv6: string) : Promise<string>;
 
 /**
  * Given an IPv4 address, return the IPv6 address.
  * @param ipv4 - the IPv4 address
  * @returns The function returns the IPv6 address.
  */
 declare function getIpv6FromIpv4(ipv4: string) : Promise<string>;
 
 /**
  * Given an IPv4 address, return the hostname of the machine that the address is associated with.
  * @param ipv4 - the IPv4 address to look up
  * @returns The function returns the hostname of the machine that the address is associated with.
  */
 declare function getHostnameFromIpv4(ipv4: string) : Promise<string>;
 
 /**
  * Given an IPv6 address, return the hostname of the machine that it belongs to.
  * @param ipv6 - the IPv6 address to get the hostname of
  * @returns The function returns the hostname of the machine that the IPv6 address belongs to.
  */
 declare function getHostnameFromIpv6(ipv6: string) : Promise<string>;
 
 /**
  * This function returns a promise that resolves to an array of mac addresses.
  * @returns The promise resolves to an array of mac addresses.
  */
 declare function getMacAddresses() : Promise<string[]>;
 
 /**
  * Given an IPv4 address, return an array of all valid IP addresses that can be derived from it.
  * @param ipv4 - the IPv4 address to derive from
  * @returns The function returns an array of all valid IP addresses that can be derived from the given IPv4 address.
  */
 declare function getAllIpv4Addresses(ipv4: string) : Promise<string[]>;
 
 /**
  * Given a timeout in milliseconds, return an array of all devices on the local network that are currently online.
  * @param timeout - the timeout in milliseconds
  * @returns The function returns an array of all devices on the local network that are currently online.
  */
 declare function getDevices(timeout?: number) : Promise<string[]>;
 
 /**
  * This function returns a promise that resolves to an array of IP addresses.
  * @returns The promise resolves to an array of IP addresses.
  */
 declare function getGateways() : Promise<string[]>;
 
 /**
  * This function returns a promise that resolves to an array of netmasks.
  * @returns The function returns a promise that resolves to an array of netmasks.
  */
 declare function getNetmasks() : Promise<string[]>;
 
 /**
  * Ping an IP address and return the result.
  * @param ip - the IP address to ping
  * @param timeout - the timeout in milliseconds
  * @returns The function returns a promise that resolves with the result of the ping.
  */
 declare function pingIp(ip: string, timeout?: number) : Promise<string>;
 
 /**
  * Given an ip address and a timeout, return true if the ip address responds to a ping request, otherwise return false.
  * @param ip - the ip address to ping
  * @param timeout - the timeout in milliseconds
  * @returns The function returns true or false depending on whether the ip address responds to a ping request.
  */
 declare function checkPingIp(ip: string, timeout?: number) : Promise<boolean>;
 
 /**
  * Given an ip address, return true if the ip address is localhost, otherwise return false.
  * @param ip - the ip address to check
  * @returns The function returns true or false depending on whether the ip address is localhost.
  */
 declare function isLocalhost(ip: string) : Promise<boolean>;
 
 /**
  * Given a port number and a timeout, return an array of IP addresses that have a server running on the specified port.
  * @param port - the port number to search for
  * @param timeout - the timeout in milliseconds
  * @returns The function returns an array of IP addresses that have a server running on the specified port.
  */
 declare function getLocalIpAddressesWithSpecifiedOpenPort(port: number, timeout?: number) : Promise<string[]>;
 
 /**
  * Given an IP address, a start port, an end port, and a timeout, return an array of open ports.
  * @param ip - the IP address to check
  * @param startPort - the first port to check
  * @param endPort - the last port to check
  * @param timeout - the timeout in milliseconds
  * @returns The function returns an array of open ports.
  */
 declare function getOpenPortsOfIpInRange(ip: string, startPort: number, endPort: number, timeout?: number) : Promise<number[]>;
 
 /**
  * Given an IP address, return an array of all open ports on that IP address.
  * @param ip - the IP address to search
  * @param timeout - the timeout in milliseconds
  * @returns The function returns an array of all open ports on the IP address.
  */
 declare function getOpenPortsOfIp(ip: string, timeout?: number) : Promise<number[]>;
 
 /**
  * Given a start port and an end port, return an array of objects containing the ip address and the open ports of the local network.
  * @param startPort - the first port to check
  * @param endPort - the last port to check
  * @param timeout - the timeout in milliseconds
  * @returns The function returns an array of objects containing the ip address and the open ports of the local network.
  */
 declare function getOpenPortsOfLocalNetworkInRange(startPort: number, endPort: number, timeout?: number) : Promise<{ip: string, ports: number[]}[]>;
 
 /**
  * Given a timeout, return an array of objects containing the ip and open ports of all devices on the local network.
  * @param timeout - the timeout in milliseconds
  * @returns The function returns an array of objects containing the ip and open ports of all devices on the local network.
  */
 declare function getOpenPortsOfLocalNetwork(timeout?: number) : Promise<{ip: string, ports: number[]}[]>;
 
 /**
  * Returns an array of all cidr on the local network interfaces.
  * @returns The function returns an array of all cidr on the local network interfaces.
  */
 declare function getLocalNetworkCidr() : Promise<string[]>;
 
 export {
    getLocalIpv4,
    getLocalIpv6,
    getLocalIpv4s,
    getLocalIpv6s,
    getLocalIpv4AndIpv6,
    getExternalIpv4,
    getExternalIpv6,
    isConnected,
    checkConnection,
    checkHttp,
    checkWs,
    getIpArrayFromHostname,
    getIpv4FromHostname,
    getIpv6FromHostname,
    getIpv4FromIpv6,
    getIpv6FromIpv4,
    getHostnameFromIpv4,
    getHostnameFromIpv6,
    getMacAddresses,
    getAllIpv4Addresses,
    getDevices,
    getGateways,
    getNetmasks,
    pingIp,
    checkPingIp,
    isLocalhost,
    getLocalIpAddressesWithSpecifiedOpenPort,
    getOpenPortsOfIpInRange,
    getOpenPortsOfIp,
    getOpenPortsOfLocalNetworkInRange,
    getOpenPortsOfLocalNetwork,
    getLocalNetworkCidr
 }
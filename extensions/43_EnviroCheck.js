// Get ALL possible information from system and browser( geolocation and IP included )
// Olexandr_43
// Wi-Fi
// 09/22/2024

(function (Scratch) {
    'use strict';

    if (!Scratch.extensions.unsandboxed) {
        throw new Error('EnviroCheck must run unsandboxed');
    }

    class EnviroCheck {
        getInfo() {
            return {
                id: 'EnviroCheck',
                color1: "#6876a1", 
                color2: "#808080", 
                color3: "#0d47a1",
                blocks: [
                    { opcode: 'getOS', blockType: Scratch.BlockType.REPORTER, text: 'Operating system' },

                    { opcode: 'getCurrentTime', blockType: Scratch.BlockType.REPORTER, text: 'Current time' },

                    { opcode: 'getCurrentDate', blockType: Scratch.BlockType.REPORTER, text: 'Current date' },

                    { opcode: 'getCPUModel', blockType: Scratch.BlockType.REPORTER, text: 'Number of CPU cores' },

                    { opcode: 'getTotalRAM', blockType: Scratch.BlockType.REPORTER, text: 'Total RAM (GB)' },

                    { opcode: 'getFreeRAM', blockType: Scratch.BlockType.REPORTER, text: 'Free RAM (GB)' },

                    { opcode: 'getWiFiStatus', blockType: Scratch.BlockType.BOOLEAN, text: 'WiFi connected?' },

                    { opcode: 'getBatteryLevel', blockType: Scratch.BlockType.REPORTER, text: 'Battery level (%)' },

                    { opcode: 'getScreenResolution', blockType: Scratch.BlockType.REPORTER, text: 'Screen resolution' },

                    { opcode: 'getMonitorCount', blockType: Scratch.BlockType.REPORTER, text: 'Number of monitors' },

                    { opcode: 'getUptime', blockType: Scratch.BlockType.REPORTER, text: 'Uptime' },

                    { opcode: 'getGeoLocation', blockType: Scratch.BlockType.REPORTER, text: 'Geolocation' },

                    { opcode: 'getIPAddress', blockType: Scratch.BlockType.REPORTER, text: 'IP address' },

                    { opcode: 'getNetworkType', blockType: Scratch.BlockType.REPORTER, text: 'Network type' },

                    { opcode: 'getNetworkSpeed', blockType: Scratch.BlockType.REPORTER, text: 'Network speed' },

                    { opcode: 'getUserAgent', blockType: Scratch.BlockType.REPORTER, text: 'User agent' },

                    { opcode: 'getBrowserLanguage', blockType: Scratch.BlockType.REPORTER, text: 'Browser language' },

                    { opcode: 'isTouchScreen', blockType: Scratch.BlockType.BOOLEAN, text: 'Touchscreen available?' },

                    { opcode: 'getWindowSize', blockType: Scratch.BlockType.REPORTER, text: 'Window size' },

                    { opcode: 'getHistoryLength', blockType: Scratch.BlockType.REPORTER, text: 'History length' },

                    { opcode: 'cookiesEnabled', blockType: Scratch.BlockType.BOOLEAN, text: 'Cookies enabled?' },

                    { opcode: 'getDoNotTrack', blockType: Scratch.BlockType.BOOLEAN, text: 'Do Not Track enabled?' }
                ]
            };
        }

        getOS() {
            return navigator.platform;
        }

        getCurrentTime() {
            return new Date().toLocaleTimeString();
        }

        getCurrentDate() {
            return new Date().toLocaleDateString();
        }

        getCPUModel() {
            return navigator.hardwareConcurrency ? `${navigator.hardwareConcurrency} cores` : 'Unknown';
        }

        getTotalRAM() {
            return navigator.deviceMemory ? `${navigator.deviceMemory} GB` : 'RAM info unavailable';
        }

        getFreeRAM() {
            if (performance && performance.memory) {
                const freeMemoryGB = performance.memory.jsHeapSizeLimit / (1024 * 1024 * 1024);
                return `${freeMemoryGB.toFixed(2)} GB`;
            } else {
                return 'Free RAM info unavailable';
            }
        }

        getWiFiStatus() {
            return navigator.connection ? navigator.connection.type === 'wifi' : false;
        }

        async getBatteryLevel() {
            if (navigator.getBattery) {
                const battery = await navigator.getBattery();
                return `${(battery.level * 100).toFixed(0)}%`;
            } else {
                return 'Battery info unavailable';
            }
        }

        getScreenResolution() {
            return `${window.screen.width} x ${window.screen.height}`;
        }

        getMonitorCount() {
            return window.screen.length || 1;
        }

        getUptime() {
            const uptimeInMinutes = (performance.now() / 60000).toFixed(2);
            const hours = Math.floor(uptimeInMinutes / 60);
            const minutes = Math.floor(uptimeInMinutes % 60);
            return hours ? `${hours}:${minutes.toString().padStart(2, '0')}` : `${minutes} minutes`;
        }

        getGeoLocation() {
            return new Promise((resolve, reject) => {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        (position) => resolve(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`),
                        () => reject('Unable to retrieve location')
                    );
                } else {
                    reject('Geolocation is not supported');
                }
            });
        }

        async getIPAddress() {
            try {
                const response = await fetch('https://api.ipify.org?format=json');
                const data = await response.json();
                return `${data.ip}`;
            } catch {
                return 'Unable to retrieve IP address';
            }
        }

        getNetworkType() {
            return navigator.connection ? `Network type: ${navigator.connection.effectiveType}` : 'Network type unavailable';
        }

        getNetworkSpeed() {
            return navigator.connection ? `Downlink: ${navigator.connection.downlink} Mbps, RTT: ${navigator.connection.rtt} ms` : 'Network speed info unavailable';
        }

        getUserAgent() {
            return `User Agent: ${navigator.userAgent}`;
        }

        getBrowserLanguage() {
            return `${navigator.language}`;
        }

        isTouchScreen() {
            return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        }

        getWindowSize() {
            return `Width: ${window.innerWidth}, Height: ${window.innerHeight}`;
        }

        getHistoryLength() {
            return `${window.history.length}`;
        }

        cookiesEnabled() {
            return navigator.cookieEnabled;
        }

        getDoNotTrack() {
            return navigator.doNotTrack === '1';
        }
    }

    Scratch.extensions.register(new EnviroCheck());
})(Scratch);

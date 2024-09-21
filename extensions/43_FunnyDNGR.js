// Bored? This is your cure! Play with some fun, goofy and DaNgErOuS blocks {EPILEPSY WARNING}
// Olexandr_43
// Wi-Fi
// 09/21/2024

((Scratch) => {
    'use strict';
    if (!Scratch.extensions.unsandboxed) throw new Error("FUN must run unsandboxed!");
    let frameCount = 0;
    let lastTime = performance.now();
    let fps = 0;
    let isMirrored = false;

    setInterval(() => {
        const currentTime = performance.now();
        fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        lastTime = currentTime;
        frameCount = 0;
    }, 1000);
    class FunExtensions {
        getInfo() {
            return {
                id: 'funextensions',
                color1: "#e60073",
                color2: "#ff0066",
                color3: "#b30059",
                name: 'Fun Extensions: Chaos Edition',
                blocks: [
                    {
                        opcode: 'showFPS',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'cuRREnt FPS',
                        arguments: {}
                    },
                    {
                        opcode: 'getElementCount',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'ElEmEnts on page',
                        arguments: {}
                    },
                    {
                        opcode: 'reloadPage',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'rEloaD page'
                    },
                    {
                        opcode: 'replaceText',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'RepLAcE ALL text with [TEXT] (or delete if empty)',
                        arguments: {
                            TEXT: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'New text'
                            }
                        }
                    },
                    {
                        opcode: 'removeRandomElement',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'rEmovE random element from page'
                    },
                    "---",
                    {
                        opcode: 'createConfetti',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'create COnFeTTI with [TYPE]',
                        arguments: {
                            TYPE: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'confettiMenu',
                                defaultValue: 'disappearance'
                            }
                        }
                    },
                    {
                        opcode: 'applyCrazyStyle',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'apPly CRAZY style to all text'
                    },
                    {
                        opcode: 'applySuperCrazyStyle',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'apPly SUPeR-CRAZY style to all text'
                    },
                    {
                        opcode: 'applyCrazyStyleAll',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'apPly CRAZY style to everything'
                    },
                    {
                        opcode: 'shakeScreen',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'SHAKE screen with intensity [INTENSITY]',
                        arguments: {
                            INTENSITY: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 10
                            }
                        }
                    },
                    {
                        opcode: 'randomBackground',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'RaNDoM background color every [SECONDS] seconds',
                        arguments: {
                            SECONDS: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 2
                            }
                        }
                    },
                    {
                        opcode: 'nightmareCursor',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'NiGhTMarE cursor'
                    },
                    {
                        opcode: 'gravityChaos',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'GRaViTY CHaoS on all elements'
                    },
                    {
                        opcode: 'applyShaderOrCustom',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Apply SHaDEr: [preset] blur [blur] contrast [contrast] hue [hueRotate]',
                        arguments: {
                            preset: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'coolTone',
                                menu: 'presetMenu'
                            },
                            blur: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0.5
                            },
                            contrast: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 150
                            },
                            hueRotate: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 180
                            }
                        }
                    },
                    "---",
                    {
                        opcode: 'alertMessage',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'ALERT message [MESSAGE]',
                        arguments: {
                            MESSAGE: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'Touch + grass = YOU'
                            }
                        }
                    },
                    {
                        opcode: 'playFartSound',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'FART sound'
                    },
                    {
                        opcode: 'toggleMirrorEffect',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'MIRROR effect'
                    },
                    {
                        opcode: 'hideAllImages',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Hide ALL IMAGES'
                    },
                    {
                        opcode: 'discoMode',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'DIScO-modE'
                    },
                    {
                        opcode: 'randomAlert',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'ANNOYANCe'
                    },
                    {
                        opcode: 'zoomInAndOut',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'ZooooM In and Out'
                    },
                    {
                        opcode: 'randomBounce',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'HOp-FroG'
                    },
                    {
                        opcode: 'showRandomYouTubeVideo',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'rANDoM YOUTUBE vidEO'
                    },
                    {
                        opcode: 'matrixCode',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'mAtRIx CODE'
                    }
                ],
                menus: {
                    confettiMenu: {
                        acceptReporters: false,
                        items: [
                            { text: 'With DISaPPEaRANCE', value: 'disappearance' },
                            { text: 'No DisappeaRanCE', value: 'no_disappearance' },
                            { text: 'SNOW', value: 'snow' }
                        ]
                    },
                    "presetMenu": [
                        { text: "STRong BLUR", value: "strongBlur" },
                        { text: "HIgh ConTRast", value: "highContrast" },
                        { text: "WArm tONe", value: "warmTone" },
                        { text: "COOL toNe", value: "coolTone" },
                        { text: "MOSAIc", value: "mosaic" },
                        { text: "TWIrL", value: "twirl" },
                        { text: "SEPIa", value: "sepia" },
                        { text: "INVERT", value: "invert" },
                        { text: "BLaCK and White", value: "grayscale" },
                        { text: "BRIGHTNESS", value: "brightness" },
                        { text: "CUStoM", value: "custom" },
                        { text: "CLear Shaders", value: "clear" }
                    ]
                }
            }
        }


        showFPS() {
            frameCount++;
            return fps;
        }

        getElementCount() {
            return document.getElementsByTagName('*').length;
        }

        replaceText(args) {
            this.applyToAllText((element) => {
                if (args.TEXT.trim() === '') {
                    element.textContent = '';
                } else {
                    element.textContent = args.TEXT;
                }
            });
        }

        removeRandomElement() {
            const elements = document.body.getElementsByTagName('*');
            if (elements.length > 0) {
                const randomIndex = Math.floor(Math.random() * elements.length);
                const element = elements[randomIndex];
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
            }
        }

        createConfetti(args) {
            const confettiTypes = {
                'disappearance': this.createConfettiWithDisappearance.bind(this),
                'no_disappearance': this.createConfettiWithoutDisappearance.bind(this),
                'snow': this.createSnow.bind(this)
            };

            if (confettiTypes[args.TYPE]) {
                confettiTypes[args.TYPE]();
            }
        }

        createElement(options) {
            let element = document.createElement('div');
            Object.assign(element.style, options);
            document.body.appendChild(element);
            return element;
        }

        createConfettiWithDisappearance() {
            for (let i = 0; i < 100; i++) {
                let confetti = this.createElement({
                    position: 'fixed',
                    width: '10px',
                    height: '10px',
                    backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    opacity: Math.random(),
                    transition: 'transform 2s ease-out, opacity 2s ease-out',
                    transform: `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`
                });
                setTimeout(() => confetti.remove(), 2000);
            }
        }

        createConfettiWithoutDisappearance() {
            for (let i = 0; i < 100; i++) {
                this.createElement({
                    position: 'fixed',
                    width: '10px',
                    height: '10px',
                    backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    opacity: Math.random()
                });
            }
        }

        createSnow() {
            for (let i = 0; i < 67; i++) {
                let snowflake = document.createElement('div');
                snowflake.style.position = 'fixed';
                snowflake.style.width = '10px';
                snowflake.style.height = '10px';
                snowflake.style.backgroundColor = 'white';
                snowflake.style.borderRadius = '50%';
                snowflake.style.opacity = Math.random().toString();
                snowflake.style.pointerEvents = 'none';
                snowflake.style.zIndex = '9999';
                snowflake.style.top = `${Math.random() * -100}px`;
                snowflake.style.left = `${Math.random() * 100}vw`;
                document.body.appendChild(snowflake);

                let velocityY = Math.random() * 2 + 1;
                let velocityX = Math.random() * 1 - 0.5;

                let maxHeight = window.innerHeight;

                function fall() {
                    let currentY = snowflake.offsetTop;
                    let currentX = snowflake.offsetLeft;

                    snowflake.style.top = (currentY + velocityY) + 'px';
                    snowflake.style.left = (currentX + velocityX) + 'px';

                    velocityX += (Math.random() - 0.5) * 0.1;

                    if (currentY >= maxHeight) {
                        snowflake.remove();
                    } else {
                        requestAnimationFrame(fall);
                    }
                }
                requestAnimationFrame(fall);

                setTimeout(() => snowflake.remove(), 25000);
            }
        }

        alertMessage(args) {
            alert(args.MESSAGE);
        }

        applyCrazyStyle() {
            this.applyToAllText((element) => {
                element.style.fontSize = `${Math.random() * 50}px`;
                element.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
                element.style.transform = `rotate(${Math.random() * 360}deg)`;
            });
        }

        applySuperCrazyStyle() {
            this.applyToAllText((element) => {
                element.style.fontSize = `${Math.random() * 100 + 20}px`;
                element.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
                element.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 80%)`;
                element.style.transform = `rotate(${Math.random() * 720 - 360}deg) scale(${Math.random() * 2 + 0.5})`;
            });
        }

        shakeScreen(args) {
            const intensity = args.INTENSITY || 10;
            const duration = 1000;
            let start = null;

            const shake = (timestamp) => {
                if (!start) start = timestamp;
                const elapsed = timestamp - start;
                if (elapsed < duration) {
                    const x = Math.random() * intensity - intensity / 2;
                    const y = Math.random() * intensity - intensity / 2;
                    document.body.style.transform = `translate(${x}px, ${y}px)`;
                    requestAnimationFrame(shake);
                } else {
                    document.body.style.transform = '';
                }
            };
            requestAnimationFrame(shake);
        }

        randomBackground(args) {
            const seconds = args.SECONDS || 2;
            setInterval(() => {
                document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            }, seconds * 1000);
        }

        nightmareCursor() {
            document.body.style.cursor = 'none';
            const cursorTrail = [];
            const createCursorElement = () => {
                let trailPart = document.createElement('div');
                Object.assign(trailPart.style, {
                    position: 'fixed',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
                    pointerEvents: 'none',
                    zIndex: '10000'
                });
                document.body.appendChild(trailPart);
                cursorTrail.push(trailPart);
                if (cursorTrail.length > 15) {
                    cursorTrail.shift().remove();
                }
            };

            document.addEventListener('mousemove', (e) => {
                createCursorElement();
                cursorTrail.forEach((trailPart, index) => {
                    setTimeout(() => {
                        trailPart.style.left = `${e.pageX + index * 5}px`;
                        trailPart.style.top = `${e.pageY + index * 5}px`;
                    }, index * 20);
                });
            });
        }

        gravityChaos() {
            this.applyToAllElements((element) => {
                Object.assign(element.style, {
                    position: 'fixed',
                    top: `${element.offsetTop}px`,
                    left: `${element.offsetLeft}px`,
                    transition: 'transform 8s',
                    transform: `translateY(100vh)`
                });
            });
        }

        applyToAllText(callback) {
            const elements = document.body.getElementsByTagName('*');
            for (let element of elements) {
                if (element.children.length === 0 && element.textContent.trim() !== '') {
                    callback(element);
                }
            }
        }

        applyToAllElements(callback) {
            const elements = document.body.getElementsByTagName('*');
            for (let element of elements) {
                callback(element);
            }
        }

        applyCrazyStyleAll() {
            const elements = document.body.getElementsByTagName('*');
            for (let i = 0; i < elements.length; i++) {
                let element = elements[i];
                element.style.fontSize = Math.random() * 50 + 'px';
                element.style.color = 'hsl(' + Math.random() * 360 + ', 100%, 50%)';
                element.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
            }
        }

        reloadPage() {
            location.reload();
        }

        randomBounce() {
            const elements = document.body.getElementsByTagName('*');

            const randomElement = elements[Math.floor(Math.random() * elements.length)];

            randomElement.style.position = 'fixed';
            randomElement.style.left = Math.random() * (window.innerWidth - randomElement.offsetWidth) + 'px';
            randomElement.style.top = '0px';
            randomElement.style.transition = 'transform 0.05s ease-out';

            let velocityY = 0;
            let velocityX = Math.random() * 100 - 5;
            const gravity = 0.98;
            const bounceFactor = 0.7;
            const friction = 0.99;

            let maxHeight = window.innerHeight - randomElement.offsetHeight;
            let maxWidth = window.innerWidth - randomElement.offsetWidth;

            function move() {
                let currentY = randomElement.offsetTop;
                let currentX = randomElement.offsetLeft;

                velocityY += gravity;
                randomElement.style.top = (currentY + velocityY) + 'px';

                if (currentY + velocityY >= maxHeight) {
                    randomElement.style.top = maxHeight + 'px';
                    velocityY *= -bounceFactor;
                }

                randomElement.style.left = (currentX + velocityX) + 'px';

                if (currentX + velocityX <= 0 || currentX + velocityX >= maxWidth) {
                    velocityX *= -1;
                }

                velocityX *= friction;

                if (Math.abs(velocityY) < 1 && currentY >= maxHeight && Math.abs(velocityX) < 0.1) {
                    velocityX = 0;
                    velocityY = 0;
                    return;
                }

                requestAnimationFrame(move);
            }

            move();
        }

        randomAlert() {
            const messages = ['Break time!', 'Are you still here?', 'Surprise!', 'Go touch some grass!', 'Dont forget to breathe!', 'Why did you do that?', 'Well, that was unexpected!', 'Oops, did you mean to do that?', 'Need a nap?', 'Plot twist!', 'I see what you did there!'];
            setInterval(() => {
                const randomMessage = messages[Math.floor(Math.random() * messages.length)];
                alert(randomMessage);
            }, 60000);
        }

        discoMode() {
            let beamCount = Math.floor(Math.random() * (25 - 10 + 1)) + 10;
            let colors = [
                '#ff00ff',
                '#00ff00',
                '#00ffff',
                '#ffdf00',
                '#ff007f',
                '#8000ff',
                '#ffffff',
                '#0000ff',
                '#ff0000',
                '#00ff7f',
                '#ff1493'
            ];

            setInterval(() => {
                document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
                this.applyToAllText((element) => {
                    element.style.animation = 'pulseText 2s infinite, changeTextColor 3s infinite';
                    element.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.8)';
                });
            }, 500);

            const textStyles = document.createElement('style');
            textStyles.textContent = `
    @keyframes pulseText {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2);
        }
    }
    @keyframes changeTextColor {
        0% { color: #ff0000; }   /* Красный */
        16% { color: #ff7f00; }  /* Оранжевый */
        33% { color: #ffff00; }  /* Желтый */
        50% { color: #00ff00; }  /* Зеленый */
        66% { color: #00ffff; }  /* Голубой */
        83% { color: #0000ff; }  /* Синий */
        100% { color: #8b00ff; } /* Фиолетовый */
    }
`;
            document.head.appendChild(textStyles);

            const discoBall = document.createElement('div');
            discoBall.id = 'disco-ball';
            document.body.appendChild(discoBall);

            const style = document.createElement('style');
            let styles = `
                #disco-ball {
                    position: fixed;
                    top: 50px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 135px;
                    height: 135px;
                    background: radial-gradient(circle, #e0e0ff, #b3b3ff, #a0a0ff);
                    border-radius: 50%;
                    box-shadow: 0 0 20px rgba(255, 255, 255, 0.9), 0 0 40px rgba(173, 216, 230, 0.8);
                    z-index: 9999;
                    animation: spin 5s linear infinite;
                }
                @keyframes spin {
                    0% { transform: translateX(-50%) rotate(0deg); }
                    100% { transform: translateX(-50%) rotate(360deg); }
                }
                .ray {
                    position: fixed;
                    top: 100px; /* Позиция рядом с диско-шаром */
                    left: calc(50% - 3px); /* Центрируем лучи относительно диско-шара */
                    width: 9px; /* Ширина лучей */
                    height: 120vh; /* Лучи покрывают весь экран по высоте */
                    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.8), transparent);
                    transform-origin: top center;
                    z-index: 9998;
                    animation: rotate-ray linear infinite, change-color linear infinite;
                }
            `;

            for (let i = 1; i <= beamCount; i++) {
                const rotationDuration = (4 + Math.random() * 6).toFixed(2);
                const colorDuration = (3 + Math.random() * 5).toFixed(2);
                const angle = (i * 360) / beamCount;

                styles += `
                    #ray-${i} {
                        transform: rotate(${angle}deg);
                        animation: rotate-ray ${rotationDuration}s linear infinite, change-color ${colorDuration}s linear infinite;
                    }
                `;
            }

            styles += `
                @keyframes rotate-ray {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                @keyframes change-color {
                    0% { background: linear-gradient(to bottom, ${colors[0]}, transparent); }
                    25% { background: linear-gradient(to bottom, ${colors[1]}, transparent); }
                    50% { background: linear-gradient(to bottom, ${colors[2]}, transparent); }
                    75% { background: linear-gradient(to bottom, ${colors[3]}, transparent); }
                    100% { background: linear-gradient(to bottom, ${colors[4]}, transparent); }
                }
            `;

            style.textContent = styles;
            document.head.appendChild(style);

            for (let i = 1; i <= beamCount; i++) {
                const ray = document.createElement('div');
                ray.classList.add('ray');
                ray.id = `ray-${i}`;
                document.body.appendChild(ray);
            }
        }

        hideAllImages() {
            const images = document.querySelectorAll('img');
            images.forEach(img => img.style.display = 'none');
        }

        toggleMirrorEffect() {
            if (isMirrored) {
                document.body.style.transform = '';
            } else {
                document.body.style.transform = 'scaleX(-1)';
            }
            isMirrored = !isMirrored;
        }

        playFartSound() {
            const audio = new Audio('https://www.myinstants.com/media/sounds/fart.mp3');
            audio.play();
        }

        matrixCode() {
            const matrixContainer = document.createElement('div');
            matrixContainer.style.position = 'fixed';
            matrixContainer.style.top = '0';
            matrixContainer.style.left = '0';
            matrixContainer.style.width = '100%';
            matrixContainer.style.height = '100%';
            matrixContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
            matrixContainer.style.zIndex = '9999';
            matrixContainer.style.overflow = 'hidden';
            matrixContainer.style.pointerEvents = 'none';

            document.body.appendChild(matrixContainer);

            const matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            const columnWidth = 20;
            const columnCount = Math.floor(window.innerWidth / columnWidth);
            const columns = Array(columnCount).fill(0);

            function animateMatrix() {
                matrixContainer.innerHTML = '';

                columns.forEach((y, index) => {

                    const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
                    const x = index * columnWidth;

                    const charElement = document.createElement('div');
                    charElement.textContent = char;
                    charElement.style.position = 'absolute';
                    charElement.style.left = `${x}px`;
                    charElement.style.top = `${y}px`;
                    charElement.style.color = 'lime';
                    charElement.style.fontSize = '18px';
                    charElement.style.fontFamily = 'monospace';
                    charElement.style.whiteSpace = 'nowrap';
                    matrixContainer.appendChild(charElement);

                    columns[index] = y > window.innerHeight ? 0 : y + Math.random() * 50;
                });
            }

            setInterval(animateMatrix, 100);
        }

        zoomInAndOut() {
            let scale = 1;
            setInterval(() => {
                scale = scale > 1.5 ? 1 : scale + 0.1;
                document.body.style.transform = `scale(${scale})`;
                document.body.style.transformOrigin = 'center';
            }, 100);
        }

        showRandomYouTubeVideo() {
            const videos = ['dQw4w9WgXcQ', 'M7lc1UVf-VE', 'hY7m5jjJ9mM', 'kfVsfOSbJY0', 'CH1XGdu-hzQ', 'VKsVSBhSwJg', 'eVLOVpwXYGY'];
            const randomVideo = videos[Math.floor(Math.random() * videos.length)];
            
            const iframe = document.createElement('iframe');
            iframe.src = `https://www.youtube.com/embed/${randomVideo}?autoplay=1`;
            iframe.width = '560';
            iframe.height = '315';
            iframe.frameBorder = '0';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
        
            const modal = document.createElement('div');
            modal.style.position = 'fixed';
            modal.style.top = '50%';
            modal.style.left = '50%';
            modal.style.transform = 'translate(-50%, -50%)';
            modal.style.zIndex = '9999';
            modal.style.backgroundColor = 'white';
            modal.style.padding = '20px';
            modal.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
        
            const closeButton = document.createElement('button');
            closeButton.textContent = 'Close';
            closeButton.style.position = 'absolute';
            closeButton.style.top = '10px';
            closeButton.style.right = '10px';
            closeButton.style.background = 'red';
            closeButton.style.color = 'white';
            closeButton.style.border = 'none';
            closeButton.style.padding = '5px 10px';
            closeButton.style.cursor = 'pointer';
        
            closeButton.onclick = function() {
                document.body.removeChild(modal);
            };
        
            modal.appendChild(closeButton);
            modal.appendChild(iframe);
            document.body.appendChild(modal);
        }
        

        applyShaderOrCustom(args) {
            if (args.preset === "clear") {
                document.body.style.filter = '';
                return;
            }

            if (args.preset === "custom") {

                document.body.style.filter = `
            blur(${args.blur}px)
            contrast(${args.contrast}%)
            hue-rotate(${args.hueRotate}deg)
        `;
            } else {
                const shaderPresets = {
                    'strongBlur': { blur: 10, contrast: 100, hueRotate: 0 },
                    'highContrast': { blur: 0, contrast: 200, hueRotate: 0 },
                    'warmTone': { blur: 0, contrast: 150, hueRotate: 45 },
                    'coolTone': { blur: 0, contrast: 150, hueRotate: 180 },
                    'mosaic': { blur: 0, contrast: 100, hueRotate: 0, customCSS: 'drop-shadow(0 0 5px black)' },
                    'twirl': { blur: 0, contrast: 100, hueRotate: 0, customCSS: 'grayscale(50%)' },
                    'sepia': { blur: 0, contrast: 100, hueRotate: 0, customCSS: 'sepia(100%)' },
                    'invert': { blur: 0, contrast: 100, hueRotate: 0, customCSS: 'invert(100%)' },
                    'grayscale': { blur: 0, contrast: 100, hueRotate: 0, customCSS: 'grayscale(100%)' },
                    'brightness': { blur: 0, contrast: 100, hueRotate: 0, customCSS: 'brightness(150%)' }
                };

                const preset = shaderPresets[args.preset];
                if (preset) {
                    let filters = `
                blur(${preset.blur}px)
                contrast(${preset.contrast}%)
                hue-rotate(${preset.hueRotate}deg)
            `;
                    if (preset.customCSS) {
                        filters += ` ${preset.customCSS}`;
                    }
                    document.body.style.filter = filters;
                }
            }
        }


    }

    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fall {
            from { top: -10px; }
            to { top: 100vh; }
        }
    `;
    document.head.appendChild(style);

    Scratch.extensions.register(new FunExtensions());
})(Scratch);

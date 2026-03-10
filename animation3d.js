// ========================================
// Three.js 3D Animation Setup
// ========================================

class HeroAnimation {
    constructor() {
        this.canvas = document.getElementById('hero-canvas');
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.particles = null;
        this.geometricShapes = [];
        this.mouse = { x: 0, y: 0 };
        this.targetMouse = { x: 0, y: 0 };

        this.init();
        this.createParticles();
        this.createGeometricShapes();
        this.addEventListeners();
        this.animate();
    }

    init() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = 50;

        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            alpha: true,
            antialias: true
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }

    createStarTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');

        const centerX = 32;
        const centerY = 32;
        const spikes = 5;
        const outerRadius = 30;
        const innerRadius = 15;

        ctx.beginPath();
        for (let i = 0; i < spikes * 2; i++) {
            const radius = i % 2 === 0 ? outerRadius : innerRadius;
            const angle = (i * Math.PI) / spikes - Math.PI / 2;
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;

            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();

        const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, outerRadius);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.8)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = gradient;
        ctx.fill();

        return new THREE.CanvasTexture(canvas);
    }

    createParticles() {
        const particleCount = 1000;
        const starTexture = this.createStarTexture();

        const colors = [
            new THREE.Color(0x4f91ff),
            new THREE.Color(0x8b5cf6),
            new THREE.Color(0x10b981)
        ];

        this.particles = new THREE.Group();

        for (let i = 0; i < particleCount; i++) {
            const color = colors[Math.floor(Math.random() * 3)];

            const spriteMaterial = new THREE.SpriteMaterial({
                map: starTexture,
                color: color,
                transparent: true,
                opacity: 0.6 + Math.random() * 0.4,
                blending: THREE.AdditiveBlending
            });

            const sprite = new THREE.Sprite(spriteMaterial);

            sprite.position.x = (Math.random() - 0.5) * 100;
            sprite.position.y = (Math.random() - 0.5) * 100;
            sprite.position.z = (Math.random() - 0.5) * 100;

            const size = 0.3 + Math.random() * 0.5;
            sprite.scale.set(size, size, 1);

            sprite.userData = {
                velocityX: (Math.random() - 0.5) * 0.02,
                velocityY: (Math.random() - 0.5) * 0.02,
                velocityZ: (Math.random() - 0.5) * 0.02,
                twinkleSpeed: Math.random() * 2 + 1,
                twinkleOffset: Math.random() * Math.PI * 2,
                baseOpacity: 0.6 + Math.random() * 0.4
            };

            this.particles.add(sprite);
        }

        this.scene.add(this.particles);
    }

    createGeometricShapes() {
        const shapes = [
            { geometry: new THREE.OctahedronGeometry(2, 0), color: 0x4f91ff },
            { geometry: new THREE.TetrahedronGeometry(1.5, 0), color: 0x8b5cf6 },
            { geometry: new THREE.IcosahedronGeometry(1.8, 0), color: 0x10b981 },
            { geometry: new THREE.TorusGeometry(1.5, 0.4, 16, 100), color: 0x4f91ff },
            { geometry: new THREE.OctahedronGeometry(1.2, 0), color: 0x8b5cf6 },
            { geometry: new THREE.DodecahedronGeometry(1.6, 0), color: 0x10b981 },
            { geometry: new THREE.TetrahedronGeometry(1.8, 0), color: 0x4f91ff },
            { geometry: new THREE.TorusKnotGeometry(1, 0.3, 100, 16), color: 0x8b5cf6 },
            { geometry: new THREE.IcosahedronGeometry(1.3, 0), color: 0x10b981 },
            { geometry: new THREE.OctahedronGeometry(1.7, 0), color: 0x4f91ff }
        ];

        shapes.forEach((shapeData, index) => {
            const material = new THREE.MeshPhongMaterial({
                color: shapeData.color,
                transparent: true,
                opacity: 0.3,
                wireframe: true,
                emissive: shapeData.color,
                emissiveIntensity: 0.2
            });

            const mesh = new THREE.Mesh(shapeData.geometry, material);

            const angle = (index / shapes.length) * Math.PI * 2;
            const radius = 25;
            mesh.position.x = Math.cos(angle) * radius;
            mesh.position.y = Math.sin(angle) * radius * 0.5;
            mesh.position.z = -20 + Math.random() * 10;

            mesh.rotation.x = Math.random() * Math.PI;
            mesh.rotation.y = Math.random() * Math.PI;

            mesh.userData = {
                initialX: mesh.position.x,
                initialY: mesh.position.y,
                initialZ: mesh.position.z,
                rotationSpeed: {
                    x: (Math.random() - 0.5) * 0.02,
                    y: (Math.random() - 0.5) * 0.02,
                    z: (Math.random() - 0.5) * 0.02
                },
                floatSpeed: Math.random() * 0.5 + 0.5
            };

            this.geometricShapes.push(mesh);
            this.scene.add(mesh);
        });

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(ambientLight);

        const pointLight1 = new THREE.PointLight(0x4f91ff, 1, 100);
        pointLight1.position.set(10, 10, 10);
        this.scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0x8b5cf6, 1, 100);
        pointLight2.position.set(-10, -10, 10);
        this.scene.add(pointLight2);
    }

    addEventListeners() {
        window.addEventListener('mousemove', (event) => {
            this.targetMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            this.targetMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        });

        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        const time = Date.now() * 0.001;

        this.mouse.x += (this.targetMouse.x - this.mouse.x) * 0.05;
        this.mouse.y += (this.targetMouse.y - this.mouse.y) * 0.05;

        if (this.particles) {
            this.particles.rotation.y = time * 0.05;
            this.particles.rotation.x = Math.sin(time * 0.1) * 0.1;
            this.particles.position.x = this.mouse.x * 5;
            this.particles.position.y = this.mouse.y * 5;

            this.particles.children.forEach((star) => {
                const twinkle = Math.sin(time * star.userData.twinkleSpeed + star.userData.twinkleOffset);
                star.material.opacity = star.userData.baseOpacity + twinkle * 0.3;

                star.position.x += star.userData.velocityX;
                star.position.y += star.userData.velocityY;
                star.position.z += star.userData.velocityZ;

                if (Math.abs(star.position.x) > 50) star.position.x *= -1;
                if (Math.abs(star.position.y) > 50) star.position.y *= -1;
                if (Math.abs(star.position.z) > 50) star.position.z *= -1;
            });
        }

        this.geometricShapes.forEach((shape, index) => {
            shape.rotation.x += shape.userData.rotationSpeed.x;
            shape.rotation.y += shape.userData.rotationSpeed.y;
            shape.rotation.z += shape.userData.rotationSpeed.z;

            const floatOffset = Math.sin(time * shape.userData.floatSpeed + index) * 2;
            shape.position.y = shape.userData.initialY + floatOffset;
            shape.position.x = shape.userData.initialX + this.mouse.x * 3;
            shape.position.z = shape.userData.initialZ + this.mouse.y * 3;

            shape.material.opacity = 0.2 + Math.sin(time * 2 + index) * 0.1;
        });

        this.camera.position.x = this.mouse.x * 2;
        this.camera.position.y = this.mouse.y * 2;
        this.camera.lookAt(this.scene.position);

        this.renderer.render(this.scene, this.camera);
    }
}

// ========================================
// 3D Card Tilt Effect
// ========================================
class CardTilt {
    constructor(element) {
        this.element = element;
        this.width = element.offsetWidth;
        this.height = element.offsetHeight;
        this.settings = {
            max: 15,
            perspective: 1000,
            scale: 1.05,
            speed: 300,
            easing: 'cubic-bezier(.03,.98,.52,.99)'
        };
        this.init();
    }

    init() {
        this.element.style.transformStyle = 'preserve-3d';
        this.element.style.transition = `transform ${this.settings.speed}ms ${this.settings.easing}`;
        this.element.addEventListener('mouseenter', () => this.onMouseEnter());
        this.element.addEventListener('mousemove', (e) => this.onMouseMove(e));
        this.element.addEventListener('mouseleave', () => this.onMouseLeave());
    }

    onMouseEnter() {
        this.width = this.element.offsetWidth;
        this.height = this.element.offsetHeight;
    }

    onMouseMove(event) {
        const rect = this.element.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const percentageX = x / this.width;
        const percentageY = y / this.height;
        const tiltX = (percentageY - 0.5) * this.settings.max * 2;
        const tiltY = (percentageX - 0.5) * -this.settings.max * 2;
        this.element.style.transform = `perspective(${this.settings.perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(${this.settings.scale}, ${this.settings.scale}, ${this.settings.scale})`;
    }

    onMouseLeave() {
        this.element.style.transform = `perspective(${this.settings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    }
}

// ========================================
// Initialize 3D Effects
// ========================================
window.addEventListener('load', () => {
    if (document.getElementById('hero-canvas')) {
        new HeroAnimation();
    }

    const cards = document.querySelectorAll('.diff-card, .module-card, .stat-card, .tech-item, .qs-card');
    cards.forEach(card => new CardTilt(card));
});

// ========================================
// Floating Animation for Elements
// ========================================
function addFloatingAnimation() {
    const floatingElements = document.querySelectorAll('.diff-icon, .module-icon, .tech-icon');
    floatingElements.forEach((element, index) => {
        element.style.animation = `float 3s ease-in-out ${index * 0.2}s infinite`;
    });
}

const floatStyle = document.createElement('style');
floatStyle.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
    }
    .diff-icon, .module-icon, .tech-icon {
        display: inline-block;
        transition: transform 0.3s ease;
    }
    .diff-icon:hover, .module-icon:hover, .tech-icon:hover {
        transform: scale(1.2) rotateZ(10deg);
    }
`;
document.head.appendChild(floatStyle);

window.addEventListener('load', addFloatingAnimation);

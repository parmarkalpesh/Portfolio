"use client";

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeScene: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        const currentMount = mountRef.current;

        // Scene
        const scene = new THREE.Scene();
        
        // Camera
        const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
        camera.position.z = 5;

        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        currentMount.appendChild(renderer.domElement);

        // Stars
        const starGeometry = new THREE.BufferGeometry();
        const starCount = 5000;
        const positions = new Float32Array(starCount * 3);
        const velocities = new Float32Array(starCount);

        for (let i = 0; i < starCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 1] = Math.random() * 10;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
            velocities[i] = Math.random() * 0.02 + 0.01;
        }

        starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const starMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.02,
            transparent: true,
        });

        const stars = new THREE.Points(starGeometry, starMaterial);
        scene.add(stars);
        
        // Mouse movement
        let mouseX = 0;
        let mouseY = 0;
        
        const handleMouseMove = (event: MouseEvent) => {
            mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', handleMouseMove);

        let time = 0;

        // Animation
        const animate = () => {
            time += 0.005;
            const positions = starGeometry.attributes.position.array as Float32Array;

            for (let i = 0; i < starCount; i++) {
                // Move stars down
                positions[i * 3 + 1] -= velocities[i];
                
                // Add side to side sine wave movement
                positions[i * 3] += Math.sin(time + i) * 0.001;

                // Reset star if it goes off screen
                if (positions[i * 3 + 1] < -5) {
                    positions[i * 3] = (Math.random() - 0.5) * 20;
                    positions[i * 3 + 1] = 5;
                    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
                }
            }
            starGeometry.attributes.position.needsUpdate = true;
            
            stars.rotation.y = mouseX * 0.1;
            stars.rotation.x = mouseY * 0.1;
            camera.position.x += (mouseX * 2 - camera.position.x) * 0.02;
            camera.lookAt(scene.position);


            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();

        // Handle Resize
        const handleResize = () => {
            if (currentMount) {
                const width = currentMount.clientWidth;
                const height = currentMount.clientHeight;
                renderer.setSize(width, height);
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
            }
        };
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            if (currentMount) {
                currentMount.removeChild(renderer.domElement);
            }
            renderer.dispose();
            starGeometry.dispose();
            starMaterial.dispose();
        };
    }, []);

    return <div ref={mountRef} className="absolute inset-0 z-0" />;
};

export default ThreeScene;

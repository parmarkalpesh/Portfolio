"use client";

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeScene: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // Scene
        const scene = new THREE.Scene();
        
        // Camera
        const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
        camera.position.z = 5;

        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        mountRef.current.appendChild(renderer.domElement);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        const pointLight = new THREE.PointLight(0xffffff, 0.8);
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);

        // Geometry
        const geometry = new THREE.IcosahedronGeometry(1, 0);
        const material = new THREE.MeshStandardMaterial({ 
            color: 0x008080, // Teal
            metalness: 0.3,
            roughness: 0.6 
        });
        const wireframeMaterial = new THREE.MeshBasicMaterial({ color: 0xB8860B, wireframe: true, transparent: true, opacity: 0.3 });

        const mainShape = new THREE.Mesh(geometry, material);
        scene.add(mainShape);

        const wireframeShape = new THREE.Mesh(geometry, wireframeMaterial);
        wireframeShape.scale.set(1.2, 1.2, 1.2);
        scene.add(wireframeShape);
        
        // Animation
        const animate = () => {
            requestAnimationFrame(animate);
            mainShape.rotation.x += 0.002;
            mainShape.rotation.y += 0.002;
            wireframeShape.rotation.x -= 0.001;
            wireframeShape.rotation.y -= 0.001;
            renderer.render(scene, camera);
        };
        animate();

        // Handle Resize
        const handleResize = () => {
            if (mountRef.current) {
                const width = mountRef.current.clientWidth;
                const height = mountRef.current.clientHeight;
                renderer.setSize(width, height);
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
            }
        };
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
            geometry.dispose();
            material.dispose();
            wireframeMaterial.dispose();
        };
    }, []);

    return <div ref={mountRef} className="absolute inset-0 z-0 opacity-20 dark:opacity-30" />;
};

export default ThreeScene;

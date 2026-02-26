"use client";

import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

interface InteractiveScreenProps {
    html: string;
    screenName: string;
}

export default function InteractiveScreen({ html, screenName }: InteractiveScreenProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;

        // Safety check - if we're dealing with empty HTML, avoid errors
        if (!html?.trim()) return;

        // 1. Navigation Event Listeners
        // We attach a global click listener to catch "interactive" elements
        const handleGlobalClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            // Handle Back Buttons (typically SVG chevrons or buttons on top left)
            if (
                target.closest('svg') &&
                (target.closest('.lucide-chevron-left') ||
                    (target.closest('button')?.getBoundingClientRect()?.top ?? 1000) < 100)
            ) {
                // Naive "back" detection
                e.preventDefault();
                router.back();
                return;
            }

            // Handle Bottom Navbar (usually an absolute/fixed bottom flex element with SVGs)
            // Check if we hit an icon in the bottom 80 pixels of the screen
            if (target.closest('svg')) {
                const rect = target.getBoundingClientRect();
                if (rect.bottom > window.innerHeight - 100) {
                    const iconsAround = target.closest('div')?.children || [];
                    const svgIndex = Array.from(iconsAround).indexOf(target as any);

                    // Simplistic mapping for standard "4-icon" bottom bars
                    // 1: Home/Dashboard, 2: Chat Assistant, 3: Maps/Itinerary, 4: Profile
                    if (svgIndex === 0) router.push('/home');
                    else if (svgIndex === 1) router.push('/chat');
                    else if (svgIndex === 2) router.push('/itineraire');
                    else if (svgIndex === 3) router.push('/profil');

                    e.preventDefault();
                    return;
                }
            }

            // Handle standard "CTA" Action buttons (usually bold centered text or big colored divs)
            if (
                target.tagName === 'BUTTON' ||
                (target.tagName === 'DIV' && target.className.includes('bg-') && target.className.includes('text-white') && target.textContent?.trim().length < 20)
            ) {
                // If it's a generic CTA, for the demo prototype, we send them to the Index to pick the next step
                e.preventDefault();
                router.push('/tous-les-ecrans');
                return;
            }
        };

        container.addEventListener('click', handleGlobalClick);

        return () => {
            container.removeEventListener('click', handleGlobalClick);
        };
    }, [html, router]);

    return (
        <div
            ref={containerRef}
            className="w-full h-full bg-white relative overflow-x-hidden min-h-screen interactive-stitch-wrapper"
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
}

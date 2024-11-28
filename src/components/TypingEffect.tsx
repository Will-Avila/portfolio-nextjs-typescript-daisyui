"use client"

import React, { useState, useEffect } from 'react';

interface Props {
    text: string;
    speed: number;
    delay?: number;
}

export default function TypingEffect({ text, speed, delay }: Props) {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        const startTyping = setTimeout(() => {
            setIsTyping(true);
        }, delay);

        return () => clearTimeout(startTyping);
    }, [delay]);

    useEffect(() => {
        if (isTyping && index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(displayedText + text[index]);
                setIndex(index + 1);
            }, speed);

            return () => clearTimeout(timeout);
        }
    }, [index, isTyping, displayedText, text, speed]);

    return (
        <span>{displayedText}</span>
    );
};



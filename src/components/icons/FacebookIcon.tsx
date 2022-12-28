import React from "react";

type Props = {
    size: number;
};

function FacebookIcon({ size }: Props) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M58.6667 32C58.6667 17.28 46.72 5.33334 32 5.33334C17.28 5.33334 5.33333 17.28 5.33333 32C5.33333 44.9067 14.5067 55.6533 26.6667 58.1333V40H21.3333V32H26.6667V25.3333C26.6667 20.1867 30.8533 16 36 16H42.6667V24H37.3333C35.8667 24 34.6667 25.2 34.6667 26.6667V32H42.6667V40H34.6667V58.5333C48.1333 57.2 58.6667 45.84 58.6667 32Z" fill="currentColor" />
        </svg>
    );
}


export default FacebookIcon;

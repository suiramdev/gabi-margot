import React from "react";

type Props = {
    size: number;
};

function PlaceIcon({ size }: Props) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32 5.33333C20.8 5.33333 10.6667 13.92 10.6667 27.2C10.6667 35.68 17.2 45.6533 30.24 57.1467C31.2533 58.0267 32.7733 58.0267 33.7867 57.1467C46.8 45.6533 53.3333 35.68 53.3333 27.2C53.3333 13.92 43.2 5.33333 32 5.33333ZM32 32C29.0667 32 26.6667 29.6 26.6667 26.6667C26.6667 23.7333 29.0667 21.3333 32 21.3333C34.9333 21.3333 37.3333 23.7333 37.3333 26.6667C37.3333 29.6 34.9333 32 32 32Z" fill="currentColor" />
        </svg>
    );
}

export default PlaceIcon;

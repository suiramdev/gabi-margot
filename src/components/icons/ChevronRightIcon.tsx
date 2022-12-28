import React from "react";

type Props = {
    size: number;
};

function ChevronRightIcon({ size }: Props) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.2 46.1333C22.7111 45.6444 22.4667 45.0222 22.4667 44.2667C22.4667 43.5111 22.7111 42.8889 23.2 42.4L33.6 32L23.2 21.6C22.7111 21.1111 22.4667 20.4889 22.4667 19.7333C22.4667 18.9778 22.7111 18.3556 23.2 17.8667C23.6889 17.3778 24.3111 17.1333 25.0667 17.1333C25.8222 17.1333 26.4444 17.3778 26.9333 17.8667L39.2 30.1333C39.4667 30.4 39.656 30.6889 39.768 31C39.8782 31.3111 39.9333 31.6444 39.9333 32C39.9333 32.3556 39.8782 32.6889 39.768 33C39.656 33.3111 39.4667 33.6 39.2 33.8667L26.9333 46.1333C26.4444 46.6222 25.8222 46.8667 25.0667 46.8667C24.3111 46.8667 23.6889 46.6222 23.2 46.1333V46.1333Z" fill="currentColor" />
        </svg>
    );
}


export default ChevronRightIcon;

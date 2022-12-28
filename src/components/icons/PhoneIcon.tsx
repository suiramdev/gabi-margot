import React from "react";

type Props = {
    size: number;
};

function PhoneIcon({ size }: Props) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.6533 28.7733C21.4933 36.32 27.68 42.48 35.2267 46.3467L41.0933 40.48C41.8133 39.76 42.88 39.52 43.8133 39.84C46.8 40.8267 50.0267 41.36 53.3333 41.36C54.8 41.36 56 42.56 56 44.0267V53.3333C56 54.8 54.8 56 53.3333 56C28.2933 56 8 35.7067 8 10.6667C8 9.2 9.2 8 10.6667 8H20C21.4667 8 22.6667 9.2 22.6667 10.6667C22.6667 14 23.2 17.2 24.1867 20.1867C24.48 21.12 24.2667 22.16 23.52 22.9067L17.6533 28.7733Z" fill="currentColor" />
        </svg>
    );
}

export default PhoneIcon;

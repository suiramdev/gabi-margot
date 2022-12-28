import React from "react";

type Props = {
    size: number;
};

function CloseIcon({ size }: Props) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36.2425 32L48.1175 20.125C48.6811 19.5624 48.9981 18.799 48.9988 18.0027C48.9995 17.2063 48.6838 16.4423 48.1213 15.8788C47.5587 15.3152 46.7952 14.9982 45.9989 14.9974C45.2026 14.9967 44.4386 15.3124 43.875 15.875L32 27.75L20.125 15.875C19.5614 15.3114 18.797 14.9948 18 14.9948C17.203 14.9948 16.4386 15.3114 15.875 15.875C15.3114 16.4386 14.9948 17.203 14.9948 18C14.9948 18.797 15.3114 19.5614 15.875 20.125L27.75 32L15.875 43.875C15.3114 44.4386 14.9948 45.203 14.9948 46C14.9948 46.797 15.3114 47.5614 15.875 48.125C16.4386 48.6886 17.203 49.0052 18 49.0052C18.797 49.0052 19.5614 48.6886 20.125 48.125L32 36.25L43.875 48.125C44.4386 48.6886 45.203 49.0052 46 49.0052C46.797 49.0052 47.5614 48.6886 48.125 48.125C48.6886 47.5614 49.0052 46.797 49.0052 46C49.0052 45.203 48.6886 44.4386 48.125 43.875L36.2425 32Z" fill="currentColor" />
        </svg>
    );
}


export default CloseIcon;

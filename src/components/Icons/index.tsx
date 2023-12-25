import React from "react";

interface Props {
    name: string;
}

interface Icons {
    [key: string]: JSX.Element | undefined;
}

const Icon: React.FC<Props> = ({ name }) => {
    const icons: Icons = {
        shape: (
            <svg width="100%" height="100%" viewBox="0 0 175 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.25" d="M175 142.5C175 221.201 111.201 285 32.5 285C-46.2006 285 -110 221.201 -110 142.5C-110 63.7994 -46.2006 0 32.5 0C111.201 0 175 63.7994 175 142.5ZM-61.1995 142.5C-61.1995 194.249 -19.2488 236.2 32.5 236.2C84.2488 236.2 126.2 194.249 126.2 142.5C126.2 90.7512 84.2488 48.8005 32.5 48.8005C-19.2488 48.8005 -61.1995 90.7512 -61.1995 142.5Z" fill="white" />
            </svg>
        )
    };

    return icons[name] || "X";
};

export default Icon;

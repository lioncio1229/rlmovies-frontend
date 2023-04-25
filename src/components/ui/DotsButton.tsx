import styled from "styled-components"

interface Props {
    size?: number
}

const Button = styled.svg`
    cursor: pointer;
`;

export default function DotsButton({size = 25} : Props) : JSX.Element {
    return (
        <Button width={`${size}px`} height="10" viewBox="0 0 34 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.3945 4.81377C21.3945 7.47471 19.2417 9.62754 16.5808 9.62754C13.9198 9.62754 11.767 7.47471 11.767 4.81377C11.767 2.15282 13.9198 0 16.5808 0C19.2417 0 21.3945 2.15282 21.3945 4.81377ZM28.3477 0C25.6868 0 23.534 2.15282 23.534 4.81377C23.534 7.47471 25.6868 9.62754 28.3477 9.62754C31.0087 9.62754 33.1615 7.47471 33.1615 4.81377C33.1615 2.15282 31.0087 0 28.3477 0ZM4.81377 0C2.15282 0 0 2.15282 0 4.81377C0 7.47471 2.15282 9.62754 4.81377 9.62754C7.47471 9.62754 9.62753 7.47471 9.62753 4.81377C9.62753 2.15282 7.47471 0 4.81377 0Z" fill="#6C94B9"/>
        </Button>
    )
}
import { ButtonHTMLAttributes } from "react";
import { Link } from 'react-router-dom';

import { HeaderTag, HeaderContainer } from "./styles";

type HeaderProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    imgButton: string;
    toLink: string;
    children: string;
};

export function Header({ toLink, imgButton, children }: HeaderProps): JSX.Element {
    return(
        <HeaderTag>
            <HeaderContainer>
                <h1> RICK &amp; MORTY </h1>
                <Link to={toLink}>
                    <button>
                        <img src={imgButton} alt="Ícone do botão" />
                    {children}
                    </button>
                </Link>
            </HeaderContainer>
        </HeaderTag>
    )
}

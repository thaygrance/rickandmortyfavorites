import { ButtonHTMLAttributes } from "react";
import { Link } from 'react-router-dom';

import { HeaderTag } from "./styles";
//import headerImg from "../../assets/images/headerImg.png"

type HeaderProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    imgButton: string;
    toLink: string;
    children: string;
};

export function Header({ toLink, imgButton, children }: HeaderProps): JSX.Element {
    return(
        <HeaderTag>
            <Link to={toLink}>
                <button>
                   <img src={imgButton} alt="Ícone do botão" />
                    {children}
                </button>
            </Link>


        </HeaderTag>
    )
}

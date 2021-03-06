import { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";

import { FavoritesContainer, LoadingDiv, NotFavoritesDiv } from "./styles";

import { useFavorites } from "../../hooks/useFavorites";
import homeImg from "../../assets/images/home.svg"
import notFavoritesImg from "../../assets/images/notFavoritesImg.png"

export function Favorites():JSX.Element {
    const [loading, setLoading] = useState(true);
    const [notFavorite, setNotFavorite] = useState(false);

    const { favorites } = useFavorites();

    useEffect(() => {
        async function loadFavorites() {
            if (favorites.length>=1) {
                setLoading(false)
                setNotFavorite(false);
            }else{
                setLoading(false);
                setNotFavorite(true);
            }
        }
        loadFavorites();
    }, [favorites])
    return (
        <div>
            <Header imgButton={homeImg} toLink="/">
               
                HOME
             
            </Header>
            <FavoritesContainer>
                <h1>Personagens Favoritos</h1>
                {
                    loading ? (
                        <LoadingDiv>
                            <p>Loading...</p>
                        </LoadingDiv>
                    ) : (
                    notFavorite ? (
                        <NotFavoritesDiv>
                            <img src={notFavoritesImg} alt=""/>
                            <h3> Você não tem personagens favoritos </h3>
                            
                        </NotFavoritesDiv>
                    ) : ( 
                        <Card characters={favorites} />
                    ))
                }
            </FavoritesContainer>
            <Footer />
        </div>
        
    )
}
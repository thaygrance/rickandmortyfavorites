import { useEffect, useState } from "react";
import api from "../../services/api";


import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { HomeContainer, LoadingDiv, NotFoundDiv } from "./styles";
import heartImg from "../../assets/images/heart.svg"
import notFoundImg from "../../assets/images/notFoundImg.png"



export function Home(): JSX.Element {
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);
    const [characters, setCharacters] = useState([]);
    const [ searchText, setSearchText] = useState('');


    useEffect(() => {
        async function loadCharacters() {
            if (searchText === "") {
                await api
                .get('/character')
                .then((response) => {
                    const data = response.data.results;

                    setCharacters(data);
                    setLoading(false);
                    setNotFound(false);
                },
                (error) => {
                    console.error(error);
                    setNotFound(true)
                });

            } else {
                await api
                .get(`/character/?name=${searchText}`)
                .then((response) => {
                    const data = response.data.results;
                    setCharacters(data);
                    setLoading(false);
                    setNotFound(false);
                },(error) => {
                    console.error(error);
                    setNotFound(true);
                })
            }
        }
        loadCharacters()
    }, [searchText])

    return(
        <div>
            <Header imgButton={heartImg}toLink={"/favorites"}>
            FAVORITOS 
            </Header>
            <HomeContainer>
                <Search searchText={searchText} setSearchText={setSearchText} />
                {
                    loading ? (
                        <LoadingDiv>
                            <p>Loading...</p>
                        </LoadingDiv>
                    ) : (
                    notFound ? (
                        <NotFoundDiv>
                            <img src={notFoundImg} alt=""/>
                            <h3>
                            N??o encontramos esse sujeito!
                            </h3>
                            
                        </NotFoundDiv>
                    ) : (
                        <Card characters={characters} /> 
                    ))
                }
            </HomeContainer>
            < Footer />
        </div>
    )

}
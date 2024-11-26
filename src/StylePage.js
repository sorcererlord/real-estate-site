import React from "react";
import "./StylePage.css"

import List from "./components/List";
import createObject from "./components/createObject";
import { useMatchMedia } from "./hooks/useMatchMedia";

import lobbyImage from "./images/Rectangle 90.png"
import towerImage1 from './images/Rectangle 26.png'
import lobbyImage1 from './images/Rectangle 27.png'

import lobbyImageMobile from './images/О проекте.png'
import BlurredImage from "./components/ImageBlur";


function Lobby() {
    return (
        <img src={lobbyImage} className="fImage" alt="lobby"></img>
    )
}

function Style() {
    return (
        <div className="mainContainer fiContainer">
            <div className="main-wrapper style-wrapper">
                <BlurredImage alt="screenshot" src={towerImage1} className="fiImage" divClassName='style-zoom' />

                <div className="textBlock whiteText styleDiv">
                    <h2>Стиль</h2>

                    <p>
                        Главные фасад здания исполнен в неоклассическом стиле с выступающими деталями и большим количеством окон. 
                        Это четка очерченная композиция из иполированного гранита с 
                        элементами рустики, крупноформатного крерамогранита и декоратинвными элементами, выполненными на заказ.
                    </p>
                    <p>
                        В основе интерьеров Дома ARGUS приоритетными являются эстетика, где видимая роскошь 
                        сочетается с комфортом, в нее идеально вписываются любые технические приборы и устройства. 
                        Это позволяет создавать действительно актуальные и модные решения в рамках устоявшейся классики.
                    </p>
                </div>
            </div>
        </div>
    )
}

const arr = createObject([
    <span>Уникальная архитектура</span>,
    <span>Просторные террасы</span>,
    <span>Детская зона</span>,
    <span>Собственный ритейл</span>,
    <span>Фитнес зона</span>,
    <span>Видовые характеристики</span>,
    <span>Приватность</span>,
    <span>Охраняемая территория</span>
])


function Advantages() {
    return (
        <div className="mainContainer advContainer">
            <div className='adv-wrapper'>
                <h2 className="advH2">Преимущества</h2>

                <div className="listContainer">
                    <List data={arr} ulClass='dashed'/>
                </div>
            </div>
        </div>
    )
}

// 

function Luxury() {
    const { isMobile } = useMatchMedia();


    return (
        <div className='mainContainer luxContainer' >
            <section className="lux-wrapper">
                <BlurredImage src={lobbyImage1} alt="lobbyImage1" className="lobImage" />
                 
                <div className="styleTextContainer">
                    <h2 className="modifiedOverflow styleAlignMarginH2">Истинная роскошь должна быть элегантной, уютной, самобытной.</h2>                   

                    <section className="styleAlignMarginSection modifiedOverflow">
                        <p>
                            Oткрытая эко-терраса в восточной, тихой и защищенной от городского шума части дома, 
                            для тех, кто летом предпочитает выпить чашечку кофе на рассвете под первыми лучами солнца, или тех, 
                            кто к полудню решит понежиться на солнышке.
                        </p>
                    
                        <p>
                            Ваш вечер пролетит незаметно за уютными разговорами на свежем воздухе, а зимой терраса
                            превратится в собственный каток для жителей и их гостей.
                        </p>
                    </section>
                </div>
            </section>

        </div>
    )
}

export default class StylePage extends React.Component {
    render() {
        return (
        <React.Fragment>
            <Lobby />
            <Style />
            <Advantages />
            <Luxury />
        </React.Fragment>
        )
    }
}
import React, {useState} from "react";
import './ApartmentsPage.css';

import Tbody from './components/Tbody'
import { useMatchMedia } from "./hooks/useMatchMedia";
import Modal from "./components/modal";

import image from './images/Rectangle 46.png'
import image1 from "./images/Rectangle 92.png"
import createObject from "./components/createObject";
import BlurredImage from "./components/ImageBlur";

function Apartments() {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <>
        <div className="mainContainer apartment" id='apartments'>
            {isOpen &&  <Modal handleClose={closeModal} isOpen={isOpen}></Modal> }
            <div className="main-wrapper apartment-wrapper">
                <div className="textBlock apartmentRight" >
                    <h2>Апартаменты</h2>

                    <p>
                        Со второго по шестой этаж гармонично спланированы апараменты различной площади от 
                        35 до 80 м2, жителям каждого из которых гарантирована максимальная приватность и комфорт.
                    </p>

                    <button className="query apartment-query" onClick={openModal}>Оставить Заявку</button>
                </div>

                <BlurredImage src={image} alt='room' className="room1" />
            </div>

        </div>

        <div className="mainContainer apartment">
            <div className="main-wrapper apartment-wrapper">
                <BlurredImage src={image1} alt='room' className="room2" />
                <div className="textBlock apartmentLeft">
                    <h2>Пентхаусы</h2>

                    <p>
                        На седьмом этаже Дома предусмотрено несколько пентхаусов. В распоряжении их жителей: высокие потолки 5,5 метров, cвободная 
                        планировка для создания стильного, торжественного интерьера.
                    </p>

                    <button className="query apartment-query" onClick={openModal}>Оставить Заявку</button>
                </div>
            </div>
        </div>
        </>
    )
}



const CharacteristicsArr = createObject([
    'Сервис', 'Две зоны ресепшен 24/7',
    'Паркинг', 'Наземный охраняемый паркинг',
    'Система безопастности', 'Система видеонаблюдения, охранная сигнализация по периметру дома, современная система контроля доступа',
    'Лифты', 'Бесшумные премиальные лифты OTIS',
    'Территория', 'Огороженная и охраняемая территория',
    'Окна', 'Высококачественные стеклопакеты с повышенным уровнем шумоизоляции',
    'Пожарная сигнализация', 'Автоматическая система пожаротушения в каждом апартаменте',
    'Кондиционирование', 'Центральная Система кондиционирования',
    'Вентиляция', 'Система принудительной приточно-вытяжной вентиляции'
])



function Characteristics() {
    const {isMobile} = useMatchMedia();

    return (
        <div className="mainContainer charContainer">
            <div className="charWrapper">
               <h2 className="characteristicsH2">Технические характеристики</h2>

                <table className="trBottomBorder charMediaTableContainer">
                    <tbody  className='styleMediaTable'>
                        {isMobile 
                        ?   <Tbody data={CharacteristicsArr} rowsMobile={true}/>

                        :   <Tbody data={CharacteristicsArr} rows={true}  tdClass='trBottomBorder' thClass='trBottomBorder' />
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default class ApartmentsPage extends React.Component {
    render() {
        return(
            <React.Fragment>
                <Apartments />
                <Characteristics />
            </React.Fragment>

        )
    }
}
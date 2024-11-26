import React, {useState} from 'react';
import './IntroductoryPage.css';
import { useMatchMedia } from './hooks/useMatchMedia';
import Modal from './components/modal';
import Sidebar from './components/Sidebar';
import {FaBars} from 'react-icons/fa'

export default function FirstSegment() {
  const {isTablet} = useMatchMedia();

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(true);
  const hideSidebar = () => setSidebar(false);

  const Phone = isTablet ? 
  <span className='tabletPhone'>+7(495) 432 50 66</span> 
  : <span className='phone'>+7(495) 432 50 66</span>;

  const Redirect = !isTablet ?
  <button className='redirect' onClick={openModal}>
    Записаться
  </button>  
  : null;

  const TabletSignup = isTablet ?
  <button className='tabletSignup' onClick={openModal}>Записаться</button>
  : null
             
  return (
    <div className='mainContainer fImageContainer'>
    {isOpen && <Modal handleClose={closeModal} isOpen={isOpen} />}

    {isTablet ? sidebar && <Sidebar handleClose={hideSidebar} sidebar={sidebar}/> : <Sidebar handleClose={hideSidebar} sidebar={sidebar}/>}
      <div className='intrd-wrapper'>
        <div className='introductory-header'>
          {isTablet ? 
          <FaBars onClick={showSidebar} className='sidebar-button'/> 
          :
          <>
            <a href='#projects' className='sidebar-a'>О Проекте</a>
            <a href='#apartments' className='sidebar-a'>Апартаменты</a>
          </> 

          }

          <section className='float-right'>
            {Phone}

            {Redirect}
          </section>
        </div>

        <section className='positioning'>
          <h1 className='intrdMediaH2'>ПОКЛОННАЯ, 9</h1>
        {TabletSignup}
      </section>
    </div>
  </div>
 );
}

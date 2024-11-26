import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import IntroductoryPage from './IntroductoryPage';
import ProjectPage from './ProjectPage';
import StylePage from './StylePage';
import ApartmentsPage from './ApartmentsPage';
import SignupForm from './SignupForm';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <main>
      <IntroductoryPage />
      <ProjectPage />
      <StylePage />
      <ApartmentsPage />
      <SignupForm />
    </main>
  </React.StrictMode>
);

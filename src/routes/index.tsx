import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import NotFoundPage from '../pages/NotFoundPage';
import { AppRoutes } from '../core/config/route';

class Router extends React.Component {
  render() {
    return (
      <Routes>
        <Route path={AppRoutes.MAIN} element={<HomePage />} />
        <Route path={AppRoutes.ABOUT} element={<AboutPage />} />
        <Route path={AppRoutes.NOT_FOUND_PAGE} element={<NotFoundPage />} />
        <Route path="*" element={<Navigate replace to={AppRoutes.NOT_FOUND_PAGE} />} />
      </Routes>
    );
  }
}

export default Router;

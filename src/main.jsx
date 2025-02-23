import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Hero from './components/Hero';
import Home from './components/Home';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import './index.css';


const router = createBrowserRouter([


  {
    path: "",
    element: <Hero />,
  },
  {
    path: "chatbot",
    element: <Chatbot/>,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "faq",
    element: <Faq />,
  },
  {
    path: "footer",
    element: <Footer />,
  },
  {
    path: "testimonials",
    element: <Testimonials />,
  },


]);

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
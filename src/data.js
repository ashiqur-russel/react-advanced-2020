import React from 'react';
import { FaGithub, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';


export const data = [
  { id: 1, name: 'john' },
  { id: 2, name: 'peter' },
  { id: 3, name: 'susan' },
  { id: 4, name: 'anna' },
];

export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
  },
  {
    id: 4,
    url: '/contact',
    text: 'contact',
  },
  {
    id: 5,
    url: '/profile',
    text: 'profile',
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.facebook.com/ashiqurasel/',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com/ashiqur_russel',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com/in/mohammad-ashiqur-rahman-095a5b17a/',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://github.com/ashiqur-russel',
    icon: <FaGithub/>,
  },
];

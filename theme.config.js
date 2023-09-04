/** *************************************************************
 * Please refer to the Theme Options section in documentation   *
 ****************************************************************/

/**
 * Icons from react-icons: https://react-icons.github.io/react-icons
 */

import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5'
import { TfiHome, TfiPencilAlt } from 'react-icons/tfi'
import { SlUser, SlBriefcase, SlEnvolope, SlTrophy } from 'react-icons/sl'

/**
 * Main Menu Items
 */

export const menu = [
  {
    name: 'Accueil',
    slug: '/',
    Icon: TfiHome,
    number: 1,
  },
  {
    name: 'About',
    slug: '/about',
    Icon: SlUser,
  },
  {
    name: 'Services',
    slug: '/services',
    Icon: SlBriefcase,
  },
  {
    name: 'Articles',
    slug: '/blog',
    Icon: TfiPencilAlt,
  },
  {
    name: 'Projets',
    slug: '/projects',
    Icon: SlTrophy,
  },
  {
    name: 'Contact',
    slug: '/contact',
    Icon: SlEnvolope,
  },
]

/**
 * Social Links under the Main Menu
 */

export const social = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/',
    Icon: IoLogoLinkedin,
  },
  {
    name: 'Github',
    url: 'https://github.com/steeven-js',
    Icon: IoLogoGithub,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/',
    Icon: IoLogoInstagram,
  },
]

/**
 * General configurations
 */

export const config = {
  dateLocale: 'fr-FR',
  dateOptions: {
    // dateOptions is passed to JavaScript's toLocaleDateString()
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  },
  convertKit: {
    tipUrl: 'https://fantastic-mover-3439.ck.page/products/blog',
  },
  contactForm: {
    inputs: require('./content/contact-form.json'),
    recipient: 'contact@jsprod.fr',
    sender: 'jacques.steeven@gmail.com',
    subject: 'Demande de contact Portfolio',
  },
}

/**
 * MDX/Markdown configurations
 */

export const mdxConfig = {
  publicDir: 'public',
  pagesDir: 'content',
  fileExt: '.md',
  collections: ['/blog', '/projects'],
  remarkPlugins: [],
  rehypePlugins: [],
}

/**
 * Global SEO configuration for next-seo plugin
 * https://github.com/garmeeh/next-seo
 */

export const siteMetaData = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL || 'http://localhost:3000',
  authorName: 'Steeven Jacques',
  siteName: 'Steeven Jacques',
  defaultTitle: 'Steeven Jacques Personal Site',
  titleTemplate: 'Steeven Jacques | %s',
  description: 'Steeven Jacques Personal Site',
  email: 'contact@jsprod.fr',
  locale: 'fr-FR',
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
}

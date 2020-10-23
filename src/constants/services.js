import React from "react"
import { FaReact, FaAngular, FaVuejs } from "react-icons/fa"
import { GrGatsbyjs } from "react-icons/gr"
import { DiMongodb } from "react-icons/di"
import { SiNodeDotJs, SiApollographql, SiNextDotJs } from "react-icons/si"
export default [
  {
    id: 1,
    icon: <FaReact className="service-icon" />,
    title: "React",
    text: `I just love React more than any other frameworks.I have worked with React hooks,context api and Redux(ofcourse)`,
    css: `react`,
    url: "/projects/react",
  },
  {
    id: 2,
    icon: <FaAngular className="service-icon" />,
    title: "Angular",
    text: `I've good knowledge and experience working in angular7.`,
    css: `angular`,
    url: "/projects/angular",
  },
  {
    id: 3,
    icon: <FaVuejs className="service-icon" />,
    title: "Vue",
    text: `Made a couple of projects using Vue js with Vuex.I have also done projects using Vue3's Composition API`,
    css: `vue`,
    url: "/projects/vuejs",
  },
  {
    id: 4,
    icon: <GrGatsbyjs className="service-icon" />,
    title: "Gatsby",
    text: `As my love for react increased, so it did for Gatsby as well.This website is built entirely with gastby along with react`,
    css: `gatsby`,
    url: "/projects/gatsby",
  },
  {
    id: 5,
    icon: <SiNodeDotJs className="service-icon" />,
    title: "Nodejs",
    text: `As a javascript lover who doesn't love Nodejs`,
    css: `node`,
    url: "/projects/nodejs",
  },
  {
    id: 6,
    icon: <SiApollographql className="service-icon" />,
    title: "Apollo Graphql",
    text: `An amazing alternative to Node which i learnt was Graphql(especially Apollo)`,
    css: `apollo`,
    url: "/projects/graphql",
  },
  {
    id: 7,
    icon: <SiNextDotJs className="service-icon" />,
    title: "Nextjs",
    text: `React along with both Static Site Generation(SSG) and Server Side Rendering(SSR)`,
    css: `next`,
    url: "/projects/nextjs",
  },
  {
    id: 8,
    icon: <DiMongodb className="service-icon" />,
    title: "MongoDb",
    text: `One of the best NoSql which I used was MongoDb(Mongo Client) for storing Data`,
    css: `mongo`,
    url: "/projects/mongodb",
  },
]

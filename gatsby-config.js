module.exports = {
  siteMetadata: {
    siteUrl: 'https://rfitz.io',
    blogEnabled: true,
    name: 'Kushal Kothari',
    title: `Kushal Kothari`,
    description: `Former Google Summer Of Code Intern with Erlang Ecosystem Foundation.`,
    about: `My interests include the development of free & open source software, computer security, hardening of software, firmware & hardware, cryptography, privacy enhancing technologies, network protocols, distributed systems, software architecture, and programming languages. I particularly enjoy building highly distributed systems using functional programming languages, and low-level systems programming.I am not particularly good at keeping this website up-to-date, but you should be able to find information on how to contact me.
    I'm a motivated full-stack engineer who has experience building and scaling web applications and services in various domains. I'm also passionate about open-source contributions, working in high impact environments, and helping growing development teams build great products.
    
    I like building new stuff and work with other people – nothing really interesting is ever built alone :)  `,
    author: `kushal-kothari`,
    github: `https://github.com/Kushal-kothari`,
    linkedin: `https://www.linkedin.com/in/kushal-kothari-766155171/`,
    projects: [
      {
        name: 'Chat Server and Client',
        description:'Instant messengers have become a daily part of our life. We cannot imagine a life without Whatsapp, Telegram, Hike, etc. I was always curious about their working, so I spent some time and learnt about their theory of implementation. Equipped with the right knowledge I have created a very basic implementation of instant messengers. Though this is very basic, probably it might seem like app of MS-DOS era. But the functionality present in it is very similar to the current IM app, it can connect to a client through a server and send messages to other client.',
        link: 'https://github.com/Kushal-kothari/Chat-server-and-Client',
      },
      {
        name: 'Pathfinder-visualizer',
        description:
          'Pathfinding visualizer algorithm Program to visualize working of BFS and DFS and how they explore nodes. Made using Stanford University libraries in QT Creator.',
        link: 'https://github.com/Kushal-kothari/Pathfinder_visualizer',
      },
      {
        name: 'Pivalink',
        description:
          'Tool to create microlanding pages that can be easily updated and customized to fit any brand (Acquired)',
        link: 'https://pivalink.com/',
      },
      {
        name: 'Coursefacts',
        description:
          'A platform where students can read and write university / college course reviews anonymously',
        link: 'https://coursefacts.com/',
      },
      {
        name: 'Blog App in Django',
        description:
          'A reusable Django app for managing news/blog entries in different languages.Comes with a django-cms apphook and has been prepared using Django 1.5.1 and django-cms 2.4.1. From version 2.0 onwards it is tested and developed further on Django 1.9 and django-cms 3.',
        link: 'https://github.com/Kushal-kothari/BLOGGING-APP',
      },
      {
        name: 'Dev Portfolio',
        description:
          'An open source and customizable single-page personal portfolio template for developers',
        link: 'https://github.com/RyanFitzgerald/devportfolio',
      },
    ],
    experience: [
      {
        name: 'Research Intern at Indian Institute Of Technology,Patna',
        description: 'Working under Somonath Tripathy , November 2020 - Present',
        link: 'https://www.iitp.ac.in/~som/index.php',
      },
      {
        name: 'Google Summer Of Code',
        description: '​Yggdrasil is an early-stage implementation of a fully end-to-end encrypted IPv6 network.Worked along with mentor Benoitc Chesneau,[creator of Python HTTP server] to replicate the data and create the plugin to easily access the data.The​ ​ project​ ​ involved​ ​ building​ ​ the​ ​ library​ ​ and allowing​ ​ multiple​ ​ users​ ​ to​ ​ connect to the encrypted network.Passing messages from one Yggdrasil node to another and testing what has been replicated.',
        link: 'https://drive.google.com/file/d/1PO2wcegrBH978lz1-eNqcSI7S3lM8Ch5/view?usp=sharing',
      },
      {
        name: 'WayBeyond Media Pvt Ltd',
        description: 'Initially,I was assigned the task of working under the Narikaa Team which is a safe private space for women to explore, educate themselves and engage with one another to understand their bodies and their choices. The Narikaa platform is a Women’s health literacy platform that provides insight & support to women from all walks of life.Task done by my team included creating automated documents  to be used by accounts and the finance department to automatically be used without any human intervention and directly used by the finance head of the company.',
        link: 'https://waybeyond.in/',
      },
    ],
    books : [
      {
        name: 'The Kite Runner',
        description: 'For You,A thousand times Over - Khaled Hosseini',
        link: 'https://kushalkothari285.medium.com/for-you-a-thousand-times-over-khaled-hosseini-a6fc54bf355f',
      },
      {
        name: 'The Book Thief ',
        description: 'Even death has a heart - markus zusak',
        link: 'https://kushalkothari285.medium.com/even-death-has-a-heart-markus-zusak-cf023f29b6c',
      },
      {
        name: 'The Boy in the Striped Pyjamas',
        description: 'and-who-decided-which-people-wore-striped-pyjamas-and-which-people-wore-the-uniforms',
        link: 'https://kushalkothari285.medium.com/and-who-decided-which-people-wore-striped-pajamas-and-which-people-wore-the-uniforms-c72a5194d4a2 ',
      },
    ],    
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'C++, Python, Java,JavaScript (ES6+), Erlang ',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum',
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-186061894-1",
        head:true,
        anonymize:true,
      },
    },       
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-54210715-4`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ryan-fitzgerald`,
        short_name: `rfitz`,
        start_url: `/`,
        background_color: `#3486eb`,
        theme_color: `#3486eb`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};

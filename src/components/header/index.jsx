import { Link } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import profileImg from '../../images/pool2.jpg';

const classes = {
  wrapper: 'block mb-6 md:flex',
  imageWrapper: 'w-full max-w-150',
  image: 'rounded-full transform transition-all duration-150 hover:scale-105',
  contentWrapper: 'flex-none pt-6 md:pt-1 md:flex-1 md:pl-20',
  name: 'text-5xl text-gray-900 font-bold leading-tight hover:text-black',
  description: 'text-gray-600',
  list: 'mt-6 uppercase tracking-wider',
  item: 'inline list-none pr-4',
  link:
    'inline-block py-2 font-semibold text-xs text-gray-600 hover:text-black',
};

const Header = ({ metadata = {} }) => {
  const resume = get(metadata, 'author', false);
  const medium = get(metadata, 'author', false);
  const github = get(metadata, 'github', false);
  const linkedin = get(metadata, 'linkedin', false);
  const blogEnabled = get(metadata, 'blogEnabled', false);

  return (
    <div className={classes.wrapper}>
      <div className={classes.imageWrapper}>
        <Link to="/">
          <img className={classes.image} src={profileImg} alt={metadata.name} />
        </Link>
      </div>
      <div className={classes.contentWrapper}>
        <h1 className={classes.name}>
          <Link to="/">{metadata.name}</Link>
        </h1>
        <p className={classes.description}>{metadata.description}</p>
        <ul className={classes.list}>
          {resume && (
            <li className={classes.item}>
              <a
                className={classes.link}
                href={`https://drive.google.com/file/d/1rHMVFPubTpsCrlH09XEuCm4T2AFtG73l/view?usp=sharing`}
              >
                resume
              </a>
            </li>
          )}
          {medium && (
            <li className={classes.item}>
              <a
                className={classes.link}
                href={`https://kushalkothari285.medium.com/`}
              >
                medium
              </a>
            </li>
          )}          
          {github && (
            <li className={classes.item}>
              <a className={classes.link} href={github}>
                GitHub
              </a>
            </li>
          )}
          {linkedin && (
            <li className={classes.item}>
              <a className={classes.link} href={linkedin}>
                LinkedIn
              </a>
            </li>
          )}
          {blogEnabled && (
            <li className={classes.item}>
              <Link className={classes.link} to="/blog">
                books
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;

import { graphql } from 'gatsby';
import moment from 'moment';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import Newsletter from '../components/newsletter';
import SEO from '../components/seo';

const classes = {
  wrapper: 'mt-8 blog-content',
  title: 'mt-16 text-4xl text-gray-900 font-bold',
  date: 'text-gray-600 font-light',
  hr: 'mt-8 max-w-150 border-t-2',
};

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <Header metadata={data.site.siteMetadata} />
      <SEO
        title={post.frontmatter.title}
        skipCanonical={post.frontmatter.skipCanonical}
      />
      <h1 className={classes.title}>{post.frontmatter.title}</h1>
      <p className={classes.date}>
        Posted on {moment(post.frontmatter.date).format('MMMM D, YYYY')}
      </p>
      <hr className={classes.hr} />
      <div
        className={classes.wrapper}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <hr className={classes.hr} />
      <Newsletter />
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        blogEnabled
        name
        title
        description
        about
        author
        github
        linkedin
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        skipCanonical
      }
    }
  }
`;

import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../templates/layout';
import { IndexPageWrapper } from '../styles/index/IndexStyles';
import BlogListing from '../components/index/BlogListing';

import Twitter from '../images/svg/TwitterSVG';
import Instagram from '../images/svg/InstagramSVG';
import Facebook from '../images/svg/FacebookSVG';
import Linkedin from '../images/svg/LinkedinSVG';
import Snapchat from '../images/svg/SnapchatSVG';
import Github from '../images/svg/GithubSVG';
import Arrow from '../images/svg/DownArrowSVG';

const Index = props => {
  const {
    miniBio,
    twitterURL,
    instagramURL,
    githubURL,
    facebookURL, // soon to be launched
    snapchat, // I may use snap?
    linkedinURL,
  } = props.data.file.childMarkdownRemark.frontmatter;

  const seo = {
    page: `index`,
    title: '',
    description: `${miniBio}`,
    breadcrumbs: [],
  };

  return (
    <Layout seo={seo}>
      <IndexPageWrapper>
        <div className="indexIntro">
          <h1>
            I'm Jacob Daniel Castro,
            <br />a frontend Javascript
            <br /> developer.
          </h1>
          <ul className="introSocialLinks">
            <li>
              <a
                target="_blank"
                href={twitterURL}
                rel="noopener"
                aria-label="visit Jacob's twitter profile"
              >
                <Twitter />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href={instagramURL}
                rel="noopener"
                aria-label="visit Jacob's Instagram page"
              >
                <Instagram />
              </a>
            </li>
            {/* <li>
              <a
                target="_blank"
                href={facebookURL}
                rel="noopener"
                aria-label="visit Jacob's Facebook page"
              >
                <Facebook />
              </a>
            </li> */}
            <li>
              <a
                target="_blank"
                href={linkedinURL}
                rel="noopener"
                aria-label="visit Jacob's linkedin profile"
              >
                <Linkedin />
              </a>
            </li>
            {/* <li>
              <a
                target="_blank"
                href={snapchat}
                rel="noopener"
                aria-label="visit jacob's snapchat account"
              >
                <Snapchat />
              </a>
            </li> */}
            <li>
              <a
                target="_blank"
                href={githubURL}
                rel="noopener"
                aria-label="visit Jacob's Github page"
              >
                <Github />
              </a>
            </li>
          </ul>

          <div className="downArrowLink">
            <a
              href="#recentPublications"
              aria-label="scroll down to recent publications section"
            >
              <Arrow />
            </a>
          </div>
        </div>

        {/* Blog posts */}
        <div id="recentPublications">
          <h1>All Recent Publications</h1>

          {props.data.allMarkdownRemark.edges.map(({ node }) => (
            <BlogListing key={node.id} data={node} />
          ))}
        </div>
      </IndexPageWrapper>
    </Layout>
  );
};

export default Index;

export const INDEX_POSTS_QUERY = graphql`
  query INDEX_POSTS_QUERY {
    # all blog posts, sorted by most recent
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { type: { in: ["blogPost", "tutorial"] } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            date
            title
            slug
            subtitle
            tags
            type
          }
          excerpt(pruneLength: 370)
          timeToRead
        }
      }
    }

    # social links from about markdown file
    file(relativePath: { eq: "me.md" }) {
      childMarkdownRemark {
        id
        frontmatter {
          email
          phone
          handle
          miniBio
          username
          twitterURL
          instagramURL
          githubURL
          facebookURL
          snapchat
          linkedinURL
        }
      }
    }
  }
`;

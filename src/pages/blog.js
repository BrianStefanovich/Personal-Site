import React from "react";
import { graphql, navigate } from "gatsby";
import { gridPlacement } from "../components/utilities";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import BlogHeader from "../components/BlogHeader";
import BlogFooter from "../components/BlogFooter";
import Img from "gatsby-image";

const blogIndexLayoutGrid = {
  sm: {
    col: "4",
  },
  md: {
    offset: "1",
    col: "6",
  },
  lg: {
    offset: "2",
    col: "12",
  },
  xlg: {
    offset: "2",
    col: "12",
  },
  max: {
    offset: "3",
    col: "10",
  },
};

const blogIndexCardGrid = {
  sm: {
    col: "4",
  },
  md: {
    col: "4",
  },
  lg: {
    col: "8",
  },
  xlg: {
    col: "4",
  },
  max: {
    col: "4",
  },
};

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes;

  if (posts.length === 0) {
    return (
      <div className="blog">
        <SEO
          title="Blog"
          description="Thoughts and ideas facing business, web development and mathematical challenges"
        />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </div>
    );
  }

  return (
    <div className="blog">
      <BlogHeader />
      <SEO title="Blog" />
      <div className="bx--grid bx--grid--condensed">
        <div className="box-row">
          <div className={gridPlacement(blogIndexLayoutGrid, "bx--no-gutter")}>
            <div className="blogIndex bx--row bx--no-gutter">
              {posts.map((post, i) => {
                const title = post.frontmatter.title;
                console.log(post);

                return (
                  <div
                    className={gridPlacement(
                      blogIndexCardGrid,
                      "blogIndexCard bx--no-gutter"
                    )}
                    onClick={() => {
                      navigate(post.frontmatter.slug);
                    }}
                  >
                    <Img
                      className="blogIndexCardImage"
                      fluid={post.frontmatter.thumbnail.childImageSharp.fluid}
                    />
                    <h2 className="blogIndexCardTitle">{title}</h2>
                    <small className="blogIndexCardDate">
                      {post.frontmatter.date}
                    </small>
                    <p className="blogIndexCardBody">
                      {post.frontmatter.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <BlogFooter />
      </div>
    </div>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          description
          path
          thumbnail {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          slug
        }
      }
    }
  }
`;

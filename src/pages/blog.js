import React from "react";
import { graphql, navigate } from "gatsby";
import { gridPlacement } from "../components/utilities";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import BlogHeader from "../components/BlogHeader";
import BlogFooter from "../components/BlogFooter";

const blogIndexLayoutGrid = {
  sm: {
    col: "col",
  },
  md: {
    offset: "1",
    col: "6",
  },
  lg: {
    offset: "2",
  },
  xlg: {
    offset: "2",
  },
  max: {
    offset: "3",
    col: "11",
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
    col: "4",
  },
  xlg: {
    col: "4",
  },
  max: {
    col: "3",
  },
};

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes;

  if (posts.length === 0) {
    return (
      <div className="blog">
        <SEO title="All posts" />
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
      <SEO title="All posts" />
      <div className="bx--grid bx--grid--condensed">
        <div className="box-row">
          <div className={gridPlacement(blogIndexLayoutGrid, "bx--no-gutter")}>
            <div className="bx--row bx--no-gutter">
              {posts.map((post, i) => {
                if (i !== 0) {
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
                      <div className="">
                        <img
                          className="blogIndexCardImage"
                          src={post.frontmatter.thumbnail.publicURL}
                        />
                      </div>
                      <h2 className="blogIndexCardTitle">{title}</h2>
                      <small className="blogIndexCardDate">
                        {post.frontmatter.date}
                      </small>
                      <p className="blogIndexCardBody">
                        {post.frontmatter.description}
                      </p>
                    </div>
                  );
                }
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
            publicURL
          }
          slug
        }
      }
    }
  }
`;

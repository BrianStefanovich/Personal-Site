import React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/bio";
import SEO from "../components/seo";
import { gridPlacement } from "./../components/utilities";
import { BlogFooter, BlogHeader } from "./../components";

const postLayoutGrid = {
  max: {
    offset: "4",
    col: "8",
  },
  xlg: {
    offset: "3",
    col: "10",
  },
  lg: {
    offset: "3",
    col: "10",
  },
  md: {
    offset: "1",
    col: "6",
  },
  sm: {
    col: "col",
  },
};

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark;
  const { previous, next } = data;
  console.log(data);

  return (
    <div className="blog">
      <BlogHeader />
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <div className="bx--grid">
        <article
          className={gridPlacement(postLayoutGrid, "bx--no-gutter blogPost")}
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <h1 className="blogPostTitle" itemProp="headline">
              {post.frontmatter.title}
            </h1>
            <p className="blogPostDate">{post.frontmatter.date}</p>
          </header>
          <nav className="blogPostNav">
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <a
                    href={
                      "http://localhost:8000/blog/" + previous.frontmatter.slug
                    }
                    rel="prev"
                  >
                    ← {previous.frontmatter.title}
                  </a>
                )}
              </li>
              <li>
                {next && (
                  <a
                    href={"http://localhost:8000/blog/" + next.frontmatter.slug}
                    rel="next"
                  >
                    {next.frontmatter.title} →
                  </a>
                )}
              </li>
            </ul>
          </nav>

          <section
            className="blogPostBody"
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
          <footer>
            <BlogFooter />
          </footer>
        </article>
      </div>
    </div>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        slug
        path
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        slug
        path
      }
    }
  }
`;

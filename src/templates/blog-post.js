import React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/bio";
import SEO from "../components/seo";
import { gridPlacement } from "./../components/utilities";

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
    offset: "0",
    col: "4",
  },
};

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const { previous, next } = data;
  console.log(data);

  return (
    <div>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <article
        className={gridPlacement(postLayoutGrid, "blogPost")}
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
			href={"http://localhost:8000/" + previous.frontmatter.path}
                  rel="prev"
                >
                  ← {previous.frontmatter.title}
                </a>
              )}
            </li>
            <li>
              {next && (
                <a
                  href={"http://localhost:8000/" + next.frontmatter.path}
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
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
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

/*
query MyQuery {
allFile(filter: {sourceInstanceName: {eq: "blog"}, relativeDirectory: {eq: "hello-world"}}) {
    edges {
      node {
        name
        relativeDirectory
        publicURL
      }
    }
  }
}
*/

import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import { gridPlacement } from "./../components/utilities";
import { BlogFooter, BlogHeader, CommentForm, Comment } from "./../components";
import MobileBlogGadget from "./../components/MobileBlogGadget";

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

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;
  const [comments, setComments] = useState([]);
  const [isCommentDisabled, setIsCommentDisabled] = useState(false);
  const { previous, next } = data;

  const getComments = () => {
    fetch(
      `http://mktcc.com/brian/comments.php/?postName=${data.markdownRemark.frontmatter.slug}`
    )
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setComments(res);
        setIsCommentDisabled(false);
      });
  };

  const postComment = (name, email, comment) => {
    console.log("Post comment: ", name, email, comment);
    console.log(
      JSON.stringify({
        postName: `${data.markdownRemark.frontmatter.slug}`,
        authName: name,
        authEmail: email,
        commentBody: comment,
      })
    );
    setIsCommentDisabled(true);

    fetch(
      `http://mktcc.com/brian/comments.php/?postName=${data.markdownRemark.frontmatter.slug}`,
      {
        method: "POST",
        body: JSON.stringify({
          postName: `${data.markdownRemark.frontmatter.slug}`,
          authName: name,
          authEmail: email,
          commentBody: comment,
        }),
        headers: { "Content-type": "application/json" },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log("Post Response: ", res);
        getComments();
      });
  };

  useEffect(() => {
    getComments();
  }, []);

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
                      "https://brianstefanovich.com/blog/" +
                      previous.frontmatter.slug
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
                    href={
                      "https://brianstefanovich.com/blog/" +
                      next.frontmatter.slug
                    }
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

          <CommentForm postComment={postComment} />

          {comments.map((elm, i) => {
            return (
              <Comment
                key={i}
                user_name={elm.user_name}
                comment_date={elm.comment_date}
                comment_body={elm.comment_body}
                isCommentDisabled={isCommentDisabled}
              />
            );
          })}
          <footer>
            <BlogFooter />
          </footer>
        </article>
      </div>
      <MobileBlogGadget />
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
        slug
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

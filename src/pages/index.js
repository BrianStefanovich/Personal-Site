import React, { useState, useEffect, useRef } from "react";
import {
  HeroBanner,
  NavBar,
  AboutMe,
  ThingsIBuild,
  OtherProjects,
  SideGadgetLeft,
  SideGadgetRigth,
  MobileGadget,
  CheckMyBlog,
  Footer,
  content,
} from "./../components";
import useIsInViewport from "use-is-in-viewport";

export default function Index(props) {
  const [navItemActive, setNavItemActive] = useState("none");

  const [isAboutInViewport, aboutTargetRef] = useIsInViewport({
    threshold: 20,
  });

  const [isExperienceInViewport, experienceTargetRef] = useIsInViewport({
    threshold: 30,
  });

  const [isBlogInViewport, blogTargetRef] = useIsInViewport({
    threshold: 30,
  });

  const [isHeroInViewport, heroTargetRef] = useIsInViewport({
    threshold: 10,
  });

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const blogRef = useRef(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToExperience = () => {
    if (experienceRef.current) {
      experienceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToBlog = () => {
    if (blogRef.current) {
      blogRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (isHeroInViewport) {
      setNavItemActive("hero");
    } else if (isAboutInViewport) {
      setNavItemActive("about");
    } else if (isExperienceInViewport) {
      setNavItemActive("experience");
    } else if (isBlogInViewport) {
      setNavItemActive("blog");
    }
  }, [
    isAboutInViewport,
    isBlogInViewport,
    isExperienceInViewport,
    isHeroInViewport,
  ]);

  useEffect(() => {
    console.log("Item active on nav is: ", navItemActive);
  }, [navItemActive]);

  return (
    <div className="blackBackground">
      <MobileGadget />
      <SideGadgetLeft />
      <SideGadgetRigth />
      <div className="bx--grid">
        <NavBar
          scrollToAbout={scrollToAbout}
          scrollToExperience={scrollToExperience}
          scrollToBlog={scrollToBlog}
          showAbout={aboutRef.current ? true : false}
          showExperience={experienceRef.current ? true : false}
          showBlog={blogRef.current ? true : false}
          aboutNav={navItemActive === "about"}
          experienceNav={navItemActive === "experience"}
          blogNav={navItemActive === "blog"}
          heroNav={navItemActive === "hero"}
        />
        <HeroBanner
          contentData={content.heroBanner.data}
          navRef={heroTargetRef}
        />
        <AboutMe
          contentData={content.aboutMe.data}
          navRef={aboutTargetRef}
          scrollRef={aboutRef}
        />
        <ThingsIBuild
          contentData={content.thingsIBuild.data}
          navRef={experienceTargetRef}
          scrollRef={experienceRef}
        />
        <OtherProjects contentData={content.otherProjects.data} />
        <CheckMyBlog
          contentData={props.data.allMarkdownRemark.edges}
          navRef={blogTargetRef}
          scrollRef={blogRef}
        />
        <Footer />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 3
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            path
            description
            title
            date
	    slug
            thumbnail {
              publicURL
            }
          }
        }
      }
    }
  }
`;

import React, { useState, useEffect } from "react";
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
    threshold: 10,
  });

  const [isExperienceInViewport, experienceTargetRef] = useIsInViewport({
    threshold: 10,
  });

  const [isBlogInViewport, blogTargetRef] = useIsInViewport({
    threshold: 10,
  });

  useEffect(() => {
    if (isAboutInViewport) {
      setNavItemActive("about");
    } else if (isExperienceInViewport) {
      setNavItemActive("experience");
    } else if (isBlogInViewport) {
      setNavItemActive("blog");
    }
  }, [isAboutInViewport, isBlogInViewport, isExperienceInViewport]);

  useEffect(() => {
    console.log("Item active on nav is: ", navItemActive);
  }, [navItemActive]);

  return (
    <div className="blackBackground">
      <MobileGadget />
      <SideGadgetLeft />
      <SideGadgetRigth />
      <div className="bx--grid">
        <NavBar />
        <HeroBanner data={content.heroBanner.data} />
        <AboutMe data={content.aboutMe.data} navRef={aboutTargetRef} />
        <ThingsIBuild
          data={content.thingsIBuild.data}
          navRef={experienceTargetRef}
        />
        <OtherProjects data={content.otherProjects.data} />
        <CheckMyBlog data={content.checkMyBlog.data} navRef={blogTargetRef} />
        <Footer />
      </div>
    </div>
  );
}

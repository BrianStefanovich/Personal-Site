import React from "react";
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

const BlogIndex = (props) => {
  return (
    <div className="blackBackground">
      <MobileGadget />
      <SideGadgetLeft />
      <SideGadgetRigth />
      <div className="bx--grid">
        <NavBar />
        <HeroBanner data={content.heroBanner.data} />
        <AboutMe data={content.aboutMe.data} />
        <ThingsIBuild data={content.thingsIBuild.data} />
        <OtherProjects data={content.otherProjects.data} />
        <CheckMyBlog data={content.checkMyBlog.data} />
        <Footer />
      </div>
    </div>
  );
};

export default BlogIndex;

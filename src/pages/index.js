import React from "react"
import HeroBanner from "./../components/HeroBanner"
import NavBar from "./../components/NavBar"
import AboutMe from "./../components/AboutMe"
import ThingsIBuild from "./../components/ThingsIBuild"
import OtherProjects from "./../components/OtherProjects"
import SideGadgetLeft from "./../components/SideGadgetLeft"
import SideGadgetRigth from "./../components/SideGadgetRigth"
import MobileGadget from "./../components/MobileGadget"
import CheckMyBlog from "./../components/CheckMyBlog"

const BlogIndex = props => {
  return (
    <div className="blackBackground">
      <MobileGadget />
      <SideGadgetLeft />
      <SideGadgetRigth />
      <div className="bx--grid">
        <NavBar />
        <div className="hero">
          <HeroBanner />
        </div>
        <AboutMe />
        <ThingsIBuild />
        <OtherProjects />
        <CheckMyBlog />
      </div>
    </div>
  )
}

export default BlogIndex

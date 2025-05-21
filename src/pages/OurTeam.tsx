import TeamBanner from "../assets/images/banners/team-banner.jpeg";
import { lazy } from "react";

// =========== import ====================

const AboutOwner = lazy(() => import("../components/Team/AboutOwner"));
const CommanBanner = lazy(() => import("../components/support/CommanBanner"));

export default function OurTeam() {
  return (
    <>
      <CommanBanner
        image={TeamBanner}
        title="Our Team"
        desc="At Shree Krishna Digital Solution Pvt Ltd, our team is our biggest strength. We are developers, designers, marketers, and problem-solvers who work with one 
mission: your success."
      />
      <AboutOwner />
    </>
  );
}

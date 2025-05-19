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
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, sequi accusamus consectetur dolore numquam ut aspernatur quidem, culpa unde consequatur distinctio. Dignissimos, ea quasi officiis a similique numquam vero molestiae."
      />
      <AboutOwner />
    </>
  );
}

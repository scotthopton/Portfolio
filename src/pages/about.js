import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>
        I am a second year engineering student at the University of Western
        Ontario, hoping to graduate with degrees in software engineering and
        business administration. Go Mustangs!
      </p>
      <StaticImage width="500" alt="" src="../images/stang.jpeg" />
      <p>
        My current career aspirations are either to pursue software engineering
        or product management.
      </p>
      <StaticImage width="500" alt="" src="../images/swe.jpeg" />
      <p>
        I am currently working as a software developer, and am always looking
        for more opportunities to meet new people and develop my skills. I
        recently fell in love with human-centered design, and feel like projects
        that benefit others are a fun and rewarding way to gain valuable
        experience. Here's a physical prototype for a recent project to improve
        hospital-grade pulse oximeters:
      </p>
      <StaticImage width="500" alt="" src="../images/pulse.JPG" />
      <p>If you'd like to chat, or go for a skate...</p>
      <StaticImage width="500" alt="" src="../images/skate.PNG" />
      <p>Don't hesitate to reach out :)</p>
    </Layout>
  );
};

export default AboutPage;

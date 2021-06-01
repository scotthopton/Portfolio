import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Hey, I'm Scott!">
      <p>
        This is my portfolio. Its pretty bare-bones right now, just until I
        become more comforable with the complexity of many components and
        styling.
      </p>
      <p>Here's a blurry picture of me since I do not have any proper ones:</p>
      <StaticImage width="500" alt="" src="../images/me.jpg" />
      <p>
        If you'd liked to learn more, feel free to check out my 'About Me' page,
        or visit my{" "}
        <a href="https://www.linkedin.com/in/scotthopton/">LinkedIn</a>!
      </p>
    </Layout>
  );
};

export default IndexPage;

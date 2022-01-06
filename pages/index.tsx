import type { NextPage } from "next";
import * as types from "../styles/typography.css";
import * as layout from "../styles/test.css";
import Heading from "../components/typography/Heading";

const Home: NextPage = () => {
  return (
    <div className={layout.layout}>
      <Heading sizeKey="hero">my big hero</Heading>
      <Heading sizeKey="h1">my h1</Heading>
      <Heading sizeKey="h2">my h2</Heading>
      <p>my paragraph</p>

      <small>my label</small>
      <strong>my bold text</strong>
    </div>
  );
};

export default Home;

import type { NextPage } from "next";
import * as types from "../styles/typography.css";
import * as layout from "../styles/test.css";

const Home: NextPage = () => {
  return (
    <div className={layout.layout}>
      <h1 className={types.hero}>my big hero</h1>
      <h1>my h1</h1>
      <h2>my h2</h2>
      <p>my paragraph</p>

      <small>my label</small>
      <strong>my bold text</strong>
    </div>
  );
};

export default Home;

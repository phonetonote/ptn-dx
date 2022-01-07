import type { NextPage } from "next";
import * as layout from "../styles/app.css";
import Heading from "../components/typography/Heading";
import Text from "../components/typography/Text";

const Home: NextPage = () => {
  return (
    <div className={layout.layout}>
      <Heading sizeKey="hero">my big hero</Heading>
      <Heading sizeKey="h1">my h1</Heading>
      <Heading sizeKey="h2">my h2</Heading>
      <Text>my paragraph</Text>

      <Text sizeKey="small">my label</Text>
      <Text fontWeightKey="bold">my bold text</Text>
    </div>
  );
};

export default Home;

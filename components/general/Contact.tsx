import styles from "@/styles/Contact.module.css";
import { fontSyne, fontSatoshi, fontRobotoMono } from "@/pages/_app";
import Button from "../base/Button";
import InfoBlock from "./InfoBlock/InfoBlock";

const Contact = () => {
  return (
    <InfoBlock
      sectionName="Contact"
      title="Let’s bring your brand to the next level"
      iconPath="/images/arrows.svg"
      blockType="normal"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua."
      buttonContent="get in touch"
    />
  );
};

export default Contact;

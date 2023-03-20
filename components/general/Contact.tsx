import InfoBlock from "./InfoBlock/InfoBlock";

type Props = {
  isPhoneSize: boolean;
};

const Contact = ({ isPhoneSize }: Props) => {
  return (
    <InfoBlock
      sectionName="Contact"
      title={"Let’s bring your brand to the next level"}
      iconPath="/images/design_icon.svg"
      blockType="normal"
      content="Contact us to explore partnership opportunities and discover how we can work together to drive innovation and create positive change."
      buttonContent="get in touch"
      isPhoneSize={isPhoneSize}
    />
  );
};

export default Contact;

import InfoBlock from "./InfoBlock/InfoBlock";

type Props = {
  isPhoneSize: boolean;
};

const HowWeWork = ({ isPhoneSize }: Props) => {
  return (
    <InfoBlock
      sectionName="How we work"
      title={"We help our clients\nsucceed with innovative\nstrategies."}
      iconPath="/images/star.svg"
      blockType="smallHeading"
      content="Our team of experts is dedicated to delivering real results through creativity, strategic
          thinking, and technical expertise. Whether it‘s developing a new marketing campaign,
          designing a website, or creating a mobile app, we are always pushing the boundaries of
          what’s possible to help our clients stay ahead of the curve."
      buttonContent="our services"
      isPhoneSize={isPhoneSize}
    />
  );
};

export default HowWeWork;

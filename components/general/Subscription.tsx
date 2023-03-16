import InfoBlock from "./InfoBlock/InfoBlock";

type Props = {
  isPhoneSize: boolean;
};

const Subscription = ({ isPhoneSize }: Props) => {
  return (
    <InfoBlock
      sectionName="Newsletter"
      title="Get the latest news into your inbox"
      iconPath="/images/star.svg"
      blockType="input"
      content="Design your own brand, one click at a time. --Subscribe to our newsletter to get the most up-to-date information."
      isPhoneSize={isPhoneSize}
    />
  );
};

export default Subscription;

import InfoBlock, { InfoBlockType } from "./InfoBlock/InfoBlock";

export interface IHowWeWork {
  sectionName: string;
  title: string;
  iconPath: string;
  blockType: InfoBlockType;
  content: string;
  buttonContent: string;
}

const HowWeWork = (props: IHowWeWork) => {
  return (
    <InfoBlock
      sectionName={props.sectionName}
      title={props.title}
      iconPath={props.iconPath}
      blockType={props.blockType}
      content={props.content}
      buttonContent={props.buttonContent}
      isPhoneSize
    />
  );
};

export default HowWeWork;

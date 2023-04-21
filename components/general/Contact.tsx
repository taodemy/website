import InfoBlock from "./InfoBlock/InfoBlock";
import { InfoBlockType } from "./InfoBlock/InfoBlock";

export interface IContact {
  sectionName: string;
  title: string;
  iconPath: string;
  blockType: InfoBlockType;
  content: string;
  buttonContent: string;
  isPhoneSize: boolean;
}

const Contact = (props: IContact) => {
  return (
    <InfoBlock
      sectionName={props.sectionName}
      title={props.title}
      iconPath={props.iconPath}
      blockType={props.blockType}
      content={props.content}
      buttonContent={props.buttonContent}
      isPhoneSize={props.isPhoneSize}
    />
  );
};

export default Contact;

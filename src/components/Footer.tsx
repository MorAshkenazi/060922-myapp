import { FunctionComponent } from "react";

interface FooterProps {
  devName: string;
  devYear: string;
}

const Footer: FunctionComponent<FooterProps> = ({ devName, devYear }) => {
  return (
    <p>
      Developed by {devName} in {devYear}
    </p>
  );
};

export default Footer;

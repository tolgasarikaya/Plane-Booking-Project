import { ReactNode } from "react";
import Icon from "../assets/icons/Icon";

interface IconContainerProps {
  children: ReactNode;
}

const IconContainer = ({ children }: IconContainerProps) => {
  return (
    <div className="flex cursor-pointer flex-row items-center gap-1">
      {children}
    </div>
  );
};

const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between p-5 font-bold">
      <IconContainer>
        <div className="flex size-8 items-center justify-center rounded-full bg-[#4a0097]">
          <Icon className="" fill="#fff" type="plane" />
        </div>
        <h1 className="text-lg">PLANE SCAPE</h1>
      </IconContainer>
      <div className="flex flex-row gap-10">
        <IconContainer>
          <Icon className="" fill="#4a0097" type="label" />
          <button className="text-sm">Deals</button>
        </IconContainer>
        <IconContainer>
          <Icon className="" fill="#4a0097" type="earth" />
          <button className="text-sm">Discover</button>
        </IconContainer>
        <IconContainer>
          <Icon className="size-8" fill="#4a0097" type="profile" />
          <button className="text-sm">Tolga Sarıkaya</button>
        </IconContainer>
      </div>
    </header>
  );
};

export default Header;

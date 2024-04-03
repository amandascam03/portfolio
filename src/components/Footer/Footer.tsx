import { Contacts } from "../Contacts/Contacts";
import { Description } from "../Description/Description";
import "./Footer.css"

export const Footer = () => {
  return (
    <>
      <footer className="center">
        <Contacts />
        <Description desc="Copyright © Amanda Araujo · 2024" size="1em" />
      </footer>
    </>
  );
};

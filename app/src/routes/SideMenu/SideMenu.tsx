import { Img, Menu, MenuLink, MenuPart } from "./SideMenu.style";

import logo from "../../assets/logo.png";

export default function SideMenu() {
  return (
    <Menu>
      <MenuPart>
        <Img src={logo} alt="Logo de Miru" />
      </MenuPart>
      <MenuPart>
        <MenuLink href="/">
          <span>Home</span>
        </MenuLink>
        <MenuLink href="/random">Random anime</MenuLink>
        <MenuLink href="/trending">Trending</MenuLink>
      </MenuPart>
      <MenuPart>
        <MenuLink href="/search">Search anime</MenuLink>
      </MenuPart>
      <MenuPart>
        <MenuLink href="/user">Profile</MenuLink>
        <MenuLink href="/user">My list</MenuLink>
      </MenuPart>
    </Menu>
  );
}

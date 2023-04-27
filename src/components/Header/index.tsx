import React from "react";
import ProfileImage from '../../assets/images/profile.png';

import { HeaderContainer, HeaderText, HeaderText1, HeaderText2, ProfilePicture } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderText>
        <HeaderText1>déjà</HeaderText1>
        <HeaderText2>Brew</HeaderText2>
      </HeaderText>
      <ProfilePicture source={ProfileImage} />
    </HeaderContainer>
  );
}

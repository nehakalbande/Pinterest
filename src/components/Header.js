import { IconButton } from "@material-ui/core";
import PinterestIcon from "@material-ui/icons/Pinterest";
import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import FaceIcon from "@material-ui/icons/Face";
import TextsmsIcon from "@material-ui/icons/Textsms";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

function Header() {
  return (
    <Wrapper>
      <LogoWrapper>
        <IconButton>
          <PinterestIcon />
        </IconButton>
      </LogoWrapper>
      <HomePageButton>
        <a>Home</a>
      </HomePageButton>
      <TodayButton>
        <a>Today</a>
      </TodayButton>
      <SearchWrapper>
        <SearchBarWrapper>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <form>
            <input placeholder="Search" type="text" />
            {/* <button type="submit" /> */}
          </form>
        </SearchBarWrapper>
      </SearchWrapper>
      <IconsWrapper>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <TextsmsIcon />
        </IconButton>
      </IconsWrapper>
      <IconsWrappers>
        <IconButton>
          <FaceIcon />
        </IconButton>
        <IconButton>
          <KeyboardArrowDownIcon />
        </IconButton>
      </IconsWrappers>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 12px 4px 4px 16px;
  background-color: #ffcc66;
  color: black;
`;

const LogoWrapper = styled.div`
  .MuiSvgIcon-root {
    color: #e60023;
    font-size: 32px;
    cursor: pointer;
  }
  :hover {
    background-color: #e1e1e1;
    border-radius: 20px;
  }
`;
const HomeButtons = styled.div`
  display: flex;
  height: 48px;
  min-width: 100px;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;
  @media (max-width: 400px) {
    margin-right: 3px;
    min-width: 30px;
  }
  @media (max-width: 600px) {
    min-width: 45px;
  }
  @media (max-width: 800px) {
    min-width: 60px;
  }
`;
const HomePageButton = styled(HomeButtons)`
  background-color: #ffcc66;

  a {
    text-decoration: none;
    color: black;
    font-weight: 700;
  }
  :hover {
    background-color: #e1e1e1;
  }
`;

const TodayButton = styled(HomeButtons)`
  background-color: #ffcc66;

  a {
    text-decoration: none;
    color: black;
    font-weight: 700;
  }
  :hover {
    background-color: #e1e1e1;
  }
  @media (max-width: 460px) {
    display: none;
  }
`;

const SearchWrapper = styled.div`
  flex: 1;
`;

const SearchBarWrapper = styled.div`
  background-color: #efefef;
  display: flex;
  height: 48px;
  width: 100%;
  border-radius: 50px;
  border: none;
  padding-left: 10px;

  @media (max-width: 800px) {
    width: 98%;
  }
  @media (max-width: 600px) {
    width: 93%;
  }
  @media (max-width: 400px) {
    width: 80%;
  }

  form {
    display: flex;
    flex: 1;
  }

  form > input {
    background-color: transparent;
    border: none;
    outline-width: 0;
    width: 100%;
    margin-left: 3px;
    font-size: 14px;
  }

  form > button {
    display: none;
    // outline-width:0;
    // border:none;
  }

  input:focus {
    oultne: none;
  }
`;

const IconsWrapper = styled.div`
  .MuiSvgIcon-root:hover {
    background-color: #e1e1e1;
  }
  .MuiSvgIcon-root {
    font-size: 27px;
  }

  @media (max-width: 460px) {
    display: none;
  }
`;

const IconsWrappers = styled.div`
  .MuiSvgIcon-root:hover {
    background-color: #e1e1e1;
  }

  .MuiSvgIcon-root {
    font-size: 27px;
  }

  // @media (max-width: 450px) {
  //   display: none;
  // }
`;

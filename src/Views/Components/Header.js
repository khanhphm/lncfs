import React from "react";
import AuthDialogs from "../../authModal";
import { auth } from "../../firebase";
import { Menu, MenuItem } from "@material-ui/core";
import "./Header.css";
import Avatar from "@material-ui/core/Avatar";

function Header({ user }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="header">
      <img
        className="header__LeftLogo"
        src="http://bizweb.dktcdn.net/thumb/grande/100/343/398/products/download-94a10140-7042-4f87-88c0-dbaed413dcef.jpg?v=1567497298410"
        alt=""
      />
      {user ? (
        <div className="header__Right">
          {/* <button className="button" onClick={() => auth.signOut()}>
            
          </button> */}

          <Avatar
            className="header__RightProfileImg"
            onClick={handleClick}
            style={{ height: "25px", width: "25px" }}
          >
            {user.displayName?.charAt(0)}
          </Avatar>

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem> */}
            <MenuItem onClick={() => auth.signOut()}>Đăng Xuất</MenuItem>
          </Menu>
        </div>
      ) : (
        <AuthDialogs label="Đăng Nhập/Đăng Ký" />
      )}
    </div>
  );
}

export default Header;

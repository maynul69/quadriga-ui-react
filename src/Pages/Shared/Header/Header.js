import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import "./Header.css"
// import useAuth from "../../../Hooks/useAuth";

import { Link, NavLink } from "react-router-dom";

const Header = () => {
  // const { user, logOut } = useAuth();
  const style = {
    color: "white",
    textDecoration: "none",
    margin: "0 5px"
  };
  return (
    <div>
      <>
        <Navbar
          bg="dark"
          variant="dark"
          sticky="top"
          collapseOnSelect
          expand="lg"
        >
          <Container>
            <Navbar.Brand to="#home" style={{ color: "white" }}>
              Quadrigaa
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <NavLink
                classname="mx-2 text-decoration-none"
                to="/home"
                style={style}
              >
                Home
              </NavLink>
              <NavLink
                classname="mx-2 text-decoration-none"
                to="/explore"
                style={style}
              >
                Explore More
              </NavLink>
              <NavLink
                classname="mx-2 text-decoration-none"
                to="/about"
                style={style}
              >
                About Us
              </NavLink>

              {/* {user?.email ? (
                <NavLink
                  style={{ color: "white" }}
                  as={Link}
                  classname="mx-2 text-decoration-none"
                  to="/addpackage"
                >
                  Add Package
                </NavLink>
              ) : (
                ""
              )}
              {user?.email ? (
                <NavLink
                  style={{ color: "white" }}
                  as={Link}
                  classname="mx-2 text-decoration-none"
                  to="/mybookings"
                >
                  My Bookings
                </NavLink>
              ) : (
                ""
              )}
              {user?.email ? (
                <NavLink
                  style={{ color: "white" }}
                  as={Link}
                  classname="mx-2 text-decoration-none"
                  to="/mngordrs"
                >
                  Manage Orders
                </NavLink>
              ) : (
                ""
              )} */}

              {/* {user?.email ? (
                <Button onClick={logOut} variant="light">
                  Logout
                </Button>
              ) : (
                <NavLink
                  style={{ color: "white" }}
                  as={Link}
                  classname="mx-2 text-decoration-none"
                  to="/login"
                >
                  Login
                </NavLink>
              )} */}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default Header;

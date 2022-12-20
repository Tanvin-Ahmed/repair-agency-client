import React, { useContext, useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { appContext } from "../../../App";
import logo from "../../../img/logo/logo1.png";
import { firebaseSignOut } from "../../Login/LoginManager";
import "./NavBar.css";

const NavBar = () => {
  const { loggedInUser, setLoggedInUser } = useContext(appContext);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogOut = () => {
    localStorage.removeItem("user");
    setLoggedInUser({});
    firebaseSignOut();
  };

  useEffect(() => {
    if (!loggedInUser?.email) return;
    fetch(`http://localhost:5000/isAdmin/${loggedInUser?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setIsAdmin(data);
      })
      .catch((err) => console.log(err));
  }, [loggedInUser?.email]);

  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      expand="lg"
      className="nav-bg"
      variant="dark"
    >
      <Container>
        <Navbar.Brand>
          <img
            style={{ background: "white", width: "3rem" }}
            src={logo}
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="m-auto"></div>
          <Nav className="d-flex align-items-center">
            <Nav.Link>
              <Link className="navLink-text" to="/">
                HOME
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="navLink-text" to="/myOrder">
                MY ORDER
              </Link>
            </Nav.Link>
            {isAdmin && (
              <Nav.Link>
                <Link className="navLink-text" to="/admin">
                  ADMIN
                </Link>
              </Nav.Link>
            )}
            <Nav.Link>
              <Link className="navLink-text">ABOUT</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="navLink-text">CONTACT US</Link>
            </Nav.Link>
            <Nav.Link>
              {loggedInUser?.email ? (
                <button className="btn btn-light" onClick={handleLogOut}>
                  LogOut
                </button>
              ) : (
                <Link className="btn btn-light" to="/login">
                  Login
                </Link>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

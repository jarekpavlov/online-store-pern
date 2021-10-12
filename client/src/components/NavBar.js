import React, {useContext} from 'react';
import {Context} from "../index";
import {Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {SHOP_ROTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const NavBar = observer( () => {
    const {user} = useContext(Context);
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:'white'}} to={SHOP_ROTE}>Buy a device</NavLink>
                {user._isAuth ?
                    <Nav className="ms-auto" style={{color:'white', marginRight: 10}}>
                        <Button variant={"outline-light"}>Admin panel</Button>
                        <Button variant={"outline-light"} className="ms-1">Enter</Button>
                    </Nav>
                    :
                    <Nav className="ms-auto" style={{color:'white', marginRight: 10}}>
                        <Button onClick={()=>user.setIsAuth(true)} variant={"outline-light"}>Authorization</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
})

export default NavBar;
import React, {useContext} from 'react';
import {Context} from "../index";
import {Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {ADMIN_ROTE, LOGIN_ROTE, SHOP_ROTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";


const NavBar = observer( () => {
    const {user} = useContext(Context);
    const history = useHistory()

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:'white'}} to={SHOP_ROTE}>Buy a device</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color:'white', marginRight: 10}}>
                        <Button variant={"outline-light"} onClick={() => history.push(ADMIN_ROTE)}>Admin panel</Button>
                        <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROTE)} className="ml-4">Logout</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color:'white', marginRight: 10}}>
                        <Button onClick={()=>user.setIsAuth(true)} variant={"outline-light"}>Authorization</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
})

export default NavBar;
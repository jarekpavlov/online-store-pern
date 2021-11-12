import React, {useContext} from 'react';
import {Container, ListGroup} from "react-bootstrap";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const TypeBar = observer(() => {
    const {device} = useContext(Context);
    return (
        <Container>
            <ListGroup>
                {device.types.map(item=>(
                    <ListGroup.Item
                        style={{cursor: "pointer"}}
                        active={item.id === device.selectedType.id}
                        key = {item.id}
                        onClick={()=>device.setSelectedType(item)}
                    >
                        {item.name}
                    </ListGroup.Item>
                ))}

            </ListGroup>
        </Container>
    );
})

export default TypeBar;
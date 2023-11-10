import React from "react";
import styled from "styled-components";

const PropertiesBarView = styled.div`
    display: flex;
    flex-direction: column;
    background-color: red;
    flex: 0.5;
    width: 15vw
`
export const PropertiesBar = ({}) => {
    return (
        <PropertiesBarView>PropertiesBar</PropertiesBarView>
    )
}
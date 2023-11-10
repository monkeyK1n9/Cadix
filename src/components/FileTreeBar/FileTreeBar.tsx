import React from "react";
import styled from "styled-components";

const FileTreeBarView = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0.5;
    background-color: blue;
    width: 15vw
`
export const FileTreeBar = ({}) => {
    return (
        <FileTreeBarView>FileTreeBar</FileTreeBarView>
    )
}
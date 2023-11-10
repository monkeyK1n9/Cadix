import React from "react";
import styled from 'styled-components'

const SecondaryHeaderView = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0.125;
    height: 12.5vh;
    background-color: green;
`
export const SecondaryHeader = ({}) => {
    return (
        <SecondaryHeaderView>SecondaryHeaderView</SecondaryHeaderView>
    )
}
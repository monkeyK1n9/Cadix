import styled from "styled-components";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1
`
const DisplayView = styled.div`
    display: flex;
    flex: 0.85
`
const InfoView = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0.15;
`


export default function ModelScreen ({}) {
    return (
        <Container>
            <PrimaryHeader />
            <SecondaryHeader />
            <DisplayView>
                <InfoView>
                    <PropertiesBar />
                    <FileTreeBar />
                </InfoView>
                <ViewPort />
            </DisplayView>
        </Container>
    )
}
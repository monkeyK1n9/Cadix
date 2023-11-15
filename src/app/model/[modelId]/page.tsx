"use client"

import { FileTreeBar } from "@/components/FileTreeBar/FileTreeBar";
import { PrimaryHeader } from "@/components/PrimaryHeader/PrimaryHeader";
import { PropertiesBar } from "@/components/PropertiesBar/PropertiesBar";
import { SecondaryHeader } from "@/components/SecondaryHeader/SecondaryHeader";
import { ViewPort } from "@/components/ViewPort/ViewPort";
import { useParams } from "next/navigation";


// const Container = styled.div`
//     display: flex;
//     flex-direction: column;
//     flex: 1
// `
// const DisplayView = styled.div`
//     display: flex;
//     flex: 0.85
// `
// const InfoView = styled.div`
//     display: flex;
//     flex-direction: column;
//     flex: 0.15;
// `

export default function ModelPage () {
    const params = useParams();
    return (
        // <Container>
        //     <PrimaryHeader />
        //     <SecondaryHeader />
        //     <DisplayView>
        //         <InfoView>
        //             <PropertiesBar />
        //             <FileTreeBar />
        //         </InfoView>
        //         <ViewPort />
        //     </DisplayView>
        // </Container>
        <div>
            <ViewPort modelId={params.modelId as string}/>
        </div>
    )
}
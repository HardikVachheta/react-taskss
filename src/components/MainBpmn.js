import React, { useEffect, useRef } from 'react';
import ReactBpmn from 'react-bpmn';

export const MainBpmn = ({ getDiaId }) => {
    const bpmnRef = useRef();

    function onShown() {
        console.log('Diagram shown');
        highlightElement('yourElementId'); // Replace 'yourElementId' with the actual element ID you want to highlight
    }

    function highlightElement(elementId) {
        const bpmnViewer = bpmnRef.current.bpmnViewer;
        const elementRegistry = bpmnViewer.get('elementRegistry');

        const element = elementRegistry.get(elementId);

        if (element) {
            // Change the element's style to highlight it (e.g., change the stroke color to blue)
            bpmnViewer.get('canvas').addMarker(elementId, 'highlight');
        }
    }

    return (
        <div style={{ height: '60vh' }}>
            <ReactBpmn
                url={`http://localhost:3000/api/diagram?processDefinitionId=${getDiaId}`}
                onShown={onShown}
                ref={bpmnRef}
                style={{ height: '100vh' }}
            />
        </div>
    );
};












// import React from 'react'
// import ReactBpmn from 'react-bpmn';
// import '../data/dia.css'

// export const MainBpmn = ({getDiaId}) => {
//     function onShown() {
//         console.log('diagram shown');
//     }

//     function onLoading() {
//         console.log('diagram loading');
//     }

//     function onError(err) {
//         console.log('failed to show diagram');
//     }
//     return (
//         <div style={{ height: "60vh" }} >

//             <ReactBpmn
//                 url={`http://localhost:3000/api/diagram?processDefinitionId=${getDiaId}`}
//                 onShown={onShown}
//                 onLoading={onLoading}
//                 onError={onError}
//                 style={{ height: "100vh" }}

//             />

//             <script src="https://unpkg.com/react@18/umd/react.development.js" />
//             <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" />
//             <script src="../node_modules/bpmn-js/dist/bpmn-navigated-viewer.development.js" />
//             <script src="../node_modules/react-bpmn/dist/react-bpmn.umd.js" />
//             <script src="https://unpkg.com/@babel/standalone@7.12.12/babel.min.js" />
//         </div>
//     )
// }





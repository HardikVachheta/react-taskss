import React from 'react'
import ReactBpmn from 'react-bpmn';
import '../data/dia.css'

export const MainBpmn = ({getDiaId}) => {
    function onShown() {
        console.log('diagram shown');
    }

    function onLoading() {
        console.log('diagram loading');
    }

    function onError(err) {
        console.log('failed to show diagram');
    }
    return (
        <div style={{ height: "60vh" }} >

            <ReactBpmn
                url={`http://localhost:3000/api/diagram?processDefinitionId=${getDiaId}`}
                onShown={onShown}
                onLoading={onLoading}
                onError={onError}
                style={{ height: "100vh" }}

            />

            <script src="https://unpkg.com/react@18/umd/react.development.js" />
            <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" />
            <script src="../node_modules/bpmn-js/dist/bpmn-navigated-viewer.development.js" />
            <script src="../node_modules/react-bpmn/dist/react-bpmn.umd.js" />
            <script src="https://unpkg.com/@babel/standalone@7.12.12/babel.min.js" />
        </div>
    )
}





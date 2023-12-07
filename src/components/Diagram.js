import React, { useEffect, useState } from 'react'
import BpmnViewer from './BpmnViewer';

export const Diagram = () => {
  const [bpmnXml, setBpmnXml] = useState('');

  // Fetch BPMN XML from your API or another source
  useEffect(() => {
    // Replace this with your API call or source to get BPMN XML
    fetch('http://localhost:3000/api/diagram?processDefinitionId=ReviewInvoice:1:4f474de7-67f7-11ee-82fa-7845c4ade527')
      .then((response) => response.text())
      .then((data) => setBpmnXml(data))
      .catch((error) => {
        console.error('Error fetching BPMN XML:', error);
      });
  }, []);

  return (
    <div>
      <h1>BPMN Viewer</h1>
      <BpmnViewer bpmnXml={bpmnXml} />
    </div>
  );
};

export default Diagram;


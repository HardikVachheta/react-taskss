import React, { useEffect, useRef } from 'react';
import BpmnViewer from 'bpmn-js';

const MyBpmnViewer = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const viewer = new BpmnViewer();

    const bpmnXml = `<?xml version="1.0" encoding="UTF-8"?>
      <bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL"
        xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"
        xmlns:camunda="http://camunda.org/schema/1.0/bpmn" xmlns:di="http://www.omg.org/spec/DD/20100524/DI"
        id="Definitions_1k1vca8" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler"
        exporterVersion="4.12.0">
        <!-- Your BPMN XML here -->
      </bpmn:definitions>`;

    viewer.importXML(bpmnXml, (err) => {
      if (err) {
        console.error('Error rendering BPMN diagram:', err);
      } else {
        viewer.attachTo(container);
      }
    });
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '500px' }} />
  );
};

export default MyBpmnViewer;

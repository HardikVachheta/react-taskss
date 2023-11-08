import React, { useEffect } from 'react';
import BpmnJS from 'bpmn-js/dist/bpmn-navigated-viewer.production.min.js'; // Adjust the path as needed
// import '../data/dia.css'

export const MainBpmn2 = ({ getDiaId }) => {
  useEffect(() => {
    const viewer = new BpmnJS({
      container: '#diagram'
    });

    async function showDiagram(diagramXML) {
      await viewer.importXML(diagramXML);
      const overlays = viewer.get('overlays');
      const elementRegistry = viewer.get('elementRegistry');

      // Option 1: Color via Overlay
      const shape = elementRegistry.get('reviewInvoice');

      const $overlayHtml = document.createElement('div');
      $overlayHtml.className = 'highlight-overlay';
      $overlayHtml.style.width = shape.width + 'px';
      $overlayHtml.style.height = shape.height + 'px';

      overlays.add('reviewInvoice', {
        position: {
          top: 0,
          left: 0
        },
        html: $overlayHtml
      });
    }

    // Load and show diagram
    fetch(`http://localhost:3000/api/diagram?processDefinitionId=${getDiaId}`)
      .then((response) => showDiagram(response))
      .then(showDiagram)
      .catch((error) => console.error('Failed to load diagram:', error));
  }, []);

  return (

    <div style={{ height: '100vh', position: 'relative' }}>
      <div id="diagram" style={{ width: '100%', height: '100%' }}></div>
    </div>
  );
};

export default MainBpmn2;

import React, { useRef } from 'react';
import JoditEditor from 'jodit-react';

const TextEditor = ({ setFieldValue, description }) => {
  const editor = useRef(null);
  const config = {
    readonly: false,
    height: 600,
  };
  return (
    <div>
      <JoditEditor
        ref={editor}
        value={description}
        config={config}
        tabIndex={2} // tabIndex of textarea
        onBlur={(newContent) => setFieldValue('description', newContent, false)}
        // onChange={(newContent) =>
        //   setFieldValue('description', newContent, false)
        // }
      />
    </div>
  );
};

export default TextEditor;

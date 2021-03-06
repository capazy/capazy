import React, { useState } from 'react';
import { useEffect } from 'react';

const Modal = (props) => {
  const { action, children } = props;
  const [isOpen, setOpen] = useState();

  useEffect(() => {
    setOpen(action);
  }, [action]);

  return (
    <div>
      {isOpen && (
        <div>
          <section className="fixed top-0 left-0 h-screen w-full bg-black bg-opacity-50 z-40 " />
          <section
            className="flex inset-0 max-w-6xl w-full z-50 bg-white m-auto h-full shadow-xl fixed rounded-lg justify-center overflow-auto"
            style={{ height: 'fit-content', maxHeight: '90vh' }}
          >
            {children}
          </section>
        </div>
      )}
    </div>
  );
};

export default Modal;

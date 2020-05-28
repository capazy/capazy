import React, { useState } from 'react';
import { useEffect } from 'react';

const Modal = (props) => {
  const { action, children } = props;
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setOpen(action);
  }, [action]);

  // const openHandler = () => {
  //   setOpen(true);
  // };

  // const closeHandler = () => {
  //   setOpen(false);
  // };

  return (
    <div>
      {isOpen && (
        <div>
          <section className="fixed top-0 left-0 h-screen w-full bg-black bg-opacity-50 z-30" />

          <section
            className="modal flex inset-0 max-w-xl w-full z-40 bg-white m-auto h-full shadow-xl fixed rounded-lg justify-center overflow-auto "
            style={{ height: '70vh' }}
          >
            {children}
          </section>
        </div>
      )}
    </div>
  );
};

export default Modal;

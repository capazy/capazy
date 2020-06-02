import React, { useState, useRef } from 'react';
import { useEffect } from 'react';
import useOutsideClick from '../../utils/useOutsideClik';

const Modal = (props) => {
  const { action, children } = props;
  const [isOpen, setOpen] = useState();
  const ref = useRef();

  useOutsideClick(ref, () => {
    if (isOpen) {
      setOpen(false);
    }
  });

  useEffect(() => {
    setOpen(action);
  }, [action]);

  return (
    <div ref={ref}>
      {isOpen && (
        <div>
          <section className="fixed top-0 left-0 h-screen w-full bg-black bg-opacity-50 z-30" />
          <section
            className="modal flex inset-0 max-w-xl w-full z-40 bg-white m-auto h-full shadow-xl fixed rounded-lg justify-center overflow-auto "
            style={{ height: '80vh' }}
          >
            {children}
          </section>
        </div>
      )}
    </div>
  );
};

export default Modal;

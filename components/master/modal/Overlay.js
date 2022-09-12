import React from "react";
import { motion, AnimatePresence } from 'framer-motion';

function Overlay (props) {
    const { children, closeModalHandler, visible, style = {}, offset = 0} = props;
    let variants = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        }
    }

  let modalContent = (
    <div className="overlay__overlay-wrapper" style={{top: `calc(100% + ${offset}px)`}}>
      <div onClick={() => closeModalHandler()} className="modal__backdrop-transparent" ></div>
      <AnimatePresence>
        <motion.div key="overlay-modal" initial="initial" animate="animate" exit="exit" variants={variants} transition={{duration: 0.2}} style={{ ...style }} className="overlay__overlay-box" >
          <div className="modal__children">{children}</div>
        </motion.div>
      </AnimatePresence>
    </div>
  );

  if (visible ) {
    return modalContent;
  } else {
    return null;
  }
}
export default React.memo(Overlay);

import React, { useContext, useRef } from "react";
import { CSSTransition } from 'react-transition-group'
import { AlertContext } from "../context/alert/alertContext";

export const Alert = () => {

  const { alert, hide } = useContext(AlertContext)
  const nodeRef = useRef(null)

  return (
    <CSSTransition
      in={alert.visible}
      timeout={{ enter: 200, exit: 200 }}
      classNames={'alert'}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      <div ref={nodeRef} className={`alert alert-${alert.type || 'warning'} alert-dismissible fade show`}>
        <strong>Внимание!{' '}</strong>{alert.text}
        <button onClick={hide} type="button" className="btn-close" aria-label="Close">
        </button>
        <span hidden='true'>&times;</span>
      </div>
    </CSSTransition >
  )
}
import React, { useRef } from "react";
import { PageControl } from "../../page-control";
import ReactToPrint from 'react-to-print';
import { Friends } from "../books";

export const Giftbook = () => {
  const componentRef = useRef(null);
  return (
    <PageControl>
      <>
        <ReactToPrint
          bodyClass="asdasd"
          content={() => componentRef.current}
          trigger={() => <button>Print this out!</button>}
        />
        
        <Friends ref={componentRef} />
      </>
    </PageControl>
  )
}
'use client';

import { useEffect, useRef } from 'react';
import './style.css';

function Nofity ({ menuRef }) {

  // const menuRef = useRef(null);

  return (
    
    <section ref={menuRef} className="simple-menu border border-solid border-slate-200">
    </section>
  )
}

export default Nofity;
'use client';

import { useEffect, useRef } from 'react';
import './style.css';
import Image from 'next/image';

function ChatSuport ({ menuRef }) {

  // const menuRef = useRef(null);

  return (
    
    <section ref={menuRef} className="menu-profile chat-suport border border-solid border-slate-200">
      <h2>chatsuport</h2>

      {/* simples divs para simular notificao em linha */}

      <div className="border-t border-b border-solid flex justify-between items-center">
        <div className="flex justify-between w-full items-center pr-4 pl-4">
        <div className="container-img cursor-pointer">
            
            </div>
          
          <div className="flex flex-col justify-between items-end">
            {/* <p className="text-sm font-semibold">Nome do usuario</p> */}
            <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>

      <div className="border-t border-b border-solid flex justify-between items-center">
        <div className="flex justify-between w-full items-center pr-4 pl-4">
          <div className="container-img cursor-pointer">
            
          </div>
          <div className="flex flex-col justify-between items-end">
            {/* <p className="text-sm font-semibold">Nome do usuario</p> */}
            <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>

      <div className="border-t border-b border-solid flex justify-between items-center">
        <div className="flex justify-between w-full items-center pr-4 pl-4">
          <div className="container-img cursor-pointer">
            
          </div>
          <div className="flex flex-col justify-between items-end">
            {/* <p className="text-sm font-semibold">Nome do usuario</p> */}
            <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>


      <div className="border-t border-b border-solid flex justify-between items-center">
        <div className="flex justify-between w-full items-center pr-4 pl-4">
          <div className="container-img cursor-pointer">
            
          </div>
          <div className="flex flex-col justify-between items-end">
            {/* <p className="text-sm font-semibold">Nome do usuario</p> */}
            <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>


      <div className="border-t border-b border-solid flex justify-between items-center">
        <div className="flex justify-between w-full items-center pr-4 pl-4">
          <div className="container-img cursor-pointer">
         
          </div>
          <div className="flex flex-col justify-between items-end">
            {/* <p className="text-sm font-semibold">Nome do usuario</p> */}
            <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>

      <div className="border-t border-b border-solid flex justify-between items-center">
        <div className="flex justify-between w-full items-center pr-4 pl-4">
          <div className="container-img cursor-pointer">

          </div>
          <div className="flex flex-col justify-between items-end">
            {/* <p className="text-sm font-semibold">Nome do usuario</p> */}
            <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>

      

  
    </section>
  )
}

export default ChatSuport;
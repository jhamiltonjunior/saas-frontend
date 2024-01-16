'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef } from 'react';
import { toggleModal } from '@/app/hook/toggleModal';
import Image from 'next/image';

function ShowDataStudent ({ student, menuRef }) {
    // const { student, showStudentRef } = props;
    const toggleShowStudentModal = toggleModal(menuRef, 'modal_show_data_student--open');

    return (
        <section ref={menuRef} className="modal_show_data_student">
          <header className="mb-8">
            <button onClick={toggleShowStudentModal}>
              <FontAwesomeIcon icon={faChevronLeft} /> Voltar
            </button>
          </header>

          <div className="container_data_student grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <label htmlFor="name" className="w-full">Nome
              <input  type="text" name="name" id="name" placeholder="Nome" readOnly />
            </label>

            <label htmlFor="age" className="w-full">Idade
              <input type="text" name="age" id="age" placeholder="Idade" readOnly />
            </label>

            <label htmlFor="phone" className="w-full">Telefone
              <input type="text" name="phone" id="phone" placeholder="Telefone" readOnly />
            </label>

            <label htmlFor="email" className="w-full">E-mail
              <input type="text" name="email" id="email" placeholder="E-mail" readOnly />
            </label>

            <label htmlFor="address" className="w-full">Endereço
              <input type="text" name="address" id="address" placeholder="Endereço" readOnly />
            </label>
          </div>

        </section>
    )
}

export default ShowDataStudent;
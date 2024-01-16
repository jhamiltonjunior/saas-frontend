import { selectUniqueStudent } from "../../hook/selectUniqueStudent";
import { useEffect, useRef } from 'react';
import { toggleModal } from '@/app/hook/toggleModal';

function ListStudents(props) {
  const { students: intialStudents, toggle } = props;


  const students = [...intialStudents]

  // const [students, setStudents] = useState([]);

  // useEffect(() => {
  //   const newStudents = [];
  //   for (let i = 1; i <= 35; i++) {
  //     newStudents.push({
  //         id: i,
  //         name: `Student ${i}`,
  //         age: 20 + i,
  //         img: "https://picsum.photos/200/300"
  //     });
  //   }
  //   setStudents(newStudents);
  // }, []);

  return (
    <>
      {/* <h1 class="p-2">Lista de Alunos</h1> */}
      <ul>
        {students.map((student) => (
          
          <li
            key={student.id}
            onClick={
              () => {
                selectUniqueStudent(student.id)
                toggle.toggleShowStudentModal()
              }
            }
            className="py-5 pl-3 border border-solid border-slate-200 cursor-pointer"
            >
              <div>{student.name}</div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListStudents;
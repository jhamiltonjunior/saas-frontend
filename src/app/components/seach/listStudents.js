import { selectUniqueStudent } from "../../hook/selectUniqueStudent";

function ListStudents(props) {
  // const { students } = props;

  const students = []

  for (let i = 1; i <= 35; i++) {
    students.push({
        id: i,
        name: `Student ${i}`,
        age: 20 + i,
        img: "https://picsum.photos/200/300"
    });
  }

  return (
    <div className="container_list_students w-full">
      {/* <h1 class="p-2">Lista de Alunos</h1> */}
      <ul>
        {students.map((student) => (
          
          <li
            key={student.id}
            onClick={
              () => selectUniqueStudent(student.id)
            }
            className="py-5 pl-3 border border-solid border-slate-200 cursor-pointer"
            >
              <div>{student.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListStudents;
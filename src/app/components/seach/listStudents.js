import { selectUniqueStudent } from "../../hook/selectUniqueStudent";

function ListStudents(props) {
  // const { students } = props;

  const students = [
    { id: 1, name: "Student 1", age: 20, img: "https://picsum.photos/200/300" },
    { id: 2, name: "Student 2", age: 21, img: "https://picsum.photos/200/300" },
    { id: 3, name: "Student 3", age: 22, img: "https://picsum.photos/200/300" },
    { id: 4, name: "Student 4", age: 23, img: "https://picsum.photos/200/300" },
  ]

  for (let i = 5; i <= 30; i++) {
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
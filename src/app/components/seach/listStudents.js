import Link from "next/link";

function ListStudents(props) {
  // const { students } = props;
  return (
    <div className="container_list_students w-full ml-4">
      <h1>List of students</h1>
      <ul>
        <li>
          <Link href="/student/1">Student 1</Link>
        </li>

        {/* {students.map((student) => (
          <li key={student.id}>
            <Link to={`/student/${student.id}`}>{student.name}</Link>
          </li>
        ))} */}
      </ul>
    </div>
  );
}

export default ListStudents;
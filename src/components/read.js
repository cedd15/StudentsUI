import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';


const Read = () => {
    const [students, setStudents] = useState([]);

    const getData = async () => {
        const response = await fetch("https://localhost:7026/api/students");
        let data = await response.json();
        setStudents(data);
        console.log(data);
    }

    useEffect( () => {
        getData();
    }, [])


    return ( 
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Courses</th>
          </tr>
        </thead>
        <tbody>
                {
                    students.map( student => (
                        <tr key={student.id}>
                            <td >{student.id}</td>
                            <td >{student.lastName}</td>
                            <td >{student.firstName}</td>
                            <td >{student.courses.map( course => course).join(', ')}</td>
                        </tr>
                    ))
                }
        </tbody>
      </Table>
     );
}
 
export default Read;
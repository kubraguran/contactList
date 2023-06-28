import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function Employes() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('Search query:', searchQuery);
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const employees = [
    {
      id: 1,
      firstName: 'Mark',
      lastName: 'Otto',
      department: '@mdo',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_g_7YVzERozXI_mfnbSPkggiXqlljwtCQXw&usqp=CAU',
    },
    {
      id: 2,
      firstName: 'Jacob',
      lastName: 'Thornton',
      department: '@fat',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_g_7YVzERozXI_mfnbSPkggiXqlljwtCQXw&usqp=CAU',
    },
    {
      id: 3,
      firstName: 'Emily',
      lastName: 'Johnson',
      department: '@emily',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_g_7YVzERozXI_mfnbSPkggiXqlljwtCQXw&usqp=CAU',
    },
    {
      id: 4,
      firstName: 'Michael',
      lastName: 'Smith',
      department: '@michael',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_g_7YVzERozXI_mfnbSPkggiXqlljwtCQXw&usqp=CAU',
    },
    {
      id: 5,
      firstName: 'Hans',
      lastName: 'Otto',
      department: '@mdo',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_g_7YVzERozXI_mfnbSPkggiXqlljwtCQXw&usqp=CAU',
    },
    {
      id: 6,
      firstName: 'Eva',
      lastName: 'Thornton',
      department: '@fat',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_g_7YVzERozXI_mfnbSPkggiXqlljwtCQXw&usqp=CAU',
    },
    {
      id: 7,
      firstName: 'George',
      lastName: 'Johnson',
      department: '@emily',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_g_7YVzERozXI_mfnbSPkggiXqlljwtCQXw&usqp=CAU',
    },
    {
      id: 8,
      firstName: 'Emmy',
      lastName: 'Smith',
      department: '@michael',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_g_7YVzERozXI_mfnbSPkggiXqlljwtCQXw&usqp=CAU',
    },
 
  ];

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="table-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search employee"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <Button variant="primary" onClick={handleSearch}>
          Search
        </Button>
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>
                <img
                  src={employee.image}
                  alt="User"
                  style={{
                    height: '20px',
                    width: '20px',
                    marginRight: '5px',
                    borderRadius: '50%',
                  }}
                />
                {employee.firstName}
              </td>
              <td>{employee.lastName}</td>
              <td>{employee.department}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Employes;

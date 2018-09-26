import React from 'react';

class App extends React.Component {
  state = {
    employees: []
  }
  
  componentWillMount = () => {
    fetch('http://localhost:8080/api/employees')
      .then(response => response.json())
      .then(employees => this.setState({ employees }))
  }

  render() {
    const {
      employees
    } = this.state;

    console.log(this.state);

    return (
      <div className="App">
        <div className="container">
          <h1>Plexxis Employees</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Profession</th>
                <th>Branch</th>
                <th>Code</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {
                employees.map(employee => (
                  <tr key={ employee.id }>
                    <td>{ employee.name }</td>
                    <td>{ employee.profession }</td>
                    <td>{ employee.branch }</td>
                    <td>{ employee.code }</td>
                    <td><button  onClick={ this.onDelete.bind(this, employee)}>Remove</button></td>
                  </tr>  
                ))
              }
            </tbody>
          </table>
          <br />
          <button>Add Employee</button>
        </div>
      </div>
    );
  }

  onDelete(employee) {
    alert('Are you sure you want to remove ' + employee.name + ' from the list?')
  }
  
}

export default App;

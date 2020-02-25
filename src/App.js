import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import './App.scss';
import Demo from './Demo';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    }
  }
  // UNSAFE_componentWillMount() {
  //   fetch("https://reqres.in/api/users?page=2")
  //     .then(response => response.json())
  //     .then((response) => this.setState({
  //       user: response.data
  //     }))
  //     .catch((error) => console.log(error));
  // }
  render() {
    const { user } = this.state;
    // const FoldableTable = FoldableTableHOC(ReactTable);
    const columns = [
      {
        Header: 'First Name',
        accessor:'first_name'
      },
      {
        Header: 'Last Name',
        accessor: 'last_name',

      },
      {
        Header: 'Email',
        accessor: 'email'
      },
    ]
    return (
      <div className="container">
        {/* {console.log(user)}
        <ReactTable
          columns={columns}
          loader={true}
          data={user}
          defaultSortDesc={true}
          defaultPageSize={5}
        /> */}
        <Demo />
      </div>
    )
  }
}

export default App;
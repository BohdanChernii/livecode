import React from 'react';
import Pagination from './Pagination';
import User from './User';

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 1,
      usersPerPage:3,
    };
  }

  handleNext = e => {
    this.setState({
      pageNumber: (this.state.pageNumber += 1),
    });
  };
  handlePrev = e => {
    this.setState({
      pageNumber: (this.state.pageNumber -= 1),
    });
  };

  render() {
    const {users} = this.props
    const { pageNumber, usersPerPage} = this.state;
    const endIndex = usersPerPage * pageNumber;
    const startIndex = (pageNumber - 1) * usersPerPage;
    const usersToRender = this.props.users.slice(startIndex, endIndex);
    return (
      <div>
        <Pagination
          usersPerPage={usersPerPage}
          usersCount={users.length}
          handleNext={this.handleNext}
          handlePrev={this.handlePrev}
          pageNumber={pageNumber}
        />
        <ul className="users">
          {usersToRender.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}
export default UserList;

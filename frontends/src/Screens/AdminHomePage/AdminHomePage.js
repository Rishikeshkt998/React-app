import Table from 'react-bootstrap/Table';
import AdminHeader from '../../components/adminHeader/AdminHeaders';
import AdminFooter from '../../components/adminFooter/AdminFooters';
import MainScreen from '../../components/MainScreen';
import { Button,Form } from 'react-bootstrap';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminHome() {
    const [user, setUser] = useState([]);
    // const [ delete,setDelete] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const navigate=useNavigate()

    useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/admin/view'); // Assuming your backend API endpoint for fetching admins is '/api/admins'
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);
  
const deleteHandler=(id)=>{
    if(window.confirm("Are you sure?")){
        axios.delete(`/api/admin/delete/${id}`)
        .then((res)=>{
            console.log(res)
            setUser(user.filter((user) => user._id !== id));

            
        })
    }
}
 const filteredUsers = user.filter((user) => {
        return user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
               user.email.toLowerCase().includes(searchTerm.toLowerCase());
    });
  return (
    <div>
        <AdminHeader/>
        <MainScreen>
          <div className="search-bar">
                    <Form.Control
                        type="text"
                        placeholder="Search by name or email"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>email</th>
          <th>password</th>
          <th>profile pic</th>
          

          <th>Action</th>

        </tr>
      </thead>
      <tbody>
        {filteredUsers.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td style={{ maxWidth: '150px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{user.password}</td>
                <td style={{ maxWidth: '150px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{user.pic}</td>
                <td>
                  <Button variant="success"  onClick={() => navigate(`/updateuser/${user._id}`)}>Edit</Button>
                  <Button variant="danger" onClick={()=>deleteHandler(user._id)}>DELETE</Button>
                </td>
              </tr>
            ))}
      </tbody>
    </Table>
        </MainScreen>
        
        <AdminFooter/>
    </div>
    
  );
}

export default AdminHome;
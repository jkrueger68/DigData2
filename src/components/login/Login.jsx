import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // Add state to handle user registration
  const [newUser, setNewUser] = useState({
    newUserUsername: '',
    newUserPassword: ''
  });

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Authentication logic goes here
    // For now, just navigate to the HomePage
    navigate('/HomePage');
  };

  const handleNewUser = () => {
    // Logic to handle new user creation goes here
    setShowModal(false);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-5">
        <div className="card-body">
          <Form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input 
                type="text" 
                className="form-control" 
                id="username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                required 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input 
                type="password" 
                className="form-control" 
                id="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
            <button 
              type="button" 
              className="btn btn-link w-100" 
              onClick={() => setShowModal(true)}
            >
              New User
            </button>
          </Form>
        </div>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="newUserUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control 
                type="text" 
                value={newUser.newUserUsername} 
                onChange={(e) => setNewUser({ ...newUser, newUserUsername: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="newUserPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                value={newUser.newUserPassword} 
                onChange={(e) => setNewUser({ ...newUser, newUserPassword: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleNewUser}>
            Create User
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Login;
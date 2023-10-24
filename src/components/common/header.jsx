import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
} from '@mui/material';

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Logo
        </Typography>
        <div>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          {token ? (
            <>
              <Button color="inherit" component={Link} to="/users">
                User List
              </Button>
              <Button color="inherit" component={Link} to="/user/search">
                Search User
              </Button>
              <Button color="inherit" component={Link} to="/books/create">
                Add Book
              </Button>
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/user/register">
                Register
              </Button>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

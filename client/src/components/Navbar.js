import React, { useState } from "react"
import Logo from "../Assets/Logo.svg"
import { BsCart2 } from "react-icons/bs"
import { HiOutlineBars3 } from "react-icons/hi2"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import HomeIcon from "@mui/icons-material/Home"
import InfoIcon from "@mui/icons-material/Info"
import CommentRoundedIcon from "@mui/icons-material/CommentRounded"
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded"
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded"
import FlightIcon from '@mui/icons-material/Flight';
import PersonIcon from '@mui/icons-material/Person';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import MapIcon from '@mui/icons-material/Map';

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)
    const menuOptions = [
        {
          text: "Home",
          icon: <HomeIcon />,
        },
        {
          text: "Bookings",
          icon: <AirplaneTicketIcon />,
        },
        {
          text: "Airplanes",
          icon: <FlightIcon />,
        },
        {
          text: "Passengers",
          icon: <PersonIcon />,
        },
        {
          text: "Destinations",
          icon: <MapIcon />,
        },
      ]

      const DropdownMenu = () => (
        <div className="dropdown-menu">
          {menuOptions.map((item) => (
            <a key={item.text} href={item.link}>
              <div className="dropdown-item">
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </div>
            </a>
          ))}
        </div>
      );
      
      return (
        <nav>
          <div className="nav-logo-container">
            <img src={Logo} alt="" />
          </div>
          <div className="navbar-links-container">
            <a href="/">Home</a>
            <a href="/MyBookings">My Bookings</a>
            <a href="/airplane">Airplanes</a>
            <a href="/passenger">Passengers</a>
            <a href="/destinations">Destinations</a>
            <a href="/BookingPage1">
              <button className="primary-button">Bookings Now</button>
            </a>
          </div>
          <div className="navbar-menu-container">
            <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
          </div>
          <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={() => setOpenMenu(false)}
              onKeyDown={() => setOpenMenu(false)}
            >
              <List>
                {menuOptions.map((item) => (
                  <ListItem key={item.text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider />
            </Box>
          </Drawer>
        </nav>
      )
}

export default Navbar
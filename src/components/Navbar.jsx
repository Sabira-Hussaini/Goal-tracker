import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import { Button } from "@mui/material";
 import { useLanguage } from "../i18n/useLanguage";
 import { Link } from "react-router-dom";

 import AppBar from "@mui/material/AppBar";
 import Box from "@mui/material/Box";
 import Toolbar from "@mui/material/Toolbar";
 import IconButton from "@mui/material/IconButton";
 import Typography from "@mui/material/Typography";
 import InputBase from "@mui/material/InputBase";
 import MenuItem from "@mui/material/MenuItem";
 import Menu from "@mui/material/Menu";
 import Badge from "@mui/material/Badge";
 import Drawer from "@mui/material/Drawer";
 import List from "@mui/material/List";
 import ListItem from "@mui/material/ListItem";
 import ListItemButton from "@mui/material/ListItemButton";
 import ListItemText from "@mui/material/ListItemText";
 import useMediaQuery from "@mui/material/useMediaQuery";
 import { useTheme } from "@mui/material/styles";

 import MenuIcon from "@mui/icons-material/Menu";
 import SearchIcon from "@mui/icons-material/Search";
 import AccountCircle from "@mui/icons-material/AccountCircle";
 import NotificationsIcon from "@mui/icons-material/Notifications";
 import DarkModeIcon from "@mui/icons-material/DarkMode";
 import TranslateIcon from "@mui/icons-material/Translate";

 import logo from "../assets/logo.jpeg";


 /* ================= SEARCH ================= */
 const Search = styled("div")(({ theme }) => ({
   position: "relative",
   borderRadius: theme.shape.borderRadius,
   border: "1px solid #ccc",
   marginLeft: 0,
   width: "100%",
   [theme.breakpoints.up("sm")]: {
     marginLeft: theme.spacing(2),
     width: "auto",
   },
 }));

 const SearchIconWrapper = styled("div")(() => ({
   padding: "0 10px",
   height: "100%",
   position: "absolute",
   display: "flex",
   alignItems: "center",
 }));

 const StyledInputBase = styled(InputBase)(() => ({
   color: "inherit",
   paddingLeft: "35px",
   width: "100%",
 }));

 /* ================= COMPONENT ================= */
 export default function PrimarySearchAppBar() {
   const { t } = useLanguage();
   const theme = useTheme();
   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
   

   const [mobileOpen, setMobileOpen] = React.useState(false);
   const [anchorEl, setAnchorEl] = React.useState(null);

   const pages = [
     { id: 1, name: t("dashboard"), to: "/" },
     { id: 2, name: t("goals"), to: "/goals" },
     { id: 3, name: t("categories"), to: "/categories" },
     { id: 4, name: t("settings"), to: "/setting" },
   ];

   const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
   const handleProfileMenuOpen = (event) => setAnchorEl(event.currentTarget);
   const handleMenuClose = () => setAnchorEl(null);

   return (
     <Box>
       <AppBar
         position="static"
         sx={{
           bgcolor: "background.paper",
           color: "text.primary",
           backgroundImage: "none",
           boxShadow: 3,
         }}
       >
         <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
           {/* LEFT */}
           <Box sx={{ display: "flex", alignItems: "center" }}>
             {isMobile && (
               <IconButton onClick={handleDrawerToggle}>
                 <MenuIcon />
               </IconButton>
             )}

             <Box
               component="img"
               src={logo}
               alt="logo"
               sx={{ width: 40, height: 40, borderRadius: 2, ml: 1 }}
             />

             <Typography variant="h6" sx={{ ml: 1, fontWeight: "bold" }}>
               Goal-Tracker
             </Typography>
           </Box>

           {/* CENTER */}
           {!isMobile && (
             <Box sx={{ display: "flex", gap: 2 }}>
               {pages.map((page) => (
                 <Button
                   key={page.id}
                   component={Link}
                   to={page.to}
                   sx={{
                     color: "text.primary",
                     fontSize: "16px",
                     textTransform: "none",
                   }}
                 >
                   {page.name}
                 </Button>
               ))}
             </Box>
           )}

           {/* RIGHT */}
           <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
             {!isMobile && (
               <Search>
                 <SearchIconWrapper>
                   <SearchIcon />
                 </SearchIconWrapper>
                 <StyledInputBase placeholder={t("search")} />
               </Search>
             )}

             <IconButton>
               <TranslateIcon>
                 {/* <Typography>{t("language")}</Typography> */}
               </TranslateIcon>
             </IconButton>

             <IconButton>
               <DarkModeIcon />
             </IconButton>

             <IconButton onClick={handleProfileMenuOpen}>
               <AccountCircle />
             </IconButton>
           </Box>
         </Toolbar>
       </AppBar>

       {/* DRAWER */}
       <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
         <Box sx={{ width: 250 }}>
           <List>
             {pages.map((page) => (
               <ListItem key={page.id} disablePadding>
                 <ListItemButton
                   component={Link}
                   to={page.to}
                   onClick={handleDrawerToggle}
                 >
                   <ListItemText primary={page.name} />
                 </ListItemButton>
               </ListItem>
             ))}
           </List>
         </Box>
       </Drawer>

       {/* PROFILE MENU */}
       <Menu
         anchorEl={anchorEl}
         open={Boolean(anchorEl)}
         onClose={handleMenuClose}
       >
         <MenuItem onClick={handleMenuClose}>{t("profile")}</MenuItem>
         <MenuItem onClick={handleMenuClose}>{t("myAccount")}</MenuItem>
       </Menu>
     </Box>
   );
 }
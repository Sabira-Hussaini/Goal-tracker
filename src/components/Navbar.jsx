import * as React from "react";
import { styled } from "@mui/material/styles";
import { useLanguage } from "../i18n/useLanguage";
import { useContext, useState } from "react";
import { SettingsContext } from "../context/SettingsContext";
import { Link, useNavigate } from "react-router-dom";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import TranslateIcon from "@mui/icons-material/Translate";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import logo from "../assets/logo1.png";

/* SEARCH */
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 8,
  padding: "2px 8px",
  display: "flex",
  alignItems: "center",
  backgroundColor: theme.palette.background.paper,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  fontSize: 14,
  color: theme.palette.text.primary,
}));

export default function PrimarySearchAppBar() {
  const { t, lang } = useLanguage();
  const { settings, setSettings } = useContext(SettingsContext);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const [openDrawer, setOpenDrawer] = useState(false);

  const pages = [
    { id: 1, key: "dashboard", to: "/" },
    { id: 2, key: "goals", to: "/goals" },
    { id: 3, key: "categories", to: "/categories" },
    { id: 4, key: "settings", to: "/setting" },
  ];

  const handleLanguageChange = () => {
    setSettings({
      ...settings,
      language: lang === "en" ? "fa" : "en",
    });
  };

  const toggleTheme = () => {
    setSettings({
      ...settings,
      themeMode: settings.themeMode === "light" ? "dark" : "light",
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/"; 
  };

  return (
    <AppBar
      position="static"
      sx={(theme) => ({
        bgcolor: "background.paper",
        color: "text.primary",
        borderBottom: `1px solid ${theme.palette.divider}`,
      })}
    >
      <Toolbar
        sx={{
          minHeight: 70, // 🔥 بزرگ‌تر
          px: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* LEFT */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          {isMobile && (
            <IconButton onClick={() => setOpenDrawer(true)}>
              <MenuIcon />
            </IconButton>
          )}

          <img src={logo} width={65} alt="logo" />

          {!isMobile && (
            <Typography fontWeight="bold" fontSize={20}>
              Goal Tracker
            </Typography>
          )}
        </Box>

        {/* CENTER (ONLY MENU) */}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: 3 }}>
            {pages.map((p) => (
              <Button
                key={p.id}
                component={Link}
                to={p.to}
                sx={{
                  color: "text.primary",
                  fontSize: "15px", // 🔥 بزرگ‌تر
                  textTransform: "none",
                }}
              >
                {t(p.key)}
              </Button>
            ))}
          </Box>
        )}

        {/* RIGHT */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          {/* 🔍 SEARCH (Moved Right) */}
          {!isMobile && (
            <Search
              sx={{
                height: 38,
                px: 1.5,
              }}
            >
              <SearchIcon />
              <StyledInputBase placeholder={t("search")} sx={{ ml: 1 }} />
            </Search>
          )}

          <IconButton>
            <TranslateIcon onClick={handleLanguageChange} />
          </IconButton>

          <IconButton onClick={toggleTheme}>
            {settings.themeMode === "light" ? (
              <DarkModeIcon />
            ) : (
              <LightModeIcon />
            )}
          </IconButton>

          <IconButton component={Link} to="/setting">
            <AccountCircle />
          </IconButton>

          <IconButton onClick={handleLogout}>
            <LogoutIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box sx={{ width: 250 }}>
          <List>
            {pages.map((p) => (
              <ListItemButton
                key={p.id}
                component={Link}
                to={p.to}
                onClick={() => setOpenDrawer(false)}
              >
                <ListItemText primary={t(p.key)} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}

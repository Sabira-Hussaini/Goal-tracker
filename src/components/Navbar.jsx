import * as React from "react";
import { styled } from "@mui/material/styles";
import { useLanguage } from "../i18n/useLanguage";
import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import TranslateIcon from "@mui/icons-material/Translate";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import logo from "../assets/logo1.png";

/* SEARCH */
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  border: "1px solid #ccc",
  borderRadius: 8,
  padding: "2px 8px",
  display: "flex",
  alignItems: "center",
}));

const SearchIconWrapper = styled("div")(() => ({
  marginRight: 6,
  display: "flex",
  alignItems: "center",
}));

const StyledInputBase = styled(InputBase)(() => ({
  fontSize: 14,
}));

export default function PrimarySearchAppBar() {
  const { t, lang } = useLanguage();
  const { settings, setSettings } = useContext(SettingsContext);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  /* LANGUAGE */
  const handleLanguageChange = () => {
    setSettings({
      ...settings,
      language: lang === "en" ? "fa" : "en",
    });
  };

  /* THEME */
  const toggleTheme = () => {
    setSettings({
      ...settings,
      themeMode: settings.themeMode === "light" ? "dark" : "light",
    });
  };

  const pages = [
    { id: 1, key: "dashboard", to: "/" },
    { id: 2, key: "goals", to: "/goals" },
    { id: 3, key: "categories", to: "/categories" },
    { id: 4, key: "settings", to: "/setting" },
  ];

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "background.paper",
        color: "text.primary",
        boxShadow: 1,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* LEFT */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={logo} width={70} alt="logo" color="primary" />
          <Typography sx={{ ml: 1 , fontWeight: "bold" }}>
            Goal Tracker
          </Typography>
        </Box>

        {/* CENTER */}
        {!isMobile && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {/* NAV LINKS */}
            {pages.map((p) => (
              <Button
                key={p.id}
                component={Link}
                to={p.to}
                sx={{ fontSize: "17px" }}
              >
                {t(p.key)}
              </Button>
            ))}

            {/* SEARCH */}
            {/* SEARCH */}
            {!isMobile && (
              <Search>
                <SearchIconWrapper>
                  <SearchIcon fontSize="small" />
                </SearchIconWrapper>
                <StyledInputBase placeholder={t("search")} />
              </Search>
            )}
          </Box>
        )}

        {/* RIGHT */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {/* LANGUAGE */}
          <IconButton onClick={handleLanguageChange}>
            <TranslateIcon />
          </IconButton>

          {/* THEME */}
          <IconButton onClick={toggleTheme}>
            {settings.themeMode === "light" ? (
              <DarkModeIcon />
            ) : (
              <LightModeIcon />
            )}
          </IconButton>

          <IconButton>
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

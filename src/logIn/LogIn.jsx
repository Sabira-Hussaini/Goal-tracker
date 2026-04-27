import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  InputAdornment,
} from "@mui/material";
import { keyframes } from "@mui/system";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";

/* animation */
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(25px); }
  to { opacity: 1; transform: translateY(0); }
`;

export default function Login({ onLogin }) {
  const [name, setName] = useState(""); // ✅ NEW
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!name || !email || !password || !phone) return;

    const user = {
      name, // ✅ SAVE NAME
      email,
      phone,
      loginTime: Date.now(),
      expireTime: Date.now() + 60 * 60 * 24 * 60 * 1000,
    };

    localStorage.setItem("user", JSON.stringify(user));
    onLogin();
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#ffffff",
      }}
    >
      <Paper
        elevation={10}
        sx={{
          width: 400,
          p: 4,
          borderRadius: 4,
          animation: `${fadeIn} 0.6s ease`,
          background: "#0d47a1",
          color: "#fff",
        }}
      >
        <Typography variant="h5" fontWeight="bold" textAlign="center">
          Goal Tracker
        </Typography>

        <Typography sx={{ mb: 3, mt: 1, textAlign: "center", fontSize: 14 }}>
          Sign in to continue
        </Typography>

        {/* ✅ FULL NAME */}
        <TextField
          fullWidth
          placeholder="Full Name"
          variant="filled"
          sx={{ mb: 2, background: "#fff", borderRadius: 1 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
          onChange={(e) => setName(e.target.value)}
        />

        {/* EMAIL */}
        <TextField
          fullWidth
          placeholder="Email"
          variant="filled"
          sx={{ mb: 2, background: "#fff", borderRadius: 1 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* PHONE */}
        <TextField
          fullWidth
          placeholder="Phone Number"
          variant="filled"
          sx={{ mb: 2, background: "#fff", borderRadius: 1 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneIcon />
              </InputAdornment>
            ),
          }}
          onChange={(e) => setPhone(e.target.value)}
        />

        {/* PASSWORD */}
        <TextField
          fullWidth
          placeholder="Password"
          type="password"
          variant="filled"
          sx={{ mb: 3, background: "#fff", borderRadius: 1 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
          }}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          fullWidth
          variant="contained"
          onClick={handleLogin}
          sx={{
            py: 1.3,
            borderRadius: 2,
            fontWeight: "bold",
            background: "#ffffff",
            color: "#0d47a1",
          }}
        >
          Sign In
        </Button>

        <Typography sx={{ mt: 2, fontSize: 12, textAlign: "center" }}>
          Secure login • Goal Tracker
        </Typography>
      </Paper>
    </Box>
  );
}

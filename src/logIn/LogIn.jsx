import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  InputAdornment,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";
import { useForm } from "react-hook-form";

import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";

export default function Login({ onLogin }) {
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    onLogin?.();
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: theme.palette.background.default,
        p: 2,
      }}
    >
      <Paper
        elevation={8}
        sx={{
          width: { xs: "100%", md: 900 },
          display: "flex",
          borderRadius: 4,
          overflow: "hidden",
        }}
      >        <Box
          sx={{
            flex: 1,
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            justifyContent: "center",
            p: 5,
            background: `linear-gradient(135deg,
              ${theme.palette.primary.main},
              ${theme.palette.primary.dark}
            )`,
            color: theme.palette.primary.contrastText,
          }}
        >
          <Typography variant="h4" fontWeight={800}>
            Focus Hub
          </Typography>

          <Typography sx={{ mt: 2, opacity: 0.9 }}>
            Manage your daily focus, habits, and personal growth in one place.
          </Typography>
        </Box>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            flex: 1,
            p: { xs: 3, md: 5 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 2,
            bgcolor: theme.palette.background.paper,
          }}
        >
          <Typography variant="h5" fontWeight={700}>
            Welcome
          </Typography>

          <Typography color="text.secondary" fontSize={14}>
            Sign in to continue your journey
          </Typography>

          {/* NAME */}
          <TextField
            fullWidth
            label="Full Name (optional)"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
            {...register("name")}
          />

         
          <TextField
            fullWidth
            label="Email Address"
            error={!!errors.email}
            helperText={errors.email?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email format",
              },
            })}
          />

          {/* PASSWORD */}
          <TextField
            fullWidth
            type="password"
            label="Password"
            error={!!errors.password}
            helperText={errors.password?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Minimum 6 characters",
              },
            })}
          />

          {/* CHECKBOX */}
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Keep me signed in"
          />

          {/* BUTTON */}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              py: 1.3,
              borderRadius: 3,
              fontWeight: 700,
              textTransform: "none",
              backgroundColor: theme.palette.primary.main,
              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
              },
            }}
          >
            Enter Dashboard
          </Button>

          <Typography
            sx={{ mt: 2, fontSize: 12, textAlign: "center", opacity: 0.7 }}
          >
            By continuing you agree to our terms & privacy policy
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}

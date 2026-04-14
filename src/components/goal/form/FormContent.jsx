import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import goal from "../../../assets/goal.jpg";
import RequiredInput from "./RequiredInput";

export default function FormContent() {
  return (
    <Card
      sx={{
        maxWidth: "62%",
        marginTop: "25px",
        backgroundColor: "#e6eff7",
        borderRadius: 1,
      }}
    >
      {/* <CardMedia sx={{ height: 200 }} image={goal} title="green iguana" /> */}
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          color="primary"
          sx={{ fontWeight: "bold" }}
        >
          New Goal
        </Typography>
        <Typography variant="body2">
          Create your Goal and Build your future
        </Typography>
      </CardContent>
      <Card sx={{ maxWidth: "96%", backgroundColor: "white", mx: "10px" }}>
        <CardContent>
          <RequiredInput />
        </CardContent>
      </Card>
   
    </Card>
  );
}

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useLanguage } from "../../../i18n/useLanguage";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipNextIcon from "@mui/icons-material/SkipNext";

import { useState, useRef } from "react";
import goal from "../../../assets/goal.jpg";

export default function MediaControlCard() {
  const theme = useTheme();
const { t } = useLanguage();
  // 🎧 موزیک آنلاین (لینک خودت را اینجا بگذار)
  const musicUrl =
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <Card sx={{ display: "flex" }}>
      {/* 🎧 Audio (پنهان ولی فعال) */}
      <audio ref={audioRef} src={musicUrl} />

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {t("MotivationGoalMusic")}
          </Typography>

          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: "text.secondary" }}
          >
             {t("stayFocused")}
          </Typography>
        </CardContent>

        {/* کنترل موزیک */}
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === "rtl" ? (
              <SkipNextIcon />
            ) : (
              <SkipPreviousIcon />
            )}
          </IconButton>

          <IconButton aria-label="play/pause" onClick={toggleMusic}>
            {playing ? (
              <PauseIcon sx={{ height: 38, width: 38 }} />
            ) : (
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            )}
          </IconButton>

          <IconButton aria-label="next">
            {theme.direction === "rtl" ? (
              <SkipPreviousIcon />
            ) : (
              <SkipNextIcon />
            )}
          </IconButton>
        </Box>
      </Box>

      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={goal}
        alt="goal motivation"
      />
    </Card>
  );
}

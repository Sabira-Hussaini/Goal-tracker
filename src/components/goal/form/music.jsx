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

  // 🎵 MULTIPLE MOTIVATION SONGS
  const playlist = [
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  ];

  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  const playAudio = async () => {
    try {
      await audioRef.current.play();
      setPlaying(true);
    } catch (err) {
      console.log("Play blocked:", err);
    }
  };

  const pauseAudio = () => {
    audioRef.current.pause();
    setPlaying(false);
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  const nextSong = () => {
    const newIndex = (index + 1) % playlist.length;
    setIndex(newIndex);
    setPlaying(false);

    setTimeout(() => {
      audioRef.current.load();
      playAudio();
    }, 100);
  };

  const prevSong = () => {
    const newIndex = (index - 1 + playlist.length) % playlist.length;
    setIndex(newIndex);
    setPlaying(false);

    setTimeout(() => {
      audioRef.current.load();
      playAudio();
    }, 100);
  };

  return (
    <Card sx={{ display: "flex" }}>
      {/* 🎧 AUDIO PLAYER */}
      <audio ref={audioRef} src={playlist[index]} />

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

        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton onClick={prevSong}>
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

          <IconButton onClick={nextSong}>
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
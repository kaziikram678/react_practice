import React, { useState, useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

function App() {
  const [step, setStep] = useState(0);
  const [roseRain, setRoseRain] = useState(false);
  const [textRain, setTextRain] = useState(false);
  const audioRef = useRef(null);

  const name = "Israt Jahan Munni Nur";

  const startMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handleCatch = () => {
    startMusic();
    setRoseRain(true);
    setTimeout(() => setStep(1), 3000);
  };

  const handleLove = () => {
    setTextRain(true);
    setTimeout(() => setStep(2), 3500);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        background: "radial-gradient(circle at top, #ff4e8b, #8e2de2)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
        textAlign: "center",
        px: 2,
      }}
    >
      {/* 🎶 Background Music */}
      <audio
        ref={audioRef}
        loop
        src="https://www.bensound.com/bensound-music/bensound-romantic.mp3"
      />

      {/* 🌹 Rose Rain */}
      {roseRain &&
        Array.from({ length: 40 }).map((_, i) => {
          const randomX = Math.random() * 100;
          const randomDelay = Math.random() * 3;
          const randomDuration = 3 + Math.random() * 2;

          return (
            <motion.div
              key={i}
              initial={{ y: "-10vh" }}
              animate={{ y: "110vh" }}
              transition={{
                duration: randomDuration,
                repeat: Infinity,
                delay: randomDelay,
                ease: "linear",
              }}
              style={{
                position: "absolute",
                left: `${randomX}%`,
                fontSize: "28px",
                pointerEvents: "none",
              }}
            >
              🌹
            </motion.div>
          );
        })}

      {/* 💕 Text Rain */}
      {textRain &&
        Array.from({ length: 50 }).map((_, i) => {
          const randomX = Math.random() * 100;
          const randomDelay = Math.random() * 3;
          const randomDuration = 3 + Math.random() * 2;

          return (
            <motion.div
              key={i}
              initial={{ y: "-10vh" }}
              animate={{ y: "110vh" }}
              transition={{
                duration: randomDuration,
                repeat: Infinity,
                delay: randomDelay,
                ease: "linear",
              }}
              style={{
                position: "absolute",
                left: `${randomX}%`,
                fontSize: "14px",
                color: "white",
                fontWeight: "bold",
                whiteSpace: "nowrap",
                pointerEvents: "none",
              }}
            >
              I lome you too ❤️
            </motion.div>
          );
        })}

      {/* 💘 STEP 0 */}
      {step === 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Typography
            variant="h4"
            color="white"
            mb={3}
            sx={{ fontWeight: "bold" }}
          >
            Hello {name} 💕
          </Typography>

          <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="contained"
              color="error"
              sx={{
                borderRadius: "30px",
                px: 4,
                py: 1.5,
                fontSize: { xs: "14px", sm: "16px" },
              }}
              onClick={handleCatch}
            >
              Say Hi to your Tomato 💘
            </Button>
          </motion.div>
        </motion.div>
      )}

      {/* 💌 STEP 1 */}
      {step === 1 && (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
          <Typography
            variant="h5"
            color="white"
            mb={3}
            sx={{ fontWeight: "bold" }}
          >
            {name}, Do You Lome Me? 💌
          </Typography>

          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                borderRadius: "30px",
                px: 4,
                py: 1.5,
                fontSize: { xs: "14px", sm: "16px" },
              }}
              onClick={handleLove}
            >
              YES 💖
            </Button>
          </motion.div>
        </motion.div>
      )}

      {/* 🎉 FINAL SCREEN */}
      {step === 2 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Typography
            variant="h3"
            color="white"
            mb={2}
            sx={{ fontWeight: "bold", fontSize: { xs: "28px", sm: "40px" } }}
          >
            Happy Valentine’s Day 💕
          </Typography>

          <Typography
            variant="h6"
            color="white"
            sx={{ fontSize: { xs: "16px", sm: "20px" } }}
          >
            My Dearest {name},
          </Typography>

          <Typography
            variant="body1"
            mt={3}
            color="white"
            sx={{
              maxWidth: "600px",
              mx: "auto",
              fontSize: { xs: "14px", sm: "16px" },
            }}
          >
            From the moment you came into my life, everything became more
            beautiful. Your smile brightens my darkest days, your voice calms my
            storms, and your presence makes my world complete.
            <br /><br />
            I am truly blessed to have you.  
            Today and every day — I choose you. ❤️
          </Typography>
        </motion.div>
      )}
    </Box>
  );
}

export default App;

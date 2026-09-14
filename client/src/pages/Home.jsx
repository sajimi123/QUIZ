import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import { Link } from "react-router-dom";



function Home() {
  return (
    <>
      <CssBaseline />

      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,

          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          background:
            "linear-gradient(135deg, #3E2723 0%, #6D4C41 45%, #F3E5D0 100%)",

          padding: 2,
          overflow: "auto",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "480px",

            backgroundColor: "#FFF8ED",

            padding: {
              xs: 3,
              sm: 5,
            },

            borderRadius: "28px",

            textAlign: "center",

            boxShadow:
              "0px 20px 50px rgba(62,39,35,0.35)",

            boxSizing: "border-box",

            transition: "0.3s",

            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow:
                "0px 25px 60px rgba(62,39,35,0.45)",
            },
          }}
        >
          {/* Icon */}
          <Typography
            sx={{
              fontSize: "65px",
              marginBottom: 1,
            }}
          >
            🧠
          </Typography>

          {/* Title */}
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              color: "#4E342E",
              marginBottom: 1,
            }}
          >
            Quiz Master
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="h6"
            sx={{
              color: "#795548",
              marginBottom: 2,
            }}
          >
            Think • Answer • Score • Shine
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              color: "#6D4C41",
              lineHeight: 1.7,
              marginBottom: 4,
            }}
          >
            Challenge your mind, earn your stars,
            and become the Quiz Champion!
          </Typography>

          {/* Information cards */}
          <Stack
            direction="row"
            spacing={2}
            sx={{
              marginBottom: 4,
            }}
          >
            <Box
              sx={{
                flex: 1,
                backgroundColor: "#F3E5D0",
                padding: 2,
                borderRadius: "16px",
              }}
            >
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{ color: "#4E342E" }}
              >
                5
              </Typography>

              <Typography
                sx={{
                  fontSize: "13px",
                  color: "#795548",
                }}
              >
                Questions
              </Typography>
            </Box>

            <Box
              sx={{
                flex: 1,
                backgroundColor: "#F3E5D0",
                padding: 2,
                borderRadius: "16px",
              }}
            >
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{ color: "#4E342E" }}
              >
                +1
              </Typography>

              <Typography
                sx={{
                  fontSize: "13px",
                  color: "#795548",
                }}
              >
                Per Answer
              </Typography>
            </Box>
          </Stack>

          {/* Start Game */}
          <Button
            component={Link}
            to='/game'
            variant="contained"
            fullWidth
            sx={{
              padding: "14px",
              borderRadius: "14px",

              backgroundColor: "#6D4C41",

              fontSize: "17px",
              fontWeight: "bold",

              textTransform: "none",

              "&:hover": {
                backgroundColor: "#4E342E",
              },
            }}
          >
            🎮 Start Game
          </Button>

          {/* Bottom text */}
          <Typography
            sx={{
              marginTop: 3,
              fontSize: "13px",
              color: "#8D6E63",
            }}
          >
            ⭐ Can you get a perfect score?
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Home;
import React from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Leaderboard() {
  const navigate = useNavigate();

  // Get current player's data
  const playerName =
    localStorage.getItem("quizPlayer") || "Player";

  const playerScore =
    Number(localStorage.getItem("quizScore")) || 0;

  // Existing players
  const players = [
    {
      name: "Akhil",
      score: 10,
    },
    {
      name: "Rahul",
      score: 8,
    },
    {
      name: "Anu",
      score: 6,
    },
    {
      name: "Fathima",
      score: 3,
    },
  ];

  // Add current player
  players.push({
    name: playerName,
    score: playerScore,
  });

  // Sort highest score first
  players.sort((a, b) => b.score - a.score);

  // Find current player's position
  const myRank =
    players.findIndex(
      (player) => player.name === playerName
    ) + 1;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #3E2723 0%, #6D4C41 45%, #F3E5D0 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: "750px",
          padding: { xs: 2, sm: 4 },
          borderRadius: "28px",
          backgroundColor: "#FFF8ED",
          boxShadow:
            "0px 20px 50px rgba(62,39,35,0.35)",
        }}
      >
        {/* Heading */}

        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          sx={{
            color: "#4E342E",
            marginBottom: 1,
          }}
        >
          Leaderboard
        </Typography>

        <Typography
          align="center"
          sx={{
            color: "#795548",
            marginBottom: 3,
          }}
        >
          Current Rankings
        </Typography>

        {/* My Rank */}

        <Box
          sx={{
            backgroundColor: "#F3E5D0",
            borderRadius: "16px",
            padding: 2,
            marginBottom: 3,
            textAlign: "center",
            border: "1px solid #D7CCC8",
          }}
        >
          <Typography
            sx={{
              color: "#795548",
              fontWeight: "bold",
            }}
          >
            Your Rank
          </Typography>

          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              color: "#6D4C41",
            }}
          >
            {myRank}
          </Typography>

          <Typography
            sx={{
              color: "#4E342E",
              fontWeight: "bold",
            }}
          >
            {playerName} — {playerScore} Points
          </Typography>
        </Box>

        {/* Leaderboard Table */}

        <TableContainer
          sx={{
            borderRadius: "16px",
            border: "1px solid #D7CCC8",
            overflow: "hidden",
          }}
        >
          <Table>
            <TableHead>
              <TableRow
                sx={{
                  backgroundColor: "#6D4C41",
                }}
              >
                <TableCell
                  align="center"
                  sx={{
                    color: "#FFF8ED",
                    fontWeight: "bold",
                  }}
                >
                  Rank
                </TableCell>

                <TableCell
                  sx={{
                    color: "#FFF8ED",
                    fontWeight: "bold",
                  }}
                >
                  Player
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    color: "#FFF8ED",
                    fontWeight: "bold",
                  }}
                >
                  Score
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {players.map((player, index) => {
                const isCurrentPlayer =
                  player.name === playerName;

                return (
                  <TableRow
                    key={index}
                    sx={{
                      backgroundColor: isCurrentPlayer
                        ? "#E8D5C4"
                        : index % 2 === 0
                        ? "#FFF8ED"
                        : "#F8EFE4",

                      "&:hover": {
                        backgroundColor: "#EEDCC8",
                      },
                    }}
                  >
                    <TableCell
                      align="center"
                      sx={{
                        color: "#6D4C41",
                        fontWeight: "bold",
                      }}
                    >
                      {index + 1}
                    </TableCell>

                    <TableCell
                      sx={{
                        color: "#4E342E",
                        fontWeight: isCurrentPlayer
                          ? "bold"
                          : "normal",
                      }}
                    >
                      {player.name}
                    </TableCell>

                    <TableCell
                      align="center"
                      sx={{
                        color: "#6D4C41",
                        fontWeight: "bold",
                      }}
                    >
                      {player.score}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Back Button */}

        <Button
          fullWidth
          variant="contained"
          onClick={() => navigate("/")}
          sx={{
            marginTop: 3,
            padding: "13px",
            borderRadius: "13px",
            backgroundColor: "#6D4C41",
            fontWeight: "bold",

            "&:hover": {
              backgroundColor: "#4E342E",
            },
          }}
        >
          Back to Home
        </Button>
      </Paper>
    </Box>
  );
}

export default Leaderboard;
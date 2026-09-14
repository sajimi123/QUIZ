import React, { useState } from "react";

import {
  Box,
  Button,
  Stack,
  Typography,
  Paper,
} from "@mui/material";

import { Link } from "react-router-dom";

const questions = [
  {
    question: "What is React?",
    options: [
      "Database",
      "JavaScript library",
      "Programming language",
      "Operating system",
    ],
    answer: "JavaScript library",
  },

  {
    question: "Who developed React?",
    options: [
      "Google",
      "Microsoft",
      "Facebook (Meta)",
      "Amazon",
    ],
    answer: "Facebook (Meta)",
  },

  {
    question: "Which language is mainly used with React?",
    options: [
      "Python",
      "Javascript",
      "Java",
      "C++",
    ],
    answer: "Javascript",
  },

  {
    question: "What is JSX?",
    options: [
      "A database",
      "A CSS framework",
      "JavaScript XML",
      "A browser",
    ],
    answer: "JavaScript XML",
  },

  {
    question: "Which hook is used to manage state in React?",
    options: [
      "useEffect",
      "useState",
      "useData",
      "useRef",
    ],
    answer: "useState",
  },
];

function Game() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selectedAnswer, setSelectedAnswer] =
    useState("");

  const [score, setScore] = useState(0);

  const [quizCompleted, setQuizCompleted] =
    useState(false);

  const question = questions[currentQuestion];

  const handleAnswer = (option) => {
    if (selectedAnswer) return;

    setSelectedAnswer(option);

    if (option === question.answer) {
      setScore((previousScore) => previousScore + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {

      setCurrentQuestion(
        (previous) => previous + 1
      );

      setSelectedAnswer("");

    } else {

      const finalScore =
        score +
        (selectedAnswer === question.answer ? 1 : 0);

      localStorage.setItem(
        "quizScore",
        finalScore
      );

      localStorage.setItem(
        "quizPlayer",
        "Sajimi"
      );

      setScore(finalScore);
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setScore(0);
    setQuizCompleted(false);
  };

  /* RESULT */

  if (quizCompleted) {
    return (
      <Box
        sx={{
          minHeight: "100vh",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          p: 2,

          background:
            "linear-gradient(135deg, #6f4e37, #f5e6d3)",

          animation: "fadeIn 0.6s ease",

          "@keyframes fadeIn": {
            from: {
              opacity: 0,
            },
            to: {
              opacity: 1,
            },
          },
        }}
      >

        <Paper
          elevation={10}
          sx={{
            width: "100%",
            maxWidth: 500,

            p: 5,

            borderRadius: 5,

            textAlign: "center",

            animation: "pop 0.6s ease",

            "@keyframes pop": {
              from: {
                opacity: 0,
                transform: "scale(0.7)",
              },

              to: {
                opacity: 1,
                transform: "scale(1)",
              },
            },
          }}
        >

          <Typography
            sx={{
              fontSize: 70,

              animation:
                "bounce 1.5s infinite",

              "@keyframes bounce": {
                "0%, 100%": {
                  transform: "translateY(0)",
                },

                "50%": {
                  transform:
                    "translateY(-15px)",
                },
              },
            }}
          >
            🎉
          </Typography>

          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ mb: 2 }}
          >
            Quiz Completed!
          </Typography>

          <Typography
            variant="h2"
            fontWeight="bold"
            color="primary"
          >
            {score} / {questions.length}
          </Typography>

          <Typography
            variant="h6"
            sx={{ mb: 4 }}
          >
            ⭐ Great Job!
          </Typography>

          <Stack spacing={2}>

            <Button
              variant="contained"
              size="large"
              onClick={restartQuiz}
              sx={{
                py: 1.5,
                borderRadius: 3,

                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              🎮 Play Again
            </Button>

            <Button
              component={Link}
              to="/leaderboard"
              variant="outlined"
              size="large"
              sx={{
                py: 1.5,
                borderRadius: 3,

                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              🏆 Leaderboard
            </Button>

          </Stack>

        </Paper>

      </Box>
    );
  }

  /* GAME */

  return (
    <Box
      sx={{
        minHeight: "100vh",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        p: 2,

        background:
          "linear-gradient(135deg, #6f4e37, #f5e6d3)",
      }}
    >

      <Paper
        elevation={10}
        sx={{
          width: "100%",
          maxWidth: 700,

          p: {
            xs: 3,
            sm: 5,
          },

          borderRadius: 5,

          animation: "slideUp 0.6s ease",

          "@keyframes slideUp": {
            from: {
              opacity: 0,
              transform: "translateY(40px)",
            },

            to: {
              opacity: 1,
              transform: "translateY(0)",
            },
          },
        }}
      >

        {/* HEADER */}

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 4 }}
        >

          <Typography
            variant="h6"
            fontWeight="bold"
          >
            🎯 Quiz Master
          </Typography>

          <Typography
            fontWeight="bold"
            color="primary"
          >
            ⭐ Score: {score}
          </Typography>

        </Stack>


        {/* QUESTION NUMBER */}

        <Typography
          textAlign="center"
          color="text.secondary"
          sx={{ mb: 2 }}
        >
          Question {currentQuestion + 1} /{" "}
          {questions.length}
        </Typography>


        {/* QUESTION */}

        <Typography
          key={currentQuestion}
          variant="h5"
          fontWeight="bold"
          textAlign="center"
          sx={{
            mb: 4,

            animation:
              "questionAnimation 0.5s ease",

            "@keyframes questionAnimation": {
              from: {
                opacity: 0,
                transform: "translateX(30px)",
              },

              to: {
                opacity: 1,
                transform:
                  "translateX(0)",
              },
            },
          }}
        >
          {question.question}
        </Typography>


        {/* OPTIONS */}

        <Stack spacing={2}>

          {question.options.map((option) => {

            const isSelected =
              selectedAnswer === option;

            const isCorrect =
              option === question.answer;

            let background = "transparent";

            if (selectedAnswer) {

              if (isCorrect) {
                background = "#c8e6c9";
              }

              if (
                isSelected &&
                !isCorrect
              ) {
                background = "#ffcdd2";
              }
            }

            return (
              <Button
                key={option}
                variant="outlined"
                onClick={() =>
                  handleAnswer(option)
                }

                sx={{
                  justifyContent:
                    "flex-start",

                  textTransform: "none",

                  p: 2,

                  borderRadius: 3,

                  backgroundColor:
                    background,

                  transition:
                    "all 0.25s ease",

                  "&:hover": {
                    transform:
                      selectedAnswer
                        ? "none"
                        : "translateX(8px)",

                    boxShadow: 3,
                  },
                }}
              >
                {option}
              </Button>
            );
          })}

        </Stack>


        {/* FEEDBACK */}

        {selectedAnswer && (
          <Typography
            textAlign="center"
            fontWeight="bold"
            sx={{
              mt: 3,

              animation:
                "feedback 0.4s ease",

              "@keyframes feedback": {
                from: {
                  opacity: 0,
                  transform: "scale(0.8)",
                },

                to: {
                  opacity: 1,
                  transform: "scale(1)",
                },
              },
            }}
          >
            {selectedAnswer === question.answer
              ? "✅ Correct Answer!"
              : "❌ Wrong Answer!"}
          </Typography>
        )}


        {/* NEXT */}

        <Button
          fullWidth
          variant="contained"
          size="large"
          disabled={!selectedAnswer}
          onClick={nextQuestion}
          sx={{
            mt: 4,

            py: 1.5,

            borderRadius: 3,

            "&:hover": {
              transform: "scale(1.03)",
            },
          }}
        >
          
          {currentQuestion ===
          questions.length - 1
            ? "🏆 Finish Quiz"
            : "➡️ Next Question"}
        </Button>

        {/* HOME */}
        <Button
          component={Link}
          to="/"
          fullWidth
          sx={{
            mt: 2,

            "&:hover": {
              transform:
                "translateY(-2px)",
            },
          }}
        >
          🏠 Back to Home
        </Button>

      </Paper>

    </Box>
  );
}

export default Game;
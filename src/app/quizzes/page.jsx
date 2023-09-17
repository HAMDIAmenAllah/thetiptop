import Quiz from "../../components/quizzes/Quiz";
import ProtectedRoute from "@/utils/ProtectedRoute";
import React from "react";

const Quizzes = () => {
  return (
    <ProtectedRoute>
      <Quiz />
    </ProtectedRoute>
  );
};

export default Quizzes;

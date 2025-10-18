import { Typography, CircularProgress } from "@mui/material";
import RecipeCard from "./RecipeCard";

export default function ShowRecipe({ meals, category, error, loading }) {
  return (
    <>
      {loading && (
        <Typography align="center" sx={{ mt: 10 }}>
          <CircularProgress />
        </Typography>
      )}
      {error && (
        <Typography align="center" sx={{ mt: 10 }}>
          {error}
        </Typography>
      )}

      {!loading && meals.length > 0 && (
        <>
          <Typography
            style={{ marginTop: "15px" }}
            variant="h4"
            align="center"
            gutterBottom
          >
            {`${category} Recipes`}
          </Typography>
          <RecipeCard meals={meals} />
        </>
      )}
    </>
  );
}

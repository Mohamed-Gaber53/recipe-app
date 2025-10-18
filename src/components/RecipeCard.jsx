import { Typography, Button } from "@mui/material";

export default function RecipeCard({ meals }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {meals.map((meal) => (
          <div key={meal.idMeal} style={{ padding: "20px" }}>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                style={{
                  width: "80%",
                  maxWidth: "400px",
                  borderRadius: "12px",
                }}
              />
              <Typography variant="h5" sx={{ mt: 2 }}>
                {meal.strMeal}
              </Typography>

              {/* مفيش strInstructions هنا لأن API ده مبيجيبهاش */}

              <Button
                variant="contained"
                color="secondary"
                sx={{ mt: 2 }}
                //   onClick={() => alert(`Meal ID: ${meal.idMeal}`)}
              >
                🔍 Show Details
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

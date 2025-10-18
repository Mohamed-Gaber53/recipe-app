import SearchAppBar from "./components/Header";
import ShowRecipe from "./components/ShowRecipe";
import "./App.css";
import { useEffect, useState, useMemo } from "react";
import { Button } from "@mui/material";

function App() {
  let [category, setCategory] = useState("Seafood");
  let [meals, setMeals] = useState([]);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);
  let [page, setPage] = useState(1);

  useEffect(() => {
    let controller = new AbortController();
    let signal = controller.signal;
    async function fetchData(query = category) {
      setLoading(true);
      setError(null);
      let api = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${
        query || "Seafood"
      }`;

      try {
        const req = await fetch(api, { signal });
        if (!req.ok) {
          throw new Error("Failed to load recipes. Please try again.");
        }

        const data = await req.json();
        if (!data.meals) {
          setMeals([]);
          setError("No recipes found");
        } else {
          setMeals(data.meals);
          setPage(1);
        }
      } catch (err) {
        if (err.name === "abortError") return;
        setError(err.message || "Failed to load recipes. Please try again.");
        setMeals([]);
      } finally {
        setLoading(false);
      }
    }
    fetchData(category);
    return () => {
      controller.abort;
    };
  }, [category]);

  let recipeNumInPage = 4;
  let numOfPage = Math.ceil(meals.length / recipeNumInPage);

  let displayedMeals = useMemo(() => {
    let firstIndex = (page - 1) * recipeNumInPage;
    let lastIndex = recipeNumInPage + firstIndex;
    return meals.slice(firstIndex, lastIndex);
  }, [meals, page]);

  function handleNextClick() {
    if (page < numOfPage) {
      setPage((p) => p + 1);
    }
  }
  function handlePrevClick() {
    if (page > 1) {
      setPage((p) => p - 1);
    }
  }
  function handleQuery(query) {
    if (query) {
      setCategory(query);
    }
  }

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        padding: "15px",
      }}
    >
      <SearchAppBar handleQuery={handleQuery} />
      <ShowRecipe
        meals={displayedMeals}
        category={category}
        error={error}
        loading={loading}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          marginTop: "15px",
        }}
      >
        <Button
          variant="text"
          onClick={handlePrevClick}
          disabled={page === 1 || meals.length === 0}
        >
          ⇦ Prev
        </Button>
        <Button
          variant="text"
          onClick={handleNextClick}
          disabled={page === numOfPage || meals.length === 0}
        >
          Next ⇨
        </Button>
      </div>
    </div>
  );
}

export default App;

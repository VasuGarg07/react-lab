import { Alert, Card, CardActionArea, CardContent, CardMedia, IconButton, Snackbar, Typography } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Meal } from "../../shared/interface";
import { useCookBookContext } from "@contexts/cookboox.context";
import MealModal from "./MealModal";
import { useState } from "react";
import '@styles/foodmenu/FoodCard.scss'


interface cardProps { meal: Meal }

const MealCard = ({ meal }: cardProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const { addToFavorites } = useCookBookContext();

  const handleModalClose = () => setModalOpen(false);

  const handleAddtoFavorites = (id: string) => {
    setSnackbarOpen(true);
    addToFavorites(id)
  }

  return (
    <>
      <Card className="food-card">
        <CardActionArea onClick={() => setModalOpen(true)}>
          <CardMedia
            component="img"
            image={meal.image}
          />
        </CardActionArea>
        <CardContent className="card-content">
          <div className="flex-justified">
            <div className="text-wrap">
              <Typography variant="h6" component="div"> {meal.name} </Typography>
              <Typography noWrap variant="body2" color="text.secondary"> {meal.category} - {meal.area} </Typography>
            </div>
            <IconButton className="favorite-btn" size="large" color="success" onClick={() => handleAddtoFavorites(meal.id)}>
              <FavoriteBorderIcon />
            </IconButton>
          </div>
        </CardContent>
      </Card>
      <MealModal open={modalOpen} meal={meal} handleClose={handleModalClose} />
      <Snackbar open={snackbarOpen} autoHideDuration={1000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert severity="success" sx={{ width: '100%' }}>
          {`${meal.name} added to Favourties`}
        </Alert>
      </Snackbar>
    </>
  )
}

export default MealCard
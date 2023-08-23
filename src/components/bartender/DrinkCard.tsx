import { Alert, Card, CardActionArea, CardContent, CardMedia, IconButton, Snackbar, Typography } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Drink } from "@shared/interface";
import { useState } from "react";
import { useBartenderContext } from "@contexts/bartender.context";
import DrinkModal from "./DrinkModal";
import '@styles/foodmenu/FoodCard.scss'

interface cardProps { drink: Drink }

const DrinkCard = ({ drink }: cardProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const { addToFavorites } = useBartenderContext();

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
            image={drink.image}
          />
        </CardActionArea>
        <CardContent className="card-content">
          <div className="flex-justified">
            <div className="text-wrap">
              <Typography variant="h6" component="div"> {drink.name} </Typography>
              <Typography noWrap variant="body2" color="text.secondary"> {drink.category} - {drink.type} </Typography>
            </div>
            <IconButton className="favorite-btn" size="large" color="error" onClick={() => handleAddtoFavorites(drink.id)}>
              <FavoriteBorderIcon />
            </IconButton>
          </div>
        </CardContent>
      </Card>

      <DrinkModal open={modalOpen} drink={drink} handleClose={handleModalClose} />

      <Snackbar open={snackbarOpen} autoHideDuration={1000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert severity="success" sx={{ width: '100%' }}>
          {`${drink.name} added to Favourties`}
        </Alert>
      </Snackbar>
    </>
  )
}

export default DrinkCard
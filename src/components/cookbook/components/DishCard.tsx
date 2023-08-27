import { Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import { Dish } from "@shared/interface";
import '@styles/foodmenu/FoodCard.scss';
import { useNavigate } from "react-router-dom";

import MenuBookIcon from '@mui/icons-material/MenuBook';

interface cardProps { dish: Dish }

const DishCard = ({ dish }: cardProps) => {

  const navigate = useNavigate();


  return (
    <>
      <Card className="food-card">
        <CardMedia
          component="img"
          image={dish.image}
        />
        <CardContent className="card-content">
          <div className="flex-justified">
            <div className="text-wrap">
              <Typography variant="h6" component="div" noWrap> {dish.name} </Typography>
              <Typography noWrap variant="body2" color="text.secondary"> {dish.category} - {dish.area} </Typography>
            </div>
            <IconButton className="favorite-btn" color="error"
              onClick={() => navigate(`/cookbook/dish/${dish.id}`)}>
              <MenuBookIcon />
            </IconButton>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default DishCard
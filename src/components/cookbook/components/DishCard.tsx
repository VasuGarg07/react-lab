import { Card, CardActionArea, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
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
        <CardActionArea
          onClick={() => navigate(`/cookbook/dish/${dish.id}`)}>
          <CardMedia
            component="img"
            image={dish.image}
          />
          <CardContent className="card-content">
            <div className="flex-justified">
              <div className="text-wrap">
                <Typography variant="h6" component="div" noWrap className="dish-name"> {dish.name} </Typography>
                {/* <Typography noWrap variant="body2" color="text.secondary" className="sub-text"> {dish.category} - {dish.area} </Typography> */}
              </div>
              {/* <IconButton className="favorite-btn" color="primary"> */}
              <MenuBookIcon color="primary" />
              {/* </IconButton> */}
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}

export default DishCard
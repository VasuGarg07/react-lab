import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Drink } from "@shared/interface";
import '@styles/foodmenu/FoodCard.scss';
import { useNavigate } from "react-router-dom";

import MenuBookIcon from '@mui/icons-material/MenuBook';

interface cardProps { drink: Drink }

const DrinkCard = ({ drink }: cardProps) => {

  const navigate = useNavigate();


  return (
    <>
      <Card className="food-card">
        <CardActionArea
          onClick={() => navigate(`/bartender/drink/${drink.id}`)}>
          <CardMedia
            component="img"
            image={drink.image}
          />
          <CardContent className="card-content">
            <div className="flex-justified">
              <div className="text-wrap">
                <Typography variant="h6" component="div" noWrap className="dish-name"> {drink.name} </Typography>
                {/* <Typography noWrap variant="body2" color="text.secondary" className="sub-text"> {dish.category} - {dish.area} </Typography> */}
              </div>
              {/* <IconButton className="favorite-btn" color="primary"> */}
              <MenuBookIcon color="warning" />
              {/* </IconButton> */}
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}

export default DrinkCard
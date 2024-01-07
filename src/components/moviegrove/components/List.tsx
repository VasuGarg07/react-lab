import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Card from "./Card";
import "@styles/moviedb/List.scss";
import { Skeleton, Typography } from "@mui/material";

interface ListProps {
  title: string,
  fetchUrl: string,
  quantityItems: number,
  textLink?: string,
  errorMessage?: string,
  linkPath?: string,
}

const List = ({
  title,
  fetchUrl,
  quantityItems,
  textLink,
  errorMessage,
  linkPath,
}: ListProps) => {
  const [listData, setListData] = useState<any>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${fetchUrl}?api_key=b889c03767f5bd320c61bdbf42da33cb`)
      .then((res) => res.json())
      .then((data) => {
        setListData(data);
        setIsLoading(false);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="list-section full-width">
      <div className="section-header flex-justified">
        <div className="section-title flex-centered-container-vr">
          <span className="title-tag"></span>
          <Typography variant="h6" className="title">{title}</Typography>
        </div>
        {textLink && linkPath && (
          <Link to={linkPath} className="section-visit-link flex-centered-container-vr">
            <span>              {textLink}            </span>
            <ChevronRightRoundedIcon />
          </Link>
        )}
      </div>
      <div className="section-grid full-width">
        {isLoading &&
          Array(quantityItems)
            .fill(0)
            .map((_, i) => (
              <Skeleton key={i} className="skeletal full-width" />
            ))
        }
        {listData && listData.results &&
          listData.results
            .slice(0, quantityItems)
            .map((item: any) => (
              <Card
                key={item.id}
                id={item.id}
                title={item.title ? item.title : item.name}
                rating={item.vote_average}
                image={item.poster_path}
                type={item.release_date ? "movie" : "serie"}
              />
            ))}
        {listData && listData.results && listData.results.length <= 0 && (
          <p>
            {errorMessage != undefined
              ? errorMessage
              : "Error displaying items"}
          </p>
        )}
      </div>
    </section >
  );
}
export default List;
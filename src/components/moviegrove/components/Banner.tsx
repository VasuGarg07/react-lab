import { useState, useEffect } from "react";
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import "@styles/moviedb/Banner.scss"
import { Skeleton } from "@mui/material";
// Define the types for your props
type BannerProps = {
  imageId?: string;
  title?: string;
  overview?: string;
  year?: string;
  voteAverage?: number;
  fetchUrl?: string;
};

// Define the type for the banner data
type BannerData = {
  backdrop_path?: string;
  title?: string;
  name?: string;
  overview?: string;
  release_date?: string;
  first_air_date?: string;
  vote_average?: number;
};

function Banner({
  imageId: initialImageId,
  title: initialTitle,
  overview: initialOverview,
  year: initialYear,
  voteAverage: initialVoteAverage,
  fetchUrl,
}: BannerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [bannerData, setBannerData] = useState<BannerData>({});

  useEffect(() => {
    if (typeof fetchUrl !== 'undefined') {
      fetch(`${fetchUrl}?api_key=b889c03767f5bd320c61bdbf42da33cb`)
        .then((res) => res.json())
        .then((data) => {
          const result = data.results ? data.results[0] : data;
          setBannerData(result);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [fetchUrl]);

  const imageId = bannerData?.backdrop_path || initialImageId;
  const title = bannerData?.title || bannerData?.name || initialTitle;
  const overview = bannerData.overview || initialOverview;
  const year =
    bannerData?.release_date?.slice(0, 4) ||
    bannerData.first_air_date?.slice(0, 4) ||
    initialYear;
  const voteAverage = bannerData?.vote_average || initialVoteAverage;

  return (
    <>
      {fetchUrl !== undefined && isLoading &&
        <Skeleton variant="rounded" animation="wave" className="banner-container" />}
      {title && (
        <div className="banner-container full-width padding banner-bg flex-centered-column"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, .7), rgba(0, 0, 0, .4)), url(${imageId != null
              ? `https://image.tmdb.org/t/p/w500${imageId}`
              : 'https://i.ibb.co/Z1vrqbj/no-image-banner.jpg'
              })`
          }}>
          <div className="banner-info">
            <div className="flex-centered-container-vr">
              <span className="rating">
                <StarRoundedIcon />
                <span>
                  {voteAverage && voteAverage.toString().length > 3
                    ? voteAverage.toString().slice(0, 3)
                    : voteAverage}
                </span>
              </span>
              <span>{`(${year})`}</span>
            </div>
            <h1>{title}</h1>
            <p className="overview">
              {overview && overview.length >= 200
                ? `${overview.slice(0, 200)}...`
                : overview}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Banner;

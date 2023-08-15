import { Button, CircularProgress, Typography } from "@mui/material"
import { Quote } from "@shared/interface"

interface Props {
  quote: Quote,
  error: boolean,
  isLoading: boolean,
  fetchRandom: () => Promise<void>
}

const QuoteBox = ({ quote, error, isLoading, fetchRandom }: Props) => {
  if (isLoading) return <CircularProgress color="inherit" />
  // if (error) return <h1>Something Went Wrong</h1>
  return (

    <div className="quote-container flex-centered-column full-width padding">
      <Typography variant="h6" className="text-center section-title">
        {quote.anime || 'Fairy Tail'}
      </Typography>
      <Typography variant="body1" className="text-center quote-text padding">
        {quote.quote || `Even if I can't see. Even if I can't hear. I have light inside me. The path I walked with my friends, is bringing light to my future. I don't fear anything! This isn't even worthy of being called pain! The worst pain is.. The pain of losing your light.`}
      </Typography>
      <div className="padding flex-justified full-width">
        <div className="quote-container padding text-italic">
          {quote.character || 'Erza Scarlet'}
        </div>
        <Button
          variant="contained"
          disableElevation
          onClick={fetchRandom}
          color="warning"
          className="btn"
        >
          Random Quote
        </Button>
      </div>
    </div>
  )
}

export default QuoteBox
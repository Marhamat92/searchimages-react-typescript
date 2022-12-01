import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query: term
    },
    headers: {
      Authorization: "Client-ID gbfEgzLSa-XDnjjUHLo3bIlvPr3ZKWsOrn_rDydNCBs"
    }
  }
  )

  return response.data.results;
}

export default searchImages;
export const getGifs = async (anime) => {



    const url = `https://api.giphy.com/v1/gifs/search?api_key=VmQOnLPRvGVZKSinb8Y86ukeqQxy0AnP&q=${anime}&limit=10`
    const response = await fetch(url);
    const { data } = await response.json()

    const gifs = data.map(img=>({

          id: img.id,
          title: img.title,
          url: img.images.downsized.url

    }))
    console.log(gifs)
     return gifs
}

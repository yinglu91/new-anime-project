'use server'

export const fetchAnimes = async (pageNumber: number) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${pageNumber}&limit=8&order=popularity`
  )

  const data = await response.json()

  return data
}

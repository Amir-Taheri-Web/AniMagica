const fetchAnimes = async (page: number) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?order=popularity&limit=8&page=${page}`
  );

  const data = await response.json();

  return data;
};

export default fetchAnimes;

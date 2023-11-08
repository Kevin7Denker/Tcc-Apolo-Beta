import axios from "axios";

interface NewsArticle {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
}

export async function fetchMusicNews(): Promise<NewsArticle[]> {
  try {
    const apiKey = "2f5b7674e74c4d3a9d79a81cbcff140d";
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=album&language=pt&sortBy=publishedAt&pageSize=25&apiKey=${apiKey}`
    );
    const articles: NewsArticle[] = response.data.articles;
    return articles;
  } catch (error) {
    throw new Error(`Erro ao buscar dados: ${error.message}`);
  }
}
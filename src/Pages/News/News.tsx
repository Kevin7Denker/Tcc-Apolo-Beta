import {
  FlatList,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { styles } from "./Styles/Styles";
import { useEffect, useState } from "react";
import ItemNews from "../../Components/News/ItemNews";
import { fetchMusicNews } from "../../Api/NewsApi/repository/Respository";

const News = ({navigation}) => {
  const [news, setNews] = useState<any>([]);
  const [visibleNews, setVisibleNews] = useState<number>(5);
  const [showLoadMoreButton, setShowLoadMoreButton] = useState<boolean>(true);

  async function Dados() {
    const dataNews = await fetchMusicNews();

    setNews(dataNews);
    const data = Array.from(
      { length: 25 },
      (_, index) => `Notícia ${index + 1}`
    );
    return data;
  }

  const loadMoreNews = async () => {
    const additionalNews = await fetchMusicNews();
    setNews([...news, ...additionalNews]);
    setVisibleNews(visibleNews + 20);
    if (visibleNews + 20 >= news.length) {
      setShowLoadMoreButton(false);
    }
  };

  useEffect(() => {
    Dados();
  }, []);

  return (
    <View style={styles.view}>
      <ScrollView>
        <Text style={styles.mainText}>Notícias</Text>
        <View style={styles.container}>
        <FlatList
          data={news.slice(0, visibleNews)}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <ItemNews item={item} navigation={navigation} />}
          keyExtractor={(item, index) => index.toString()}
        />
        {showLoadMoreButton && news.length > visibleNews &&(
          <TouchableOpacity
            style={styles.loadMoreButton}
            onPress={loadMoreNews}
          >
            <Text style={styles.loadMoreText}>Ver mais</Text>
          </TouchableOpacity>
        )}
        </View>
      </ScrollView>
    </View>
  );
};

export default News
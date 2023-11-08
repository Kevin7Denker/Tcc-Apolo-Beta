import { View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./Styles/Styles";
import { getPosts } from "../../Api/Firebase/Repository/Repository";
import { ScrollView } from "react-native-gesture-handler";
import FeedItem from "../../Components/Feed/FeedItem";

const FeedPage = ({ navigation }) => {
  const [post, setPosts] = useState<any>([]);

  const getData = async () => {
    try {
      const cachedPosts = await getPosts();

      if (cachedPosts && cachedPosts.length > 0) {
        setPosts(cachedPosts);
      } else {
        const postsFromFirestore = await getPosts();
        setPosts(postsFromFirestore);
      }
    } catch (error) {
      console.error("Erro ao buscar posts:", error);
    }
  };


  useEffect(() => {
    const intervalId = setInterval(() => {
      getData();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.background}>
   
      <View style={styles.feed}>
        <View style={styles.items}>
          <FlatList
            data={post}
            showsHorizontalScrollIndicator={false}
            inverted
            renderItem={({ item }) => (
              <FeedItem posts={item} navigation={navigation} />
            )}
          />
        </View>
      </View>
  
    </View>
  );
};

export default FeedPage;

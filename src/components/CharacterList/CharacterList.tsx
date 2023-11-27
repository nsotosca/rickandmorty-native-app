import { memo } from "react";
import { FlatList, View } from "react-native";

import { CharacterListItem } from "./CharacterListItem";
import NoData from "../NoData";
import Loader from "../Loader";

interface Props<T> {
  characters: T[];
  isLoadMore?: boolean;
  noData?: string;
  loading?: boolean;
  onLoadMore?: () => void;
  onPressItem?: (item: T) => void;
}

const CharacterList = <T,>(props: Props<T>) => {
  const {
    characters = [],
    isLoadMore,
    noData,
    loading,
    onLoadMore = () => {},
    onPressItem = () => {},
  } = props;

  if (loading) {
    return <Loader />;
  }

  if (!characters.length && noData) {
    return <NoData message={noData} fullHeight/>;
  }

  const keyExtractor = (_, index) => String(index);

  const renderItem = ({ item }) => (
    <CharacterListItem key={item.id} character={item} onPress={onPressItem} />
  );

  const footerComponent = isLoadMore && (
    <View
      style={{
        height: 90,
      }}
    >
      <Loader size={"small"} />
    </View>
  );

  return (
    <FlatList
      data={characters}
      keyExtractor={keyExtractor}
      onEndReached={onLoadMore}
      onEndReachedThreshold={0.2}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      ListFooterComponent={footerComponent}
    />
  );
};

export default memo(CharacterList);

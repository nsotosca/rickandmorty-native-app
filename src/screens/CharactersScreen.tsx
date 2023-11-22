import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";

import { useAppDispatch } from "../store/hooks";
import { selectCharacter } from "../store/characterSlice";

import { getCharacters } from "../core/api";
import { ICharacter } from "../core/models";
import { SCREENS } from "../utils/enums";
import { getUrlParam } from "../utils";

import CharacterList from "../components/CharacterList";
import Loader from "../components/Loader";

const CharactersScreen = ({ navigation }) => {
  const dispatch = useAppDispatch();

  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [nextPage, setNextPage] = useState<string | null>("");
  const [isLoading, setIsLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(false);

  const getData = () => {
    getCharacters(nextPage)
      .then((res) => {
        setCharacters([...characters, ...res.results]);

        const page = getUrlParam("page", res.info.next) ?? null;

        setNextPage(page);
      })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        setLoadMore(false);

        setIsLoading(false);
      });
  };

  const onPressItem = (characterSelected: ICharacter) => {
    dispatch(selectCharacter(characterSelected));

    navigation.navigate(SCREENS.CHARACTER, {
      id: characterSelected.id,
    });
  };

  const loadMoreItems = () => {
    if (!loadMore && nextPage) {
      setLoadMore(true);
      getData();
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CharacterList
        characters={characters}
        onPressItem={onPressItem}
        onLoadMore={loadMoreItems}
        isLoadMore={loadMore}
        noData="This is empty, Rick!"
        loading={isLoading}
      />
    </SafeAreaView>
  );
};

export default CharactersScreen;

import { PropsWithChildren, createContext, useEffect, useState } from "react";

export interface FavoriteArticleData {
    url: string;
    title: string;
    byline: string;
    section: string;
    img_src: string;
    timestamp: string;
    isFavorite: boolean;
}

export const FavoriteArticlesDataContext = createContext<{
    favoriteArticlesArray: FavoriteArticleData[];
    updateFavoriteArticlesArray: (
        newFavoriteArticleObject: FavoriteArticleData,
        isArticleFavorite: boolean
    ) => void;
}>({
    favoriteArticlesArray: [],
    updateFavoriteArticlesArray: () => {},
});

const FavoriteArticlesDataProvider = ({ children }: PropsWithChildren) => {
    const [favoriteArticlesArray, setFavoriteArticlesArray] = useState<
        FavoriteArticleData[]
    >([]);

    useEffect(() => {
        const localStorageData = localStorage.getItem("favoriteArticlesArray");
        const parsedLoaclStorageData = localStorageData
            ? JSON.parse(localStorageData)
            : null;
        const initialFavoriteArticlesArray: FavoriteArticleData[] =
            Array.isArray(parsedLoaclStorageData) ? parsedLoaclStorageData : [];
        setFavoriteArticlesArray(initialFavoriteArticlesArray);
    }, []);

    const updateFavoriteArticlesArray = (
        newFavArticleObject: FavoriteArticleData,
        isArticleFavorite: boolean
    ) => {
        setFavoriteArticlesArray((prevArray) => {
            let updatedArray;
            const duplicateArticleIndex = prevArray.findIndex((article) => {
                return (
                    article.url === newFavArticleObject.url 
                );
            });

            if (isArticleFavorite) {
                if (duplicateArticleIndex !== -1) {
                    return prevArray;
                }
                updatedArray = [...prevArray, newFavArticleObject];

            } else {
                updatedArray = prevArray.filter((article, index) => {
                    return index !== duplicateArticleIndex;
                });
            }

            localStorage.setItem(
                "favoriteArticlesArray",
                JSON.stringify(updatedArray)
            );
            return updatedArray;
        });
    };

    return (
        <FavoriteArticlesDataContext.Provider
            value={{ favoriteArticlesArray, updateFavoriteArticlesArray }}
        >
            {children}
        </FavoriteArticlesDataContext.Provider>
    );
};

export default FavoriteArticlesDataProvider;
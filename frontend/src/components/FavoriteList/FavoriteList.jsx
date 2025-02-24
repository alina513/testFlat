import { FlatForUser } from "../FlatForUser/FlatForUser";
import { ListWrapper } from "../FlatsList/FlatList.styled";

export const FavoriteList = ({favorites}) => {

  return (
    <ListWrapper>
      {favorites.map((favorite) => 
          <FlatForUser value={favorite} key={favorite._id} />  
      )}
    </ListWrapper>
  );
};

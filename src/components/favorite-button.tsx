import { Button } from 'antd';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useFavoriteStore } from '@/stores/favorite';
import type { ComponentProps } from 'react';

interface Props extends ComponentProps<typeof Button> {
  movieId: string;
}

function FavoriteButton({ movieId, style, ...rest }: Props) {
  const favorites = useFavoriteStore.use.favorites();
  const addFavorite = useFavoriteStore.use.addFavorite();
  const removeFavorite = useFavoriteStore.use.removeFavorite();
  const isFavorite = favorites.some((id) => id === movieId);

  const handleFavorite = () => {
    if (isFavorite) {
      removeFavorite(movieId);
    } else {
      addFavorite(movieId);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation();
    e.preventDefault();
    handleFavorite();
  };

  return (
    <Button
      type="text"
      icon={isFavorite ? <AiFillHeart color="red" size={20} /> : <AiOutlineHeart size={20} />}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      onClick={handleClick}
      style={{
        backgroundColor: 'white',
        borderRadius: 4,
        padding: 0,
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
        ...style,
      }}
      {...rest}
    />
  );
}

export default FavoriteButton;

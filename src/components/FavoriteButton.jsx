function FavoriteButton({ isFavorite, onClick }) {
  return (
    <button onClick={onClick}>
      {isFavorite ? "❤️ Remove from Favorites" : "🤍 Add to Favorites"}
    </button>
  );
}

export default FavoriteButton;
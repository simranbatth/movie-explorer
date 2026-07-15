import "../css/Favorites.css";

function Favorites(){

const favorites=[];

return(

<div className="favorites">

<h1>My Favorites</h1>

{
favorites.length===0?

<p>No Favorite Movies Yet.</p>

:

<div>

Movies will appear here.

</div>

}

</div>

)

}

export default Favorites;
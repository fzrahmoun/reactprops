
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// Component Player wich appear props
function Player({image,name,team,nationality,jerseyNumber,age}) {
    return (
    
      <>
             <img src={image} alt={name} style={{width:200}}/>
            <h2>{name}</h2>
            <div>Team : {team}</div>
            <div>Nationality : {nationality}</div>
            <div>JerseyNumber : {jerseyNumber}</div>
            <div>Age : {age}</div>

      </>
    );
  }

//   Default value if values props are empty
  Player.defaultProps = {
    image:"./img/haland.png",
    name: "unspecified",
    team:"unspecified",
    nationality:"unspecified",
    age:18
   };
  export default Player;
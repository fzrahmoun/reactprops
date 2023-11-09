import Player from './Player';
import players from "./players";

function ListPlayer() {
    return (
      <div className="App">
          <div className="container">
            <div className='row'>
                {/* map to appear info players */}
                {players.map((players) => (
                    <div className='col-md-3' key={players.id}>
                        <div className="infos">
                            {/* call to Component Player and add props */}
                        <Player image={players.image} name={players.name} team={players.team} nationality={players.nationality} jerseyNumber={players.jerseyNumber} age={players.age} />
                        </div>
                        
                        
                    </div>
                ))}
            </div>
         </div>   
        
      </div>
    );
  }
  
  export default ListPlayer;

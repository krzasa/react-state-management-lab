
const FighterListItem = ({char, handleMove}) => {
        return (
            <li>
            <img src="{char.img}" />
            <p>Name: {char.name}</p>
            <p>Price: {char.price}</p>
            <p>Strength: {char.strength}</p>
            <p>Agility: {char.agility}</p>
            <button onClick={() => handleMove(char)}>Add</button>
            </li>
        );
      };
      
      export default FighterListItem;
      
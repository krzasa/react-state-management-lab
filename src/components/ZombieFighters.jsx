const FighterListItem = (props) => {
    const {char} = props
        return (
            <li>
            <img src="{char.img}" />
            <p>Name: {char.name}</p>
            <p>Price: {char.price}</p>
            <p>Strength: {char.strength}</p>
            <p>Agility: {char.agility}</p>
            </li>
        );
      };
      
      export default FighterListItem;
      
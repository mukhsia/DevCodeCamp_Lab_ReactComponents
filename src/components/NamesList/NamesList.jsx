import NameBadge from "../NameBadge/NameBadge";

const NamesList = ({}) => {
    const names= [
        {firstName: "Andre", lastName: "Mukhsia"},
        {firstName: "Dan", lastName: "Stoffels"},
        {firstName: "JJ", lastName: "Vega"},
        {firstName: "Amy", lastName: "Dworsky"}
    ];
    
    const nameBadges = names.map((name, index) => <NameBadge DisplayedName={name.firstName + " " + name.lastName} key={index}/>)
    
    return ( 
        <div>
            {nameBadges}
        </div>
    );
}
 
export default NamesList;
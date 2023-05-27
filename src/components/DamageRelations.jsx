export const DamageRelations = ({ type, type1, type2 }) => {
    //Checkea los tipos de donde recibe el doble de daño por cada uno de sus dos tipos
    const type1DoubleFrom = type1.damage_relations.double_damage_from.map(dmgFrom => dmgFrom.name);
    const type2DoubleFrom = type2 && type2.damage_relations.double_damage_from.map(dmgFrom => dmgFrom.name);

    //Checkea los tipos de donde recibe la mitad de daño por cada uno de sus dos tipos
    const type1HalfFrom = type1.damage_relations.half_damage_from.map(hlfFrom => hlfFrom.name);
    const type2HalfFrom = type2 && type2.damage_relations.half_damage_from.map(hlfFrom => hlfFrom.name);

    //Checkea los tipos de donde no recibe daño por cada uno de sus dos tipos
    const type1NoneFrom = type1.damage_relations.no_damage_from.map(noDmgFrom => noDmgFrom.name);
    const type2NoneFrom = type2 && type2.damage_relations.no_damage_from.map(noDmgFrom => noDmgFrom.name);


    let quadrupleDamageFrom = [];
    let quadrupleResistanceFrom = [];
    let neutralResistanceType1 = [];
    let neutralResistanceType2 = [];

    const allDoubleFrom = type1DoubleFrom.concat(type2DoubleFrom);
    const allHalfFrom = type1HalfFrom.concat(type2HalfFrom);
    const allNoneFrom = type1NoneFrom.concat(type2NoneFrom);

    //Si tiene dos tipos
    if (type2 !== undefined) {
        quadrupleDamageFrom = type1DoubleFrom.filter(name => type2DoubleFrom.includes(name));
        quadrupleResistanceFrom = type1HalfFrom.filter(name => type2HalfFrom.includes(name));
        neutralResistanceType1 = type1DoubleFrom.filter(name => type2HalfFrom.includes(name));
        neutralResistanceType2 = type2DoubleFrom.filter(name => type1HalfFrom.includes(name));
    }
    const commonStyles = "flex items-center justify-center aspect-square font-bold rounded-br-md rounded-bl-md text-xs";

    if (neutralResistanceType1.includes(type.type.toLowerCase())) return <span></span>;
    if (neutralResistanceType2.includes(type.type.toLowerCase())) return <span></span>;
    if (allNoneFrom.includes(type.type.toLowerCase())) return <span className={`${commonStyles} bg-neutral-900 text-white`}>0</span>
    if (quadrupleDamageFrom.includes(type.type.toLowerCase())) return <span className={`${commonStyles} bg-lime-500 text-white`} >x4</span>;
    if (allDoubleFrom.includes(type.type.toLowerCase())) return <span className={`${commonStyles} bg-lime-600 text-white`}>x2</span>;
    if (quadrupleResistanceFrom.includes(type.type.toLowerCase())) return <span className={`${commonStyles} bg-red-900 text-white`}>&frac14;</span>
    if (allHalfFrom.includes(type.type.toLowerCase())) return <span className={`${commonStyles} bg-red-700 text-white`}>&frac12;</span>;

    return <span></span>;
}
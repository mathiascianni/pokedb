import { SmallText } from "./index.js";

export const PokemonStats = ({ pokemon }) => {
    const allStatsNames = pokemon.stats.map((stat) => stat.stat);
    const statName = allStatsNames.map(sName => sName.name);
    const allStats = pokemon.stats.map((stat) => stat.base_stat);

    const sumAllStats = allStats.reduce((acc, current) => acc + current);
    statName.shift();
    const statHP = allStats.shift();

    const maxHPArr = (Math.floor(0.01 * (2 * statHP + 31 + 63) * 100) + 100 + 10);
    const minHPArr = (Math.floor(0.01 * (2 * statHP + 0 + 0) * 100) + 100 + 10);

    const maxStatsArr = allStats.map(stat => Math.floor((Math.floor(0.01 * (2 * stat + 31 + 63) * 100) + 5) * 1.1));
    const minStatsArr = allStats.map(stat => Math.floor((Math.floor(0.01 * (2 * stat + 0 + 0) * 100) + 5) * 0.9));

    const colorBG = (stat) => {
        if (((stat / 230) * 100) <= 20) return "bg-orange-600";
        if (((stat / 230) * 100) <= 40) return "bg-yellow-400";
        if (((stat / 230) * 100) <= 60) return "bg-green-500";
        if (((stat / 230) * 100) <= 90) return "bg-blue-400";
        if (((stat / 230) * 100) <= 100) return "bg-indigo-500";
    }

    const renameStat = (stat) => {
        if (stat == "special-attack") return "Sp. Atk";
        if (stat == "special-defense") return "Sp. Def";

        return stat;
    }

    return (
        <div className="overflow-x-scroll sm:overflow-x-hidden">
            <div className="min-w-[430px] ">
                <div className="flex items-center gap-4">
                    <SmallText>Base</SmallText>
                    <div className="flex-1"></div>
                    <div className="flex gap-2 min-w-[100px] justify-between">
                        <SmallText>Min</SmallText>
                        <SmallText>Max</SmallText>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex gap-2 min-w-[130px] justify-between">
                        <span className="capitalize">HP</span>
                        <span className="capitalize">{statHP}</span>
                    </div>
                    <div className="flex-1 bg-neutral-200 rounded-full h-2">
                        <div className={`h-full mb-2 rounded-full ${colorBG(statHP)}`} style={{ width: ((statHP / 230) * 100) + "%" }}></div>
                    </div>
                    <div className="flex gap-2 min-w-[100px] justify-between">
                        <span className="capitalize">{minHPArr}</span>
                        <span className="capitalize">{maxHPArr}</span>
                    </div>
                </div>
                {allStats.map((stat, index) => (
                    <div className="flex items-center gap-4" key={index}>
                        <div className="flex gap-2 min-w-[130px] justify-between">
                            <span className="capitalize">{renameStat(statName[index])}</span>
                            <span className="capitalize">{stat}</span>
                        </div>
                        <div className="flex-1 bg-neutral-200 rounded-full h-2">
                            <div className={`h-full mb-2 rounded-full ${colorBG(stat)}`} style={{ width: ((stat / 230) * 100) + "%" }}></div>
                        </div>
                        <div className="flex gap-2 min-w-[100px] justify-between">
                            <span className="capitalize">{minStatsArr[index]}</span>
                            <span className="capitalize">{maxStatsArr[index]}</span>
                        </div>
                    </div>
                ))}
                <div className="flex items-center gap-4">
                    <div className="flex gap-2 min-w-[130px] justify-between">
                        <span className="capitalize">Total</span>
                        <span className="capitalize font-bold">{sumAllStats}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

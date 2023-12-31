import SeedMoneyFilterBar from "../atoms/SeedMoneyFilterBar";
import SeedMoneyFilterTag from "../atoms/SeedMoneyFilterTag";
import { SeedMoney } from "../../../type/GroupFilter";

interface Props {
  seedMoney: SeedMoney;
  dispatch: React.Dispatch<{ type: "SEED_MONEY"; payload: SeedMoney }>;
}

const FilterSeedMoneyTab = ({ seedMoney, dispatch }: Props) => {
  return (
    <div className="border-b-2 border-opacity-30 h-3/5 mt-6">
      <p className=" text-xl mb-2">시드머니 필터링</p>
      <SeedMoneyFilterBar seedMoney={seedMoney} dispatch={dispatch} />
      <div className="flex mt-6 mb-2 gap-2">
        <SeedMoneyFilterTag
          text="백만원 ~ 500만원"
          seedMoney={seedMoney}
          payload={[1000000, 5000000]}
          dispatch={dispatch}
        />
        <SeedMoneyFilterTag
          text="500만원 ~ 천만원"
          seedMoney={seedMoney}
          payload={[5000000, 10000000]}
          dispatch={dispatch}
        />
      </div>
    </div>
  );
};
export default FilterSeedMoneyTab;

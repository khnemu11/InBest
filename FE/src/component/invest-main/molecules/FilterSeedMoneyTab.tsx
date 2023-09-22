import SeedMoneyFilterBar from "../atoms/SeedMoneyFilterBar";
import SeedMoneyFilterTag from "../atoms/SeedMoneyFilterTag";
import { SeedMoney } from "../../../type/GroupFilter";
import { useFilterSeedMoneyTab } from "./useFilterSeedMoneyTab";

interface Props {
  seedMoney: SeedMoney;
  dispatch: React.Dispatch<{ type: "SEED_MONEY"; payload: SeedMoney }>;
}

const FilterSeedMoneyTab = ({ seedMoney, dispatch }: Props) => {
  const { onChangeCheckboxChange, prevSeedMoney } = useFilterSeedMoneyTab(seedMoney, dispatch);

  return (
    <div className="border-b-2 border-opacity-30 h-3/5 mt-6">
      <p className=" text-xl mb-2">시드머니 필터링</p>
      <SeedMoneyFilterBar seedMoney={seedMoney} dispatch={dispatch} prevSeedMoney={prevSeedMoney} />
      <div className="flex mt-6 mb-2 gap-2">
        <SeedMoneyFilterTag
          text="백만원 ~ 250만원"
          seedMoney={seedMoney}
          payload={[1000000, 2500000]}
          dispatch={dispatch}
        />
        <SeedMoneyFilterTag
          text="250만원 ~ 500만원"
          seedMoney={seedMoney}
          payload={[2500000, 5000000]}
          dispatch={dispatch}
        />
        <SeedMoneyFilterTag
          text="500만원 ~ 750만원"
          seedMoney={seedMoney}
          payload={[5000000, 7500000]}
          dispatch={dispatch}
        />
        <SeedMoneyFilterTag
          text="750만원 ~ 천만원"
          seedMoney={seedMoney}
          payload={[7500000, 10000000]}
          dispatch={dispatch}
        />
      </div>
      <div className="flex gap-2 h-12 items-center ml-2">
        <input
          type="checkbox"
          className=" h-5 w-5"
          checked={seedMoney === "linkingMode"}
          onChange={onChangeCheckboxChange}
        />
        <p className=" text-xl">계좌 연동 모드</p>
      </div>
    </div>
  );
};
export default FilterSeedMoneyTab;

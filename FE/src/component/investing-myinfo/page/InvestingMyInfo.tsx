import Compare from "../organisms/Compare";
import MyAssets from "../organisms/MyAssets";
import MyRanking from "../organisms/MyRanking";
import MyStock from "../organisms/MyStock";
import RecentDealStock from "../organisms/RecentDealStock";

const InvestingMyInfo = () => {
  return (
    <div className=" grid grid-cols-6 grid-rows-6">
      <MyAssets />
      <Compare />
      <MyRanking />
      <MyStock />
      <RecentDealStock />
    </div>
  );
};
export default InvestingMyInfo;

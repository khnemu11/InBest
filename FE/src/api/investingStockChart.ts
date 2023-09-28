import { instanceWithAuth } from "./interceptors";
const apiWithAuth = instanceWithAuth("invest-service/invest/");

const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}${month}${day}`;
};

// days 만큼 이전 날짜를 계산하는 함수
const getPastDate = (days: number) => {
  const today = new Date();
  today.setDate(today.getDate() - days);
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}${month}${day}`;
};

export const getKorStockChart = async (companyCode: string, days: number) => {
  const currentDate = getCurrentDate(); // 오늘 날짜
  const pastDate = getPastDate(days);

  const { data } = await apiWithAuth.get("inquire-daily-itemchartprice", {
    params: {
      FID_COND_MRKT_DIV_CODE: "J",
      FID_INPUT_ISCD: companyCode,
      FID_INPUT_DATE_1: pastDate,
      FID_INPUT_DATE_2: currentDate,
      FID_PERIOD_DIV_CODE: "D",
    },
  });
  return data;
};

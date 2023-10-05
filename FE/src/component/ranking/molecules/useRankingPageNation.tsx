import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
export const useRankingPageNation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [totalUser, setTotalUser] = useState(0);

  console.log(navigate.name);

  const handlePageClick = (e: { selected: number }) => {
    const currentUrl = new URL(location.search, window.location.origin);
    currentUrl.searchParams.set("page", String(e.selected + 1));
    navigate(currentUrl.search);
    window.scrollTo(0, 500);
  };

  return { totalUser, handlePageClick, setTotalUser };
};
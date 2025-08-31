import { useMemo } from "react";

export const useTopCreators = (creator = [], limit = null) => {
  return useMemo(() => {
    if (!Array.isArray(creator) || creator.length === 0) return [];

    const result = Object.values(
      creator.reduce((acc, { seller, price }) => {
        acc[seller] = acc[seller] || { seller, total: 0 };
        acc[seller].total += Number(price);
        return acc;
      }, {})
    ).sort((a, b) => b.total - a.total); // sắp xếp giảm dần

    return limit ? result.slice(0, limit) : result;
  }, [creator, limit]);
};

"use client";

import { useMemo } from "react";

export function useShortAddress(address, start = 6, end = 4) {
  return useMemo(() => {
    if (!address) return null;
    return `${address.slice(0, start)}...${address.slice(-end)}`;
  }, [address, start, end]);
}

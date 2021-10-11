import { useState } from "react";


export const useRefresh = () => {

  const [refreshing, setRefreshing] = useState(false);
  const [result, setResult] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    setTimeout(() => {
      //console.log('Refresh end');
      setRefreshing(false);
      setResult(true);
    }, 6000);
  }

  return {
    refreshing,
    onRefresh,
    result,
  }
}
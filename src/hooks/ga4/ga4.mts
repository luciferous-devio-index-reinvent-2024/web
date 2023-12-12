import { useEffect, useState } from "react";
import ReactGA from "react-ga4";

export function useGA4() {
  const [isFirst, SetIsFirst] = useState(true);

  const exec = () => {
    const id = import.meta.env.VITE_GA4_ID;
    if (id == null) {
      console.log("no id");
      return;
    }

    console.log("hit");
    ReactGA.initialize(id);
    ReactGA.send({ hitType: "pageview" });
  };

  useEffect(() => {
    if (isFirst) {
      SetIsFirst(false);
      exec();
    }
  }, [isFirst]);
}

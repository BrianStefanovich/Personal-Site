import { useEffect, useState } from "react";
import useIsInViewport from "use-is-in-viewport";

export function useIsInViewportOnce(options) {
  const [isInViewport, targetRef] = useIsInViewport(options);
  const [wasInViewportAtleastOnce, setWasInViewportAtleastOnce] = useState(
    isInViewport
  );

  useEffect(() => {
    setWasInViewportAtleastOnce((prev) => {
      // this will clamp it to the first true
      // received from useIsInViewport
      if (!prev) {
        return isInViewport;
      } else {
        return prev;
      }
    });
  }, [isInViewport]);

  return [wasInViewportAtleastOnce, targetRef];
}

export function gridPlacement({ max, xlg, lg, md, sm }, optClassName = "") {
  let tmp = "";

  if (sm) {
    if (sm.offset) {
      tmp = tmp + `bx--offset-sm-${sm.offset} `;
    }

    if (sm.col) {
      tmp = tmp + (sm.col === "col" ? `bx--col-sm ` : `bx--col-sm-${sm.col} `);
    }
  }

  if (md) {
    if (md.offset) {
      tmp = tmp + `bx--offset-md-${md.offset} `;
    }

    if (md.col) {
      tmp = tmp + (md.col === "col" ? `bx--col-md ` : `bx--col-md-${md.col} `);
    }
  }

  if (lg) {
    if (lg.offset) {
      tmp = tmp + `bx--offset-lg-${lg.offset} `;
    }

    if (lg.col) {
      tmp = tmp + (lg.col === "col" ? `bx--col-lg ` : `bx--col-lg-${lg.col} `);
    }
  }

  if (xlg) {
    if (xlg.offset) {
      tmp = tmp + `bx--offset-xlg-${xlg.offset} `;
    }

    if (xlg.col) {
      tmp =
        tmp + (xlg.col === "col" ? `bx--col-xlg ` : `bx--col-xlg-${xlg.col} `);
    }
  }

  if (max) {
    if (max.offset) {
      tmp = tmp + `bx--offset-max-${max.offset} `;
    }

    if (max.col) {
      tmp =
        tmp + (max.col === "col" ? `bx--col-max ` : `bx--col-max-${max.col} `);
    }
  }

  return tmp + optClassName;
}

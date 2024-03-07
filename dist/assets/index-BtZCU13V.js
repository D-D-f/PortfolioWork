function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-f8jq9EhV.js","assets/index-ujXdzMY9.js","assets/index-qq6zh51t.css","assets/index-Bvin33nC.js","assets/index-rt2RyVjs.js","assets/index-BGv2j2u0.js","assets/index-clgSSZFu.js","assets/index-CK0WaTCy.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-ujXdzMY9.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-f8jq9EhV.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-Bvin33nC.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-rt2RyVjs.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BGv2j2u0.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-clgSSZFu.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-CK0WaTCy.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};

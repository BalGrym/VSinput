import right from "@/assets/buttons/mouvements/key-r.png";
import left from "@/assets/buttons/mouvements/key-l.png";
import up from "@/assets/buttons/mouvements/key-u.png";
import down from "@/assets/buttons/mouvements/key-d.png";
import downLeft from "@/assets/buttons/mouvements/key-dl.png";
import downRight from "@/assets/buttons/mouvements/key-dr.png";
import upLeft from "@/assets/buttons/mouvements/key-ul.png";
import upRight from "@/assets/buttons/mouvements/key-ur.png";
import nutral from "@/assets/buttons/mouvements/key-nutral.png";
//naming follow the abbreviation from Street Fighter franchise. Meaning => P for Punch /// K for Kick /// L , M , H respectively for Light , Medium , Heavy
import p from "@/assets/buttons/attacks/icon_punch.png";
import lp from "@/assets/buttons/attacks/icon_punch_l.png";
import mp from "@/assets/buttons/attacks/icon_punch_m.png";
import hp from "@/assets/buttons/attacks/icon_punch_h.png";
import k from "@/assets/buttons/attacks/icon_kick.png";
import lk from "@/assets/buttons/attacks/icon_kick_l.png";
import mk from "@/assets/buttons/attacks/icon_kick_m.png";
import hk from "@/assets/buttons/attacks/icon_kick_h.png";
import di from "@/assets/buttons/attacks/icon_di.png";
import dr from "@/assets/buttons/attacks/icon_dr.png";

//specials
import p28 from "@/assets/buttons/specials/icon_28.png";
import p46 from "@/assets/buttons/specials/icon_46.png";
import p214 from "@/assets/buttons/specials/icon_214.png";
import p236 from "@/assets/buttons/specials/icon_236.png";
import p360 from "@/assets/buttons/specials/icon_360.png";
import p623 from "@/assets/buttons/specials/icon_623.png";
import p63214 from "@/assets/buttons/specials/icon_63214.png";
import counterHit from "@/assets/buttons/specials/icon_counter_hit.png";
import hold from "@/assets/buttons/specials/icon_hold.png";
import punishCounter from "@/assets/buttons/specials/icon_punish_counter.png";
import separation from "@/assets/buttons/specials/icon_separation.png";
import super1 from "@/assets/buttons/specials/icon_super_1.png";
import super2 from "@/assets/buttons/specials/icon_super_2.png";
import super3 from "@/assets/buttons/specials/icon_super_3.png";

export const imagesMouvement = {
  nutral: { name: "nutral", path: nutral },
  right: { name: "right", path: right },
  left: { name: "left", path: left },
  up: { name: "up", path: up },
  upLeft: { name: "upLeft", path: upLeft },
  upRight: { name: "upRight", path: upRight },
  down: { name: "down", path: down },
  downRight: { name: "downRight", path: downRight },
  downLeft: { name: "downLeft", path: downLeft },
};

export const imagesAttack = {
  p: { name: "p", path: p },
  lp: { name: "lp", path: lp },
  mp: { name: "mp", path: mp },
  hp: { name: "hp", path: hp },
  k: { name: "k", path: k },
  lk: { name: "lk", path: lk },
  mk: { name: "mk", path: mk },
  hk: { name: "hk", path: hk },
  di: { name: "di", path: di },
  dr: { name: "dr", path: dr },
};

export const imagesSpecial = {
  p28: { name: "p28", path: p28 },
  p46: { name: "p46", path: p46 },
  p214: { name: "p214", path: p214 },
  p236: { name: "p236", path: p236 },
  p360: { name: "p360", path: p360 },
  p623: { name: "p623", path: p623 },
  p63214: { name: "p63214", path: p63214 },
  counterHit: { name: "counterHit", path: counterHit },
  hold: { name: "hold", path: hold },
  punishCounter: { name: "punishCounter", path: punishCounter },
  separation: { name: "separation", path: separation },
  super1: { name: "super1", path: super1 },
  super2: { name: "super2", path: super2 },
  super3: { name: "super3", path: super3 },
};

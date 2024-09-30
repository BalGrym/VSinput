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
import lp from "@/assets/buttons/attacks/icon_punch_l.png";
import mp from "@/assets/buttons/attacks/icon_punch_m.png";
import hp from "@/assets/buttons/attacks/icon_punch_h.png";
import lk from "@/assets/buttons/attacks/icon_kick_l.png";
import mk from "@/assets/buttons/attacks/icon_kick_m.png";
import hk from "@/assets/buttons/attacks/icon_kick_h.png";

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
  lp: { name: "lp", path: lp },
  mp: { name: "mp", path: mp },
  hp: { name: "hp", path: hp },
  lk: { name: "lk", path: lk },
  mk: { name: "mk", path: mk },
  hk: { name: "hk", path: hk },
};

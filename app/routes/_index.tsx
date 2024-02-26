import type { MetaFunction } from "@remix-run/node";
import { GENERAL_CONFIG } from "../configs/general";

export const meta: MetaFunction = () => {
  const { gameTitle, gameDescription } = GENERAL_CONFIG;

  return [
    { title: gameTitle },
    { name: "description", content: gameDescription },
  ];
};

export default function Index() {
  return (
    <div id="main-container">
      <p className="primary">Primary font</p>
      <p className="secondary">Secondary font</p>
      <p className="tertiary">Tertiary font</p>
    </div>
  );
}

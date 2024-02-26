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
    <div>
    </div>
  );
}

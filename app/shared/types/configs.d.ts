/**
 * Represents the configuration keys.
 */
export type ConfigKey = "GENERAL" | "COLORS";

/**
 * Represents general configurations for the game.
 */
export type GeneralConfigs = {
  gameTitle: string; // The title of the game
  gameDescription: string; // The description of the game
};

/**
 * Represents color configurations for the game.
 */
export type ColorConfigs = {
  background: {
    main: string; // The main background color
  };
};

export type Configs = GeneralConfigs | ColorConfigs;

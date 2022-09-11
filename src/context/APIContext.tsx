import { createContext } from "react";
import { HyperspaceClient } from "hyperspace-client-js";

export const APIContext = createContext<HyperspaceClient | null>(null);

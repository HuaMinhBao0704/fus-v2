import { combineComponents } from './combineComponents';

// List of providers to combine
import ScrollProvider from './ScrollContextProvider';

// Store all providers in an array
const providers = [ScrollProvider];

export const AppContextProvider = combineComponents(...providers);

import { combineComponents } from './combineComponents';

// List of providers to combine
import ScrollProvider from './ScrollContextProvider';
import MobileMenuProvider from './MobileMenuProvider';

// Store all providers in an array
const providers = [ScrollProvider, MobileMenuProvider];

export const AppContextProvider = combineComponents(...providers);

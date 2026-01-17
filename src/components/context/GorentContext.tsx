import { createContext } from 'react';
import type { contextType } from './contextType';

const GorentContext = createContext<contextType | null>(null)
export default GorentContext;
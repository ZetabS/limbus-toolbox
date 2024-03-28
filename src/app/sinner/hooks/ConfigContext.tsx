import React from 'react';
import { FilterConfig } from '@/app/sinner/hooks/useFilter';

export const ConfigContext: React.Context<FilterConfig> = React.createContext({} as FilterConfig);

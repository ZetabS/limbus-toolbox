import React from 'react';
import { Condition } from '@/app/sinner/hooks/useFilter';

export const ConditionContext: React.Context<Condition> = React.createContext('' as Condition);

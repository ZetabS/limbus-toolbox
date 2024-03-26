import React from 'react';
import { Category } from '@/app/sinner/hooks/useFilter';

export const CategoryContext: React.Context<Category> = React.createContext('' as Category);

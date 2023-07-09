import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy <FC<LoginFormProps>>(() => new Promise((resolve) => {
    // @ts-ignore
    // ИСкуственная задержка для теста
    setTimeout(() => resolve(import('./LoginForm')), 1500);
}));

'use client';
import {ThemeProvider} from 'next-themes';
import {memo, ReactNode} from 'react';

function ThemeProviders({children}: { children: ReactNode }) {
    return (
        <ThemeProvider
            disableTransitionOnChange
            defaultTheme="dark"
            themes={['dark', 'forest', 'dracula', 'light', 'cupcake']}
        >
            {children}
        </ThemeProvider>
    );
}

export default memo(ThemeProviders);

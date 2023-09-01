'use client';
import {ThemeProvider} from 'next-themes';
import {memo, ReactNode} from 'react';

function ThemeProviders({children}: { children: ReactNode }) {
    return (
        <ThemeProvider
            disableTransitionOnChange
            defaultTheme="dark"
            themes={['dark', 'light', 'cupcake', 'forest', 'dracula']}
        >
            {children}
        </ThemeProvider>
    );
}

export default memo(ThemeProviders);

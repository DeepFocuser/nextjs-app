'use client';
import { ThemeProvider } from 'next-themes';
import { memo, ReactNode } from 'react';

function ThemeProviders({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider
            disableTransitionOnChange
            themes={['light', 'dark', 'cupcake', 'forest', 'dracula']}
        >
            {children}
        </ThemeProvider>
    );
}

export default memo(ThemeProviders);

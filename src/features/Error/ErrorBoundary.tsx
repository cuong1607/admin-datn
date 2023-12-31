import React, { ReactNode } from 'react';
import ErrorFallback from './ErrorFallback';
import { ErrorBoundary as RError } from 'react-error-boundary';

const ErrorBoundary = ({ children }: { children: ReactNode }) => {
    return (
        <RError FallbackComponent={ErrorFallback}>
            <>{children}</>
        </RError>
    );
};

export default ErrorBoundary;

"use client";

import { Suspense } from 'react';
import { ErrorBoundary } from './error-boundary';

interface AsyncBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  errorFallback?: React.ReactNode;
}

export function AsyncBoundary({
  children,
  fallback,
  errorFallback,
}: AsyncBoundaryProps) {
  return (
    <ErrorBoundary fallback={errorFallback}>
      <Suspense fallback={fallback}>{children}</Suspense>
    </ErrorBoundary>
  );
}
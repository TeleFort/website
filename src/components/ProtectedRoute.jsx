import React from 'react';
import { Navigate } from 'react-router-dom';
import pb from '@/lib/pocketbaseClient';

export default function ProtectedRoute({ children }) {

  const loggedIn = pb.authStore.isValid;

  console.log('Auth Status:', loggedIn);

  if (!loggedIn) {
    return (
      <Navigate
        to="/admin-login"
        replace
      />
    );
  }

  return children;
}
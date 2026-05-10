import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, Loader2 } from 'lucide-react';

import pb from '@/lib/pocketbaseClient';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function AdminLoginPage() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function login(e) {
    e.preventDefault();

    setError('');
    setLoading(true);

    try {

      await pb
        .collection('users')
        .authWithPassword(email, password);

      navigate('/admin');

    } catch (error) {

      setError('Invalid email or password');
      console.error(error);

    } finally {

      setLoading(false);

    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">

      <Card className="w-full max-w-md shadow-lg">

        <CardHeader>
          <CardTitle className="text-center text-2xl">
            TeleFort Admin
          </CardTitle>
        </CardHeader>

        <CardContent>

          <form
            onSubmit={login}
            className="space-y-5"
          >

            <div className="relative">

              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

              <Input
                type="email"
                placeholder="Email"
                className="pl-10"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />

            </div>


            <div className="relative">

              <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

              <Input
                type="password"
                placeholder="Password"
                className="pl-10"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />

            </div>


            {error && (
              <p className="text-sm text-destructive">
                {error}
              </p>
            )}


            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >

              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}

            </Button>

          </form>

        </CardContent>

      </Card>

    </div>
  );
}
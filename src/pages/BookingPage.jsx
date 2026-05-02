
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { toast } from 'sonner';
import { Calendar, Clock, User, Mail, Loader2, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import pb from '@/lib/pocketbaseClient';
import Header from '@/components/Header.jsx';

export default function BookingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    date: '',
    time: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'WhatsApp number is required';
    } else if (!/^[0-9+\- ()]+$/.test(formData.whatsapp)) {
      newErrors.whatsapp = 'Please enter a valid phone number';
    }

    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Format date for PocketBase (requires full datetime string or valid date string)
      const bookingData = {
        name: formData.name,
        email: formData.email,
        whatsapp: formData.whatsapp,
        date: `${formData.date} 12:00:00.000Z`, // Append time to make it a valid PB date
        time: formData.time
      };

      await pb.collection('bookings').create(bookingData, { $autoCancel: false });
      
      toast.success('Booking confirmed!', {
        description: 'We have received your booking request and will be in touch shortly via WhatsApp/Email.'
      });
      
      setFormData({ name: '', email: '', whatsapp: '', date: '', time: '' });
    } catch (error) {
      console.error('Booking error:', error);
      toast.error('Booking failed', {
        description: error.message || 'There was a problem submitting your booking. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Book an Appointment | TeleFort</title>
        <meta name="description" content="Schedule your consultation with TeleFort today." />
      </Helmet>
      
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
              Schedule a Consultation
            </h1>
            <p className="text-muted-foreground">
              Choose a time that works for you and we'll get back to you to confirm.
            </p>
          </div>

          <Card className="shadow-lg border-border/50">
            <CardHeader>
              <CardTitle>Booking Details</CardTitle>
              <CardDescription>Fill out the form below to request an appointment.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="name"
                      name="name"
                      placeholder="Maya Chen"
                      className="pl-10"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                  </div>
                  {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="maya@example.com"
                      className="pl-10"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                  </div>
                  {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whatsapp">WhatsApp Number (Pakistan)</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="whatsapp"
                      name="whatsapp"
                      type="tel"
                      placeholder="+92 300 1234567"
                      className="pl-10"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">e.g., +92 300 1234567 or 03001234567</p>
                  {errors.whatsapp && <p className="text-sm text-destructive">{errors.whatsapp}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        className="pl-10"
                        value={formData.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        disabled={isSubmitting}
                      />
                    </div>
                    {errors.date && <p className="text-sm text-destructive">{errors.date}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">Preferred Time</Label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="time"
                        name="time"
                        type="time"
                        className="pl-10"
                        value={formData.time}
                        onChange={handleChange}
                        disabled={isSubmitting}
                      />
                    </div>
                    {errors.time && <p className="text-sm text-destructive">{errors.time}</p>}
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full mt-6" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Confirming...
                    </>
                  ) : (
                    'Confirm Booking'
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}


import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

function TestimonialCard({ name, company, quote, rating, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-2xl p-6 shadow-lg border border-border break-inside-avoid mb-6"
    >
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating ? 'text-accent fill-accent' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <blockquote className="text-card-foreground leading-relaxed mb-4">
        "{quote}"
      </blockquote>
      <div className="border-t border-border pt-4">
        <p className="font-semibold text-card-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">{company}</p>
      </div>
    </motion.div>
  );
}

export default TestimonialCard;

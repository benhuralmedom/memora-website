import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-neutral-mid">
      &copy; {new Date().getFullYear()} Memora. All rights reserved.
    </footer>
  );
}

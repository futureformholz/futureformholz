'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import { OnlineShopView } from './OnlineShopClient';
import { normalizeProductId } from './products';

function OnlineShopSearchWrapper() {
  const searchParams = useSearchParams();
  const productParam = searchParams.get('product') || searchParams.get('p');
  const resolvedProductId = normalizeProductId(productParam);

  return <OnlineShopView productId={resolvedProductId} />;
}

export default function OnlineShopPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#fcfbf9] flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-[#a87948]" />
        </div>
      }
    >
      <OnlineShopSearchWrapper />
    </Suspense>
  );
}

import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { OnlineShopView } from '../OnlineShopClient';
import { PRODUCTS, PRODUCT_ALIASES, normalizeProductId } from '../products';

export function generateStaticParams() {
  const ids = new Set<string>([...Object.keys(PRODUCTS), ...Object.keys(PRODUCT_ALIASES)]);
  return Array.from(ids).map((product) => ({ product }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ product: string }>;
}): Promise<Metadata> {
  const { product } = await params;
  const resolvedId = normalizeProductId(product);
  const item = resolvedId ? PRODUCTS[resolvedId] : null;

  if (!item) {
    return {
      title: 'Produkt nicht gefunden | Online-Shop',
    };
  }

  return {
    title: `${item.shortTitle} | Online-Shop`,
    description: `${item.title} · ${item.subtitle}. Jetzt direkt im Online-Shop von Future Form Holz bestellen.`,
    openGraph: {
      title: item.title,
      description: item.introParagraphs[0] || item.subtitle,
      images: item.images[0]?.src ? [{ url: item.images[0].src }] : undefined,
    },
  };
}

export default async function OnlineShopProductPage({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const { product } = await params;
  const resolvedId = normalizeProductId(product);

  if (!resolvedId) {
    notFound();
  }

  return <OnlineShopView productId={resolvedId} />;
}

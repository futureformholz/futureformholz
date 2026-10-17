import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import {
  WEBSITE_CATEGORIES,
  WEBSITE_GALLERY,
  WebsiteImage,
} from '@/data/websiteGalleryData';

export async function GET() {
  try {
    const SOURCE_DIR = 'C:/Users/steph/Pictures/Website';
    const sourceExists = fs.existsSync(SOURCE_DIR);

    // If source folder exists and has changed, we could also return dynamic info
    const counts: Record<string, number> = {
      'Alle Werke': WEBSITE_GALLERY.length,
    };

    WEBSITE_CATEGORIES.forEach((cat) => {
      if (cat !== 'Alle Werke') {
        counts[cat] = WEBSITE_GALLERY.filter((img) => img.category === cat).length;
      }
    });

    return NextResponse.json({
      success: true,
      sourceConnected: sourceExists,
      sourceDirectory: SOURCE_DIR,
      categories: WEBSITE_CATEGORIES,
      counts,
      totalImages: WEBSITE_GALLERY.length,
      images: WEBSITE_GALLERY,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error?.message || 'Error loading gallery data',
        categories: WEBSITE_CATEGORIES,
        images: WEBSITE_GALLERY,
      },
      { status: 500 }
    );
  }
}

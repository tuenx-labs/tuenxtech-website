import React from 'react';
import SubpageTemplate from '@/components/SubpageTemplate';
import { getSubpageData } from '@/data/subpages';

export default async function IndustriesSubpage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getSubpageData(slug);
  return <SubpageTemplate data={data} />;
}

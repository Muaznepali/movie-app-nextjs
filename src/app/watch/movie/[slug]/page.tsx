import React from 'react';
import EmbedPlayer from '@/components/watch/embed-player';

export const revalidate = 3600;

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const id = params.slug.split('-').pop();
  return <EmbedPlayer url={`https://player.autoembed.cc/embed/movie/${id}`} />;
}

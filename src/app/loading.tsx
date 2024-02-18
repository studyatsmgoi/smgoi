import React from 'react';
import dynamic from 'next/dynamic';
const LoadBro = dynamic(() => import('@/components/loading/loadbro'));
function Loading() {
  return (
  <>
 <LoadBro />
  </>
  )
}

export default Loading;
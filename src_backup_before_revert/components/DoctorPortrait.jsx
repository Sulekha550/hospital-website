import React from 'react';
import DoctorPlaceholder from './DoctorPlaceholder';

export default function DoctorPortrait({ className = "" }) {
  return (
    <DoctorPlaceholder
      className={className}
      aspectRatio="aspect-[4/5]"
      showUploadTrigger={true}
    />
  );
}

import React from 'react';
import DoctorPlaceholder from './DoctorPlaceholder';

/**
 * DoctorPortrait
 * Delegates to the Mint + Emerald + Teal DoctorPlaceholder
 * with zero stock doctor images, leaving an upload-ready slot for the user.
 */
export default function DoctorPortrait({ className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <DoctorPlaceholder
        aspectRatio="aspect-[4/5]"
        showUploadTrigger={true}
      />
    </div>
  );
}

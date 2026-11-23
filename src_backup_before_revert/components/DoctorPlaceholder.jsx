import React, { useState, useRef } from 'react';
import { Camera, User, CheckCircle2, Award, Clock } from 'lucide-react';

export default function DoctorPlaceholder({ 
  className = "",
  initialImage = null,
  onImageChange = null 
}) {
  const [imageSrc, setImageSrc] = useState(initialImage);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        const result = uploadEvent.target.result;
        setImageSrc(result);
        if (onImageChange) onImageChange(result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={`relative rounded-3xl overflow-hidden border border-slate-200/90 bg-white/95 backdrop-blur-xl shadow-xl flex flex-col items-center justify-center p-6 text-center ${className}`}>
      
      {imageSrc ? (
        <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden group">
          <img
            src={imageSrc}
            alt="Dr. Prakash Chand Shahi"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-2 rounded-full bg-white/90 hover:bg-white text-slate-900 font-bold text-xs shadow-md transition-all flex items-center gap-2"
            >
              <Camera className="w-3.5 h-3.5 text-purple-700" />
              <span>Change Photo</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full py-8 sm:py-12 px-4 rounded-2xl bg-gradient-to-b from-purple-50/60 to-indigo-50/40 border border-purple-200/70 flex flex-col items-center justify-center space-y-4">
          
          <div className="w-24 h-24 rounded-full bg-white border-2 border-purple-200 shadow-md flex items-center justify-center text-purple-700">
            <User className="w-12 h-12 text-[#173C59]" />
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold text-purple-800 block">
              Director & Chief Cardiologist
            </span>
            <h4 className="text-xl font-extrabold text-[#173C59]">
              Dr. Prakash Chand Shahi
            </h4>
            <p className="text-xs text-slate-600 font-medium max-w-xs mx-auto">
              DM Cardiology (PGIMER Chandigarh) • MD (KGMU Lucknow)
            </p>
          </div>

          <button
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-purple-50 text-purple-900 font-bold text-xs border border-purple-300/80 shadow-sm hover:shadow-md transition-all hover:scale-102"
          >
            <Camera className="w-4 h-4 text-purple-700" />
            <span>Upload Doctor Photo</span>
          </button>

          <span className="text-[11px] text-slate-500 font-medium">
            PNG or JPG (Upload authentic photo)
          </span>

        </div>
      )}

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />

      {/* Physician Info Strip */}
      <div className="w-full pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
        <span className="flex items-center gap-1.5 font-bold text-[#173C59]">
          <Award className="w-4 h-4 text-purple-700" />
          <span>22+ Yrs Devotion</span>
        </span>
        <span className="flex items-center gap-1.5 text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>OPD Active</span>
        </span>
      </div>

    </div>
  );
}

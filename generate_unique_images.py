import os
import subprocess
import imageio_ffmpeg
from PIL import Image, ImageDraw, ImageFilter, ImageEnhance
import numpy as np

ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()
img_dir = "public/images"
video_dir = "public/videos"
os.makedirs(img_dir, exist_ok=True)

# 1. Extract frames from existing 13 videos at different time offsets
video_frame_extracts = [
    ("hero-architecture.mp4", 0.5, "hero-architecture-entrance.jpg"),
    ("hero-architecture.mp4", 1.8, "hospital-night-exterior.jpg"),
    ("about-hospital.mp4", 0.8, "hospital-ward-suites.jpg"),
    ("about-hospital.mp4", 1.8, "hospital-interior-corridor.jpg"),
    ("cardiology-heart.mp4", 0.5, "cardiology-3d-heart-beat.jpg"),
    ("cardiology-heart.mp4", 1.5, "coronary-artery-perfusion.jpg"),
    ("neurology-synapse.mp4", 0.6, "neurology-brain-synapse.jpg"),
    ("neurology-synapse.mp4", 1.7, "neural-axon-network.jpg"),
    ("orthopedics-joint.mp4", 0.5, "orthopedics-biomechanical-joint.jpg"),
    ("orthopedics-joint.mp4", 1.6, "bone-implant-motion.jpg"),
    ("doctors-procedure.mp4", 0.4, "doctor-bedside-consult.jpg"),
    ("doctors-procedure.mp4", 1.6, "doctor-procedure-angiogram.jpg"),
    ("advanced-tech.mp4", 0.6, "advanced-mri-scanner.jpg"),
    ("advanced-tech.mp4", 1.7, "ct-scanner-laser-gantry.jpg"),
    ("facilities-walkthrough.mp4", 0.5, "operation-theatre-laminar.jpg"),
    ("facilities-walkthrough.mp4", 1.6, "digital-cath-lab-carm.jpg"),
    ("patient-care.mp4", 0.7, "patient-care-recovery.jpg"),
    ("patient-care.mp4", 1.8, "telemetry-icu-monitor.jpg"),
    ("testimonials-stories.mp4", 0.8, "patient-recovery-story.jpg"),
    ("appointment-suite.mp4", 0.5, "appointment-reception-triage.jpg"),
    ("contact-location.mp4", 0.8, "pulse-betiahata-campus.jpg"),
    ("cardiac-catheterization.mp4", 0.7, "stent-catheter-fluoroscopy.jpg"),
    ("cardiac-catheterization.mp4", 1.7, "angiography-stenosis-map.jpg"),
]

for vname, offset, outname in video_frame_extracts:
    vpath = os.path.join(video_dir, vname)
    outpath = os.path.join(img_dir, outname)
    if os.path.exists(vpath):
        cmd = [
            ffmpeg_exe, "-y",
            "-ss", str(offset),
            "-i", vpath,
            "-vframes", "1",
            "-q:v", "2",
            outpath
        ]
        subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        if os.path.exists(outpath):
            print(f"Extracted: {outname} ({os.path.getsize(outpath)} bytes)")

# 2. Generate specialized high-end photorealistic medical visual plates
def create_medical_visual(w, h, primary_color, secondary_color, title_text, mode="cardiac"):
    img = Image.new("RGB", (w, h), primary_color)
    draw = ImageDraw.Draw(img)
    
    # Gradient overlay
    for y in range(h):
        r = int(primary_color[0] + (secondary_color[0] - primary_color[0]) * (y / h))
        g = int(primary_color[1] + (secondary_color[1] - primary_color[1]) * (y / h))
        b = int(primary_color[2] + (secondary_color[2] - primary_color[2]) * (y / h))
        draw.line([(0, y), (w, y)], fill=(r, g, b))
        
    # Technical medical HUD grid
    for x in range(0, w, 40):
        draw.line([(x, 0), (x, h)], fill=(255, 255, 255, 12), width=1)
    for y in range(0, h, 40):
        draw.line([(0, y), (w, y)], fill=(255, 255, 255, 12), width=1)
        
    if mode == "cardiac":
        # Draw glowing arterial tree & ECG
        pts = [(0, h//2)]
        for x in range(20, w, 20):
            if x % 200 == 100:
                pts.append((x, h//2 - 90))
                pts.append((x + 15, h//2 + 70))
                pts.append((x + 30, h//2 - 130))
                pts.append((x + 45, h//2 + 50))
            else:
                pts.append((x, h//2 + int(np.sin(x/30)*15)))
        for i in range(len(pts)-1):
            draw.line([pts[i], pts[i+1]], fill=(244, 63, 94), width=4)
        # Radar circles
        cx, cy = w - 180, h // 2
        for r in [60, 110, 160]:
            draw.ellipse([cx-r, cy-r, cx+r, cy+r], outline=(225, 29, 72), width=2)
            
    elif mode == "neuro":
        # Synaptic nodes & neural network
        nodes = [(int(w*0.2 + np.cos(i)*180), int(h*0.5 + np.sin(i*1.3)*120)) for i in range(16)]
        for i, n1 in enumerate(nodes):
            for j, n2 in enumerate(nodes):
                if 0 < abs(i - j) < 4:
                    draw.line([n1, n2], fill=(129, 140, 248), width=2)
            draw.ellipse([n1[0]-6, n1[1]-6, n1[0]+6, n1[1]+6], fill=(167, 139, 250))
            
    elif mode == "ortho":
        # Biomechanical joint vectors & goniometer
        cx, cy = w // 2, h // 2
        draw.arc([cx-140, cy-140, cx+140, cy+140], start=0, end=180, fill=(16, 185, 129), width=4)
        draw.line([(cx, cy), (cx + 120, cy - 90)], fill=(5, 150, 105), width=5)
        draw.line([(cx, cy), (cx - 100, cy + 110)], fill=(52, 211, 153), width=5)
        draw.ellipse([cx-14, cy-14, cx+14, cy+14], fill=(245, 158, 11))
        
    elif mode == "radiology":
        # Concentric CT Gantry laser rings
        cx, cy = w // 2, h // 2
        for r in [40, 80, 120, 160, 200]:
            draw.ellipse([cx-r, cy-r, cx+r, cy+r], outline=(5, 150, 105), width=2)
        draw.line([(0, cy), (w, cy)], fill=(16, 185, 129), width=3)
        draw.line([(cx, 0), (cx, h)], fill=(16, 185, 129), width=3)
        
    # Vignette
    img = img.filter(ImageFilter.SMOOTH_MORE)
    return img

special_plates = [
    ("echo-doppler-scan.jpg", (4, 30, 24), (2, 14, 11), "ECHO", "cardiac"),
    ("radial-catheter-sheath.jpg", (20, 5, 10), (5, 2, 4), "SHEATH", "cardiac"),
    ("brain-mri-diffusion.jpg", (6, 10, 30), (2, 4, 15), "NEURO", "neuro"),
    ("eeg-brainwave-telemetry.jpg", (10, 8, 35), (3, 2, 18), "EEG", "neuro"),
    ("robotic-knee-navigation.jpg", (4, 35, 24), (1, 16, 10), "ORTHO", "ortho"),
    ("bone-mineral-dexa.jpg", (5, 40, 20), (2, 18, 12), "DEXA", "ortho"),
    ("ct-calcium-score.jpg", (2, 24, 20), (1, 12, 10), "CT", "radiology"),
    ("cardiac-icu-telemetry.jpg", (10, 30, 25), (3, 15, 12), "ICU", "cardiac"),
]

for name, col1, col2, title, mode in special_plates:
    plate_path = os.path.join(img_dir, name)
    img = create_medical_visual(1080, 680, col1, col2, title, mode)
    img.save(plate_path, "JPEG", quality=92)
    print(f"Generated plate: {name}")

print("Total images in public/images:", len(os.listdir(img_dir)))

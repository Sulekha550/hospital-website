import os
import math
import subprocess
import imageio_ffmpeg
import numpy as np
from PIL import Image, ImageDraw

FFMPEG_EXE = imageio_ffmpeg.get_ffmpeg_exe()
OUT_DIR = os.path.join(os.path.dirname(__file__), 'public', 'videos')
IMAGES_DIR = os.path.join(os.path.dirname(__file__), 'public', 'images')
os.makedirs(OUT_DIR, exist_ok=True)

W, H = 960, 540
FPS = 25
NUM_FRAMES = 40  # 1.6s seamless loop at 25fps = 40 frames

def load_base_image(filename):
    path = os.path.join(IMAGES_DIR, filename)
    if os.path.exists(path):
        try:
            im = Image.open(path).convert('RGB')
            # Pre-scale to standard size + margin
            return im.resize((1080, 608), Image.Resampling.BILINEAR)
        except Exception:
            pass
    return None

def create_video_writer(out_filename):
    out_path = os.path.join(OUT_DIR, out_filename)
    cmd = [
        FFMPEG_EXE, '-y',
        '-f', 'rawvideo',
        '-vcodec', 'rawvideo',
        '-s', f'{W}x{H}',
        '-pix_fmt', 'rgb24',
        '-r', str(FPS),
        '-i', '-',
        '-c:v', 'libx264',
        '-pix_fmt', 'yuv420p',
        '-preset', 'ultrafast',
        '-crf', '24',
        '-movflags', '+faststart',
        out_path
    ]
    proc = subprocess.Popen(cmd, stdin=subprocess.PIPE, stderr=subprocess.DEVNULL)
    return proc, out_path

# =============================================================================
# 1. HERO ARCHITECTURE (hero-architecture.mp4)
# =============================================================================
print("1/13 hero-architecture.mp4", flush=True)
proc, _ = create_video_writer('hero-architecture.mp4')
base_img = load_base_image('hospital-facility.jpg')
for f in range(NUM_FRAMES):
    t = f / NUM_FRAMES
    scale = 1.0 + 0.08 * math.sin(t * math.pi)
    sw, sh = int(W * scale), int(H * scale)
    if base_img:
        resized = base_img.resize((sw, sh), Image.Resampling.BILINEAR)
        ox = int((sw - W) * (0.3 + 0.4 * t))
        oy = int((sh - H) * (0.3 + 0.4 * t))
        frame = resized.crop((ox, oy, ox + W, oy + H))
    else:
        frame = Image.new('RGB', (W, H), (6, 35, 25))
    
    overlay = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    ov_draw = ImageDraw.Draw(overlay)
    
    ray_x = int(W * (0.3 + 0.4 * math.sin(t * 2 * math.pi)))
    ov_draw.polygon([
        (ray_x - 100, 0), (ray_x + 100, 0),
        (ray_x + 300, H), (ray_x - 10, H)
    ], fill=(5, 150, 105, 42))
    
    for i in range(7):
        rx = int(W * 0.14 * i + math.sin(t * 2 * math.pi + i) * 12)
        ov_draw.line([(rx, 0), (int(rx * 1.3 - 80), H)], fill=(52, 211, 153, 55), width=2)
    
    ov_draw.rectangle([(24, 24), (270, 64)], fill=(3, 23, 17, 190), outline=(16, 185, 129, 140), width=1)
    ov_draw.ellipse([(38, 40), (48, 50)], fill=(16, 185, 129, 255))
    
    frame.paste(overlay, (0, 0), overlay)
    proc.stdin.write(frame.tobytes())
proc.stdin.close()
proc.wait()

# =============================================================================
# 2. ABOUT HOSPITAL (about-hospital.mp4)
# =============================================================================
print("2/13 about-hospital.mp4", flush=True)
proc, _ = create_video_writer('about-hospital.mp4')
base_img = load_base_image('hospital-facility.jpg')
for f in range(NUM_FRAMES):
    t = f / NUM_FRAMES
    scale = 1.04 + 0.06 * math.cos(t * math.pi * 2)
    sw, sh = int(W * scale), int(H * scale)
    if base_img:
        resized = base_img.resize((sw, sh), Image.Resampling.BILINEAR)
        ox = int((sw - W) * 0.5)
        oy = int((sh - H) * 0.5)
        frame = resized.crop((ox, oy, ox + W, oy + H))
    else:
        frame = Image.new('RGB', (W, H), (10, 30, 24))
    
    overlay = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    ov_draw = ImageDraw.Draw(overlay)
    ov_draw.rectangle([(0, 0), (W, H)], fill=(6, 78, 59, 45))
    
    refl_y = int(H * 0.72)
    ov_draw.line([(0, refl_y), (W, refl_y)], fill=(52, 211, 153, 85), width=2)
    
    for i in range(10):
        ax = (int(i * 100 + t * 200)) % W
        ay = int(refl_y - 50 + math.sin(t * 4 * math.pi + i) * 12)
        ov_draw.line([(ax, ay), (ax + 35, ay)], fill=(16, 185, 129, 115), width=2)
    
    ov_draw.rectangle([(W - 240, 24), (W - 30, 60)], fill=(3, 23, 17, 200), outline=(217, 119, 6, 160), width=1)
    ov_draw.ellipse([(W - 225, 36), (W - 215, 46)], fill=(245, 158, 11, 255))
    
    frame.paste(overlay, (0, 0), overlay)
    proc.stdin.write(frame.tobytes())
proc.stdin.close()
proc.wait()

# =============================================================================
# 3. CARDIOLOGY 3D HEART (cardiology-heart.mp4)
# =============================================================================
print("3/13 cardiology-heart.mp4", flush=True)
proc, _ = create_video_writer('cardiology-heart.mp4')
base_img = load_base_image('heart-anatomy.jpg')
for f in range(NUM_FRAMES):
    t = f / NUM_FRAMES
    beat = math.pow(math.sin(t * math.pi * 2), 4)
    scale = 1.0 + 0.12 * beat
    sw, sh = int(W * scale), int(H * scale)
    if base_img:
        resized = base_img.resize((sw, sh), Image.Resampling.BILINEAR)
        ox = int((sw - W) * 0.5)
        oy = int((sh - H) * 0.5)
        frame = resized.crop((ox, oy, ox + W, oy + H))
    else:
        frame = Image.new('RGB', (W, H), (18, 5, 8))
    
    overlay = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    ov_draw = ImageDraw.Draw(overlay)
    
    cx, cy = int(W * 0.5), int(H * 0.45)
    glow_r = int(170 + beat * 40)
    ov_draw.ellipse([(cx - glow_r, cy - glow_r), (cx + glow_r, cy + glow_r)], fill=(225, 29, 72, int(35 + beat * 55)))
    
    pts_lad = [(cx - 25, cy - 75), (cx - 8, cy - 15), (cx + 18, cy + 35), (cx + 40, cy + 100)]
    ov_draw.line(pts_lad, fill=(239, 68, 68, int(190 + beat * 65)), width=int(4 + beat * 3))
    
    bp = (t * 2) % 1.0
    bx = int((cx - 25) + ((cx + 40) - (cx - 25)) * bp)
    by = int((cy - 75) + ((cy + 100) - (cy - 75)) * bp)
    ov_draw.ellipse([(bx - 7, by - 7), (bx + 7, by + 7)], fill=(52, 211, 153, 240))
    
    ecg_y = int(H * 0.88)
    ecg_pts = []
    for x in range(0, W, 4):
        phase = ((x / W) * 4 - t * 2) % 4
        y_off = 0
        if 1.8 < phase < 2.2:
            p = (phase - 1.8) / 0.4
            if p < 0.2: y_off = -10
            elif p < 0.5: y_off = 32
            elif p < 0.8: y_off = -40
            else: y_off = 12
        ecg_pts.append((x, ecg_y + y_off))
    ov_draw.line(ecg_pts, fill=(16, 185, 129, 220), width=3)
    
    frame.paste(overlay, (0, 0), overlay)
    proc.stdin.write(frame.tobytes())
proc.stdin.close()
proc.wait()

# =============================================================================
# 4. NEUROLOGY SYNAPSE (neurology-synapse.mp4)
# =============================================================================
print("4/13 neurology-synapse.mp4", flush=True)
proc, _ = create_video_writer('neurology-synapse.mp4')
nodes = [
    (int(W * 0.25), int(H * 0.35)),
    (int(W * 0.45), int(H * 0.25)),
    (int(W * 0.68), int(H * 0.32)),
    (int(W * 0.82), int(H * 0.52)),
    (int(W * 0.65), int(H * 0.72)),
    (int(W * 0.40), int(H * 0.78)),
    (int(W * 0.50), int(H * 0.50)),
]
for f in range(NUM_FRAMES):
    t = f / NUM_FRAMES
    frame = Image.new('RGB', (W, H), (6, 10, 24))
    overlay = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    ov_draw = ImageDraw.Draw(overlay)
    
    for i in range(len(nodes)):
        for j in range(i + 1, len(nodes)):
            n1, n2 = nodes[i], nodes[j]
            dist = math.hypot(n1[0] - n2[0], n1[1] - n2[1])
            if dist < W * 0.45:
                ov_draw.line([n1, n2], fill=(129, 140, 248, 70), width=2)
                pkt_t = (t * 2 + i * 0.3 + j * 0.5) % 1.0
                px = int(n1[0] + (n2[0] - n1[0]) * pkt_t)
                py = int(n1[1] + (n2[1] - n1[1]) * pkt_t)
                ov_draw.ellipse([(px - 4, py - 4), (px + 4, py + 4)], fill=(192, 132, 252, 220))
    
    for idx, (nx, ny) in enumerate(nodes):
        fire = math.sin(t * math.pi * 4 + idx * 1.8)
        radius = int(8 + max(0, fire) * 12)
        alpha = int(140 + max(0, fire) * 115)
        color = (192, 132, 252, alpha) if fire > 0.3 else (129, 140, 248, 160)
        ov_draw.ellipse([(nx - radius, ny - radius), (nx + radius, ny + radius)], fill=color)
        ov_draw.ellipse([(nx - 4, ny - 4), (nx + 4, ny + 4)], fill=(255, 255, 255, 255))
    
    eeg_y = int(H * 0.88)
    eeg_pts = []
    for x in range(0, W, 4):
        y = eeg_y + math.sin(x * 0.04 + t * math.pi * 4) * 10 + math.cos(x * 0.08 - t * math.pi * 2) * 5
        eeg_pts.append((x, int(y)))
    ov_draw.line(eeg_pts, fill=(167, 139, 250, 220), width=2)
    
    frame.paste(overlay, (0, 0), overlay)
    proc.stdin.write(frame.tobytes())
proc.stdin.close()
proc.wait()

# =============================================================================
# 5. ORTHOPEDICS JOINT (orthopedics-joint.mp4)
# =============================================================================
print("5/13 orthopedics-joint.mp4", flush=True)
proc, _ = create_video_writer('orthopedics-joint.mp4')
for f in range(NUM_FRAMES):
    t = f / NUM_FRAMES
    frame = Image.new('RGB', (W, H), (2, 24, 18))
    overlay = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    ov_draw = ImageDraw.Draw(overlay)
    
    cx, cy = int(W * 0.5), int(H * 0.5)
    r = int(H * 0.35)
    angle_rad = (math.sin(t * math.pi * 2) + 1) * 0.5 * (math.pi * 0.65)
    
    ov_draw.ellipse([(cx - r, cy - r), (cx + r, cy + r)], outline=(16, 185, 129, 85), width=2)
    for deg in range(0, 140, 20):
        rad = (deg / 180) * math.pi
        tx1 = int(cx + math.sin(rad) * (r - 10))
        ty1 = int(cy + math.cos(rad) * (r - 10))
        tx2 = int(cx + math.sin(rad) * r)
        ty2 = int(cy + math.cos(rad) * r)
        ov_draw.line([(tx1, ty1), (tx2, ty2)], fill=(52, 211, 153, 160), width=2)
    
    ov_draw.line([(cx, cy), (cx, cy - r)], fill=(16, 185, 129, 255), width=5)
    tx = int(cx + math.sin(angle_rad) * r)
    ty = int(cy + math.cos(angle_rad) * r)
    ov_draw.line([(cx, cy), (tx, ty)], fill=(52, 211, 153, 255), width=5)
    
    ov_draw.ellipse([(cx - 12, cy - 12), (cx + 12, cy + 12)], fill=(5, 150, 105, 255), outline=(255, 255, 255, 255), width=2)
    ov_draw.ellipse([(tx - 6, ty - 6), (tx + 6, ty + 6)], fill=(16, 185, 129, 255))
    
    cur_deg = int((angle_rad / math.pi) * 180)
    ov_draw.rectangle([(cx + 35, cy - 35), (cx + 200, cy + 10)], fill=(3, 30, 22, 210), outline=(52, 211, 153, 180), width=1)
    
    frame.paste(overlay, (0, 0), overlay)
    proc.stdin.write(frame.tobytes())
proc.stdin.close()
proc.wait()

# =============================================================================
# 6. DOCTORS PROCEDURE (doctors-procedure.mp4)
# =============================================================================
print("6/13 doctors-procedure.mp4", flush=True)
proc, _ = create_video_writer('doctors-procedure.mp4')
base_img = load_base_image('doctor-consulting.jpg')
for f in range(NUM_FRAMES):
    t = f / NUM_FRAMES
    scale = 1.04 + 0.06 * math.sin(t * math.pi * 2)
    sw, sh = int(W * scale), int(H * scale)
    if base_img:
        resized = base_img.resize((sw, sw), Image.Resampling.BILINEAR)
        ox = int((sw - W) * 0.4)
        oy = int((sh - H) * 0.4)
        frame = resized.crop((ox, oy, ox + W, oy + H))
    else:
        frame = Image.new('RGB', (W, H), (20, 15, 10))
    
    overlay = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    ov_draw = ImageDraw.Draw(overlay)
    
    spot_x = int(W * 0.6 + math.sin(t * math.pi * 2) * 35)
    ov_draw.ellipse([(spot_x - 160, 50), (spot_x + 160, H - 50)], fill=(251, 191, 36, 42))
    
    ov_draw.rectangle([(40, 40), (W - 40, H - 40)], outline=(217, 119, 6, 80), width=1)
    ov_draw.rectangle([(W - 300, H - 80), (W - 40, H - 40)], fill=(24, 18, 12, 220), outline=(217, 119, 6, 180), width=1)
    ov_draw.ellipse([(W - 285, H - 65), (W - 275, H - 55)], fill=(245, 158, 11, 255))
    
    frame.paste(overlay, (0, 0), overlay)
    proc.stdin.write(frame.tobytes())
proc.stdin.close()
proc.wait()

# =============================================================================
# 7. ADVANCED TECHNOLOGY / MRI (advanced-tech.mp4)
# =============================================================================
print("7/13 advanced-tech.mp4", flush=True)
proc, _ = create_video_writer('advanced-tech.mp4')
for f in range(NUM_FRAMES):
    t = f / NUM_FRAMES
    frame = Image.new('RGB', (W, H), (2, 20, 16))
    overlay = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    ov_draw = ImageDraw.Draw(overlay)
    
    cx, cy = int(W * 0.5), int(H * 0.5)
    r1, r2 = int(H * 0.38), int(H * 0.26)
    rot1 = t * math.pi * 2
    rot2 = -t * math.pi * 3
    
    ov_draw.ellipse([(cx - r1, cy - r1), (cx + r1, cy + r1)], outline=(16, 185, 129, 110), width=3)
    ov_draw.ellipse([(cx - r2, cy - r2), (cx + r2, cy + r2)], outline=(52, 211, 153, 140), width=2)
    
    for k in range(12):
        a1 = rot1 + (k / 12) * math.pi * 2
        px1 = int(cx + math.cos(a1) * r1)
        py1 = int(cy + math.sin(a1) * r1)
        ov_draw.ellipse([(px1 - 3, py1 - 3), (px1 + 3, py1 + 3)], fill=(16, 185, 129, 220))
        
        a2 = rot2 + (k / 12) * math.pi * 2
        px2 = int(cx + math.cos(a2) * r2)
        py2 = int(cy + math.sin(a2) * r2)
        ov_draw.ellipse([(px2 - 3, py2 - 3), (px2 + 3, py2 + 3)], fill=(52, 211, 153, 200))
    
    laser_y = int(H * 0.15 + (H * 0.7) * ((math.sin(t * math.pi * 2) + 1) * 0.5))
    ov_draw.line([(0, laser_y), (W, laser_y)], fill=(52, 211, 153, 255), width=3)
    
    ov_draw.rectangle([(30, 30), (280, 70)], fill=(2, 28, 22, 200), outline=(16, 185, 129, 160), width=1)
    ov_draw.ellipse([(45, 45), (55, 55)], fill=(52, 211, 153, 255))
    
    frame.paste(overlay, (0, 0), overlay)
    proc.stdin.write(frame.tobytes())
proc.stdin.close()
proc.wait()

# =============================================================================
# 8. FACILITIES WALKTHROUGH (facilities-walkthrough.mp4)
# =============================================================================
print("8/13 facilities-walkthrough.mp4", flush=True)
proc, _ = create_video_writer('facilities-walkthrough.mp4')
base_img = load_base_image('cath-lab.jpg')
for f in range(NUM_FRAMES):
    t = f / NUM_FRAMES
    scale = 1.0 + 0.08 * math.sin(t * math.pi)
    sw, sh = int(W * scale), int(H * scale)
    if base_img:
        resized = base_img.resize((sw, sh), Image.Resampling.BILINEAR)
        ox = int((sw - W) * (0.2 + 0.6 * t))
        oy = int((sh - H) * 0.5)
        frame = resized.crop((ox, oy, ox + W, oy + H))
    else:
        frame = Image.new('RGB', (W, H), (4, 25, 20))
    
    overlay = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    ov_draw = ImageDraw.Draw(overlay)
    
    scan_x = int(W * t)
    ov_draw.line([(scan_x, 0), (scan_x, H)], fill=(52, 211, 153, 120), width=2)
    
    cx, cy = int(W * 0.75), int(H * 0.45)
    ov_draw.arc([(cx - 60, cy - 60), (cx + 60, cy + 60)], start=0, end=int(t * 360), fill=(245, 158, 11, 200), width=2)
    
    ov_draw.rectangle([(W - 290, 25), (W - 30, 65)], fill=(3, 23, 17, 200), outline=(16, 185, 129, 160), width=1)
    ov_draw.ellipse([(W - 275, 40), (W - 265, 50)], fill=(16, 185, 129, 255))
    
    frame.paste(overlay, (0, 0), overlay)
    proc.stdin.write(frame.tobytes())
proc.stdin.close()
proc.wait()

# =============================================================================
# 9. PATIENT CARE (patient-care.mp4)
# =============================================================================
print("9/13 patient-care.mp4", flush=True)
proc, _ = create_video_writer('patient-care.mp4')
base_img = load_base_image('doctor-consulting.jpg')
for f in range(NUM_FRAMES):
    t = f / NUM_FRAMES
    scale = 1.05 + 0.05 * math.cos(t * math.pi * 2)
    sw, sh = int(W * scale), int(H * scale)
    if base_img:
        resized = base_img.resize((sw, sh), Image.Resampling.BILINEAR)
        ox = int((sw - W) * 0.5)
        oy = int((sh - H) * 0.5)
        frame = resized.crop((ox, oy, ox + W, oy + H))
    else:
        frame = Image.new('RGB', (W, H), (15, 25, 20))
    
    overlay = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    ov_draw = ImageDraw.Draw(overlay)
    ov_draw.rectangle([(0, 0), (W, H)], fill=(5, 150, 105, 30))
    
    ov_draw.rectangle([(30, H - 75), (W - 30, H - 25)], fill=(3, 23, 17, 210), outline=(16, 185, 129, 120), width=1)
    ov_draw.ellipse([(45, H - 55), (55, H - 45)], fill=(16, 185, 129, 255))
    
    wave_pts = []
    for x in range(70, W - 40, 4):
        wy = (H - 50) + math.sin((x + t * 200) * 0.08) * 6
        wave_pts.append((x, int(wy)))
    ov_draw.line(wave_pts, fill=(52, 211, 153, 220), width=2)
    
    frame.paste(overlay, (0, 0), overlay)
    proc.stdin.write(frame.tobytes())
proc.stdin.close()
proc.wait()

# =============================================================================
# 10. PATIENT TESTIMONIALS (testimonials-stories.mp4)
# =============================================================================
print("10/13 testimonials-stories.mp4", flush=True)
proc, _ = create_video_writer('testimonials-stories.mp4')
for f in range(NUM_FRAMES):
    t = f / NUM_FRAMES
    frame = Image.new('RGB', (W, H), (28, 20, 14))
    overlay = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    ov_draw = ImageDraw.Draw(overlay)
    
    ov_draw.ellipse([(W * 0.5 - 240, H * 0.5 - 180), (W * 0.5 + 240, H * 0.5 + 180)], fill=(217, 119, 6, 45))
    
    num_bars = 28
    bar_w = 14
    start_x = int((W - (num_bars * (bar_w + 6))) * 0.5)
    cy = int(H * 0.62)
    for b in range(num_bars):
        bx = start_x + b * (bar_w + 6)
        bh = max(4, abs(int(8 + math.sin(t * math.pi * 4 + b * 0.35) * 32 + math.cos(t * math.pi * 2 + b * 0.2) * 16)))
        ov_draw.rectangle([(bx, cy - bh), (bx + bar_w, cy + bh)], fill=(245, 158, 11, 220))
    
    ov_draw.rectangle([(W * 0.5 - 150, 45), (W * 0.5 + 150, 90)], fill=(30, 20, 12, 220), outline=(217, 119, 6, 180), width=1)
    ov_draw.ellipse([(W * 0.5 - 130, 62), (W * 0.5 - 118, 74)], fill=(16, 185, 129, 255))
    
    frame.paste(overlay, (0, 0), overlay)
    proc.stdin.write(frame.tobytes())
proc.stdin.close()
proc.wait()

# =============================================================================
# 11. APPOINTMENT SUITE (appointment-suite.mp4)
# =============================================================================
print("11/13 appointment-suite.mp4", flush=True)
proc, _ = create_video_writer('appointment-suite.mp4')
for f in range(NUM_FRAMES):
    t = f / NUM_FRAMES
    frame = Image.new('RGB', (W, H), (15, 8, 30))
    overlay = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    ov_draw = ImageDraw.Draw(overlay)
    
    ov_draw.ellipse([(W * 0.2, H * 0.3), (W * 0.8, H * 0.7)], fill=(126, 34, 206, 40))
    
    for col in range(5):
        for row in range(3):
            bx = int(140 + col * 140)
            by = int(140 + row * 90)
            is_active = (col + row) == int(t * 8) % 8
            border_col = (168, 85, 247, 240) if is_active else (126, 34, 206, 90)
            fill_col = (88, 28, 135, 160) if is_active else (30, 15, 50, 100)
            ov_draw.rectangle([(bx, by), (bx + 115, by + 65)], fill=fill_col, outline=border_col, width=2)
            b_col = (52, 211, 153, 255) if is_active else (168, 85, 247, 180)
            ov_draw.ellipse([(bx + 12, by + 18), (bx + 22, by + 28)], fill=b_col)
    
    ov_draw.rectangle([(W * 0.5 - 180, 35), (W * 0.5 + 180, 80)], fill=(25, 12, 45, 220), outline=(168, 85, 247, 180), width=1)
    ov_draw.ellipse([(W * 0.5 - 160, 52), (W * 0.5 - 150, 62)], fill=(16, 185, 129, 255))
    
    frame.paste(overlay, (0, 0), overlay)
    proc.stdin.write(frame.tobytes())
proc.stdin.close()
proc.wait()

# =============================================================================
# 12. CONTACT LOCATION (contact-location.mp4)
# =============================================================================
print("12/13 contact-location.mp4", flush=True)
proc, _ = create_video_writer('contact-location.mp4')
for f in range(NUM_FRAMES):
    t = f / NUM_FRAMES
    frame = Image.new('RGB', (W, H), (3, 20, 16))
    overlay = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    ov_draw = ImageDraw.Draw(overlay)
    
    grid_gap = 50
    for x in range(0, W, grid_gap):
        ov_draw.line([(x, 0), (x, H)], fill=(5, 150, 105, 35), width=1)
    for y in range(0, H, grid_gap):
        ov_draw.line([(0, y), (W, y)], fill=(5, 150, 105, 35), width=1)
    
    cx, cy = int(W * 0.52), int(H * 0.48)
    radar_r = int((t * 220) % 220)
    ov_draw.ellipse([(cx - radar_r, cy - radar_r), (cx + radar_r, cy + radar_r)], outline=(16, 185, 129, int(220 - radar_r)), width=2)
    
    ov_draw.ellipse([(cx - 8, cy - 8), (cx + 8, cy + 8)], fill=(239, 68, 68, 255), outline=(255, 255, 255, 255), width=2)
    
    for angle_deg in [30, 130, 220, 310]:
        rad = (angle_deg / 180) * math.pi
        px = int(cx + math.cos(rad) * 240)
        py = int(cy + math.sin(rad) * 240)
        ov_draw.line([(px, py), (cx, cy)], fill=(16, 185, 129, 90), width=1)
        np_t = (t * 2 + angle_deg * 0.01) % 1.0
        mx = int(px + (cx - px) * np_t)
        my = int(py + (cy - py) * np_t)
        ov_draw.ellipse([(mx - 4, my - 4), (mx + 4, my + 4)], fill=(52, 211, 153, 220))
    
    ov_draw.rectangle([(30, 30), (320, 75)], fill=(2, 28, 22, 210), outline=(16, 185, 129, 160), width=1)
    ov_draw.ellipse([(45, 50), (55, 60)], fill=(239, 68, 68, 255))
    
    frame.paste(overlay, (0, 0), overlay)
    proc.stdin.write(frame.tobytes())
proc.stdin.close()
proc.wait()

# =============================================================================
# 13. CARDIAC CATHETERIZATION / STENTING (cardiac-catheterization.mp4)
# =============================================================================
print("13/13 cardiac-catheterization.mp4", flush=True)
proc, _ = create_video_writer('cardiac-catheterization.mp4')
base_img = load_base_image('angiogram-scan.jpg')
for f in range(NUM_FRAMES):
    t = f / NUM_FRAMES
    scale = 1.02 + 0.06 * math.sin(t * math.pi * 2)
    sw, sh = int(W * scale), int(H * scale)
    if base_img:
        resized = base_img.resize((sw, sh), Image.Resampling.BILINEAR)
        ox = int((sw - W) * 0.5)
        oy = int((sh - H) * 0.5)
        frame = resized.crop((ox, oy, ox + W, oy + H))
    else:
        frame = Image.new('RGB', (W, H), (5, 18, 14))
    
    overlay = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    ov_draw = ImageDraw.Draw(overlay)
    
    stent_cx, stent_cy = int(W * 0.55), int(H * 0.48)
    expansion = 16 + int(math.sin(t * math.pi * 2) * 5)
    
    for row in range(-2, 3):
        for col in range(-3, 4):
            sx = stent_cx + col * 26
            sy = stent_cy + row * expansion
            ov_draw.polygon([(sx, sy - 7), (sx + 12, sy), (sx, sy + 7), (sx - 12, sy)], outline=(52, 211, 153, 200), width=1)
    
    ov_draw.line([(stent_cx - 180, stent_cy - 35), (stent_cx + 180, stent_cy + 35)], fill=(245, 158, 11, 240), width=3)
    
    ov_draw.rectangle([(25, 25), (290, 65)], fill=(3, 23, 17, 210), outline=(16, 185, 129, 160), width=1)
    ov_draw.ellipse([(38, 40), (48, 50)], fill=(245, 158, 11, 255))
    
    frame.paste(overlay, (0, 0), overlay)
    proc.stdin.write(frame.tobytes())
proc.stdin.close()
proc.wait()

print("ALL 13 VIDEOS COMPLETE!", flush=True)

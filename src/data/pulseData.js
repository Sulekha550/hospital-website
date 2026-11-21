export const PULSE_DATA = {
  brand: "PULSE",
  tagline: "Advanced Cardiac & Interventional Care",
  doctor: {
    name: "Dr. Prakash Chand Shahi",
    title: "Senior Consultant Cardiologist & Interventional Cardiologist",
    shortName: "Dr. P. C. Shahi",
    speciality: "Cardiologist & Interventional Cardiologist",
    experienceYears: "22+",
    experienceText: "22+ Years of Dedicated Clinical Practice",
    location: "Gorakhpur, Uttar Pradesh, India",
    portraitPlaceholder: "/doctor-portrait.jpg",
    qualifications: [
      {
        degree: "MBBS",   
        institution: "Premier Medical Institute",
        year: "Foundation",
        description: "Undergraduate medical foundation in general surgery and medicine."
      },
      {
        degree: "MD — General Medicine",
        institution: "King George's Medical University (KGMU)",
        year: "2007",
        description: "Advanced post-graduate residency in comprehensive internal medicine at India's foremost medical university."
      },
      {
        degree: "DM — Cardiology",
        institution: "Postgraduate Institute of Medical Education and Research (PGIMER)",
        year: "2013",
        description: "Super-specialty doctorate in Cardiology and hemodynamic intervention from an institute of national importance."
      }
    ],
    areasOfInterest: [
      {
        title: "Interventional Cardiology",
        subtitle: "Catheter-Guided Vascular Therapy",
        description: "Minimally invasive diagnostic and therapeutic catheter-based procedures for complex coronary and peripheral vascular disease.",
        icon: "Activity",
        tags: ["Coronary Angioplasty", "Stent Implantation", "Vascular Patency"]
      },
      {
        title: "Pacemakers",
        subtitle: "Cardiac Rhythm Management",
        description: "Advanced implantation and electrophysiological evaluation of permanent pacemakers and cardiac pacing devices.",
        icon: "Cpu",
        tags: ["Bradycardia Care", "Device Optimization", "Conduction Synchronization"]
      }
    ],
    philosophy: "Precision diagnosis, meticulous interventional execution, and compassionate long-term cardiac preservation for every patient."
  },
  clinic: {
    name: "Pulse Heart Centre",
    address: "Betiahata, Gorakhpur, Uttar Pradesh, India",
    landmark: "Prime Medical District, Betiahata",
    hours: "Monday – Saturday: 10:00 AM – 8:00 PM",
    sunday: "Sunday: Closed (Emergency referrals as advised)",
    locationDetails: {
      city: "Gorakhpur",
      district: "Gorakhpur",
      state: "Uttar Pradesh",
      country: "India"
    }
  },
  socials: {
    facebook: "https://www.facebook.com/share/1EHVta9Gk8/",
    instagram: "https://www.instagram.com/prakashchandshahi763?lqvp=MWdyN2Q0YTM1NmJxMA=="
  },
  treatments: [
    {
      id: "peripheral-angioplasty",
      name: "Peripheral Angioplasty & Stenting",
      category: "Vascular Intervention",
      tagline: "Restoring arterial perfusion to extremities and renal vasculature",
      summary: "A minimally invasive catheterization procedure utilizing balloon dilation and specialized endovascular stents to treat narrowed or occluded peripheral arteries.",
      indications: [
        "Peripheral arterial disease (PAD)",
        "Severe intermittent claudication",
        "Critical limb ischemia",
        "Renal artery stenosis"
      ],
      highlights: [
        "Minimally invasive arterial puncture",
        "Precision balloon dilation & stent placement",
        "Immediate restoration of distal arterial blood flow",
        "Rapid post-procedure recovery compared to open vascular surgery"
      ],
      colorAccent: "from-sky-500 to-indigo-600",
      badgeColor: "bg-sky-50 text-sky-700 border-sky-200"
    },
    {
      id: "coronary-angiogram",
      name: "Coronary Angiogram",
      category: "Diagnostic Catheterization",
      tagline: "The definitive gold standard for coronary anatomy visualization",
      summary: "An advanced fluoroscopic X-ray procedure using biocompatible radiopaque dye to visualize the exact lumen, flow dynamics, and blockages of the coronary arteries.",
      indications: [
        "Evaluation of chest pain (angina pectoris)",
        "Suspected coronary artery disease",
        "Abnormal stress test or ECG findings",
        "Pre-procedural planning for revascularization"
      ],
      highlights: [
        "Real-time dynamic fluoroscopic imaging",
        "Precise localization of stenotic lesions",
        "Evaluation of myocardial collateral blood supply",
        "Definitive roadmap for medical, stent, or surgical management"
      ],
      colorAccent: "from-violet-500 to-purple-600",
      badgeColor: "bg-violet-50 text-violet-700 border-violet-200"
    },
    {
      id: "ct-coronary-angiography",
      name: "CT Coronary Angiography",
      category: "Non-Invasive 3D Imaging",
      tagline: "High-resolution 3D volumetric evaluation of coronary vessels",
      summary: "A cutting-edge, non-invasive cardiac computed tomography scan that reconstructs three-dimensional architectural models of the coronary tree and arterial walls.",
      indications: [
        "Atypical chest discomfort in intermediate-risk patients",
        "Assessment of coronary calcium and soft plaque",
        "Non-invasive assessment of coronary artery anomalies",
        "Post-stent or post-bypass graft patency surveillance"
      ],
      highlights: [
        "Entirely non-invasive volumetric scan",
        "Sub-millimeter spatial resolution of arterial walls",
        "Comprehensive coronary calcium scoring",
        "Same-day outpatient diagnostic procedure"
      ],
      colorAccent: "from-teal-500 to-cyan-600",
      badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200"
    }
  ],
  cardiacExplorerHotspots: [
    {
      id: "interventional",
      label: "Interventional Cardiology",
      chamber: "Coronary Arteries & Left Ventricle",
      coordinates: { x: 42, y: 38 },
      focus: "Catheter-based coronary revascularization and endovascular hemodynamics.",
      clinicalInsight: "Focuses on restoring physiological blood flow through narrowed or calcified vessels using balloon angioplasty and high-precision drug-eluting stents."
    },
    {
      id: "coronary",
      label: "Coronary Care",
      chamber: "Myocardial Perfusion & Microcirculation",
      coordinates: { x: 58, y: 52 },
      focus: "Comprehensive ischemic prevention and myocardial tissue preservation.",
      clinicalInsight: "Encompasses diagnostic angiography and hemodynamic stabilization to safeguard oxygen delivery to the contracting heart muscle."
    },
    {
      id: "pacemaker",
      label: "Pacemakers & Electrophysiology",
      chamber: "Sinoatrial (SA) & Atrioventricular (AV) Junction",
      coordinates: { x: 30, y: 28 },
      focus: "Cardiac rhythm management and conduction synchronization.",
      clinicalInsight: "Addresses symptomatic bradyarrhythmias, heart blocks, and sinus node dysfunction through permanent electronic pacing systems."
    }
  ],
  patientJourney: [
    {
      step: "01",
      title: "Pre-Consultation Records",
      description: "Gather prior ECGs, blood pressure logs, past angiograms, echocardiogram reports, and current medication lists for comprehensive evaluation."
    },
    {
      step: "02",
      title: "Clinical Hemodynamic Assessment",
      description: "Detailed symptom history review, cardiovascular physical examination, and assessment of heart sounds, pulses, and systemic hemodynamics."
    },
    {
      step: "03",
      title: "Precision Diagnostic Direction",
      description: "Targeted investigation recommendations—such as Coronary Angiogram or CT Coronary Angiography—tailored to your specific clinical findings."
    },
    {
      step: "04",
      title: "Personalized Care Protocol",
      description: "Structured interventional strategy or evidence-based medical regimen with continuous ambulatory review at Pulse Heart Centre."
    }
  ]
};

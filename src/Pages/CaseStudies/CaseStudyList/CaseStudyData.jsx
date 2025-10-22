import { IMAGES } from "../../../Images";

export const caseData = [
  {
      img: IMAGES.caseStudyImg1,
      tags: ["SportsTech", "Computer Vision", "Deep Learning"],
      title: "Drofree – Monitor Soccer Through Drone",
      challenge:
        "Enable real-time identification and tracking of players in aerial match footage to support performance analytics for soccer clubs.",
      solution:
        "We developed a deep learning pipeline using Faster-RCNN and ResNet50 that can detect and assign player IDs across the entire video.",
      tech: ["Python", "OpenCV", "TensorFlow", "Drone Video Feed"],
      outcome:
        "Outcome: Reduced manual annotation time by 90% and provided clubs with accurate player heatmaps.",
    },
    {
      img: IMAGES.caseStudyImg2,
      tags: ["HealthTech", "Video Intelligence", "Real-Time AI"],
      title: "Swimmer Stroke & Lap Analytics",
      challenge: "Enable real-time detection of swimmer strokes and laps.",
      solution:
        "Built AI pipeline for underwater detection and classification with 94% accuracy.",
      tech: ["Python", "OpenCV", "TensorFlow", "Custom CNN"],
      outcome:
        " Outcome: Enabled real-time stroke and lap detection with over 94% accuracy, improving coaching efficiency.",
    },
    {
      img: IMAGES.caseStudyImg3,
      tags: ["Retail AI", "Object Detection", "Edge Vision"],
      title: "Smart Shelf Detection for Retail Stores",
      challenge: "Detect product availability in real time.",
      solution:
        "Designed an edge AI system to identify stock gaps from video feeds.",
      tech: ["YOLOv5", "Edge Devices", "Python", "TensorRT"],
      outcome: "Outcome: Increased shelf availability visibility by 80%, reducing restock delays.",
    },
];

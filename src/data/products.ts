// Course types and interfaces
export interface CourseSpecifications {
  [key: string]: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  images: string[];
  video?: string; // Optional video preview
  videos?: string[]; // Multiple course videos for premium courses
  description: string;
  detailedDescription: string;
  category: string;
  features: string[];
  specifications: CourseSpecifications;
  inStock: boolean;
}

// Helper function to get course image with fallback
export const getProductImage = (productId: number, imageIndex: number = 1): string => {
  // Используем единое изображение для всех курсов Photoshop
  return `/images/img_1.jpg`;
};

// Helper function to get all available images for a course
export const getProductImages = (productId: number): string[] => {
  // Для всех курсов используем Photoshop изображения
  return [getProductImage(productId)];
};

// Helper function to get course video preview (returns first video from course videos)
export const getProductVideo = (productId: number): string | undefined => {
  const videos = getProductVideos(productId);
  return videos && videos.length > 0 ? videos[0] : undefined;
};

// Helper function to get course videos (for premium courses with multiple videos)
export const getProductVideos = (productId: number): string[] | undefined => {
  // Существующие видео: 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 13
  
  // Courses 1-5: 1 video each
  if (productId === 1) return [`/videos/Adobe Photoshop Basics for Beginners Khara Plicanic Skillshare (1).mp4`];
  if (productId === 2) return [`/videos/Adobe Photoshop Basics for Beginners Khara Plicanic Skillshare (2).mp4`];
  if (productId === 3) return [`/videos/Adobe Photoshop Basics for Beginners Khara Plicanic Skillshare (3).mp4`];
  if (productId === 4) return [`/videos/Adobe Photoshop Basics for Beginners Khara Plicanic Skillshare (4).mp4`];
  if (productId === 5) return [`/videos/Adobe Photoshop Basics for Beginners Khara Plicanic Skillshare (5).mp4`];
  
  // Courses 6-8: 2 videos each
  if (productId === 6) {
    return [
      `/videos/Adobe Photoshop Basics for Beginners Khara Plicanic Skillshare (6).mp4`,
      `/videos/Adobe Photoshop Basics for Beginners Khara Plicanic Skillshare (7).mp4`
    ];
  }
  if (productId === 7) {
    return [
      `/videos/Adobe Photoshop Basics for Beginners Khara Plicanic Skillshare (8).mp4`,
      `/videos/Adobe Photoshop Basics for Beginners Khara Plicanic Skillshare (10).mp4`
    ];
  }
  if (productId === 8) {
    return [
      `/videos/Adobe Photoshop Basics for Beginners Khara Plicanic Skillshare (11).mp4`,
      `/videos/Adobe Photoshop Basics for Beginners Khara Plicanic Skillshare (13).mp4`
    ];
  }
  
  // Courses 9-11: 3 videos each
  if (productId === 9) {
    return [
      `/videos/Adobe Photoshop Basics for Beginners Khara Plicanic Skillshare (1).mp4`,
      `/videos/Adobe Photoshop Basics for Beginners Khara Plicanic Skillshare (2).mp4`,
      `/videos/Adobe Photoshop Basics for Beginners Khara Plicanic Skillshare (3).mp4`
    ];
  }
  if (productId === 10) {
    return [
      `/videos/Adobe Photoshop Basics for Beginners Khara Plicanic Skillshare (4).mp4`,
      `/videos/Adobe Photoshop Basics for Beginners Khara Plicanic Skillshare (5).mp4`,
      `/videos/Adobe Photoshop Basics for Beginners Khara Plicanic Skillshare (6).mp4`
    ];
  }
  if (productId === 11) {
    return [
      `/videos/Adobe Photoshop Basics for Beginners Khara Plicanic Skillshare (7).mp4`,
      `/videos/Adobe Photoshop Basics for Beginners Khara Plicanic Skillshare (8).mp4`,
      `/videos/Adobe Photoshop Basics for Beginners Khara Plicanic Skillshare (10).mp4`
    ];
  }
  
  // Courses 12-15: 4 videos each
  if (productId === 12) {
    return [
      `/videos/Adobe Photoshop Basics for Beginners Khara Plicanic Skillshare (11).mp4`,
      `/videos/Adobe Photoshop Basics for Beginners Khara Plicanic Skillshare (13).mp4`,
      `/videos/Adobe Photoshop Basics for Beginners Khara Plicanic Skillshare (1).mp4`,
      `/videos/Adobe Photoshop Basics for Beginners Khara Plicanic Skillshare (2).mp4`
    ];
  }
  if (productId === 13) {
    return [
      `/videos/Adobe Photoshop Basics for Beginners Khara Plicanic Skillshare (3).mp4`,
      `/videos/Adobe Photoshop Basics for Beginners Khara Plicanic Skillshare (4).mp4`,
      `/videos/Adobe Photoshop Basics for Beginners Khara Plicanic Skillshare (5).mp4`,
      `/videos/Adobe Photoshop Basics for Beginners Khara Plicanic Skillshare (6).mp4`
    ];
  }
  if (productId === 14) {
    return [
      `/videos/Adobe Photoshop Basics for Beginners Khara Plicanic Skillshare (7).mp4`,
      `/videos/Adobe Photoshop Basics for Beginners Khara Plicanic Skillshare (8).mp4`,
      `/videos/Adobe Photoshop Basics for Beginners Khara Plicanic Skillshare (10).mp4`,
      `/videos/Adobe Photoshop Basics for Beginners Khara Plicanic Skillshare (11).mp4`
    ];
  }
  if (productId === 15) {
    return [
      `/videos/Adobe Photoshop Basics for Beginners Khara Plicanic Skillshare (13).mp4`,
      `/videos/Adobe Photoshop Basics for Beginners Khara Plicanic Skillshare (1).mp4`,
      `/videos/Adobe Photoshop Basics for Beginners Khara Plicanic Skillshare (2).mp4`,
      `/videos/Adobe Photoshop Basics for Beginners Khara Plicanic Skillshare (3).mp4`
    ];
  }
  
  // Courses 16-17: 5 videos each
  if (productId === 16) {
    return [
      `/videos/Adobe Photoshop Basics for Beginners Khara Plicanic Skillshare (4).mp4`,
      `/videos/Adobe Photoshop Basics for Beginners Khara Plicanic Skillshare (5).mp4`,
      `/videos/Adobe Photoshop Basics for Beginners Khara Plicanic Skillshare (6).mp4`,
      `/videos/Adobe Photoshop Basics for Beginners Khara Plicanic Skillshare (7).mp4`,
      `/videos/Adobe Photoshop Basics for Beginners Khara Plicanic Skillshare (8).mp4`
    ];
  }
  if (productId === 17) {
    return [
      `/videos/Adobe Photoshop Basics for Beginners Khara Plicanic Skillshare (10).mp4`,
      `/videos/Adobe Photoshop Basics for Beginners Khara Plicanic Skillshare (11).mp4`,
      `/videos/Adobe Photoshop Basics for Beginners Khara Plicanic Skillshare (13).mp4`,
      `/videos/Adobe Photoshop Basics for Beginners Khara Plicanic Skillshare (1).mp4`,
      `/videos/Adobe Photoshop Basics for Beginners Khara Plicanic Skillshare (2).mp4`
    ];
  }
  
  return undefined;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Photoshop Quick Start - Introduction",
    price: 1.00,
    image: getProductImage(1),
    images: getProductImages(1),
    video: getProductVideo(1),
    videos: getProductVideos(1),
    description: "Quick introduction to Adobe Photoshop basics - perfect starter for absolute beginners.",
    detailedDescription: "Get started with Adobe Photoshop. This quick start course includes 1 video module covering the very basics, software overview, and your first steps in Photoshop. Perfect for complete beginners.",
    category: "Photoshop Basics",
    features: [
      "1 video module included",
      "Quick Photoshop overview",
      "Basic interface tour", 
      "First steps guide",
      "Essential tools introduction"
    ],
    specifications: {
      "Duration": "5 minutes",
      "Videos": "1 module",
      "Level": "Absolute Beginner",
      "Language": "English",
      "Focus": "Quick Start",
      "Access": "3 months"
    },
    inStock: true
  },
  {
    id: 2,
    name: "Adobe Photoshop Welcome & Setup",
    price: 1.95,
    image: getProductImage(2),
    images: getProductImages(2),
    video: getProductVideo(2),
    videos: getProductVideos(2),
    description: "Introduction to Adobe Photoshop with software installation and first creative project basics.",
    detailedDescription: "Master the fundamentals of Adobe Photoshop. This starter course includes 1 video module covering software installation, basic interface navigation, and getting started with your creative journey. Perfect foundation for aspiring designers.",
    category: "Photoshop Basics",
    features: [
      "1 video module included",
      "Adobe Photoshop installation guide",
      "Creative Cloud setup", 
      "First design project walkthrough",
      "Basic interface introduction"
    ],
    specifications: {
      "Duration": "7 minutes",
      "Videos": "1 module",
      "Level": "Complete Beginner",
      "Language": "English",
      "Focus": "Photoshop Setup & Basics",
      "Access": "6 months"
    },
    inStock: true
  },
  {
    id: 3,
    name: "Layers and Basic Tools",
    price: 6.99,
    image: getProductImage(2),
    images: getProductImages(2),
    video: getProductVideo(2),
    videos: getProductVideos(2),
    description: "Master Photoshop layers and essential tools for efficient design workflow and creative management.",
    detailedDescription: "Deep dive into Photoshop layers with comprehensive training. This course includes 1 video module on layer types, blending modes, masks, and essential tools. Learn workspace organization and efficient design workflow.",
    category: "Photoshop Fundamentals",
    features: [
      "1 detailed video module",
      "All layer types mastery",
      "Essential tools techniques",
      "Workspace organization basics",
      "Blending modes understanding"
    ],
    specifications: {
      "Duration": "8 minutes",
      "Videos": "1 module",
      "Level": "Beginner",
      "Focus": "Layers & Essential Tools",
      "Access": "8 months"
    },
    inStock: true
  },
  {
    id: 4,
    name: "Basic Image Adjustments",
    price: 9.99,
    image: getProductImage(3),
    images: getProductImages(3),
    video: getProductVideo(3),
    videos: getProductVideos(3),
    description: "Learn essential Photoshop image adjustments for effective photo enhancement and color correction.",
    detailedDescription: "Master Photoshop image adjustments with comprehensive training. This course includes 1 video module covering brightness/contrast, levels, curves, and color balance for professional photo enhancement.",
    category: "Photo Editing",
    features: [
      "1 comprehensive video module",
      "Brightness and contrast mastery",
      "Levels and curves techniques",
      "Color balance adjustments",
      "Hue and saturation control"
    ],
    specifications: {
      "Duration": "10 minutes",
      "Videos": "1 module",
      "Level": "Beginner",
      "Focus": "Image Adjustments & Color",
      "Access": "10 months"
    },
    inStock: true
  },
  {
    id: 5,
    name: "Making Selections",
    price: 19.99,
    image: getProductImage(4),
    images: getProductImages(4),
    video: getProductVideo(4),
    videos: getProductVideos(4),
    description: "Master Photoshop selection tools - the foundation of all photo editing and design workflows.",
    detailedDescription: "Learn essential Photoshop selection techniques. This course includes 1 video module covering marquee tools, lasso tools, magic wand, and quick selection methods used by professional designers.",
    category: "Selection Tools",
    features: [
      "1 detailed video module",
      "Marquee tools mastery",
      "Lasso selection techniques",
      "Magic wand precision",
      "Quick selection methods"
    ],
    specifications: {
      "Duration": "12 minutes",
      "Videos": "1 module",
      "Level": "Intermediate", 
      "Focus": "Selection tools, precision editing",
      "Access": "8 months"
    },
    inStock: true
  },
  {
    id: 6,
    name: "All About Layers",
    price: 29.99,
    image: getProductImage(5),
    images: getProductImages(5),
    video: getProductVideo(5),
    videos: getProductVideos(5),
    description: "Master Photoshop layers for efficient design workflow and build your first creative project.",
    detailedDescription: "Master the powerful Photoshop layer system. This course includes 2 comprehensive video modules covering layer types, blend modes, layer masks, and building creative projects with professional techniques.",
    category: "Layers & Workflow",
    features: [
      "2 comprehensive video modules",
      "Layer types and blend modes mastery",
      "Layer mask optimization",
      "Creative project development",
      "Industry-standard workflows"
    ],
    specifications: {
      "Duration": "15 minutes",
      "Videos": "2 modules",
      "Level": "Intermediate",
      "Focus": "Layers, blend modes, creative workflow",
      "Access": "10 months"
    },
    inStock: true
  },
  {
    id: 7,
    name: "Effects & Layer Styles",
    price: 39.99,
    image: getProductImage(6),
    images: getProductImages(6),
    video: getProductVideo(6),
    videos: getProductVideos(6),
    description: "Learn Photoshop effects and layer styles - essential for creating stunning visual effects and professional designs.",
    detailedDescription: "Master Photoshop effects and layer styles. This course includes 2 detailed video modules covering drop shadows, glows, bevels, and professional effect applications for stunning designs.",
    category: "Effects & Styles",
    features: [
      "2 detailed video modules",
      "Drop shadow mastery",
      "Glow and bevel techniques",
      "Layer style combinations",
      "Professional effect workflows"
    ],
    specifications: {
      "Duration": "18 minutes",
      "Videos": "2 modules",
      "Level": "Intermediate",
      "Focus": "Effects, layer styles, visual design",
      "Access": "12 months"
    },
    inStock: true
  },
  {
    id: 8,
    name: "Brushes & Digital Painting",
    price: 49.99,
    image: getProductImage(7),
    images: getProductImages(7),
    video: getProductVideo(7),
    videos: getProductVideos(7),
    description: "Master advanced Photoshop brush techniques including custom brushes, painting, and digital art creation.",
    detailedDescription: "Master advanced Photoshop brushes. This course includes 2 comprehensive video modules covering brush settings, custom brushes, and digital painting techniques for professional digital art.",
    category: "Digital Painting",
    features: [
      "2 comprehensive video modules",
      "Custom brush creation mastery",
      "Advanced painting techniques",
      "Brush settings optimization",
      "Professional digital art workflows"
    ],
    specifications: {
      "Duration": "22 minutes",
      "Videos": "2 modules",
      "Level": "Intermediate",
      "Focus": "Brushes, digital painting, custom tools",
      "Access": "12 months"
    },
    inStock: true
  },
  {
    id: 9,
    name: "Retouching Basics",
    price: 59.99,
    image: getProductImage(8),
    images: getProductImages(8),
    video: getProductVideo(8),
    videos: getProductVideos(8),
    description: "Master Photoshop retouching techniques with comprehensive training on photo restoration, skin retouching, and image cleanup.",
    detailedDescription: "Master Photoshop retouching. This course includes 3 detailed video modules covering spot healing, clone stamp, patch tool, and professional retouching workflows for flawless photo editing.",
    category: "Photo Retouching",
    features: [
      "3 detailed video modules",
      "Spot healing fundamentals",
      "Clone stamp mastery",
      "Patch tool techniques",
      "Professional retouching workflows"
    ],
    specifications: {
      "Duration": "25 minutes",
      "Videos": "3 modules",
      "Level": "Intermediate",
      "Focus": "Retouching, photo restoration, cleanup",
      "Access": "12 months"
    },
    inStock: true
  },
  {
    id: 10,
    name: "Working with Type",
    price: 69.99,
    image: getProductImage(9),
    images: getProductImages(9),
    video: getProductVideo(9),
    videos: getProductVideos(9),
    description: "Master advanced Photoshop typography and text effects for dynamic design and professional layouts.",
    detailedDescription: "Master advanced Photoshop typography. This course includes 3 comprehensive video modules covering text tools, character formatting, paragraph styling, and professional typography techniques.",
    category: "Typography & Text",
    features: [
      "3 comprehensive video modules",
      "Text tools mastery",
      "Character formatting techniques",
      "Paragraph styling methods",
      "Professional text effects"
    ],
    specifications: {
      "Duration": "28 minutes",
      "Videos": "3 modules",
      "Level": "Advanced",
      "Focus": "Typography, text effects, professional layouts",
      "Access": "15 months"
    },
    inStock: true
  },
  {
    id: 11,
    name: "Masking Techniques",
    price: 79.99,
    image: getProductImage(10),
    images: getProductImages(10),
    video: getProductVideo(10),
    videos: getProductVideos(10),
    description: "Master practical Photoshop masking techniques and advanced compositing for real-world design applications.",
    detailedDescription: "Master practical Photoshop masking. This premium course includes 3 detailed video modules covering layer masks, clipping masks, vector masks, and professional compositing techniques for seamless designs.",
    category: "Masking & Compositing",
    features: [
      "3 detailed video modules",
      "Layer mask mastery",
      "Clipping mask techniques",
      "Vector mask applications",
      "Professional compositing workflows"
    ],
    specifications: {
      "Duration": "32 minutes",
      "Videos": "3 modules", 
      "Level": "Advanced",
      "Focus": "Masking, compositing, advanced selections",
      "Access": "15 months"
    },
    inStock: true
  },
  {
    id: 12,
    name: "Smart Objects & Advanced Techniques",
    price: 89.99,
    image: getProductImage(11),
    images: getProductImages(11),
    video: getProductVideo(11),
    videos: getProductVideos(11),
    description: "Master Smart Objects, filters, and advanced Photoshop techniques for non-destructive editing workflows.",
    detailedDescription: "Master Smart Objects and advanced techniques. This premium course includes 4 comprehensive video modules covering Smart Objects, smart filters, non-destructive editing, and professional advanced workflows.",
    category: "Advanced Techniques",
    features: [
      "4 comprehensive video modules",
      "Smart Objects mastery",
      "Smart filters techniques",
      "Non-destructive editing workflows",
      "Advanced design methods"
    ],
    specifications: {
      "Duration": "35 minutes",
      "Videos": "4 modules",
      "Level": "Advanced",
      "Focus": "Smart Objects, advanced techniques",
      "Access": "18 months"
    },
    inStock: true
  },
  {
    id: 13,
    name: "Color Grading & Correction Mastery",
    price: 99.99,
    image: getProductImage(12),
    images: getProductImages(12),
    video: getProductVideo(12),
    videos: getProductVideos(12),
    description: "Master professional color grading and correction techniques for cinematic photo and video editing.",
    detailedDescription: "Master professional color grading. This premium course includes 4 detailed video modules covering color theory, grading techniques, correction methods, and cinematic color workflows.",
    category: "Color Grading",
    features: [
      "4 detailed video modules",
      "Color theory fundamentals",
      "Professional grading techniques",
      "Color correction mastery",
      "Cinematic color workflows"
    ],
    specifications: {
      "Duration": "24 minutes",
      "Videos": "4 modules",
      "Level": "Advanced",
      "Focus": "Color grading, correction, cinematic",
      "Access": "18 months"
    },
    inStock: true
  },
  {
    id: 14,
    name: "Photo Manipulation & Compositing Pro",
    price: 109.99,
    image: getProductImage(13),
    images: getProductImages(13),
    video: getProductVideo(13),
    videos: getProductVideos(13),
    description: "Master advanced photo manipulation and compositing techniques for creating stunning surreal and fantasy artwork.",
    detailedDescription: "Master advanced photo manipulation. This premium course includes 4 comprehensive video modules covering advanced compositing, photo manipulation, blending techniques, and surreal artwork creation.",
    category: "Photo Manipulation",
    features: [
      "4 comprehensive video modules",
      "Advanced compositing mastery",
      "Photo manipulation techniques",
      "Seamless blending methods",
      "Surreal artwork creation"
    ],
    specifications: {
      "Duration": "28 minutes",
      "Videos": "4 modules",
      "Level": "Expert",
      "Focus": "Manipulation, compositing, surreal art",
      "Access": "20 months"
    },
    inStock: true
  },
  {
    id: 15,
    name: "3D Design & Mockups in Photoshop",
    price: 119.99,
    image: getProductImage(1),
    images: getProductImages(1),
    video: getProductVideo(1),
    videos: getProductVideos(15),
    description: "Master 3D design, mockup creation, and product visualization in Photoshop for professional presentations.",
    detailedDescription: "Master 3D design in Photoshop. This premium course includes 4 detailed video modules covering 3D tools, mockup creation, product visualization, and professional presentation techniques.",
    category: "3D Design",
    features: [
      "4 detailed video modules",
      "3D tools mastery",
      "Mockup creation techniques",
      "Product visualization methods",
      "Professional presentation skills"
    ],
    specifications: {
      "Duration": "32 minutes",
      "Videos": "4 modules",
      "Level": "Expert",
      "Focus": "3D design, mockups, visualization",
      "Access": "20 months"
    },
    inStock: true
  },
  {
    id: 16,
    name: "Web Design & UI/UX in Photoshop",
    price: 129.99,
    image: getProductImage(1),
    images: getProductImages(1),
    video: getProductVideo(1),
    videos: getProductVideos(16),
    description: "Master web design, UI/UX principles, and modern interface design in Photoshop for digital products.",
    detailedDescription: "Master web design and UI/UX. This premium course includes 5 comprehensive video modules covering web design principles, UI/UX design, interface creation, and modern digital product design.",
    category: "Web & UI Design",
    features: [
      "5 comprehensive video modules",
      "Web design fundamentals",
      "UI/UX principles mastery",
      "Interface design techniques",
      "Modern digital product design"
    ],
    specifications: {
      "Duration": "36 minutes",
      "Videos": "5 modules",
      "Level": "Expert",
      "Focus": "Web design, UI/UX, interfaces",
      "Access": "24 months"
    },
    inStock: true
  },
  {
    id: 17,
    name: "Complete Photoshop Master Class - All Techniques",
    price: 139.99,
    image: getProductImage(1),
    images: getProductImages(1),
    video: getProductVideo(1),
    videos: getProductVideos(17),
    description: "Ultimate Photoshop mastery course covering all techniques, tools, and professional workflows from beginner to expert level.",
    detailedDescription: "Achieve ultimate Photoshop mastery. This complete master class includes 5 comprehensive video modules covering all Photoshop techniques, tools, and professional workflows from fundamentals to expert-level skills.",
    category: "Complete Mastery",
    features: [
      "5 comprehensive video modules",
      "Complete Photoshop mastery",
      "All techniques and tools covered",
      "Beginner to expert progression",
      "Professional workflow optimization",
      "Real-world project mastery",
      "Industry best practices"
    ],
    specifications: {
      "Duration": "40 minutes",
      "Videos": "5 modules",
      "Level": "All Levels - Beginner to Expert",
      "Coverage": "Complete Photoshop mastery",
      "Access": "Lifetime access (24+ months)"
    },
    inStock: true
  }
];

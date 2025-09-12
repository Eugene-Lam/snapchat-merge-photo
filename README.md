# 🎬 Advanced Snapchat Media Merger

A powerful web-based tool for batch processing Snapchat exports with automatic file detection, video support, and multiprocessing capabilities. Merge filters with photos and videos, then download results as individual files or ZIP archives.

## 🚀 Quick Start

1. Open `index.html` in your web browser
2. Drag and drop multiple files or click to select them
3. Files are automatically categorized as "main" or "overlay" based on filenames
4. Click "Process All Files" to merge everything in parallel
5. Download individual files or get everything as a ZIP

## 🎯 Advanced Features

### 🔍 **Intelligent File Detection**
- Automatically detects main files vs overlay files based on filename patterns
- Recognizes patterns like: `overlay`, `filter`, `main`, `base`, `original`
- Smart fallback logic for ambiguous filenames

### 📹 **Multi-Format Support**
- **Images**: JPG, PNG, WebP, GIF
- **Videos**: MP4 (extracts frames for overlay application)
- **Batch Processing**: Handle dozens of files simultaneously

### ⚡ **Multiprocessing Engine**
- Uses Web Workers for true parallel processing
- Automatically detects CPU cores for optimal performance
- Processes multiple file combinations concurrently
- Real-time progress tracking with detailed status

### 📦 **Flexible Output Options**
- **ZIP Download**: Get all processed files in one archive
- **Individual Downloads**: Download files one by one
- **Original Preservation**: Files without overlays are kept as-is
- **Smart Naming**: Merged files include both source names

## 📁 File Organization & Naming

### Automatic Detection Examples:
```
✅ MAIN FILES (detected automatically):
- photo_main.jpg
- seattle_base.png
- original_image.jpg
- snap_shot.mp4
- my_video.mp4

✅ OVERLAY FILES (detected automatically):
- text_overlay.png
- snapchat_filter.png
- watermark_logo.png
- caption_text.jpg
```

### Processing Logic:
1. **Main + Overlay**: Creates merged versions
2. **Main Only**: Outputs original files unchanged
3. **Multiple Combinations**: Each main file paired with each overlay

## 🎮 How to Use

### Basic Workflow:
1. **Upload Files**: Drag multiple files or click to browse
2. **Review Detection**: Check if files are correctly categorized
3. **Process**: Click "Process All Files" for batch processing
4. **Preview Results**: View thumbnails of all processed files
5. **Download**: Get ZIP archive or individual files

### Advanced Usage:
- **Mixed Batches**: Upload photos and videos together
- **Multiple Overlays**: Apply different filters to the same base content
- **Bulk Processing**: Handle entire Snapchat export folders at once

## 🛠 Technical Specifications

### Core Technologies:
- **HTML5 Canvas**: High-quality image processing
- **Web Workers**: True multiprocessing support
- **JSZip Library**: Client-side ZIP file creation
- **FileReader API**: Local file handling
- **Video API**: MP4 frame extraction

### Performance Features:
- **Parallel Processing**: Up to CPU core count simultaneous operations
- **Memory Efficient**: Streams large files without loading everything at once
- **Progress Tracking**: Real-time updates with detailed status
- **Error Recovery**: Graceful handling of corrupted or unsupported files

### Browser Compatibility:
- **Modern Browsers**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **Required APIs**: Canvas, FileReader, Web Workers, Blob
- **Optional Features**: OffscreenCanvas for better performance

## 📊 Use Cases

### 🎪 **Snapchat Export Processing**
- Batch merge entire export folders
- Automatically combine photos with their filters
- Process videos with overlay application

### 📷 **Content Creation**
- Apply watermarks to multiple images
- Batch add logos to photos
- Create branded content series

### 🎨 **Social Media Management**
- Process multiple posts with consistent branding
- Apply filters to video thumbnails
- Create cohesive visual content

## ⚙️ Configuration Options

### File Detection Patterns:
```javascript
// Overlay patterns (customize in code):
['overlay', 'filter', 'sticker', 'text', 'caption', 
 'watermark', 'logo', 'badge', 'stamp', 'label']

// Main file patterns:
['main', 'base', 'original', 'photo', 'image', 
 'video', 'snap', 'shot', 'pic']
```

### Performance Settings:
- **Worker Count**: Auto-detects CPU cores (default: 4)
- **Batch Size**: Dynamically calculated per worker
- **Progress Updates**: Real-time with 10ms intervals

## 🚨 Troubleshooting

### Common Issues:
1. **Large Files**: Videos >100MB may process slowly
2. **Browser Limits**: Some browsers limit concurrent operations
3. **Memory**: Very large batches may require multiple sessions

### Performance Tips:
1. **Optimize Images**: Compress before upload for faster processing
2. **Batch Size**: Process 20-50 files at a time for best results
3. **Browser Choice**: Chrome and Firefox offer best performance

## 📋 File Structure

```
/
├── index.html                 # Main application
├── media-processor.worker.js  # Web Worker for processing
├── assets/                    # Demo files directory
├── README.md                  # This documentation
└── INSTRUCTIONS.md           # Quick usage guide
```

## 🤝 Contributing

This is a client-side application with no server requirements. To modify:

1. **UI Changes**: Edit CSS styles in `index.html`
2. **Processing Logic**: Modify JavaScript functions
3. **Worker Performance**: Enhance `media-processor.worker.js`
4. **Detection Patterns**: Update filename matching arrays

---

## 🎉 Getting Started

**Simply open `index.html` in any modern web browser!**

No installation, no server, no dependencies - just drag, drop, and process! 🚀

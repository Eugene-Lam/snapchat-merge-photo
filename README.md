# 📷 Snapchat Merge Tool

A static web application for merging Snapchat export files with overlays. Process multiple files at once, preview results, and download everything as a ZIP file - all done client-side in your browser!

## ✨ Features

- **Dual Upload Areas**: Separate areas for main files (images/videos) and overlay images
- **Smart File Pairing**: Automatically pairs files based on unique identifiers in filenames
- **Multi-format Support**: Handles JPG, PNG, MP4, and MOV files
- **Batch Processing**: Process multiple file pairs simultaneously
- **Live Preview**: See your merged results before downloading
- **Flexible Downloads**: Download individual files or all results as a ZIP
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Client-side Only**: No server required - all processing happens in your browser

## 🚀 How to Use

1. **Open the Tool**: Simply open `index.html` in any modern web browser
2. **Upload Main Files**: Drag and drop or click to upload your main images/videos
3. **Upload Overlays**: Add overlay images that you want to merge
4. **Process**: Click "Process Files" to merge overlays with main content
5. **Preview & Download**: View results and download individual files or everything as ZIP

## 📁 File Naming Convention

The tool automatically pairs files based on unique identifiers in filenames. Common Snapchat export patterns include:
- `snap-{identifier}.jpg`
- `story-{identifier}.mp4`
- `mem-{identifier}.png`

Files with matching identifiers will be paired for overlay merging.

## 🔧 Technical Details

- **Client-side Processing**: Uses HTML5 Canvas API for image/video processing
- **ZIP Creation**: Utilizes JSZip library for batch downloads
- **Responsive UI**: Modern CSS Grid and Flexbox layout
- **Drag & Drop**: Full drag-and-drop support for file uploads
- **Progress Tracking**: Real-time progress indicators during processing

## 🎯 Use Cases

- Merging Snapchat memories with custom overlays
- Batch processing of social media exports
- Adding watermarks or logos to multiple images
- Creating composite images from separate assets

## 🌐 Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+

## 📄 License

This project is open source and available under the MIT License.

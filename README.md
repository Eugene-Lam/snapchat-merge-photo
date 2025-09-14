# Snapchat Media Merger

A web application that merges exported Snapchat photos and videos with their overlay filters. This tool automatically pairs base media files with their corresponding overlay images and creates merged outputs.

## Features

- **Drag & Drop Interface**: Easy file upload with drag and drop support
- **Automatic File Pairing**: Intelligently matches base media with overlay files based on naming convention
- **Multiple Format Support**: Handles both images (JPG, PNG) and videos (MP4, WebM)
- **Smart Video Export**: Exports videos as MP4 when supported, falls back to WebM for better compatibility
- **Batch Processing**: Process multiple files at once
- **ZIP Download**: Download all processed files as a single ZIP archive
- **Real-time Preview**: See processed media before downloading

## How It Works

### File Naming Convention

The application expects files to follow this naming pattern:

- `[id]-main.jpg` - Base image file
- `[id]-main.mp4` - Base video file  
- `[id]-overlay.png` - Filter overlay image

Where `[id]` is a unique identifier that pairs the base media with its overlay.

### Supported Formats

**Input:**
- Images: JPG, JPEG, PNG
- Videos: MP4, WebM, MOV, AVI (any format supported by HTML5 video)

**Output:**
- Images: JPG (high quality, 90% compression)
- Videos: MP4 (H.264) when supported, WebM (VP9/VP8) as fallback

## Usage

1. **Export your Snapchat data** from the Snapchat app
2. **Open the application** in your web browser
3. **Drag and drop** your exported files into the drop zone, or click to select files
4. **Wait for processing** - the app will automatically pair and merge your files
5. **Download** individual files or all files as a ZIP archive

## Technical Details

### Video Processing

- Uses HTML5 Canvas and MediaRecorder API
- Preserves original video aspect ratio
- 30 FPS recording with high quality output
- Automatic codec detection and fallback support

### Browser Compatibility

- Modern browsers with Canvas and MediaRecorder support
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers supported

### File Processing

- Client-side processing (no data sent to servers)
- Automatic file pairing based on naming patterns
- Error handling for mismatched or missing files

## Development

### Local Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Eugene-Lam/snapchat-merge-photo.git
   cd snapchat-merge-photo
   ```

2. Open `index.html` in your web browser

### Dependencies

- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [JSZip](https://stuk.github.io/jszip/) - ZIP file creation

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you encounter any issues or have questions, please open an issue on GitHub.

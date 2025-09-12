// Web Worker for advanced media processing
// This file provides true multiprocessing capabilities for image/video merging

self.onmessage = function(e) {
    const { action, data } = e.data;
    
    switch (action) {
        case 'mergeImage':
            mergeImageWorker(data);
            break;
        case 'processVideo':
            processVideoWorker(data);
            break;
        default:
            self.postMessage({ error: 'Unknown action' });
    }
};

// Merge image with overlay in worker
async function mergeImageWorker({ mainImageData, overlayImageData, filename }) {
    try {
        // Create canvas in worker context (if OffscreenCanvas is supported)
        if (typeof OffscreenCanvas !== 'undefined') {
            const canvas = new OffscreenCanvas(800, 600);
            const ctx = canvas.getContext('2d');
            
            // Load images
            const mainImg = await createImageBitmap(mainImageData);
            const overlayImg = await createImageBitmap(overlayImageData);
            
            // Set canvas size to main image
            canvas.width = mainImg.width;
            canvas.height = mainImg.height;
            
            // Draw main image
            ctx.drawImage(mainImg, 0, 0);
            
            // Draw overlay
            ctx.drawImage(overlayImg, 0, 0, canvas.width, canvas.height);
            
            // Convert to blob
            const blob = await canvas.convertToBlob({ type: 'image/png' });
            
            self.postMessage({
                success: true,
                result: {
                    name: filename,
                    blob: blob,
                    status: 'completed'
                }
            });
        } else {
            // Fallback: send back to main thread
            self.postMessage({
                fallback: true,
                data: { mainImageData, overlayImageData, filename }
            });
        }
    } catch (error) {
        self.postMessage({
            error: error.message,
            filename: filename
        });
    }
}

// Process video frame extraction in worker
async function processVideoWorker({ videoData, overlayImageData, filename }) {
    try {
        // Video processing in workers is limited in browsers
        // Send back to main thread for processing
        self.postMessage({
            fallback: true,
            data: { videoData, overlayImageData, filename },
            type: 'video'
        });
    } catch (error) {
        self.postMessage({
            error: error.message,
            filename: filename
        });
    }
}

// Helper function to convert blob to data URL in worker
async function blobToDataURL(blob) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(blob);
    });
}

console.log('📱 Media Processor Worker loaded and ready');
document.addEventListener("DOMContentLoaded", function () {
    // Get the 'id' query parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const contentId = urlParams.get('id');

    if (contentId) {
        // Example content data (you can replace it with dynamic data from a server or database)
        const contentData = {
            1: {
                title: "Content Title 1",
                description: "Detailed description of Content 1.",
                videoUrl: "path/to/content1-video.mp4",
                author: "99.Nickz",
                category: "Editing Tutorials"
            },
            2: {
                title: "Content Title 2",
                description: "Detailed description of Content 2.",
                videoUrl: "path/to/content2-video.mp4",
                author: "99.Nickz",
                category: "Editing Tips"
            },
            3: {
                title: "Content Title 3",
                description: "Detailed description of Content 3.",
                videoUrl: "path/to/content3-video.mp4",
                author: "99.Nickz",
                category: "Content Creation"
            },
            4: {
                title: "Content Title 4",
                description: "Detailed description of Content 4.",
                videoUrl: "path/to/content4-video.mp4",
                author: "99.Nickz",
                category: "Video Editing"
            },
            5: {
                title: "Content Title 5",
                description: "Detailed description of Content 5.",
                videoUrl: "path/to/content5-video.mp4",
                author: "99.Nickz",
                category: "Advanced Techniques"
            }
        };

        // Retrieve the content data based on the contentId
        const content = contentData[contentId];

        if (content) {
            // Update the content on the page with the fetched data
            document.getElementById('content-title').textContent = content.title;
            document.getElementById('content-description').textContent = content.description;
            document.getElementById('video-source').src = content.videoUrl;
            document.getElementById('content-author').textContent = content.author;
            document.getElementById('content-category').textContent = content.category;
        } else {
            // If the contentId doesn't exist, display an error message
            document.getElementById('content-title').textContent = "Content not found";
            document.getElementById('content-description').textContent = "Sorry, we couldn't find the content you're looking for.";
        }
    }
});

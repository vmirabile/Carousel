# Carousel Problem Process

I approached this problem in three phases:

1)  Learn how to read and implement Olapic API
-  Pull in data from API
  -  Figure out what data you can gather from Olapic API
  -  Find a customer ID (Found 215757)
  -  Find what Images I can pull with customer ID (found several images of various sizes)

*  Implement API into Carousel
  *  Like I said in my interview I'm still relearning how to code so I didn't get far into this part.

2)  Design process (When thinking about the problem I try to cover all the angles and details)

*  Decided to use **jQuery** because it allows for normalization as its API allows me to make one call for all browsers.

*  How should the Carousel handle image requests?
    *  Fewer requests the better
    *  Load carousel pictures as you need (i/o loading all images)
    *  Load pictures to right and left of images already loaded into carousel
    
*  Scrolling
    *  As you scroll through (already loaded) carousel images, avoid requesting same images again.
    *  Don't delete images that are loaded.  Build list(s) as we go.

*  Functional design decisions

  *  What happens when Carousel exhausts available images?
    *  Option #1 Stop and force user to scroll left
    *  Option #2 Infinite Carousel w/ loop back to first image
  
  *  How do you indicate that there are no more images to scroll to in UI?  
    *  If going with Option 1 then the Carousel can grey out arrow 
    *  If going with Option 2 then we should indicate somehow that the next image is the first image loaded

  *  How do you indicate where in the list you are?
    *  Like in one of the examples provided the Carousel can enlarge one of the images
    *  Another option would be to add a wider boarder around one of the images

  *  If you open a lightbox, when do you want to download the file?  
    *  Only as you need (as the lightbox will open the larger version of the image.

  *  Requirements ask for 6 at a time.  
    *  Initially get 6 images in **"photorank"** plus next image so it's ready to load if the user clicks the right arrow 
    *  If the Carousel is infinite then initial load will include last image for the left arrow
    *  Always have previous and next image preloaded
    
  *  Which image to show in carousel?
    *  The Thumbnail of the "Normal" image

  *  Overall look
    *  I didn't get far with this.  I intended to create a simple Carousel

  *  Timer or no timer
    *  If there's a timer, how long should it wait before scrolling to the next image?

3)  Build Carousel

  *  Unfortunately I didn't get far with this.  I'm still relearning HTML/CSS/jQuery and I haven't had much experience with APIs and JSON.

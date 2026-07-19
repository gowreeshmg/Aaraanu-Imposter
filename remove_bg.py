import cv2
import numpy as np

# Read original image
img = cv2.imread('assets/home-character-intl.jpg')
h, w = img.shape[:2]

# Create a mask for flood fill, padded by 1 pixel
mask = np.zeros((h+2, w+2), np.uint8)

# Flood fill from top-left and top-right with a tolerance of 15
# The mask gets filled with 1 for the background
cv2.floodFill(img, mask, (0, 0), (255, 0, 255), (15, 15, 15), (15, 15, 15), cv2.FLOODFILL_MASK_ONLY)
cv2.floodFill(img, mask, (w-1, 0), (255, 0, 255), (15, 15, 15), (15, 15, 15), cv2.FLOODFILL_MASK_ONLY)

# Crop the mask back to original size
alpha = mask[1:h+1, 1:w+1]

# Convert to 0 (transparent) and 255 (opaque)
# FloodFill sets mask to 1 where filled (background)
alpha = (1 - alpha) * 255

# Read again to ensure pristine pixels
original = cv2.imread('assets/home-character-intl.jpg', cv2.IMREAD_UNCHANGED)
b, g, r = cv2.split(original)

# Merge into RGBA
rgba = cv2.merge((b, g, r, alpha))

cv2.imwrite('assets/home-character-intl.png', rgba)

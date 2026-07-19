import cv2
import numpy as np

# Read original image
img = cv2.imread('assets/home-character-intl.jpg')
h, w = img.shape[:2]

# Blur image to reduce JPEG artifacts for better flood filling
blurred = cv2.GaussianBlur(img, (5, 5), 0)

# Create a mask for flood fill, padded by 1 pixel
mask = np.zeros((h+2, w+2), np.uint8)

# Flood fill from top-left, top-right, bottom-left, bottom-right
tolerance = (25, 25, 25)
cv2.floodFill(blurred, mask, (0, 0), (255, 255, 255), tolerance, tolerance, cv2.FLOODFILL_MASK_ONLY)
cv2.floodFill(blurred, mask, (w-1, 0), (255, 255, 255), tolerance, tolerance, cv2.FLOODFILL_MASK_ONLY)

# Crop the mask back to original size
bg_mask = mask[1:h+1, 1:w+1]

# Dilate the background mask slightly to eat into the JPEG halo artifacts
kernel = np.ones((3, 3), np.uint8)
bg_mask = cv2.dilate(bg_mask, kernel, iterations=1)

# Convert to 0 (transparent) and 255 (opaque)
alpha = (1 - bg_mask) * 255

# Merge into RGBA using original unblurred image
b, g, r = cv2.split(img)
rgba = cv2.merge((b, g, r, alpha))

cv2.imwrite('assets/home-character-intl.png', rgba)

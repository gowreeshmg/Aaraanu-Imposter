import cv2
import numpy as np

img = cv2.imread('assets/home-character-intl.jpg')
h, w = img.shape[:2]

blurred = cv2.GaussianBlur(img, (5, 5), 0)

mask = np.zeros((h+2, w+2), np.uint8)

tolerance = (35, 35, 35)
flags = cv2.FLOODFILL_FIXED_RANGE | cv2.FLOODFILL_MASK_ONLY

cv2.floodFill(blurred, mask, (0, 0), (255, 255, 255), tolerance, tolerance, flags)
cv2.floodFill(blurred, mask, (w-1, 0), (255, 255, 255), tolerance, tolerance, flags)
cv2.floodFill(blurred, mask, (0, h-1), (255, 255, 255), tolerance, tolerance, flags)
cv2.floodFill(blurred, mask, (w-1, h-1), (255, 255, 255), tolerance, tolerance, flags)

bg_mask = mask[1:h+1, 1:w+1]

# Dilate background mask slightly to eat into the JPEG halo artifacts
kernel = np.ones((3, 3), np.uint8)
bg_mask = cv2.dilate(bg_mask, kernel, iterations=1)

alpha = (1 - bg_mask) * 255

original = cv2.imread('assets/home-character-intl.jpg', cv2.IMREAD_UNCHANGED)
b, g, r = cv2.split(original)

rgba = cv2.merge((b, g, r, alpha))

cv2.imwrite('assets/home-character-intl.png', rgba)

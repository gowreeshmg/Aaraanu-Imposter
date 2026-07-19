import cv2
import numpy as np
from scipy import ndimage

img = cv2.imread('assets/home-character-intl.jpg')
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# Anything strictly > 1 is foreground. (We use > 2 to avoid near-black noise)
# Actually, the user's background is pure 0. Let's use > 3 to be safe against slight JPEG noise on the edges.
_, thresh = cv2.threshold(gray, 3, 255, cv2.THRESH_BINARY)

# Morphological closing to bridge any small dark gaps at the edge of the hair/tie
kernel = np.ones((7, 7), np.uint8)
closed = cv2.morphologyEx(thresh, cv2.MORPH_CLOSE, kernel)

# Morphological opening to remove stray noisy pixels in the background
opened = cv2.morphologyEx(closed, cv2.MORPH_OPEN, kernel)

# Now find the largest external contour to create a perfectly solid silhouette
contours, _ = cv2.findContours(opened, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

# Find the largest contour by area
largest_contour = max(contours, key=cv2.contourArea)

# Create solid alpha mask
alpha = np.zeros(gray.shape, dtype=np.uint8)
cv2.drawContours(alpha, [largest_contour], 0, 255, thickness=cv2.FILLED)

# Smooth the edges slightly
alpha = cv2.GaussianBlur(alpha, (3, 3), 0)
_, alpha = cv2.threshold(alpha, 127, 255, cv2.THRESH_BINARY)

# Merge back
b, g, r = cv2.split(img)
rgba = cv2.merge((b, g, r, alpha))
cv2.imwrite('assets/home-character-intl.png', rgba)

print("Area of largest contour:", cv2.contourArea(largest_contour))

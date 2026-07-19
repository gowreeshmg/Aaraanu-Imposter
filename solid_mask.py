import cv2
import numpy as np

# Read original image
img = cv2.imread('assets/home-character-intl.jpg')
h, w = img.shape[:2]

# Convert to grayscale
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# The background is completely black, so we can threshold it.
# Everything above 15 in intensity is foreground (255)
_, thresh = cv2.threshold(gray, 15, 255, cv2.THRESH_BINARY)

# Find ALL external contours (this completely ignores any holes inside the character)
contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

# Create a solid black mask for the alpha channel
alpha = np.zeros((h, w), dtype=np.uint8)

# Draw the external contours filled with white (255)
cv2.drawContours(alpha, contours, -1, 255, thickness=cv2.FILLED)

# Since the tie/hair might have had values < 15, they are now filled solidly because 
# they are inside the external boundary!

# Let's apply a tiny blur to the alpha channel to make the edges less jagged
alpha = cv2.GaussianBlur(alpha, (3, 3), 0)
_, alpha = cv2.threshold(alpha, 127, 255, cv2.THRESH_BINARY)

# Merge back to RGBA
b, g, r = cv2.split(img)
rgba = cv2.merge((b, g, r, alpha))

cv2.imwrite('assets/home-character-intl.png', rgba)

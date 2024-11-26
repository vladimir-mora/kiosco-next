export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

export function getImagePath(image: string) {
  const cloudinaryUrl = "https://res.cloudinary.com";
  if (image.startsWith(cloudinaryUrl)) {
    return image;
  } else {
    return `/products/${image}.jpg`;
  }
}

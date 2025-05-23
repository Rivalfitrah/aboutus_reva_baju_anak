import axios from 'axios'

const base_url = 'http://localhost:8000'

// get produk by id
export async function getProduks() {
    try {
        const response = await axios.get(`${base_url}/productss`);
        return response.data.products; // <-- Ambil langsung array products
    } catch (error) {
        console.error("gagal ambil produk:", error);
        throw error;
    }
}



// gambar
export function getImageUrl(imagePath) {
  // Jika path gambar null/undefined, kembalikan placeholder
  if (!imagePath) {
    return "https://marketplace.apg-wi.com/imgs/media.images/75035/75035.widea.jpg";
  }

  // Ganti backslash dengan slash agar URL valid
  const normalizedPath = imagePath.replaceAll("\\", "/");

  // Jika path gambar sudah dimulai dengan http/https, gunakan path lengkap
  if (normalizedPath.startsWith("http://") || normalizedPath.startsWith("https://")) {
    return normalizedPath;
  }

  // Jika path gambar adalah untuk avatar user
  if (normalizedPath.includes("uploads/avatar/")) {
    return `${base_url}/${normalizedPath}`;
  }

  // Format untuk upload gambar produk
  if (normalizedPath.includes("uploads/products/")) {
    return `${base_url}/${normalizedPath}`;
  }

  // Format untuk ID produk (asumsi produk ID sebagai folder)
  if (!normalizedPath.includes("/")) {
    return `${base_url}/uploads/products/${normalizedPath}/1.jpg`;
  }
}
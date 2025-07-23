// Funcionalidad para galería de imágenes
function setupImageGallery() {
  // Función para cambiar imagen principal
  const toExchangeImage = (thumbnail) => {
    const mainImage = document.getElementById('img_main');
    if (!mainImage) return;
    
    mainImage.src = thumbnail.src;
    mainImage.alt = thumbnail.alt;
    
    // Efecto de transición
    mainImage.style.transition = 'opacity 0.3s ease';
    mainImage.style.opacity = '0';
    setTimeout(() => {
      mainImage.style.opacity = '1';
    }, 100);
    
    // Resaltar miniatura activa
    document.querySelectorAll('.miniatura').forEach(el => {
      el.classList.remove('miniatura-activa');
    });
    thumbnail.closest('.miniatura').classList.add('miniatura-activa');
  };

  // Asignar eventos a miniaturas
  document.querySelectorAll('.miniaturas img').forEach(img => {
    img.addEventListener('click', () => toExchangeImage(img));
  });

  // Evento para imagen principal
  const mainImage = document.getElementById('img_main');
  if (mainImage) {
    mainImage.addEventListener('click', () => {
      window.open(mainImage.src, '_blank');
    });
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  setupImageGallery();
  // Aquí puedes mantener otras funciones de inicialización que ya tengas
});
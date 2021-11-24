gsap.to('.display-4', {
  duration: 3,
  text: `Watch Now, Cancel Anytime`,
});
gsap.to('.lead', {
  duration: 3,
  text: `Sign up risk free, Cancel your GabuTime membership anytime`,
});
gsap.to('.syr', {
  duration: 3,
  text: `Syarat Dan Ketentuan Berlaku`,
});
gsap.from('.navbar', { duration: 1.5, y: '-100%', opacity: 0, ease: 'bounce' });
gsap.from('.d', { duration: 1.5, x: '-50%', opacity: 0, ease: 'back', delay: 3 });
gsap.from('.chr', { duration: 1.5, x: '50%', opacity: 0, ease: 'back', delay: 1.5 });

$('.card-link').click(function () {
  alert('barang belum bisa di order untuk saat ini silahkan tunggu 2 abad lagi');
});
// AOS
AOS.init({
  once: false,
});

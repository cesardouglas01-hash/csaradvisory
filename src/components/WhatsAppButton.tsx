const WhatsAppButton = () => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open("https://wa.me/5511940771267", "_blank", "noopener,noreferrer");
  };

  return (
    <a
      href="https://wa.me/5511940771267"
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] bg-[#25D366] w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer"
      aria-label="Fale conosco no WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0016.004 32C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.35 22.614c-.392 1.104-1.936 2.02-3.182 2.288-.852.18-1.964.324-5.71-1.228-4.8-1.988-7.886-6.862-8.126-7.18-.23-.318-1.936-2.578-1.936-4.916s1.226-3.49 1.66-3.968c.436-.478.95-.598 1.268-.598.318 0 .636.002.912.016.294.016.688-.11 1.076.822.392.944 1.336 3.262 1.452 3.5.116.238.194.516.04.834-.156.318-.234.516-.468.794-.234.278-.492.622-.702.834-.234.234-.478.49-.206.962.272.47 1.212 2 2.602 3.24 1.786 1.59 3.29 2.084 3.762 2.32.47.238.748.2 1.022-.116.278-.318 1.18-1.374 1.496-1.846.316-.47.632-.392 1.066-.234.434.156 2.75 1.296 3.222 1.532.47.234.784.356.9.55.116.194.116 1.126-.276 2.23z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;

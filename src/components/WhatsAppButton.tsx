export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/256705640852?text=Hello!%20I%27d%20like%20to%20inquire%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
      aria-label="Contact us on WhatsApp"
      title="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.134.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.074-.149-.669-.648-.916-.983-.247-.334-.496-.648-.669-.648h-.297c-.099 0-.273.099-.521.347-.247.248-1.04.896-1.04 2.184 0 1.287.992 2.53 1.136 2.703.149.173 1.975 3.016 4.92 4.228.695.496 1.24.744 1.663.892.52.174.943.099 1.314.05.371-.05 1.157-.471 1.32-.916.173-.446.173-.818.025-.916-.149-.099-.297-.149-.446-.149z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.137.561 4.248 1.626 6.096L0 24l5.904-1.626A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22.08c-1.892 0-3.758-.553-5.373-1.594l-.386-.223-3.504.966.966-3.504-.223-.386C2.447 15.758 1.92 13.892 1.92 12c0-5.574 4.506-10.08 10.08-10.08S22.08 6.426 22.08 12 17.574 22.08 12 22.08z"/>
      </svg>
     
    </a>
  );
};
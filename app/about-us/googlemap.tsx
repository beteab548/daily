export default function GoogleMapEmbed() {
  return (
    <div className="mt-12 text-center">
      <h3 className="text-2xl font-semibold mb-6">Find Us Here</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126482.5185607882!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z37Kqw7AgNzAnMzci!5e0!3m2!1sen!2sus!4v1636847657859!5m2!1sen!2sus"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default function GoogleMapEmbed() {
  return (
    <div className="mt-12 text-center">
      <h3 className="text-2xl font-semibold mb-6">Find Us Here</h3>
      <iframe
        src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=2Q79+WFW,ECA+Rd,Addis+Ababa&markers=2Q79+WFW,ECA+Rd,Addis+Ababa|XQRM+X62,Addis+Ababa|XPQG+XR7,Bisrate+Gabriel+Road,Addis+Ababa|2R6C+WVF,Addis+Ababa"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
      ></iframe>
    </div>
  );
}

import "./Contact.css"

interface Contactoptions {
  imageSrc: string;
  imageAlt: string;
}

export const Contact = ({imageSrc, imageAlt}: Contactoptions) => {
  return (
    <div className="contact-pic">
        <img src={imageSrc} alt={imageAlt} />
    </div>
  )
}

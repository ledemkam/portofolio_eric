import ContactForm from "../../components/form/ContactForm";

export default function Contact() {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h2 className='title'>Für mehr Information,mich Kontaktieren</h2>

        <p className="mt-2">Tel: 017688134365 </p>
        <p>Email : ledemkam@gmail.com</p>

        <ContactForm />
      </div>
    </section>
  )
}
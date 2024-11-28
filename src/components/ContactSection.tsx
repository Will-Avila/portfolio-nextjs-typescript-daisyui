"use client"

import BtnContact from "./BtnContact";
import Title from "./Title";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function ContactSection() {
  return (
    <div id="contato">
      <span className="divider divider-accent mx-auto -mt-2">
        <Title title="Contato" />
      </span>
      <section className="flex flex-col md:flex-row items-center justify-center gap-2 -mt-6">
        <BtnContact
          url="mailto:willaviladev@gmail.com"
          icon={<FaEnvelope size={24} />}
          text="willaviladev@gmail.com"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
        </BtnContact>
        <BtnContact
          url="https://api.whatsapp.com/send?phone=85999159652"
          icon={<FaPhone size={24} />}
          text="(85)99915-9652"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
        </BtnContact>
        <BtnContact
          url="https://maps.app.goo.gl/Z2o55P9rq6ZB5fPo6"
          icon={<FaMapMarkerAlt size={24} />}
          text="Fortaleza, CE"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
        </BtnContact>
      </section>
    </div>
  )
}

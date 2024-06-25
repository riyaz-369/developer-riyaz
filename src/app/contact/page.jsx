"use client";

import { contacts } from "@/components/HomePage/Shared/contacts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section className="lg:flex justify-between items-center container mx-auto my-8 lg:my-12">
      {/* form */}
      <div className="bg-dark p-6 mb-6 rounded-3xl shadow-sm hover:shadow-primary transition-all duration-300">
        <h2 className="text-primary">Let's work together</h2>
        <p className="text-white/70 text-wrap">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eum
          nihil, nobis
        </p>
        <form className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <Input type="text" placeholder="First Name" />
            </div>
            <div>
              <Input type="text" placeholder="Last Name" />
            </div>
            <div>
              <Input type="text" placeholder="Email" />
            </div>
            <div>
              <Input type="text" placeholder="Phone" />
            </div>
            <div className="md:col-span-2">
              <Textarea placeholder="Your Massage" />
            </div>
          </div>
          <Button className="mt-6">Submit Message</Button>
        </form>
      </div>
      {/* Contact info */}
      <div className="flex flex-col gap-5 lg:w-1/3">
        {contacts.map((contact) => (
          <div className="flex items-center gap-4 bg-dark p-3 rounded-3xl shadow-sm hover:shadow-primary transition-all duration-300">
            <span className="text-primary bg-dark-blue p-5 rounded-3xl text-2xl">
              {contact.icon}
            </span>
            <span>
              <small>{contact.label}</small>
              <p>{contact.info}</p>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;

import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";
import React, { useRef } from "react";
import { IoMdMail } from "react-icons/io";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_9536v7m", "template_xf07z0v", form.current, {
        publicKey: "hZNPwfzlLFMTk0YUs",
      })
      .then(
        () => {
          Swal.fire({
            title: "Message sent",
            text: "Thank you very much for the message",
            icon: "success",
          });
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div
        id="contact"
        className="h-svh section flex justify-center items-center"
      >
        <div className="grid sm:grid-cols-2">
          <div className="flex flex-col">
            <h1 className="text-4xl text-yellow-300 font-semibold">
              Contact me
            </h1>
            <p className="text-medium text-gray-300 sm:mr-12 mt-2">
              I am interested in freelance opportunities and job openings.
              However, if you have other request or question, don't hesitate to
              contact me using the form or sending a message directly to my
              email.
            </p>
            <a
              className="flex text-yellow-300 underline mt-3 items-center"
              href="mailto: wilmeraraya21@gmail.com"
            >
              <IoMdMail className="mr-2" /> wilmeraraya21@gmail.com
            </a>
          </div>

          <div className="flex justify-end w-full mt-5">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex max-w-md flex-col gap-4 w-full"
            >
              <div>
                <div className="mb-2 block">
                  <Label className="text-white" htmlFor="name" value="Name" />
                </div>
                <TextInput
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  shadow
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label className="text-white" htmlFor="email" value="Email" />
                </div>
                <TextInput
                  name="email"
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  required
                  shadow
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    className="text-white"
                    htmlFor="message"
                    value="Message"
                  />
                </div>
                <Textarea
                  name="message"
                  id="message"
                  placeholder="Leave a message..."
                  required
                  rows={4}
                />
              </div>
              <Button
                className="bg-yellow-300 text-black font-semibold 
                hover:!bg-gray-950 hover:text-yellow-300"
                type="submit"
              >
                Send message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

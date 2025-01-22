import ContactForm from "@/components/contactUs/ContactForm";
import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="container-wrapper ">
        <section className=" p-[60px] flex items-center flex-col-reverse sm:flex-row  gap-[132px]">
          <div className="flex flex-col gap-8 w-full sm:w-2/5">
            <div className="flex flex-col gap-5">
              <h2 className="font-bold text-[45px] text-primaryText">
                Contact Us
              </h2>
              <p className="text-secondaryText font-medium text-base">
                Before contacting us, please check the Frequently Asked
                Questions.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h5 className="text-secondaryText font-medium text-base">
                Corporate Office
              </h5>
              <p className="text-secondaryText font-normal text-sm">
                Lorem Ipsum DolorSit Amet
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h5 className="text-secondaryText font-medium text-base">
                Here are contact emails for different parts of Paracrypto:
              </h5>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h5 className="text-secondaryText font-medium text-base">
                    General Inquiries{" "}
                  </h5>
                  <p className="text-secondaryText font-normal text-sm">
                    info@paracypto.com{" "}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <h5 className="text-secondaryText font-medium text-base">
                    Press Inquiries{" "}
                  </h5>
                  <p className="text-secondaryText font-normal text-sm">
                    press@paracypto.com{" "}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <h5 className="text-secondaryText font-medium text-base">
                    Work With Us{" "}
                  </h5>
                  <p className="text-secondaryText font-normal text-sm">
                    careers@paracypto.com{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-[45%] h-[420px] rounded-lg bg-black"></div>
        </section>
        <section className="  flex flex-col lg:flex-row items-center  gap-10 p-[60px]">
          <div className="flex flex-col flex-1 gap-4">
            <h2 className="font-bold text-[45px] text-primaryText">
              Write To Us.{" "}
            </h2>
            <p className="text-secondaryText font-medium text-base">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              tristique felis non odio accumsan laoreet.
            </p>
          </div>{" "}
          <ContactForm />
        </section>
      </div>
    </>
  );
};

export default ContactUs;

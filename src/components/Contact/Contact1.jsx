import React, { useState } from 'react';

const Contact1 = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form handling logic here
    console.log("Form submitted");
  };

  return (
    <div className='flex flex-col md:flex-row justify-between w-[400%] md:w-full'>
      <div className=' w-[90%] md:w-[40%] '>
        <h1 className='font-semibold text-5xl mt-10'>Unlock your potential with LHH</h1>
        <p className=' text-2xl md:text-xl mt-10'>
          At LHH, we empower you to navigate constant change with comprehensive talent solutions built to drive results.
          Whether you're an individual looking to take charge of your career, an organization seeking top talent solutions,
          or an executive in need of tailored support, our team is here to help.
          <br />
          <br />
          Please submit your information and a member of our team will connect to explore how our solutions can best meet your needs.
          <br />
          <br />
          If you are an organization with an urgent hiring need, please call us at 1.800.611.4LHH.
        </p>
      </div>

      <div className='h-full w-[85%] mt-40 md:w-[55%] shadow-xl p-6 rounded-md'>
        <div className=' h-[100%] p-4'>
          <form className='flex flex-col gap-3' onSubmit={handleSubmit} id="form-container">
            {/* First Name */}
            <label htmlFor="firstname"><h3 className='text-2xl'>First Name</h3></label>
            <input  className="inp md:h-10 w-[100%] h-16 text-xl md:text-lg outline px-2 rounded-md" type="text" placeholder="First name" id="firstname" name="first" />

            {/* Last Name */}
            <label htmlFor="lastname"><h3>Last Name</h3></label>
            <input className="inp md:h-10 w-[100%] h-14 text-xl md:text-lg outline px-2 rounded-md"type="text" placeholder="Last name" id="lastname" name="last" />

            {/* Email */}
            <label htmlFor="email"><h3>Email</h3></label>
            <input className="inp md:h-10 w-[100%] h-14 text-xl md:text-lg outline px-2 rounded-md" type="email" placeholder="Email" id="email" name="email" />

            {/* Country */}
           

            {/* State */}
            <label htmlFor="state"><h3>State</h3></label>
            <select className="inp md:h-10 w-[100%] h-14 text-xl md:text-lg outline px-2 rounded-md" id="state" name="state" required>
              <option value="">--Select a state--</option>
              {/* Add options here */}
              <option value="AP">Andhra Pradesh</option>
              <option value="AR">Arunachal Pradesh</option>
              {/* Add all other states */}
            </select>

            {/* Country Select */}
            <label htmlFor="countries"><h3>Select your country:</h3></label>
            <select className="inp md:h-10 w-[100%] h-14 text-xl md:text-lg outline px-2 rounded-md" id="countries" name="countries" required>
              <option value="">--Select a country--</option>
              <option value="AF">Afghanistan</option>
              <option value="AL">Albania</option>
              {/* Add all countries */}
            </select>

            {/* City */}
            <label htmlFor="city"><h3>City</h3></label>
            <input className="inp md:h-10 w-[100%] h-14 text-xl md:text-lg outline px-2 rounded-md" type="text" placeholder="City" id="city" name="city" />

            {/* Phone Number */}
            <label htmlFor="phone"><h3>Phone Number</h3></label>
            <input className="inp md:h-10 w-[100%] h-14 text-xl md:text-lg outline px-2 rounded-md" type="tel" placeholder="Phone Number" id="phone" name="phone" />

            {/* Contact About */}
            <label htmlFor="options"><h3 className='text-2xl md:text-sm mt-10'>WHAT WOULD YOU LIKE TO CONTACT US ABOUT?</h3></label>
            <select className="inp md:h-10 w-[100%] h-14 text-xl md:text-lg outline px-2 rounded-md" id="options" name="options" required>
              <option value="">--Please select an option--</option>
              <option value="find-job">Find a Job</option>
              <option value="register-employer-support">Register for Employer Sponsored Career Support</option>
              {/* More options here */}
            </select>

            {/* Message */}
            <label htmlFor="message"><h3>Your message</h3></label>
            <textarea className="inp md:h-10 w-[100%] h-14 text-xl md:text-lg outline px-2 rounded-md" id="message" name="message"></textarea>

            {/* Checkboxes */}
            <div className="check flex  gap-4">
              <input type="checkbox" id="privacy-policy" name="textarea"   />
              <label htmlFor="privacy-policy">
                <p className='md:w-[90%] text-xl md:text-sm'>
                  I acknowledge that I have read and accepted the Privacy Policy, the Terms of Use and the Cookie Policy.
                </p>
              </label>
            </div>

            <div className="check flex  gap-4">
              <input type="checkbox" id="marketing-consent" name="check" />
              <label htmlFor="marketing-consent">
              <p className='md:w-[90%] text-xl md:text-sm'>
                  I wish to receive marketing communications and news from LHH via email. I understand that I may opt-out at any time.
                </p>
              </label>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn text-white rounded-xl px-4 py-2 bg-blue-900 md:w-[40%] ">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact1;

import React from 'react'
import { FaFacebook, FaPhoneAlt, FaEnvelope} from 'react-icons/fa'

const Contact = () => {
  return (
    <div>

      <div>
        <p className='font-bold'>Skills and interests</p>
      </div>

      <div className='mt-5'>
        <ul>
          <p><span className='font-bold'>Application Development:</span> React Native, Expo Router, Supabase</p>
          <p><span className='font-bold'>Web Development:</span> HTML, CSS, Bootstrap, Php, MySQL, WordPress, JetEngine</p>
          <p><span className='font-bold'>UI/UX Design:</span> Figma, Adobe XD</p>
          <p><span className='font-bold'>Graphic Design:</span> Canva, Adobe Photoshop, Adobe Illustrator</p>
        </ul>
      </div>

      <div className='mt-10' id='services'>
        <p className='font-bold'>What services do I offer?</p>
      </div>

      <div className='mt-5'>
        <ul>
          <p><span>- </span>Graphic Design</p>
          <p><span>- </span>UI/UX Design</p>
          <p><span>- </span>Web Development</p>
          <p><span>- </span>Mobile App Development</p>
          <p><span>- </span>Project Management</p>
        </ul>
      </div>

      <div className='mt-10' id='contact'>
        <p className='font-bold'>Get in touch with me</p>
        
          <ul className='flex gap-2 mt-2'>
            <FaFacebook className='text-black text-2xl'/>
            <a href='https://www.facebook.com/nnov.enoria/'>Airone Vonn Villasor</a>
          </ul>

          <ul className='flex gap-2 mt-2'>
            <FaPhoneAlt className='text-black text-2xl'/>
            <a>09491488343</a>
          </ul>

          <ul className='flex gap-2 mt-2'>
            <FaEnvelope className='text-black text-2xl'/>
            <a href="mailto:your-email@example.com?subject=Your Subject">villasoraironevonn@gmail.com</a>
          </ul>
        
      </div>

      <div>
        
      </div>
    </div>
  )
}

export default Contact
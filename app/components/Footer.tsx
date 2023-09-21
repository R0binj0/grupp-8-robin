import React from 'react'

export default function Footer() {
  return (
    <footer>
        <div className="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9209.763383508852!2d22.48714571582533!3d58.25334848083633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46f336f0f21c00a3%3A0x7e6b5c15a6a60a5!2sKuressaare%20Hospital!5e0!3m2!1sen!2see!4vYEAR-MONTH-DAY!5m2!1sen!2see" width="600" height="450" loading="lazy"></iframe>
        </div>
        <p>&copy; 2023 Infot beebide ja väikelaste kohta. Kõik õigused kaitstud.</p>
    </footer>
  )
}
